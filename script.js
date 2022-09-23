const gridContainer = document.createElement('div');
gridContainer.id = "container";
document.querySelector('#mainContainer').appendChild(gridContainer);



function createRows(container) {
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
        gridItem.addEventListener('mouseover', etchRandomColor);
        row.appendChild(gridItem);
    }
}

function etchRandomColor(gridItem) {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    gridItem.target.style.backgroundColor = `#${randomColor}`;
}

function resetGrid() {
    userPrompt = prompt("How many squares on each side?");
    if (userPrompt > 100) return;
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild)
    }
    createRows(gridContainer);
}

let userPrompt = 16;
createRows(gridContainer);

const changeGridBtn = document.querySelector("#changeGridBtn");
changeGridBtn.addEventListener("click", resetGrid);

