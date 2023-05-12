const grid = document.getElementById("grid");
createGrid(30)

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


let squares = document.getElementsByClassName('square');
let isMouseDown = false;
for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("mousedown", (function (index) {
    return function () {
        isMouseDown = true;
        squares[index].className = 'square hoverBlack';
    }
  })(i));
  
  squares[i].addEventListener("mouseup", function () {
    isMouseDown = false;
  });

  squares[i].addEventListener("mousemove", (function (index) {
    return function () {
        if (isMouseDown) {
          squares[index].classList.add('hoverBlack');
        }
    }
  })(i));
}


