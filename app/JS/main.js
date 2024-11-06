import '../CSS/style.css';
import { books } from './object';


function cardsTest() {
    books.forEach((el) => console.log(el));
}

/* cardsTest(); */

function Cards() {
    const container = document.querySelector(".container");
    books.forEach((ele) => {
        const title = ele.title;
        const genres = ele.genres;
        const bestSeller = ele.bestSeller;
        const releaseYear = ele.releaseYear;
        const price = ele.price;
        const author = ele.author;
        const img = ele.imageUrl;
        const altText = ele.altText;
        container.insertAdjacentHTML("beforeend",
            `<div class="card">
                <h4 class="title">TEXT</h4>
                <h6 class="author">NAME</h6>
                <img src="" alt="" class="book-cover">
                <p class="bestseller">TEXT</p>
                <p class="genres">TEXT</p>
                <h5 class="price">TEXT</h5>
                <div class="cart-button">
                    <p class="cart-button-text">TEXT</p>
                </div>
            </div>
            `
        )
    })
}

Cards();