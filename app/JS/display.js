import '../CSS/style.css';

const DOMSelectors = {
    html: document.querySelector("html"),
    dark: document.querySelector("#dark"),
    light: document.querySelector("#light"),
    sepia: document.querySelector("#sepia"),
    moonlight: document.querySelector("#moonlight"),
    twilight: document.querySelector("#twilight"),
    autumnLight: document.querySelector("#autumn-light"),
    autumnDark: document.querySelector("#autumn-dark")
}

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
        DOMSelectors.dark.style.background = "var(--accent)";
        DOMSelectors.dark.style.color = "var(--primary)";
        const buttons = [DOMSelectors.dark, DOMSelectors.light, DOMSelectors.twilight, DOMSelectors.moonlight, DOMSelectors.sepia, DOMSelectors.autumnDark, DOMSelectors.autumnLight];
        buttons.forEach((button) => {
            if (button !== DOMSelectors.dark) {
                if (button.style.background !== "var(--primary)") {
                    button.style.background = "var(--primary)";
                    button.style.color = "var(--text)";
                }
            }
        });
        changeDisplay("dark");
    })
}

function light() {
    DOMSelectors.light.addEventListener("click", function (event) {
        event.preventDefault();
        DOMSelectors.light.style.background = "var(--accent)";
        DOMSelectors.light.style.color = "var(--primary)";
        const buttons = [DOMSelectors.dark, DOMSelectors.light, DOMSelectors.twilight, DOMSelectors.moonlight, DOMSelectors.sepia, DOMSelectors.autumnDark, DOMSelectors.autumnLight];
        buttons.forEach((button) => {
            if (button !== DOMSelectors.light) {
                if (button.style.background !== "var(--primary)") {
                    button.style.background = "var(--primary)";
                    button.style.color = "var(--text)";
                }
            }
        });
        changeDisplay("light");
    })
}

function sepia() {
    DOMSelectors.sepia.addEventListener("click", function (event) {
        event.preventDefault();
        DOMSelectors.sepia.style.background = "var(--accent)";
        DOMSelectors.sepia.style.color = "var(--primary)";
        const buttons = [DOMSelectors.dark, DOMSelectors.light, DOMSelectors.twilight, DOMSelectors.moonlight, DOMSelectors.sepia, DOMSelectors.autumnDark, DOMSelectors.autumnLight];
        buttons.forEach((button) => {
            if (button !== DOMSelectors.sepia) {
                if (button.style.background !== "var(--primary)") {
                    button.style.background = "var(--primary)";
                    button.style.color = "var(--text)";
                }
            }
        });
        changeDisplay("sepia");
    })
}

function moonlight() {
    DOMSelectors.moonlight.addEventListener("click", function (event) {
        event.preventDefault();
        DOMSelectors.moonlight.style.background = "var(--accent)";
        DOMSelectors.moonlight.style.color = "var(--primary)";
        const buttons = [DOMSelectors.dark, DOMSelectors.light, DOMSelectors.twilight, DOMSelectors.moonlight, DOMSelectors.sepia, DOMSelectors.autumnDark, DOMSelectors.autumnLight];
        buttons.forEach((button) => {
            if (button !== DOMSelectors.moonlight) {
                if (button.style.background !== "var(--primary)") {
                    button.style.background = "var(--primary)";
                    button.style.color = "var(--text)";
                }
            }
        });
        changeDisplay("moonlight");
    })
}

function twilight() {
    DOMSelectors.twilight.addEventListener("click", function (event) {
        event.preventDefault();
        DOMSelectors.twilight.style.background = "var(--accent)";
        DOMSelectors.twilight.style.color = "var(--primary)";
        const buttons = [DOMSelectors.dark, DOMSelectors.light, DOMSelectors.twilight, DOMSelectors.moonlight, DOMSelectors.sepia, DOMSelectors.autumnDark, DOMSelectors.autumnLight];
        buttons.forEach((button) => {
            if (button !== DOMSelectors.twilight) {
                if (button.style.background !== "var(--primary)") {
                    button.style.background = "var(--primary)";
                    button.style.color = "var(--text)";
                }
            }
        });
        changeDisplay("twilight");
    })
}

function autumnLight() {
    DOMSelectors.autumnLight.addEventListener("click", function (event) {
        event.preventDefault();
        DOMSelectors.autumnLight.style.background = "var(--accent)";
        DOMSelectors.autumnLight.style.color = "var(--primary)";
        const buttons = [DOMSelectors.dark, DOMSelectors.light, DOMSelectors.twilight, DOMSelectors.moonlight, DOMSelectors.sepia, DOMSelectors.autumnDark, DOMSelectors.autumnLight];
        buttons.forEach((button) => {
            if (button !== DOMSelectors.autumnLight) {
                if (button.style.background !== "var(--primary)") {
                    button.style.background = "var(--primary)";
                    button.style.color = "var(--text)";
                }
            }
        });
        changeDisplay("autumn-light");
    })
}

function autumnDark() {
    DOMSelectors.autumnDark.addEventListener("click", function (event) {
        event.preventDefault();
        DOMSelectors.autumnDark.style.background = "var(--accent)";
        DOMSelectors.autumnDark.style.color = "var(--primary)";
        const buttons = [DOMSelectors.dark, DOMSelectors.light, DOMSelectors.twilight, DOMSelectors.moonlight, DOMSelectors.sepia, DOMSelectors.autumnDark, DOMSelectors.autumnLight];
        buttons.forEach((button) => {
            if (button !== DOMSelectors.autumnDark) {
                if (button.style.background !== "var(--primary)") {
                    button.style.background = "var(--primary)";
                    button.style.color = "var(--text)";
                }
            }
        });
        changeDisplay("autumn-dark");
    })
}