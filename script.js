const sketch = document.querySelector(".sketch");
const blackBtn = document.querySelector("#black");
const colorBtn = document.querySelector("#color");
const rainbowBtn = document.querySelector("#rainbow");
const eraserBtn = document.querySelector("#eraser");
const clearBtn = document.querySelector("#clear");
const slider = document.querySelector("#slide");

const createGrid = (grid) => {
    for(let r = 0; r < grid; r++) {
        const row = document.createElement('div');
        row.classList.add('row');
        sketch.appendChild(row);

        for(let c = 0; c < grid; c++) {
            const col = document.createElement('div');
            col.classList.add('col');
            row.appendChild(col);
        }
    }

};

const colorGridBlack = () => {
    const cols = document.querySelectorAll(".col");

    cols.forEach((col) => {
        col.addEventListener("mouseover", (event) => {
            event.target.style.background = 'black';
        })
    })
};

const colorPicker = () => {
    const color = document.querySelector("#color");
    const cols = document.querySelectorAll(".col");

    cols.forEach((col) => {
        col.addEventListener("mouseover", (event) => {
            event.target.style.background = color.value;
        })
    })
}

const random = (number) => {
    return Math.floor(Math.random() * number);
};

const randomColor = () => {
    const color = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    return color;
};

const rainbowMode = () => {
    const cols = document.querySelectorAll(".col");

    cols.forEach((col) => {
        col.addEventListener("mouseover", (event) => {
            event.target.style.background = randomColor();
        })
    })
};

const eraser = () => {
    const cols = document.querySelectorAll(".col");

    cols.forEach((col) => {
        col.addEventListener("mouseover", (event) => {
            event.target.style.background = 'white';
        })
    })
};

