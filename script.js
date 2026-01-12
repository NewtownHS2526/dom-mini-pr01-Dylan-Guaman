console.log("Script Running");

const changePosition = (horse, position) => (position <= 5 ? horse.style.setProperty('grid-column', position) : null);

let blue_position = 1;
let pink_position = 1;
let brown_position = 1;


// Query Selectors Here
const blueButton = document.querySelector("#blue-button");
const blueHorse = document.querySelector("#blue-horse");
const pinkButton = document.querySelector("#pink-button");
const pinkHorse = document.querySelector("#pink-horse");
const brownButton = document.querySelector("#brown-button");
const brownHorse = document.querySelector("#brown-horse"); 


// OnClick Functions Here
const advanceBlue = (e) => {
  blue_position += 1;
  changePosition(blueHorse, blue_position);
};
const advancePink = (e) => {
  pink_position += 1;
  changePosition(pinkHorse, pink_position);
};
const advanceBrown = (e) => {
  brown_position += 1;
  changePosition(brownHorse, brown_position);
};

// Reset Function Here
const resetPositions = () => {
  blue_position = 1;
  pink_position = 1;
  brown_position = 1;
  changePosition(blueHorse, blue_position);
  changePosition(pinkHorse, pink_position);
  changePosition(brownHorse, brown_position);
};


// Check for a winner
const checkWinner = (position, color) => {

  if (position === 5) {
    alert(`${color} horse wins!`);
    resetPositions();
  } 
};


 
// Event Listeners Here
blueButton.addEventListener("click", advanceBlue);
blueButton.addEventListener("click", () => checkWinner(blue_position, "Blue"));

pinkButton.addEventListener("click", advancePink);
pinkButton.addEventListener("click", () => checkWinner(pink_position, "Pink"));

brownButton.addEventListener("click", advanceBrown);
brownButton.addEventListener("click", () => checkWinner(brown_position, "Brown"));