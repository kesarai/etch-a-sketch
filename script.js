const grid = document.getElementById("grid");
createGrid(16)

function createGrid(size){
    let squareSize = grid.offsetWidth / size;
    for(i = 1; i <= size*size; i++){
    let square = document.createElement('div');
    square.classList.add('square');
    grid.appendChild(square);
    square.style.width = squareSize + 'px';
    square.style.height = squareSize + 'px';
};
    
};


squares = document.getElementsByClassName('square');
for(i = 0; i < squares.length; i++) {
squares[i].addEventListener("mouseenter", (function (index) {
    return function () {
        squares[index].className = 'square hoverBlack';
    }
  })(i));
}