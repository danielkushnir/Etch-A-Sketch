const gridContainer = document.createElement('div');
gridContainer.id = "container";
document.querySelector('#mainContainer').appendChild(gridContainer);



function createRows(container) {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    for (let i = 0; i < userPrompt; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        createGridItems(row);
        container.appendChild(row);
    }
}

function createGridItems(row) {
    for (let i = 0; i < userPrompt; i++) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.addEventListener('mouseover', etchGrayColor);
        row.appendChild(gridItem);
    }
}

function etchRandomColor(gridItem) {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    gridItem.target.style.backgroundColor = `#${randomColor}`;
}

function etchGrayColor(gridItem) {
    let randomColor = Math.floor(Math.random()*256).toString(16);

    gridItem.target.style.backgroundColor = `#${randomColor}${randomColor}${randomColor}`;
}

function resetGrid() {
    userPrompt = 16;
    createRows(gridContainer);
}

function colorMode() {
    createRows(gridContainer);
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach((gridItem) => gridItem.addEventListener('mouseover', etchRandomColor));

}

function grayscaleMode() {
    createRows(gridContainer);
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach((gridItem) => gridItem.addEventListener('mouseover', etchGrayColor));
}

let userPrompt = 16;
createRows(gridContainer);

const changeGridBtn = document.querySelector("#changeGridBtn");
changeGridBtn.addEventListener("click", resetGrid);

const colorModeBtn = document.querySelector("#colorModeBtn");
colorModeBtn.addEventListener('click', colorMode);

const grayscaleModeBtn = document.querySelector("#grayscaleModeBtn");
grayscaleModeBtn.addEventListener('click', grayscaleMode);

const gridSquareSliderLabel = document.querySelector("#gridSquareSliderLabel");
const gridSquareSlider = document.querySelector("#gridSquareSlider");
gridSquareSliderLabel.textContent = gridSquareSlider.value;
gridSquareSlider.addEventListener('input', () => {
    gridSquareSliderLabel.textContent = gridSquareSlider.value;
    userPrompt = gridSquareSlider.value;
    createRows(gridContainer);
});

