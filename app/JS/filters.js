import '../CSS/style.css';
import { filteredCardsGenre, filteredCardsAuthor } from './main';

const DOMSelectors = {
    container: document.querySelector("#more"),
    genres: document.querySelector("#genres"),
    authors: document.querySelector("#authors")

}

function filters() {
    genres();
    authors();
}

filters();

function genres() {
    DOMSelectors.genres.addEventListener("click", function () {
        DOMSelectors.container.replaceChildren();       //replaces everything inside the div with what is in the parenthesis (prevents repetition of buttons)
        DOMSelectors.container.insertAdjacentHTML("beforeend",
            `<button class="genres" id="Romance">Romance</button>
                <button class="genres" id="Holiday-Christmas">Holiday-Christmas</button>
                <button class="genres" id="Holiday-Halloween">Holiday-Halloween</button>
                <button class="genres" id="Horror">Horror</button>
                <button class="genres" id="Fantasy">Fantasy</button>
                <button class="genres" id="Science Fiction">Science Fiction</button>
                <button class="genres" id="Adventure">Adventure</button>
                <button class="genres" id="Informational">Informational</button>
                <button class="genres" id="Self-Help">Self-Help</button>
                <button class="genres" id="Finance">Finance</button>
                <button class="genres" id="Technology">Technology</button>
                <button class="genres" id="Drama">Drama</button>
                <button class="genres" id="Mystery">Mystery</button>
                <button class="genres" id="Thriller">Thriller</button>`
        );
        filteredCardsGenre();
    })
}

function authors() {
    DOMSelectors.authors.addEventListener("click", function () {
        DOMSelectors.container.replaceChildren();
        DOMSelectors.container.insertAdjacentHTML("beforeend",
            `<button class="authors" id="ER">Emma Roberts</button>
                <button class="authors" id="NJ">Noah James</button>
                <button class="authors" id="LP">Liam Porter</button>
                <button class="authors" id="SC">Sophia Clark</button>
                <button class="authors" id="MB">Michael Brooks</button>`
        );
        filteredCardsAuthor();
    })
}