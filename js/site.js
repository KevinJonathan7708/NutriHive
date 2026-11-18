function setMode(on) {
    var button = document.querySelector(".mode-toggle");
    if (on) {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
    if (button) {
        button.textContent = on ? "Light Mode" : "Dark Mode";
        button.setAttribute("aria-pressed", on);
    }
}

function Mode() {
    var on = !document.body.classList.contains("dark");
    setMode(on);
    try {
        localStorage.setItem("nutrihiveDark", on ? "1" : "0");
    } catch (error) {
    }
}

try {
    setMode(localStorage.getItem("nutrihiveDark") === "1");
} catch (error) {
}
