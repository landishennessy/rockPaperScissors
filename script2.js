
   
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
  console.log(singleGame(playerSelection,computerPlay))