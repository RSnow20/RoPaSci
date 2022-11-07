let wins = 0;
let loses = 0;
let ties = 0;

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
      ties++;
      return "It's a tie! Both oppponents chose rock!";
    } else if (computerChoice === "paper") {
      loses++;
      return "Computer wins! Paper covers rock!";
    } else if (computerChoice === "scissors") {
      wins++;
      return "You win! Rock smashes scissors!";
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      wins++;
      return "You win! Paper covers rock!";
    } else if (computerChoice === "paper") {
      ties++;
      return "It's a tie! Both oppponents chose paper!";
    } else if (computerChoice === "scissors") {
      loses++;
      return "You lose! Scissors cut paper!";
    }
  } else if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
      loses++;
      return "You lose! Rock smashes scissors!";
    } else if (computerChoice === "paper") {
      wins++;
      return "You win! Scissors cut paper!";
    } else if (computerChoice === "scissors") {
      ties++;
      return "It's a tie! Both oppponents chose scissors!";
    }
  } else {
    return "Something went wrong! Please try again!";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerChoicePrompt = prompt("Enter Rock, Paper or Scissors");
    playRound(playerChoicePrompt, getComputerChoice());
    console.log(wins + loses + ties);
  }

  console.log("You won " + wins + ", lost " + loses + " and tied " + ties + " games.");
}

const computerChoice = getComputerChoice();

game();
