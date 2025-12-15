const containerBox = document.querySelector(".container");
for (let i = 0; i < 256; i ++) {
    let box = document.createElement("div");
    box.className = "box";
    containerBox.appendChild(box);
}

// Generate random color
const boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
    box.addEventListener("mouseenter", () => {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        box.style.background = `rgb(${red}, ${green}, ${blue})`;
    });
});