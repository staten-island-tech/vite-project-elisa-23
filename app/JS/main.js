import '../CSS/style.css';
import { books } from './object';


function cardsTest() {
    books.forEach((el) => console.log(el));
}
/* cardsTest(); */

const DOMSelectors = {
    container: document.querySelector(".container"),
    moreContainer: document.querySelector("#more"),
    resetBtn: document.querySelector(".reset"),
    html: document.querySelector("html"),
    genres: document.querySelector("#genres"),
    authors: document.querySelector("#authors"),
    years: document.querySelector("#release-year"),
    bestSellers: document.querySelector("#bestseller"),
    sales: document.querySelector("#sales")
};

function main() {
    addAllCards();
    reset();
}

main();

function reset() {
    DOMSelectors.resetBtn.addEventListener("click", function () {
        addAllCards();
        const btns = [DOMSelectors.authors, DOMSelectors.bestSellers, DOMSelectors.years, DOMSelectors.genres, DOMSelectors.sales];
        btns.forEach((btn) => {
            btn.style.background = "var(--primary)";
            btn.style.color = "var(--text)";
            DOMSelectors.moreContainer.replaceChildren();
        });
    });
}

function addAllCards() {
    removeCards();
    books.forEach((book) => {
        DOMSelectors.container.insertAdjacentHTML("beforeend",
            `<div class="card" id="${book.title}">
                <h5 class="book-title">${book.title}</h5>
                <h6 class="book-author">${book.author}</h6>
                <p class="book-year">${book.releaseYear}</p>
                <img src="${book.imageUrl}" alt="${book.altText}" class="book-cover">
                <p class="book-bestseller">Best Seller: ${book.bestSeller}</p>
                <p class="book-genres">${book.genres}</p>
                <h5 class="book-price">${book.price.toFixed(2)}</h5>
                <button class="cart-button">Add to Cart</button>
            </div>`
        );
    });
}

function filteredCardsGenre() {
    const genresBtns = document.querySelectorAll(".genres");
    genresBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            resetColors(btn, "genres");
            removeCards();
            const genre = btn.innerHTML;
            const filtered = books.filter((book) => book.genres.includes(genre));
            addFilteredCards(filtered);
        });
    });
}

function filteredCardsAuthor() {
    const authorsBtns = document.querySelectorAll(".authors");
    authorsBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            resetColors(btn, "author");
            removeCards();
            const author = btn.innerHTML;
            const filtered = books.filter((book) => book.author === author);
            addFilteredCards(filtered);
        });
    });
}

function filteredCardsReleaseYear() {
    const releaseYearBtns = document.querySelectorAll(".years");
    releaseYearBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            resetColors(btn, "year");
            removeCards();
            const year = parseInt(btn.innerHTML);
            const filtered = books.filter((book) => book.releaseYear === year);
            addFilteredCards(filtered);
        });
    });
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
                <h5 class="book-title">${book.title}</h5>
                <h6 class="book-author">${book.author}</h6>
                <p class="book-year">${book.releaseYear}</p>
                <img src="${book.imageUrl}" alt="${book.altText}" class="book-cover">
                <p class="book-bestseller">Best Seller: ${book.bestSeller}</p>
                <p class="book-genres">${book.genres + ""}</p>
                <h5 class="book-price">${book.price.toFixed(2)}</h5>
                <button class="cart-button">Add to Cart</button>
            </div>
            `
        );
    });
}

function removeCards() {
    DOMSelectors.container.replaceChildren();
}

function resetColors(type, t) {
    let btns = [];
    if (t === "genres") {
        btns = [
            document.querySelector("#Fantasy"),
            document.querySelector("#Young-Adult")
        ];
    } else if (t === "author") {
        btns = [
            document.querySelector("#EB"),
            document.querySelector("#LS"),
            document.querySelector("#HB"),
            document.querySelector("#TA"),
            document.querySelector("#LB"),
            document.querySelector("#ST"),
            document.querySelector("#RC"),
            document.querySelector("#VA")
        ];

    } else if (t === "year") {
        btns = [
            document.querySelector("#year2012"),
            document.querySelector("#year2013"),
            document.querySelector("#year2014"),
            document.querySelector("#year2015"),
            document.querySelector("#year2016"),
            document.querySelector("#year2017"),
            document.querySelector("#year2018"),
            document.querySelector("#year2019"),
            document.querySelector("#year2020"),
            document.querySelector("#year2021")
        ];
    }
    btns.forEach((btn) => {
        if (btn !== type) {
            if (btn.style.background !== "var(--primary)") {
                btn.style.background = "var(--primary)";
                btn.style.color = "var(--text)";
            }
        } else {
            btn.style.background = "var(--accent)";
            btn.style.color = "var(--primary)";
        }
    });
}

export { filteredCardsGenre, filteredCardsAuthor, filteredCardsReleaseYear, filteredCardsBestSeller, addAllCards };