console.log("Hello World")

function getComputerChoice() {
    let x = Math.floor(Math.random()*3);
    switch(x) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

function getHumanChoice() {
    let x = prompt("Rock, paper, or scissors?");
    return x;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    let rockBtn = document.querySelector("#rock");
    let paperBtn = document.querySelector("#paper");
    let scissorsBtn = document.querySelector("#scissors");
    let resetBtn = document.querySelector("#reset");

    let playerScoreSpan = document.querySelector("#playerScore");
    let computerScoreSpan = document.querySelector("#computerScore");
    let gameLog = document.querySelector("div#gameLog");

    let gameOver = false;

    function reset() {
        humanScore = 0;
        computerScore = 0;
        gameOver = false;
        gameLog.textContent = "";
        playerScoreSpan.textContent = humanScore;
        computerScoreSpan.textContent = computerScore;  
    }

    function playRound(humanChoice,computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        
        let gameLogEvent = document.createElement("p");

        if (humanChoice == computerChoice && !gameOver) {
            gameLogEvent.textContent = "Tie! 🤝 Try again.";
            gameLog.appendChild(gameLogEvent);
        } else if (!gameOver) {
            switch(humanChoice) {
                case "rock":
                    if (computerChoice == "paper") {
                        gameLogEvent.textContent = "You lose! Paper beats rock.";
                        gameLog.appendChild(gameLogEvent);
                        computerScore++;
                        break;
                    } else {
                        gameLogEvent.textContent = "You win! Rock beats scissors.";
                        gameLog.appendChild(gameLogEvent);
                        humanScore++;
                        break;
                    }
                case "paper":
                    if (computerChoice == "rock") {
                        gameLogEvent.textContent = "You win! Paper beats rock.";
                        gameLog.appendChild(gameLogEvent);
                        humanScore++;
                        break;
                    } else {
                        gameLogEvent.textContent = "You lose! Scissors beats paper.";
                        gameLog.appendChild(gameLogEvent);
                        computerScore++;
                        break;
                    }
                case "scissors":
                    if (computerChoice == "rock") {
                        gameLogEvent.textContent = "You lose! Rock beats scissors.";
                        gameLog.appendChild(gameLogEvent);
                        computerScore++;
                        break;
                    } else {
                        gameLogEvent.textContent = "You win! Scissors beats paper.";
                        gameLog.appendChild(gameLogEvent);
                        humanScore++;
                        break;
                    }
            }

            if (humanScore == 5 || computerScore == 5) {
                gameOver = true;
                if (humanScore > computerScore) {
                    gameLogEvent.textContent = "You win! 🎉";
                    gameLog.appendChild(gameLogEvent);
                } else if (humanScore < computerScore) {
                    gameLogEvent.textContent = "You lose! 😭";
                    gameLog.appendChild(gameLogEvent);
                } else {
                    gameLogEvent.textContent = "It's a tie! 🤝";
                    gameLog.appendChild(gameLogEvent);
                }
            }
        } else {
        }

        playerScoreSpan.textContent = humanScore;
        computerScoreSpan.textContent = computerScore; 
        
    }

    rockBtn.addEventListener("click", () => {
        playRound("rock",getComputerChoice());
    });

    paperBtn.addEventListener("click", () => {
        playRound("paper",getComputerChoice());
    });

    scissorsBtn.addEventListener("click", () => {
        playRound("scissors",getComputerChoice());
    });

    resetBtn.addEventListener("click", () => {
        reset();
    });

    // for (let games = 0; games < 5; games++) {
    //     playRound(getHumanChoice(),getComputerChoice());
    // }
}

playGame();