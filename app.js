//set score to zero and games to five
let playerscore = 0;
let computerscore = 0;

//Create a function for the entire game so that we can call it five times for each round
function game(){

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

    
//play the round
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
            playerscore++;    
       
        }
        else {
            alert("computer wins as computer is rock and player is scissor.");
            computerscore++;
                }
    }

    if (computerSelection ==`paper`){
        if (playerSelection == `paper`) {
            alert("its a tie as both have paper.");
            
        }
        else if (playerSelection == `scissor`) {
            alert("player wins as computer is paper and player is scissor.");
            playerscore++;
          
        }
        else {
            alert("computer wins as computer is paper and player is rock.");
            computerscore++;
           
        }
    }

    if (computerSelection ==`scissor`){
        if (playerSelection == `scissor`) {
            alert("its a tie as both have scissors.");
          
        }
        else if (playerSelection == `rock`) {
            alert("player wins as computer is scissor and player is rock.");
            playerscore++;
            
        }
        else {
            alert("computer wins as computer is scissor and player is paper.");
            computerscore++;
            
        }
    }
    }

        return playerscore;
        return computerscore;


    }

    playRound(playerSelection, computerSelection);
}

//call the function five times for five rounds
game();
game();
game();
game();
game();

alert("Its end of the game as total five rounds have been finished.")
alert("Computer score is " + computerscore + " and the player score is " + playerscore + ".");

//who is winner here, comparison of scores
function winner(){
    if (computerscore > playerscore){
    alert ("Computer won by " + computerscore +" to "+ playerscore +".Press OK for a new game.");
    }
    
    else if (computerscore === playerscore){
        alert ("Its a tie, you both scored " + computerscore +" - "+ playerscore +".Press OK for a new game.");
        }
    
    else {
        alert ("You won by " + playerscore +" to "+ computerscore +". Press OK for a new game.");
        }
    }
    winner();

//reload the entire window after game finishes
window.location.reload();