function getComputerChoice() {
    const computerDecisionMaking = Math.floor(Math.random() * 3);
    switch (computerDecisionMaking) {
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissor';
    }
}

function playRound(computerSelection, playerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissor') {
        playerPick.textContent = 'Player Picks: ' + playerSelection;
        computerPick.textContent = 'Computer Picks: ' + computerSelection;
        description.textContent = 'Explanation: ' + playerSelection + ' beats ' + computerSelection;
        score.textContent = 'Your score is: ' + (++playerScore) + ' Computer Score: ' + computerScore;
    }
    else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        playerPick.textContent = 'Player Picks: ' + playerSelection;
        computerPick.textContent = 'Computer Picks: ' + computerSelection;
        description.textContent = 'Explanation: ' + playerSelection + ' beats ' + computerSelection;
        score.textContent = 'Your score is: ' + (++playerScore) + ' Computer Score: ' + computerScore;
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerPick.textContent = 'Player Picks: ' + playerSelection;
        computerPick.textContent = 'Computer Picks: ' + computerSelection;
        description.textContent = 'Explanation: ' + playerSelection + ' beats ' + computerSelection;
        score.textContent = 'Your score is: ' + (++playerScore) + ' Computer Score: ' + computerScore;
    }
    else if (playerSelection === computerSelection) {
        playerPick.textContent = 'Player Picks: ' + playerSelection;
        computerPick.textContent = 'Computer Picks: ' + computerSelection;
        description.textContent = 'It\'s a Tie';
        score.textContent = 'Player score is: ' + playerScore + ' Computer Score: ' + computerScore;
    }
    else {
        playerPick.textContent = 'Player Picks: ' + playerSelection;
        computerPick.textContent = 'Computer Picks: ' + computerSelection;
        description.textContent = 'Explanation: ' + computerSelection + ' beats ' + playerSelection;
        score.textContent = 'Your score is: ' + playerScore + ' Computer Score: ' + (++computerScore);
    }

}

function checkWinner() {
    if (playerScore === 5) {
        result.textContent = 'You WIN!';
        playerScore = 0;
        computerScore = 0;
    }
    else if (computerScore === 5){
        result.textContent = 'You LOSE! Try again';
        playerScore = 0;
        computerScore = 0;
    }
}

const rock_btn = document.querySelector('#rock');
rock_btn.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    playRound(computerChoice, 'rock');
    checkWinner();
});

const paper_btn = document.querySelector('#paper');
paper_btn.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    playRound(computerChoice, 'paper');
    checkWinner();
});

const scissor_btn = document.querySelector('#scissor');
scissor_btn.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    playRound(computerChoice, 'scissor');
    checkWinner();
});

let playerScore = 0;
let computerScore = 0;

const playerPick = document.querySelector('p.player-choice');
const computerPick = document.querySelector('p.computer-choice');
const description = document.querySelector('p.description');
const score = document.querySelector('p.score');
const result = document.querySelector('p.result');






