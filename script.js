//This function iterates through 5 games between the human and computer
//MAYBE IT SHOULDNT BE A PARAMETER? -> but a nested function?!
function game(){
   
function computerPlay(min,max){  //computer function randomly generates 1 of 3 numbers which are assigned to "rock" "paper" or "scissors"
    compNum= Math.floor(Math.random()*(max - min) + min); //gets random # between values "min" and "max"
     if(compNum === 0){
         return ("Rock");
         console.log("comp rock")
     }
     else if(compNum === 1){
         return( "Paper")
         console.log("comp paper")
     }
     else if(compNum === 2){
         return("Scissors")
         console.log("comp scissors")
     }
}
// create a variable that stores the players choice & ensures the proper symantics of the statement
function playerSelection(input){
    var input = window.prompt("Choose your weapon", "Rock") //initial prompt for player, defaults to rock
    var lowerInput = input.toLowerCase(); //turn user input to lowercase
    var constInput = lowerInput.charAt(0).toUpperCase() + lowerInput.slice(1); //capitalises first letter of input to match what is expected

   return constInput;
}
    function singleGame(playerSelection, computerPlay){ 
        won = 0; // variable to be assigned to see if player won
      
        if(playerSelection === computerPlay){   //informs users of tie case
            return "Tie Game, play again";
            console.log("tie")
        }
        else if(playerSelection === "Paper" && computerPlay === "Rock"){
            return "Player wins paper beats Rock"
            won = 1;
        }
        else if(playerSelection === "Rock" && computerPlay === "Scissors"){
            return "Player wins, Rock beats Scissors"
        }
        else if(playerSelection === "Scissors" && computerPlay === "Paper"){
            return "Player wins, Rock beats Scissors"
        }
        else if(playerSelection === "Rock" && computerPlay === "Paper"){
            return "Computer wins, Paper beats Rock"
        }
        else if(playerSelection === "Scissors" && computerPlay === "Rock"){
            return "Computer wins, Rock beats Scissors"
        }
        else if(playerSelection === "Paper" && computerPlay === "Scissors"){
            return "Computer wins, Scissors beat Paper"
        }
      
    }
    //creates var to declare how many games will play
    numGames = 5;
    //create counter variable
    gameCount = 0;
    count = 0;
    //create var of how many computer wins
    compWins = 0;
    //create computer counter(dont need?)
    //create var for # of player wins
    playerWins = 0;
    //iterate through games untill 5?
    console.log("step 1") 
    for(let i = 0; i <= gameCount; i++){   
          //how to make it iterate and automatically renew prompt?
        singleGame(playerSelection,computerPlay);
        singleGame();
    }
      /*  if(singleGame.charAt(0) === "P"){ //not a function
            playerWins += 1;
            console.log("1 for player");
           // break
        }
        if(singleGame.charAt(0)==="C"){
            compWins +=1;
            console.log("1 for comp")
            //break
        }
        else{
            gameCount +=1;
        }
      //  console.log(singleGame());
        
    }*/
    /*
    //(bool)if either player gets to 3 wins, the game is over
     if(playerWins === 3){
        // return "player wins" //"illegal return statement"?
     }
     if(compWins === 3){
         //return "Computer wins" //"illegal return statement"?
     }
    //loop untill either 5 games have been played or 1 player gets 3 wins
*/console.log(singleGame(playerSelection(),computerPlay(0,3)))
    }


//console.log(game(singleGame(playerSelection(),computerPlay(0,3))))
//console.log(singleGame(playerSelection(),computerPlay(0,3)))
console.log(game())
