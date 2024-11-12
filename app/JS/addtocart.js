const DOMSelectors = {
    cartButtons: document.querySelectorAll(".cart-button")
}

function cart() {
    DOMSelectors.cartButtons.forEach((btn) => {
        btn.addEventListener("click", function () {
            if (btn.getAttribute("data-id") === "0") {
                btn.setAttribute("data-id", "1");
                btn.innerHTML = "Added to Cart";
                btn.style.background = "var(--accent)";
                btn.style.color = "var(--primary)";
            } else {
                btn.setAttribute("data-id", "0");
                btn.innerHTML = "Add to Cart";
                btn.style.background = "var(--primary)";
                btn.style.color = "var(--text)";
            }
        });
    });
}

cart();
