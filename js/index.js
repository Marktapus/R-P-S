//Add a spoon option, but you can only use it if you say "Knife", the CPU states "thats not a knife, thats a spoon and implodes"


let userPoints = 0;
let cpuPoints = 0;
let totalRounds = 5;
let buttons = document.querySelectorAll('input')

//Random answer for CPU, between rock, paper or scissors from array.
function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

//Function for a single round with a user input and computer input,
function playRound(playerSelection) {

    let computerSelection = computerPlay()
    let result = ""

        if(playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
            userPoints++;
            result = ("Your Score " + userPoints + " vs " + "CPU Score " + cpuPoints) + "You Win! " + playerSelection + " beats " + computerSelection;

          if(userPoints == 5) {
            result = ("You win!!!");
              disableButtons();
        }        
      }
        //If cpu wins
        else if(playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock") {
            cpuPoints++;
            result = "Your Score " + userPoints + " vs " + "CPU Score " + cpuPoints + "You Lose! " + computerSelection + " beats " + playerSelection;
            
            if(cpuPoints == 5) {
              result = ("You lose sucker");
                disableButtons();
          }
        }
        //If user and cpu pick the same thing
        else if (playerSelection == computerSelection){
            result = "Your Score " + userPoints + " vs " + "CPU Score " + cpuPoints + "You both picked the same thing, try again";
        }
        else {
        }
        document.getElementById('result').innerHTML = result
        return
    }

function disableButtons() {
  buttons.forEach(elem => {
    elem.disabled = true
  })
}

buttons.forEach(button => {
  button.addEventListener('click', function(){
    playRound(button.value)
  })
});

//Function that invokes the playRound function and iterates through 5 rounds of rock paper scissors
// function game(oneRound) {
//     oneRound = playRound()
//     while(userPoints < totalRounds || cpuPoints < totalRounds) {
//         if(userPoints == totalRounds) {
//             console.log("Congratulations you win!")
//             break;
//         }
//         else if(cpuPoints == totalRounds) {
//             console.log("You lose sucker");
//              break;
//         }
//         else {
//                 playRound()
//         }
//     }
// }

//Function on button to reload page
// function resetGame(){
//   document.getElementById(myGame).reset();
// }
