let playerScore = 0;
let compScore = 0;
let numTies = 0;
let count = 0;




function computerPlay(min,max){  //computer function randomly generates 1 of 3 numbers which are assigned to "rock" "paper" or "scissors"
    compNum= Math.floor(Math.random()*(max - min) + min); //gets random # between values "min" and "max"
     if(compNum === 0){
         return ("Rock");
         console.log("comp rock");
     }
     else if(compNum === 1){
         return( "Paper");
         console.log("comp paper");
     }
     else if(compNum === 2){
         return("Scissors");
         console.log("comp scissors");
     }
}

// create a variable that stores the players choice & ensures the proper symantics of the statement
function playerSelection(input){
    var input = window.prompt("Choose your weapon", "Rock") //initial prompt for player, defaults to rock
    var lowerInput = input.toLowerCase(); //turn user input to lowercase
    var constInput = lowerInput.charAt(0).toUpperCase() + lowerInput.slice(1); //capitalises first letter of input to match what is expected
    //console.log(constInput);
   return constInput;
   
}

    function singleGame(playerSelection, computerPlay){ 

        won = 0; // variable to be assigned to see if player won
      
        if(playerSelection === computerPlay){   //informs users of tie case
            console.log("tie")
            console.log("player selection : ", playerSelection ," ,  computer selectio button.addEventListenern: ", computerPlay);
            count ++;
            numTies++;
            return "Tie Game, play again"; 
          
        }
        else if(playerSelection === "Paper" && computerPlay === "Rock"){
            console.log("player selection : ", playerSelection ," ,  computer selection: ", computerPlay);
            playerScore++;
            count++;
            return "Player wins paper beats Rock"
            
        }
        else if(playerSelection === "Rock" && computerPlay === "Scissors"){
            console.log("player selection : ", playerSelection ," ,  computer selection: ", computerPlay);
            playerScore++;
            count++;
            return "Player wins, Rock beats Scissors"
        }
        else if(playerSelection === "Scissors" && computerPlay === "Paper"){
            console.log("player selection : ", playerSelection ," ,  computer selection: ", computerPlay);
            playerScore++;
            count++;
            return "Player wins, Scissors beat Paper"
        }
        else if(playerSelection === "Rock" && computerPlay === "Paper"){
             console.log("player selection : ", playerSelection ," ,  computer selection: ", computerPlay);
             compScore++;
             count++;
            return "Computer wins, Paper beats Rock"
        }
        else if(playerSelection === "Scissors" && computerPlay === "Rock"){
            console.log("player selection : ", playerSelection ," ,  computer selection: ", computerPlay);
            compScore++;
            count++;
            return "Computer wins, Rock beats Scissors"
        }
        else if(playerSelection === "Paper" && computerPlay === "Scissors"){
            console.log("player selection : ", playerSelection ," ,  computer selection: ", computerPlay);
            compScore++;
            count++;
            return "Computer wins, Scissors beat Paper"
        }
      
    }

    //console.log(singleGame(playerSelection(),computerPlay(0,3)))
    function game(){
  // for(let i = 0; i <=4; i++){
       /* let rock = document.createElement('button');
        rock.innerHTML = "Rock";
        document.body.appendChild(rock);
        rock.addEventListener('click', singleGame() )

        let paper = document.createElement('button');
        paper.innerHTML = "Paper";
        document.body.appendChild(paper);

        let scissors = document.createElement('button');
        scissors.innerHTML = "scissors";
        document.body.appendChild(scissors);*/

        let buttons = document.querySelectorAll('button');
        buttons.forEach(button){
            button.addEventListener('click', singleGame(button.id))

        }




        singleGame(playerSelection(),computerPlay(0,3));
        console.log("count : ", count, " , player score : ", playerScore, " , computerScore : ", compScore, " , number of ties : ", numTies)
        if(playerScore === 3){
            console.log("Player Wins!");
            return ("Player Wins");
        }
        if(compScore === 3){
            console.log("Computer Wins!");
            return "Computer Wins"
        }
   // }*/
    }
    game()