const dimX = 20;
const dimY = 20;

const container = document.querySelector(".container");

function color(e){
  e.target.classList.add("visited");
}

for(i = 0; i < dimX* dimY;i++){
  let box = document.createElement("div");
  box.setAttribute("class","box")
  box.addEventListener("mouseover",color);
  container.appendChild(box);
}

const resetButton = document.querySelector("#reset");

function resetBoxes(e){
  const visitedBoxes = document.querySelectorAll(".visited")
  for(i = 0; i < visitedBoxes.length;i++){
    visitedBoxes[i].classList.remove("visited")
  }
}

resetButton.addEventListener("click", resetBoxes);
