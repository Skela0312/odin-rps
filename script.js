function getComputerChoice() {
    let choiceNum = Math.floor(Math.random() * 3);
    if (choiceNum === 0) {
        return "rock";
    } else if (choiceNum === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function round() {
    let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
    let computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        console.log("It's a tie! You both picked: " + capitalize(playerSelection))
        return 0;
    } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock") {
        console.log("You won! " + capitalize(playerSelection) + " beats " + capitalize(computerSelection))
        return 1;
    } else {
        console.log("You lose! " + capitalize(computerSelection) + " beats " + capitalize(playerSelection))
        return 2;
    }
}

function game() {
    playerScore = 0;
    computerScore = 0;
    while (playerScore < 5 && computerScore < 5) {
        let result = round();
        if (result === 0) {
            continue;
        } else if (result === 1) {
            playerScore += 1;
        } else {
            computerScore += 1;
        }
        console.log("Current Score: " + playerScore + ":" + computerScore)
    }
    if (playerScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else {
        console.log("You lost the game!");
    }
}

game();