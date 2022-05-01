const gameArray = ["Rock", "Paper", "Scissors"];
function computerPlay() {
  return Math.floor(Math.random() * 3);
}

function userPlay(userChoice) {
  for (let i = 0; i < gameArray.length; i++) {
    if (userChoice.toLowerCase() === gameArray[i].toLowerCase()) {
      return i;
    }
  }
  return -1;
}

function checkPlayerWin(playerSelection, compSelection) {
  if (
    compSelection - playerSelection === 1 ||
    playerSelection - compSelection === gameArray.length - 1
  ) {
    console.log(
      `You lose! ${gameArray[compSelection]} beats ${gameArray[playerSelection]}`
    );
    return -1;
  } else if (playerSelection === compSelection) {
    console.log("The play was a draw!!!");
    return 0;
  } else {
    console.log(
      `You won! ${gameArray[playerSelection]} beats ${gameArray[compSelection]}`
    );
    return 1;
  }
}

let score = 0;
for (let i = 0; i < 5; i++) {
  let playerChoice = prompt("Enter your choice(Rock, Paper, Scissors):");
  let gameResult = checkPlayerWin(userPlay(playerChoice), computerPlay());
  if (gameResult === 1) {
    score += 1;
  }
}

console.log("Your final score was " + score);
