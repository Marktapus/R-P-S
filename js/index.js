//Add a spoon option, but you can only use it if you say "Knife", the CPU states "thats not a knife, thats a spoon and implodes"

let choices = ["rock", "paper", "scissors"];
let userPoints = 0;
let cpuPoints = 0;
let totalRounds = 5;

//Random answer for CPU, between rock, paper or scissors from array.
function getComputerChoice() {
    let cpuAnswer = choices[Math.floor(Math.random() * 3)];
    return cpuAnswer;
}

//Function on button to reload page
function resetGame(){
    document.getElementById(myGame).reset();
} 


//Function for a single round with a user input and computer input,
function playRound() {
        let userAnswer = prompt("Please select: Rock, Paper or Scissors (enter Rock, Paper or Scissors):");
        userAnswer = userAnswer.toLowerCase();
        let computerSelection = getComputerChoice();
        //If user wins
        if(userAnswer == "rock" && computerSelection == "scissors" || userAnswer == "paper" && computerSelection == "rock" || userAnswer == "scissors" && computerSelection == "paper") {
            userPoints++;
            console.log("Your Score " + userPoints + " vs " + "CPU Score " + cpuPoints);
            return userWin = "You Win! " + userAnswer + " beats " + computerSelection;
        }
        //If cpu wins
        else if(userAnswer == "rock" && computerSelection == "paper" || userAnswer == "paper" && computerSelection == "scissors" || userAnswer == "scissors" && computerSelection == "rock") {
            cpuPoints++;
            console.log("Your Score " + userPoints + " vs " + "CPU Score " + cpuPoints);
            return cpuWin = "You Lose! " + computerSelection + " beats " + userAnswer
        }
        //If user and cpu pick the same thing
        else if (userAnswer == computerSelection){
            console.log("Your Score " + userPoints + " vs " + "CPU Score " + cpuPoints);
            console.log("You both picked the same thing, try again")
        }
        //If invalid selection
        else {
            console.log("Invalid selection, try again")
        }
    }


//Function that invokes the playRound function and iterates through 5 rounds of rock paper scissors
function game(oneRound) {
    oneRound = playRound()
    while(userPoints < totalRounds || cpuPoints < totalRounds) {
        if(userPoints == totalRounds) {
            console.log("Congratulations you win!")
            break;
        }
        else if(cpuPoints == totalRounds) {
            console.log("You lose sucker");
             break;
        }
        else {
                playRound()
        }
    }
}
// //

// for(let i = 2; i <= 10; i++) {
//     if(i % 2 == 0) {
//         console.log(i);
//     }
// }

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }

//   let i = 0;
//   while(i < 3) {

//     alert( `number ${i}!` );
//     i++
//   }