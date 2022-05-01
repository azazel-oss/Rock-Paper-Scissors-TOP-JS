const gameButtonsContainerEl = document.querySelector(".game-buttons");
const gameInfoEl = document.querySelector(".info");
const playerScoreEl = document.querySelector(".player-score");
const compScoreEl = document.querySelector(".comp-score");
const resetGameEl = document.querySelector(".reset");
const gameButtons = document.querySelectorAll(".game-buttons>button");

const gameArray = ["Rock", "Paper", "Scissors"];
function computerPlay() {
  return Math.floor(Math.random() * 3);
}
let playerScore = 0;
let computerScore = 0;

resetGameEl.addEventListener("click", resetGame);

gameButtonsContainerEl.addEventListener("click", (event) => {
  let gameResult = playRound(userPlay(event.target.id), computerPlay());
  if (gameResult === 1) {
    playerScore += 1;
    playerScoreEl.textContent = playerScore;
  } else if (gameResult === -1) {
    computerScore += 1;
    compScoreEl.textContent = computerScore;
  }
  if (playerScore === 5) {
    gameButtons.forEach((button) => {
      button.disabled = true;
    });
    gameInfoEl.textContent = "You have won!!!";
  } else if (computerScore === 5) {
    gameButtons.forEach((button) => {
      button.disabled = true;
    });
    gameInfoEl.textContent = "You have lost!!!";
  }
});

function userPlay(userChoice) {
  for (let i = 0; i < gameArray.length; i++) {
    if (userChoice.toLowerCase() === gameArray[i].toLowerCase()) {
      return i;
    }
  }
  return -1;
}

function playRound(playerSelection, compSelection) {
  if (
    compSelection - playerSelection === 1 ||
    playerSelection - compSelection === gameArray.length - 1
  ) {
    gameInfoEl.textContent = `You lose! ${gameArray[compSelection]} beats ${gameArray[playerSelection]}`;
    return -1;
  } else if (playerSelection === compSelection) {
    gameInfoEl.textContent = "The play was a draw!!!";
    return 0;
  } else {
    gameInfoEl.textContent = `You won! ${gameArray[playerSelection]} beats ${gameArray[compSelection]}`;
    return 1;
  }
}

function resetGame() {
  gameInfoEl.textContent = "";
  playerScore = computerScore = 0;
  playerScoreEl.textContent = compScoreEl.textContent = 0;
  gameButtons.forEach((button) => {
    button.disabled = false;
  });
}
