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

function checkSelection(playerSelection, compSelection) {
  if (
    compSelection - playerSelection === 1 ||
    playerSelection - compSelection === gameArray.length - 1
  ) {
    return `You lose! ${gameArray[compSelection]} beats ${gameArray[playerSelection]}`;
  } else if (playerSelection === compSelection) {
    return "The play was a draw!!!";
  } else {
    return `You won! ${gameArray[compSelection]} beats ${gameArray[playerSelection]}`;
  }
}

console.log(computerPlay());
