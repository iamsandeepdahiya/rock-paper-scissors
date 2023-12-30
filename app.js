
//get computer choice using random() function
function getComputerChoice(){
const options = ["Rock", "Paper", "Scissor"];
let compChoice = (options[Math.floor((Math.random())*options.length)]);
let compSelection = compChoice.toLowerCase();
return compSelection;
}

//get player input using prompt
let playerChoice = prompt("Enter your choice - rock/paper or scissor.");
let playerSelection = playerChoice.toLowerCase();
let computerSelection = getComputerChoice();



function game(){
//play the game
function playRound(playerSelection, computerSelection) {
    if (!(playerSelection === `rock` || playerSelection === `paper` || playerSelection === `scissor`)){

        alert ("Please enter one of the correct term! rock or paper or scissor.")
    }

    else {

    if (computerSelection ==`rock`){

        if (playerSelection == `rock`) {
            alert("its a tie as both have rock.");
        }
        else if (playerSelection == `paper`) {
            alert("player wins as computer is rock and player is paper.");
        }
        else {
            alert("computer wins as computer is rock and player is scissor.");
        }
    }

    if (computerSelection ==`paper`){

        if (playerSelection == `paper`) {
            alert("its a tie as both have paper.");
        }
        else if (playerSelection == `scissor`) {
            alert("player wins as computer is paper and player is scissor.");
        }
        else {
            alert("computer wins as computer is paper and player is rock.");
        }
    }

    if (computerSelection ==`scissor`){

        if (playerSelection == `scissor`) {
            alert("its a tie as both have scissors.");
        }
        else if (playerSelection == `rock`) {
            alert("player wins as computer is scissor and player is rock.");
        }
        else {
            alert("computer wins as computer is scissor and player is paper.");
        }
    }
    }

    }
    
return playRound(playerSelection, computerSelection);
}

game();
game();
