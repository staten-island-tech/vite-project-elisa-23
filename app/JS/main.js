import '../CSS/style.css';
import { books } from './object';


function cardsTest() {
    books.forEach((el) => console.log(el));
}
/* cardsTest(); */

const DOMSelectors = {
    container: document.querySelector(".container")
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
        )
    });
}

addAllCards();

function addFilteredCards(type, t) {
    let cards = [];
    if (type === "genres") {
        books
            .filter((book) => book.genres.includes(t) === true)
            .forEach((book) => remove.push(book.title));
    } else if (type === "author") {
        books
            .filter((book) => book.author === t)
            .forEach((book) => remove.push(book.title));
    } else if (type === "releaseYear") {
        books
            .filter((book) => book.releaseYear === t)
            .forEach((book) => remove.push(book.title));
    } else if (type === "bestSeller") {
        books
            .filter((book) => book.bestSeller === t)
            .forEach((book) => remove.push(book.title));
    }
    console.log(cards);
    cards.forEach((card) => {
        container.insertAdjacentHTML("beforeend",
            `<div class="card" id="${card.title}">
                <h5 class="title">${card.title}</h5>
                <h6 class="author">${card.author}</h6>
                <p class="bestseller">${card.releaseYear}</p>
                <img src="${card.img}" alt="${card.altText}" class="book-cover">
                <p class="bestseller">Best Seller: ${card.bestSeller}</p>
                <p class="genres">${card.genres}</p>
                <h5 class="price">${card.price.toFixed(2)}</h5>
                <button class="cart-button">Add to Cart</button>
            </div>
            `
        );
    });
}

function removeAll() {
    books.forEach((book) => {
        const card = document.getElementById(book.title);
        card.remove();
    })
}

function sale() {

}