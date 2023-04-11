//Add a spoon option, but you can only use it if you say "Knife", the CPU states "thats not a knife, thats a spoon and implodes"

let choices = ["rock", "paper", "scissors"];
let rock = choices[0];
let paper = choices[1];
let scissors = choices[2];
let userPoints = 0;
let cpuPoints = 0;

//Random answer for CPU, between rock, paper or scissors from array.
function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    let cpuAnswer = choices[(randomNum)];
    return cpuAnswer;
}

//Function for one single round with a user input and computer input,
function playRound() {
        let userAnswer = prompt("Please select: Rock, Paper or Scissors (enter Rock, Paper or Scissors):");
        let computerSelection = getComputerChoice();
        if(userAnswer == "rock" && computerSelection == "scissors" || userAnswer == "paper" && computerSelection == "rock" || userAnswer == "scissors" && computerSelection == "paper") {
            userPoints++;
            console.log("Your Score " + userPoints + " vs " + "CPU Score " + cpuPoints);
            return userWin = "You Win! " + userAnswer + " beats " + computerSelection;
            i++;
        }
        else if(userAnswer == "rock" && computerSelection == "paper" || userAnswer == "paper" && computerSelection == "scissors" || userAnswer == "scissors" && computerSelection == "rock") {
            cpuPoints++;
            console.log("Your Score " + userPoints + " vs " + "CPU Score " + cpuPoints);
            return cpuWin = "You Lose! " + computerSelection + " beats " + userAnswer
            i++;
        }
        else {
            console.log("Your Score " + userPoints + " vs " + "CPU Score " + cpuPoints);
            console.log("You both picked the same thing, try again")
            i++;
        }
    }


//Function that invokes the playRound function and iterates through 5 rounds of rock paper scissors
function game(oneRound) {
    oneRound = playRound()
    for(let i = 0; i <= 5; i++) {
        if(cpuPoints >= 5 && userPoints < 5) {
            console.log("You lose sucker");
            i = i+5;
        }
        else if(userPoints >= 5 && cpuPoints < 5) {
            console.log("Congratulations you win!");
            i = i+5;
        }
        else {
                playRound()
        }

    }
}