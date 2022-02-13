const gameContainer = document.getElementById("game");
let openedCardCount = 0;
let card1 = null;
let card2 = null;
let noClicking = false;

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];


function shuffle(array) {
  let counter = array.length;

  while (counter > 0) {

    let index = Math.floor(Math.random() * counter);

    counter--;

    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    newDiv.classList.add(color);

    newDiv.addEventListener("click", handleCardClick);

    gameContainer.append(newDiv);
  }
}


function handleCardClick(event) {
  if (noClicking) return;
  if (event.target.classList.contains("opened")) return;

  let clickedCard = event.target;

  clickedCard.style.backgroundColor = clickedCard.classList[0];

  if(!card1 || !card2) {
    clickedCard.classList.add("opened");
    if(!card1) {
      card1 = clickedCard;
    } else if(card1 && !card2) {
      card2 = clickedCard;
    } 

  if(card1 && card2) {
    noClicking = true;
      if(card1.classList[0] === card2.classList[0]) {
        card1 = null;
        card2 = null;
        noClicking = false;
      } else {
        setTimeout(function(){
          card1.classList.remove("opened");
          card2.classList.remove("opened");
          card1.style.backgroundColor = '';
          card2.style.backgroundColor = '';
          card1 = null;
          card2 = null;
          noClicking = false;
        },1000)

      } 
    }
  }
}

createDivsForColors(shuffledColors);
