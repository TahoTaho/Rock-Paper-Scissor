function getComputerChoice () {
    const choices = ["rock", "paper", "scissor"];
    const computerDecisionMaking = Math.floor(Math.random() * choices.length) + 0;
    switch (computerDecisionMaking) {
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissor';
    }
}

function playRound(computerSelection) {
    const playerSelection = prompt('Rock, Paper or Scissor?', '').toLowerCase();

    if (playerSelection === 'rock' && computerSelection === 'scissor') {
        console.log(playerSelection);
        console.log(computerSelection);
        console.log("You Win! Rock beats Scissor"); 
    }
    else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        console.log(playerSelection);
        console.log(computerSelection);
        confirm.log("You Win! Scissor beats paper"); 
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log(playerSelection);
        console.log(computerSelection);
        console.log("You Win! Paper beats Rock"); 
    }
    else if (playerSelection === computerSelection) {
        console.log(playerSelection);
        console.log(computerSelection);
        console.log("It's a Tie!"); 
    }
    else {
        console.log(playerSelection);
        console.log(computerSelection);
        console.log("You Lose! Try again");
    }
}

function game() {
    playRound(getComputerChoice());
    playRound(getComputerChoice());
    playRound(getComputerChoice());
    playRound(getComputerChoice());
    playRound(getComputerChoice());
}

console.log(game());
