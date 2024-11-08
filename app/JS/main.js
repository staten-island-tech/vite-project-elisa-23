import '../CSS/style.css';
import { books } from './object';


function cardsTest() {
    books.forEach((el) => console.log(el));
}
/* cardsTest(); */

const DOMSelectors = {
    container: document.querySelector(".container"),
    genres: document.querySelector("#genres"),
};

function addAllCards() {
    books.forEach((book) => {
        DOMSelectors.container.insertAdjacentHTML("beforeend",
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

function filteredCardsGenre() {
    const genresBtns = document.querySelectorAll(".genres");
    genresBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            removeCards();
            const genre = btn.getAttribute("id");
            const filtered = books.filter((book) => book.genres.includes(genre));
            addFilteredCards(filtered);
        });
    });
}

function filteredCardsAuthor() {
    const authorsBtns = document.querySelectorAll(".authors");
    authorsBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            removeCards();
            const author = btn.innerHTML;
            const filtered = books.filter((book) => book.author === author);
            addFilteredCards(filtered);
        });
    });
}

function filteredCardsReleaseYear(year) {
    removeCards();
    const filtered = books.filter((book) => book.releaseYear === year);
    addFilteredCards(filtered);
}

function filteredCardsBestSeller() {
    removeCards()
    const filtered = books.filter((book) => book.bestSeller === true);
    addFilteredCards(filtered);
}

function addFilteredCards(filtered) {
    filtered.forEach((book) => {
        DOMSelectors.container.insertAdjacentHTML("beforeend",
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

function removeCards() {
    DOMSelectors.container.replaceChildren();
}

export { filteredCardsGenre, filteredCardsAuthor };