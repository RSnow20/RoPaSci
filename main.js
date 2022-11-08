let roundResults = "";
let gameResults = [0, 0, 0];
let gameResultsText = "";
let playerChoiceButton = "";

function getComputerChoice() {
  let computerChoice = "";
  let numberChoice = Math.floor(Math.random() * 3 + 1);

  if (numberChoice === 1) {
    computerChoice = "Rock";
  } else if (numberChoice === 2) {
    computerChoice = "Paper";
  } else if (numberChoice === 3) {
    computerChoice = "Scissors";
  }

  return computerChoice;
}

function playRound(playerChoice, computerChoice) {
  playerChoice = playerChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  if (playerChoice === "rock") {
    if (computerChoice === "rock") {
      gameResults[2]++;
      return "It's a tie! Both oppponents chose rock!";
    } else if (computerChoice === "paper") {
      gameResults[1]++;
      return "Computer wins! Paper covers rock!";
    } else if (computerChoice === "scissors") {
      gameResults[0]++;
      return "You win! Rock smashes scissors!";
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      gameResults[0]++;
      return "You win! Paper covers rock!";
    } else if (computerChoice === "paper") {
      gameResults[2]++;
      return "It's a tie! Both oppponents chose paper!";
    } else if (computerChoice === "scissors") {
      gameResults[1]++;
      return "You lose! Scissors cut paper!";
    }
  } else if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
      gameResults[1]++;
      return "You lose! Rock smashes scissors!";
    } else if (computerChoice === "paper") {
      gameResults[0]++;
      return "You win! Scissors cut paper!";
    } else if (computerChoice === "scissors") {
      gameResults[2]++;
      return "It's a tie! Both oppponents chose scissors!";
    }
  } else {
    return "Something went wrong! Please try again!";
  }
}

function endRound() {
  const roundResultsP = document.querySelector(".round-results");

  roundResultsP.innerHTML = roundResults;

  let inputRoundsToWin = document.querySelector(".rounds-to-win");

  gameScore(inputRoundsToWin.value);
}

function gameScore(roundsToWin) {
  if (gameResults[0] >= roundsToWin) {
    gameResultsText = "You have won the game with " + gameResults[0] + " wins! Please start another round to start a new game.";
    gameResults = [0, 0, 0];
  } else if (gameResults[1] >= roundsToWin) {
    gameResultsText = "You have lost the game with " + gameResults[0] + " wins! Please start another round to start a new game.";
    gameResults = [0, 0, 0];
  } else {
    gameResultsText =
      "You won " +
      gameResults[0] +
      "rounds, lost " +
      gameResults[1] +
      " rounds and tied " +
      gameResults[2] +
      " rounds. You have to win " +
      (roundsToWin - gameResults[0]) +
      " more rounds to win the game.";
  }

  const gameResultsP = document.querySelector(".game-results");

  gameResultsP.innerHTML = gameResultsText;
}

const playerChoiceRock = document.querySelector(".rock");

playerChoiceRock.addEventListener("click", function () {
  roundResults = playRound("rock", getComputerChoice());
  endRound();
});

const playerChoicePaper = document.querySelector(".paper");

playerChoicePaper.addEventListener("click", function () {
  roundResults = playRound("paper", getComputerChoice());
  endRound();
});

const playerChoiceScissors = document.querySelector(".scissors");

playerChoiceScissors.addEventListener("click", function () {
  roundResults = playRound("scissors", getComputerChoice());
  endRound();
});
