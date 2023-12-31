
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



//set score to zero and games to five
let playerscore = 0;
let computerscore = 0;

for (let gameCount =0; gameCount<5; gameCount) {
    
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
    }
 
playRound(playerSelection, getComputerChoice());
alert(computerscore);
alert(playerscore);
gameCount++;
}  




