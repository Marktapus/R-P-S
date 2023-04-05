
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

let inProgress = true
let userPoints = 0;
let cpuPoints = 0;
let totalRounds = 5;

let choices = ["rock", "paper", "scissors"];

let rock = choices[0];
let paper = choices[1];
let scissors = choices[2];

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    let cpuAnswer = choices[(randomNum)];
    return cpuAnswer;
}


function playRound() {
    for(let i = 0; i < totalRounds; i++) {
        let userAnswer = prompt("Please select: Rock, Paper or Scissors (enter Rock, Paper or Scissors):");
        if(userAnswer == "rock" && getComputerChoice() == "scissors" || userAnswer == "paper" && getComputerChoice() == "rock" || userAnswer == "scissors" && getComputerChoice() == "paper") {
            userPoints = userPoints +1;
            console.log(userPoints);
        }
    }
}


    if(answer == "Rock" && cpuAnswer == paper) {
        console.log("You Lost");
        cpuPoints = cpuPoints + 1;
    }
    else {
        console.log("You both picked Rock!")
    }

    if(answer == paper && cpuAnswer == rock) {
        console.log("You Won");
        points = points + 1;
    }
    else if(answer == paper && cpuAnswer == scissors) {
        console.log("You Lost");
        cpuPoints = cpuPoints + 1;
    }
    else {
        console.log("You both picked Paper!")
    }

    if(answer == scissors && cpuAnswer == paper) {
        console.log("You Won");
        points = points + 1;
    }
    else if(answer == scissors && cpuAnswer == rock) {
        console.log("You Lost");
        cpuPoints = cpuPoints + 1;
    }
    else {
        console.log("You both picked Scissors!")
    }

    if(answer != "Rock" || answer != "Paper" || answer != "Scissors") {
        alert("Please enter a valid word!");
    }



    if(points >= 5)
        inProgress == false;
        alert("Congratulations, you won the game!");

    if(cpuPoints >= 5)
        inProgress == false;
        alert("Sorry sucker, you lost!");
