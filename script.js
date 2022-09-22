const gridContainer = document.createElement('div');
gridContainer.id = "container";
document.querySelector('body').appendChild(gridContainer);



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
        gridItem.addEventListener('mouseover', () => {
            gridItem.classList.add("etched");
        });
        row.appendChild(gridItem);
    }
}
let userPrompt = 50;
createRows(gridContainer);