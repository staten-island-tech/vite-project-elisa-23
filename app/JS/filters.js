import '../CSS/style.css';

const DOMSelectors = {
    container: document.querySelector("#more"),
    genres: document.querySelector("#genres"),

}

function genres() {
    DOMSelectors.genres.addEventListener("click", function (event) {
        event.preventDefault();
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
    })
}

genres();