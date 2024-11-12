import { books } from "./object";
import { addAllCards } from "./main";

const DOMSelectors = {
    container: document.querySelector(".container"),
    sales: document.querySelector("#sales")
};


function sales() {
    DOMSelectors.sales.addEventListener("click", function () {
        if (DOMSelectors.sales.getAttribute("data-id") === "1") {
            DOMSelectors.sales.setAttribute("data-id", "0");
            DOMSelectors.sales.style.background = "var(--accent)";
            DOMSelectors.sales.style.color = "var(--primary)";
            const booksWithSalesPrice = books.map((book) => ({
                ...book,
                price: book.price * 0.78
            }));
            console.log(booksWithSalesPrice);
            DOMSelectors.container.replaceChildren();
            booksWithSalesPrice.forEach((book) => {
                DOMSelectors.container.insertAdjacentHTML("beforeend",
                    `<div class="card" id="${book.title}">
                        <h5 class="book-title">${book.title}</h5>
                        <h6 class="book-author">${book.author}</h6>
                        <p class="book-bestseller">${book.releaseYear}</p>
                        <img src="${book.imageUrl}" alt="${book.altText}" class="book-cover">
                        <p class="book-bestseller">Best Seller: ${book.bestSeller}</p>
                        <p class="book-genres">${book.genres}</p>
                        <h5 class="book-price">${book.price.toFixed(2)}</h5>
                        <button class="cart-button">Add to Cart</button>
                    </div>`
                );
            })
        } else {
            DOMSelectors.sales.setAttribute("data-id", "1");
            DOMSelectors.sales.style.background = "var(--primary)";
            DOMSelectors.sales.style.color = "var(--text)";
            addAllCards();
        }
    });
}

sales();