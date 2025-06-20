function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = size + "px";
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}

function main() {
    const spooky = changeMode(9, "bold", "uppercase", "pink", "green")
    const darkMode = changeMode(12, "bold", "capitalize", "black", "white")
    const screamMode = changeMode(12, "normal", "lowercase", "white", "black")

    document.body.innerHTML = `
        <p>Welcome Holberton!</p>
        <button>Spooky</button>
        <button>Dark mode</button>
        <button>Scream mode</button>
    `

    const buttons = document.body.querySelectorAll("button");
    buttons[0].addEventListener("click", spooky);
    buttons[1].addEventListener("click", darkMode);
    buttons[2].addEventListener("click", screamMode);
}

main();