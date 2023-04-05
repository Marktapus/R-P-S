
/*Rock Paper Scissors Game - Pseudocode
Welcome to “RPS”
Ask for input
Get valid input from user: Rock Paper or Scissors

User Selects a valid input
	Randomly generate CP choice
If User picks Rock
	Rock beats Scissors
		Score User +1
Else if 
	Rock loses to Paper
		Score CP +1
Else
	Rock ties Rock, try again.

If user picks Paper
	Paper beats Rock
		Score User +1
Else if 
	Paper loses to Scissors
		Score CP +1
Else
	Paper ties Paper, try again.

If user picks Scissor
	Scissors beats Paper
		Score User +1
Else if 
	Scissor loses to Rock
		Score CP +1
Else
	Scissor ties Scissor, try again.

Accumulate Score of User
Accumulate Score of CP*/

//Ask user for input


let choices = ["rock", "paper", "scissors"];
let rock = choices[0];
let paper = choices[1];
let scissors = choices[2];
let userPoints = 0;
let cpuPoints = 0;

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    let cpuAnswer = choices[(randomNum)];
    return cpuAnswer;
}




function playRound() {

    for(let i = 0; i < 1; i++) {
        let computerSelection = getComputerChoice();
        let userAnswer = prompt("Please select: Rock, Paper or Scissors (enter Rock, Paper or Scissors):");
        
        if(userAnswer == "rock" && computerSelection == "scissors" || userAnswer == "paper" && computerSelection == "rock" || userAnswer == "scissors" && computerSelection == "paper") {
            userPoints++;
            console.log("You Win! " + userAnswer + " beats " + computerSelection)
            console.log("Player Score: " + userPoints);
        }
        else if(userAnswer == "rock" && computerSelection == "paper" || userAnswer == "paper" && computerSelection == "scissors" || userAnswer == "scissors" && computerSelection == "rock") {
            cpuPoints++;
            console.log("You Lose! " + computerSelection + " beats " + userAnswer)
            console.log("Computer Score: " + cpuPoints);
        }
        else {
            i--;
            console.log("You both picked the same thing, try again")
        }
    }
}

function game(playRound)
    for(let i = 0; i == 5; i++)