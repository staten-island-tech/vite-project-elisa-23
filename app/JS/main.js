import '../CSS/style.css';
import { books } from './object';


function cardsTest() {
    books.forEach((el) => console.log(el));
}

/* cardsTest(); */

const DOMSelectors = {
    container: document.querySelector(".container"),
};

function cards() {
    const container = DOMSelectors.container;
    books.forEach((book) => {
        const title = book.title;
        const genres = book.genres;
        const bestSeller = book.bestSeller;
        const releaseYear = book.releaseYear;
        const price = book.price.toFixed(2);
        const author = book.author;
        const img = book.imageUrl;
        const altText = book.altText;
        container.insertAdjacentHTML("beforeend",
            `<div class="card">
                <h5 class="title" id="${title}">${title}</h5>
                <h6 class="author">${author}</h6>
                <p class="bestseller">${releaseYear}</p>
                <img src="${img}" alt="${altText}" class="book-cover">
                <p class="bestseller">Best Seller: ${bestSeller}</p>
                <p class="genres">${genres}</p>
                <h5 class="price">${price}</h5>
                <button class="cart-button">Add to Cart</button>
            </div>
            `
        )
    });
}

Cards();

function removeCards(type, t) {
    let remove = [];
    if (type === "genres") {
        books
            .filter((book) => book.genres !== t)
            .forEach((book) => remove.add(book.title));
    } else if (type === "author") {
        books
            .filter((book) => book.author !== t)
            .forEach((book) => remove.add(book.title));
    } else if (type === "releaseYear") {
        books
            .filter((book) => book.releaseYear !== t)
            .forEach((book) => remove.add(book.title));
    } else if (type === "bestSeller") {
        books
            .filter((book) => book.bestSeller !== t)
            .forEach((book) => remove.add(book.title));
    }
    console.log(remove);
    let length = remove.length;
    for (let i = 0; i < length; i++) {
        const card = document.getElementsByClassName(remove[0]);
        card.remove();
    };
}

function removeAll() {
    books.forEach((book) => {
        const card = document.getElementsByClassName(book.title);
        card.remove();
    })
}

function sale() {

}