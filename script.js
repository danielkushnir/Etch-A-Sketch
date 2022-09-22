const gridContainer = document.createElement('div');
gridContainer.id = "container";
document.querySelector('body').appendChild(gridContainer);
const grid = [];
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        grid.push(document.createElement('div'));
    }
}

for (let i = 0; i < grid.length; i++) {
    grid[i].classList.add("grid-item");
    grid[i].textContent = i + 1;
    gridContainer.appendChild(grid[i]);
}
