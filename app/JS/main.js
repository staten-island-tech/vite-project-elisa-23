import '../CSS/style.css';
import { books } from './object';


function cardsTest() {
    books.forEach((el) => console.log(el));
}
/* cardsTest(); */

const DOMSelectors = {
    container: document.querySelector(".container"),
    genres: document.querySelectorAll(".genres")
};

function addAllCards() {
    const container = DOMSelectors.container;
    books.forEach((book) => {
        container.insertAdjacentHTML("beforeend",
            `<div class="card" id="${book.title}">
                <h5 class="title">${book.title}</h5>
                <h6 class="author">${book.author}</h6>
                <p class="bestseller">${book.releaseYear}</p>
                <img src="${book.img}" alt="${book.altText}" class="book-cover">
                <p class="bestseller">Best Seller: ${book.bestSeller}</p>
                <p class="genres">${book.genres}</p>
                <h5 class="price">${book.price.toFixed(2)}</h5>
                <button class="cart-button">Add to Cart</button>
            </div>
            `
        );
    });
}

addAllCards();

function removeCards(type, t) {
    let remove = [];
    if (type === "genres") {
        books
            .filter((book) => book.genres.includes(t) === false)
            .forEach((book) => remove.push(book.title));
    } else if (type === "author") {
        books
            .filter((book) => book.author !== t)
            .forEach((book) => remove.push(book.title));
    } else if (type === "releaseYear") {
        books
            .filter((book) => book.releaseYear !== t)
            .forEach((book) => remove.push(book.title));
    } else if (type === "bestSeller") {
        books
            .filter((book) => book.bestSeller !== t)
            .forEach((book) => remove.push(book.title));
    }
    console.log(remove);
    remove.forEach((id) => {
        const card = document.getElementById(id);
        card.remove();
    })
}

function addGenres() {
    DOMSelectors.genres.forEach((genre) => {
        genre.addEventListener("click", function (event) {
            event.preventDefault();
            genre.style.background = "var(--accent)";
            genre.style.color = "var(--primary)";
            const id = genre.getAttribute("id");
            console.log(id);
            DOMSelectors.genres.forEach((ele) => {
                if (ele.getAttribute("id") !== id) {
                    if (ele.style.background !== "var(--primary)") {
                        ele.style.background = "var(--primary)";
                        ele.style.color = "var(--text)";
                    }
                }
            });
            DOMSelectors.container.replaceChildren();
            addAllCards();
            removeCards("genre", id);
        });
    })
}

addGenres();

function sale() {

}