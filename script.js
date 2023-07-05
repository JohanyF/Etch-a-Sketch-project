const sketch = document.querySelector(".sketch");
const blackBtn = document.querySelector("#black");
const colorBtn = document.querySelector("#color");
const rainbowBtn = document.querySelector("#rainbow");
const eraserBtn = document.querySelector("#eraser");
const clearBtn = document.querySelector("#clear");
const slider = document.querySelector("#slide");

//function creates a grid for the Etch-a-Sketch.
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

//function allows the user to color the Etch-a-Sketch black.
const colorGridBlack = () => {
    const cols = document.querySelectorAll(".col");

    cols.forEach((col) => {
        col.addEventListener("mouseover", (event) => {
            event.target.style.background = 'black';
        })
    })
};

//fucntion allows the user to pick any color for them to use in the Etch-a-Sketch.
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

//function returns a random rgb value.
const randomColor = () => {
    const color = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    return color;
};

//function allows for the user to enter into "rainbow mode" where every section they color will produce a random generated color. 
const rainbowMode = () => {
    const cols = document.querySelectorAll(".col");

    cols.forEach((col) => {
        col.addEventListener("mouseover", (event) => {
            event.target.style.background = randomColor();
        })
    })
};

//function allows the user to erase specific squares by changing the color to white. 
const eraser = () => {
    const cols = document.querySelectorAll(".col");

    cols.forEach((col) => {
        col.addEventListener("mouseover", (event) => {
            event.target.style.background = 'white';
        })
    })
};

//function removes all of the color in the Etch-a-Sketch by changing the color to white.
const clearColor = () => {
    const cols = document.querySelectorAll(".col");

    cols.forEach(col => col.style.background = 'white');
};

//function deletes the grid of the Etch-a-Sketch.
const removeGrid = () => {
   while(sketch.hasChildNodes()) {
    sketch.removeChild(sketch.firstChild);
   }
};

//function updates the text of the grid size after the user interacts with the slider.
const updateGridSizeText = (gridSize) => {
    const gridSizeSelector = document.querySelector(".grid-size");
    gridSizeSelector.textContent = `${gridSize}x${gridSize}`;
};

//function is used to change the grid size based on the user iteraction with the slider. This generates a new grid for the user to color in the Etch-a-Sketch.
const changeGrid = () => {
    const gridSizeNumber = document.querySelector("#slide").value;
    if(sketch.hasChildNodes()){
        removeGrid();
    }
    updateGridSizeText(gridSizeNumber);
    createGrid(gridSizeNumber);
}

//The Etch-a-Sketch automatically starts with a grid of 16x16 for the user to color with. 
createGrid(16);

blackBtn.addEventListener("click", colorGridBlack);
colorBtn.addEventListener("click", colorPicker);
rainbowBtn.addEventListener("click", rainbowMode);
eraserBtn.addEventListener("click", eraser);
clearBtn.addEventListener("click", clearColor);
slider.addEventListener("change", changeGrid);