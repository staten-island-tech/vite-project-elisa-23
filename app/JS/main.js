import '../CSS/style.css';
import { books } from './object';


function cardsTest() {
    books.forEach((el) => console.log(el));
}

/* cardsTest(); */

DOMSelectors = {
    form: document.querySelector("form"),
    input1: document.querySelector("#input1"),
    input2: document.querySelector("#input2"),
    input3: document.querySelector("#input3"),
    container: document.querySelector(".container"),
};

function Card() {
    DOMSelectors.form.addEventListener("submit", function (event) {
        event.preventDefault()
        const card = makeCard();
        addCard(card);
        clearInputs();
        removeCard();
    });
}

function makeCard() {
    let cardCount = document.querySelectorAll(".card").length;
    console.log("Form submitted");
    console.log("Default Action Prevented");
    let id = cardCount + 1;
    let object = {
        header: DOMSelectors.input1.value,
        imgUrl: DOMSelectors.input2.value,
        description: DOMSelectors.input3.value,
        id: id
    };
    console.log(object);
    return object;
}

function addCard(object) {
    let card = `<div class="card" id="card${object.id}">
            <h2 class="card-header">${object.header}</h2>
            <img src="${object.imgUrl}" alt="card image" class="card-img">
            <p class="card-desc">${object.description}</p>
            <button type="button" class="remove-btn" id="${object.id}">
                <p class="remove-btn-text">REMOVE</p>
            </button>
        </div>`;
    DOMSelectors.container.insertAdjacentHTML("beforeend", card);
}

function removeCard() {
    const removeButtons = document.querySelectorAll(".remove-btn");
    removeButtons.forEach((button) =>
        button.addEventListener("click", function (event) {
            event.preventDefault();
            let card = document.getElementById('card' + button.getAttribute('id'));
            console.log("Starting removal of card" + card);
            card.remove();
            console.log("Card removed.");
        })
    );
}

function resetSearch() {

}