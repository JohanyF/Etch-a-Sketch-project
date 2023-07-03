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