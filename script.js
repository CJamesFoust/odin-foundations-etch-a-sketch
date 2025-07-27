var etchCellContainer = document.createElement("div");
etchCellContainer.className = "etch-cell-container";

var etchCell = document.createElement("div");
etchCell.className = "etch-cell";

var generateGridButton = document.getElementById("generate-grid");
var clearGridButton = document.getElementById("clear-grid");

generateGridButton.addEventListener("click", function () {
  var input = document.getElementById("grid-size").value;
  gridSize = parseInt(input, 10);
  if (isNaN(gridSize) || gridSize <= 0 || gridSize > 100) {
    alert("Please enter a valid grid size no greater than 100.");
    document.getElementById("grid-size").value = null; // Clear the input field
    return;
  }
  createGrid(gridSize);
});

const createGrid = function (size) {
  var container = document.getElementById("container");
  container.textContent = "";
  container.style.backgroundColor = "white";

  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.className = "etch-row";
    row.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    const cells = [...Array(size)].map((_, index) => {
      const cell = document.createElement("div");
      cell.className = "etch-cell";
      cell.style.backgroundColor = "rgba(0,0,0,0.0)";
      return cell;
    });
    cells.forEach((cell) => row.appendChild(cell));
    container.appendChild(row);
  }
};

const clearGrid = function () {
  var container = document.getElementById("container");
  container.textContent = "";
  container.style.backgroundColor = "transparent";
  document.getElementById("grid-size").value = null; // Clear the input field
};

clearGridButton.addEventListener("click", clearGrid);

var container = document.getElementById("container");
container.addEventListener("mouseover", function (e) {
  if (e.target.id !== "container") {
    var currentBG = e.target.style.backgroundColor;
    var opacity = parseFloat(currentBG.slice(14));
    if (opacity === 1) {
      console.log("Maximum opacity reached, not changing color.");
      return;
    }
    e.target.style.backgroundColor = `rgba(0,0,0,${opacity + 0.2})`;
    console.log(e.target.style.backgroundColor);
  }
});
