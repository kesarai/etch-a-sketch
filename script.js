const grid = document.getElementById("grid");


function createGrid(size){
    let squareSize = grid.offsetWidth / size;
    for(i = 1; i <= size*size; i++){
    let square = document.createElement('div');
    square.classList.add('square');
    grid.appendChild(square);
    square.style.width = squareSize + 'px';
    square.style.height = squareSize + 'px';
};
    
console.log(squareSize);
console.log(grid.clientWidth)
};
createGrid(16)