const DOMSelectors = {
    html: document.querySelector("html"),
    dark: document.querySelector("#dark"),
    light: document.querySelector("#light"),
    sepia: document.querySelector("#sepia"),
    moonlight: document.querySelector("#moonlight"),
    twilight: document.querySelector("#twilight"),
    autumnLight: document.querySelector("#autumn-light"),
    autumnDark: document.querySelector("#autumn-dark")
};

function display() {
    dark();
    light();
    sepia();
    moonlight();
    twilight();
    autumnDark();
    autumnLight();
}

display();

function changeDisplay(type) {
    const html = DOMSelectors.html;
    html.className = type;
}

function dark() {
    DOMSelectors.dark.addEventListener("click", function (event) {
        event.preventDefault();
        resetColors(DOMSelectors.dark);
        changeDisplay("dark");
    })
}

function light() {
    DOMSelectors.light.addEventListener("click", function (event) {
        event.preventDefault();
        resetColors(DOMSelectors.light);
        changeDisplay("light");
    })
}

function sepia() {
    DOMSelectors.sepia.addEventListener("click", function (event) {
        event.preventDefault();
        resetColors(DOMSelectors.sepia);
        changeDisplay("sepia");
    })
}

function moonlight() {
    DOMSelectors.moonlight.addEventListener("click", function (event) {
        event.preventDefault();
        resetColors(DOMSelectors.moonlight);
        changeDisplay("moonlight");
    })
}

function twilight() {
    DOMSelectors.twilight.addEventListener("click", function (event) {
        event.preventDefault();
        resetColors(DOMSelectors.twilight);
        changeDisplay("twilight");
    })
}

function autumnLight() {
    DOMSelectors.autumnLight.addEventListener("click", function (event) {
        event.preventDefault();
        resetColors(DOMSelectors.autumnLight);
        changeDisplay("autumn-light");
    })
}

function autumnDark() {
    DOMSelectors.autumnDark.addEventListener("click", function (event) {
        event.preventDefault();
        resetColors(DOMSelectors.autumnDark);
        changeDisplay("autumn-dark");
    })
}

function resetColors(type) {
    const btns = [DOMSelectors.twilight, DOMSelectors.autumnDark, DOMSelectors.autumnLight, DOMSelectors.light, DOMSelectors.dark, DOMSelectors.sepia, DOMSelectors.moonlight];
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