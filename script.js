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
        if (modeSwitch === 'rainbow') {
            gridItem.style.backgroundColor = '#FFF';
            gridItem.removeEventListener('click', etchGrayColor);
            gridItem.removeEventListener('click', etchSingleColor);
            gridItem.addEventListener('click', etchRandomColor);   
            gridItem.removeEventListener('mouseover', etchGrayColor);
            gridItem.removeEventListener('mouseover', etchSingleColor);
            gridItem.addEventListener('mouseover', etchRandomColor);
        } else if (modeSwitch === 'shading') {
            gridItem.style.backgroundColor = '#FFF';
            gridItem.removeEventListener('click', etchRandomColor);
            gridItem.removeEventListener('click', etchSingleColor);
            gridItem.addEventListener('click', etchGrayColor);
            gridItem.removeEventListener('mouseover', etchRandomColor);
            gridItem.removeEventListener('mouseover', etchSingleColor);
            gridItem.addEventListener('mouseover', etchGrayColor);
        } else if (modeSwitch === 'singleColor') {
            gridItem.style.backgroundColor = '#FFF';
            gridItem.removeEventListener('click', etchRandomColor);
            gridItem.removeEventListener('click', etchGrayColor);
            gridItem.addEventListener('click', etchSingleColor);
            gridItem.removeEventListener('mouseover', etchRandomColor);
            gridItem.removeEventListener('mouseover', etchGrayColor);
            gridItem.addEventListener('mouseover', etchSingleColor);
        }
        row.appendChild(gridItem);
    }
}

function etchRandomColor(e) {
    if (e.buttons === 1 || e.type === 'click') {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        e.target.style.backgroundColor = `#${randomColor}`;
    } 
}

function etchGrayColor(e) {
    if (e.buttons === 1 || e.type === 'click') {
        let currentColor = e.target.style.backgroundColor;
        currentColor = currentColor.substring(4, currentColor.length-1)
                                   .replace(/ /g, '')
                                   .split(',')[0];
        console.log(currentColor);
        if (currentColor > 0) {
            currentColor -= 25;
            if (currentColor < 0) currentColor = 0;
            e.target.style.backgroundColor = `rgb(${currentColor}, ${currentColor}, ${currentColor})`;
        }
    }
}

function etchSingleColor(e) {
    if (e.buttons === 1 || e.type === 'click') {
        e.target.style.backgroundColor = `${colorPickerBtn.value}`;
    } 
}

function clearGrid() {
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach((gridItem) => {
        gridItem.style.backgroundColor = '#FFF';
    });
}

function resetGrid() {
    modeSwitch = 'rainbow';
    userPrompt = 16;
    gridSquareSliderLabel.textContent = 16;
    gridSquareSlider.value = 16;
    createRows(gridContainer);
}

function rainbowMode() {
    modeSwitch = 'rainbow';
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach((gridItem) => {
        gridItem.removeEventListener('click', etchGrayColor);
        gridItem.removeEventListener('click', etchSingleColor);
        gridItem.addEventListener('click', etchRandomColor);
        gridItem.removeEventListener('mouseover', etchGrayColor);
        gridItem.removeEventListener('mouseover', etchSingleColor);
        gridItem.addEventListener('mouseover', etchRandomColor);
    });
}

function shadingMode() {
    modeSwitch = 'shading';
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach((gridItem) => {
        gridItem.removeEventListener('click', etchRandomColor);
        gridItem.removeEventListener('click', etchSingleColor);
        gridItem.addEventListener('click', etchGrayColor);
        gridItem.removeEventListener('mouseover', etchRandomColor);
        gridItem.removeEventListener('mouseover', etchSingleColor);
        gridItem.addEventListener('mouseover', etchGrayColor);
    });
}

function singleColorMode() {
    modeSwitch = 'singleColor';
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach((gridItem) => {
        gridItem.removeEventListener('click', etchRandomColor);
        gridItem.removeEventListener('click', etchGrayColor);
        gridItem.addEventListener('click', etchSingleColor);
        gridItem.removeEventListener('mouseover', etchRandomColor);
        gridItem.removeEventListener('mouseover', etchGrayColor);
        gridItem.addEventListener('mouseover', etchSingleColor);
    });
}

function setNumOfSquares() {
    gridSquareSliderLabel.textContent = gridSquareSlider.value;
    userPrompt = gridSquareSlider.value;
    createRows(gridContainer);
}


const gridContainer = document.createElement('div');
gridContainer.id = "container";
document.querySelector('#mainContainer').appendChild(gridContainer);

const resetGridBtn = document.querySelector("#resetGridBtn");
resetGridBtn.addEventListener("click", resetGrid);

const rainbowModeBtn = document.querySelector("#rainbowModeBtn");
rainbowModeBtn.addEventListener('click', rainbowMode);

const shadingModeBtn = document.querySelector("#shadingModeBtn");
shadingModeBtn.addEventListener('click', shadingMode);

const colorPickerBtn = document.querySelector("#colorPicker");
colorPickerBtn.addEventListener('input', singleColorMode);

const clearBtn = document.querySelector("#clearBtn");
clearBtn.addEventListener('click', clearGrid)

const gridSquareSliderLabel = document.querySelector("#gridSquareSliderLabel");
const gridSquareSlider = document.querySelector("#gridSquareSlider");
gridSquareSliderLabel.textContent = gridSquareSlider.value;
gridSquareSlider.addEventListener('input', setNumOfSquares);

resetGrid();