const containerBox = document.querySelector(".container");
for (let i = 0; i < 256; i ++) {
    let box = document.createElement("div");
    box.className = "box";
    box.style.flex = "0 0 6.25%";
    box.style.border = "1px solid black";
    containerBox.appendChild(box);
}


const button = document.querySelector(".createGrid");
button.addEventListener("click", () => {    
    const noOfGrid = Number(prompt("How many squares do you want per side ? ( A maximum of 100 squares per side is possible)"));
    if (noOfGrid < 1 || noOfGrid > 100 || isNaN(noOfGrid)) {
       alert("Try again!");
    }
    else {
        const boxes = document.querySelectorAll(".box");
        boxes.forEach((btn) => btn.remove());
        let width = 100 / noOfGrid;
        for (let i = 0; i < noOfGrid ** 2; i++) {
            const box = document.createElement("div");
            box.className = "box";
            box.style.flex = `0 0 ${width}%`;
            box.style.border = "1px solid black";
            containerBox.appendChild(box);
        };
    };
    randomColor();
});


// Generate random color
function randomColor() {
 const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.addEventListener("mouseenter", () => {
            let red = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);
            box.style.background = `rgb(${red}, ${green}, ${blue})`;
        });
    });   
};
randomColor();