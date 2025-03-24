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

    function playRound(humanChoice,computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        console.log(humanChoice);
        if (humanChoice == computerChoice) {
            console.log("Tie! Try again.");
        } else {
            switch(humanChoice) {
                case "rock":
                    if (computerChoice == "paper") {
                        console.log("You lose! Paper beats rock.");
                        computerScore++;
                        break;
                    } else {
                        console.log("You win! Rock beats scissors.");
                        humanScore++;
                        break;
                    }
                case "paper":
                    if (computerChoice == "rock") {
                        console.log("You win! Paper beats rock.");
                        humanScore++;
                        break;
                    } else {
                        console.log("You lose! Scissors beats paper.");
                        computerScore++;
                        break;
                    }
                case "scissors":
                    if (computerChoice == "rock") {
                        console.log("You lose! Rock beats scissors.");
                        computerScore++;
                        break;
                    } else {
                        console.log("You win! Scissors beats paper.");
                        humanScore++;
                        break;
                    }
            }
        }
        
    }

    for (let games = 0; games < 5; games++) {
        playRound(getHumanChoice(),getComputerChoice());
    }

    console.log(`Your final score: ${humanScore}`);
    console.log(`Computer's final score: ${computerScore}`);
    
    if (humanScore>computerScore) {
        console.log("You win!");
    } else if (humanScore < computerScore) {
        console.log("You lose!");
    } else {
        console.log("It's a tie!");
    }
}

playGame();