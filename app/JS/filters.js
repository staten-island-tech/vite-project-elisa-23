import { filteredCardsGenre, filteredCardsAuthor, filteredCardsReleaseYear, filteredCardsBestSeller } from './main';

const DOMSelectors = {
    container: document.querySelector("#more"),
    genres: document.querySelector("#genres"),
    authors: document.querySelector("#authors"),
    years: document.querySelector("#release-year"),
    bestSellers: document.querySelector("#bestseller")
};

function filters() {
    genres();
    authors();
    years();
    bestSeller();
}

filters();

function resetColors(type) {
    const btns = [DOMSelectors.authors, DOMSelectors.bestSellers, DOMSelectors.years, DOMSelectors.genres];
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

function genres() {
    DOMSelectors.genres.addEventListener("click", function () {
        resetColors(DOMSelectors.genres);
        DOMSelectors.container.replaceChildren();       //replaces everything inside the div with what is in the parenthesis (prevents repetition of buttons)
        DOMSelectors.container.insertAdjacentHTML("beforeend",
            `
                <button class="genres" id="Fantasy">Fantasy</button>
                <button class="genres" id="Young-Adult">Young Adult</button>`
        );
        filteredCardsGenre();
    });
}

function authors() {
    DOMSelectors.authors.addEventListener("click", function () {
        resetColors(DOMSelectors.authors);
        DOMSelectors.container.replaceChildren();
        DOMSelectors.container.insertAdjacentHTML("beforeend",
            `<button class="authors" id="EB">Elly Blake</button>
                <button class="authors" id="LS">Laura Sebastian</button>
                <button class="authors" id="HB">Holly Black</button>
                <button class="authors" id="TA">Tomi Adeyemi</button>
                <button class="authors" id="LB">Leigh Bardugo</button>
                <button class="authors" id="ST">Sabaa Tahir</button>
                <button class="authors" id="RC">Roshani Chokshi</button>
                <button class="authors" id="VA">Victoria Aveyard</button>`
        );
        filteredCardsAuthor();
    });
}

function years() {
    DOMSelectors.years.addEventListener("click", function () {
        resetColors(DOMSelectors.years);
        DOMSelectors.container.replaceChildren();
        DOMSelectors.container.insertAdjacentHTML("beforeend",
            `<button class="years" id="year2012">2012</button>
                <button class="years" id="year2013">2013</button>
                <button class="years" id="year2014">2014</button>
                <button class="years" id="year2015">2015</button>
                <button class="years" id="year2016">2016</button>
                <button class="years" id="year2017">2017</button>
                <button class="years" id="year2018">2018</button>
                <button class="years" id="year2019">2019</button>
                <button class="years" id="year2020">2020</button>
                <button class="years" id="year2021">2021</button>`
        );
        filteredCardsReleaseYear();
    });
}

function bestSeller() {
    DOMSelectors.bestSellers.addEventListener("click", function () {
        resetColors(DOMSelectors.bestSellers);
        DOMSelectors.container.replaceChildren();
        filteredCardsBestSeller();
    })
}