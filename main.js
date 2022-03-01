

const choices = ["rock", "paper", "scissors"]
const winners = [];

function game(){
   for(let i = 1; i<=5 ;i++){
    playRound(i);
   }
   logWins();
}

function playRound(round){
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner)
    console.log(winner, "wins");
    logRound(playerSelection,computerSelection,winner,round)
}

function playerChoice(){
    let input = prompt('Type Rock, Paper, or Scissors');
    while(input == null){                                          //prevents user from exiting prompt and getting value "null"         
        input == prompt('Type Rock, Paper, or Scissors');
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while(check== false){
        input = prompt("please spell rock paper or scissors correctly to continue");

        while(input == null){                                          //prevents user from exiting prompt and getting value "null"         
            input == prompt('Type Rock, Paper, or Scissors');
        }

        input = input.toLowerCase();
        check = validateInput(input);
        
    }
   // console.log("player", input);
    return input;

}

function computerChoice(){
    return choices[Math.floor(Math.random()*choices.length)];

}

function validateInput(choice){
    if(choices.includes(choice)){
        return true;
     }
         return false;
}

function checkWinner(choiceP, choiceC){
   // console.log("test");
  //  console.log("player " ,choiceP, " computer ", choiceC);
    if(choiceP === choiceC){
      //  console.log('tie test');
        return 'tie';}
        else if((choiceP === "rock" && choiceC === "scissors") ||
         (choiceP === "paper" && choiceC === "rock") || 
         (choiceP === "scissors" && choiceC === "paper")
         ){
           // console.log('playerTest')
            return 'Player';
           
        } else {
           // console.log('comp test')
            return "Computer";
        }
    }
function logWins(){
    let playerWins = winners.filter((item)=> item == 'Player').length;
    let computerWins = winners.filter((item) => item == 'Computer').length;
    let tie = winners.filter((item)=>item == 'tie').length;
    console.log("Results: ")
    console.log("Player wins ", playerWins);
    console.log("computer wins ", computerWins);
    console.log('ties ', tie);
}

function logRound(playerChoice,computerChoice,winners, round){
    console.log('round ', round);
    console.log('player chose ', playerChoice);
    console.log('computer chose ', computerChoice);
    console.log(winners, ' won the round');
    console.log("---------------------------------------");
}


//game();