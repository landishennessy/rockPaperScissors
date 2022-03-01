

const choices = ["rock", "paper", "scissors"]
const winners = [];

function resetGame(){
    winners.length=0;
    document.querySelector('.playerScore').textContent = 'score = 0';
    document.querySelector('.computeScore').textContent = 'score = 0';
    document.querySelector('.ties').textContent = '0';
    document.querySelector('.winner').textContent = '';
    document.querySelector('.reset').style.display = 'none';


    //reset game
}

function startGame(){
    //play game untill someone wins 5 times
    let imgs = document.querySelectorAll('img')
    imgs.forEach((img)=> 
    img.addEventListener(('click'),() =>{
        if(img.id){
            playRound(img.id);
        }
    }))
}

function playRound(playerSelection){
   // const playerSelection = playerChoice();
   let wins = checkWins();
   if(wins>=5){
       return
   }
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner)
   
  //  logRound(playerSelection,computerSelection,winner,round)
    tallyWins();
    displayRound(playerSelection, computerSelection, winner);
    wins = checkWins();
    if(wins == 5){
        // display end result
        //change the button to visable
        //change the text to display winner
        displayEnd()

    }
}
function displayEnd(){
    let playerWins = winners.filter((item)=> item == 'Player').length;

    if(playerWins == 5){
        document.querySelector('.winner').textContent='You reign victorious'
    }
    else{
        document.querySelector('.winner').textContent='Fookin Looser'
    }
    document.querySelector('.reset').style.display ="flex";
}

function displayRound(playerSelection, computerSelection, winner){
    document.querySelector('.playerChoice').textContent = `You chose ${playerSelection}`;
    document.querySelector('.computeChoice').textContent = `You chose ${computerSelection}`;
    document.querySelector('.winner').textContent = `${winner} is victorious!`
    displayRoundWinner(winner);

   
}

function displayRoundWinner(winner){
    if(winner == 'Player'){
        document.querySelector('.winner').textContent = 'You won the round!'
    }
    else if( winner == 'Computer'){
        document.querySelector('.winner').textContent = 'Computer won the Round'
    }
    else{ document.querySelector('.winner').textContent = 'Tie game'
    }
}

function tallyWins(){
    let playerWins = winners.filter((item)=> item == 'Player').length;
    let computerWins = winners.filter((item) => item == 'Computer').length;
    let tie = winners.filter((item)=>item == 'tie').length;
    document.querySelector('.playerScore').textContent=`Score: ${playerWins}`;
    document.querySelector('.computeScore').textContent=`Score: ${computerWins}`;
    document.querySelector('.ties').textContent=`Ties: ${tie}`;

}

function playerChoice(){
  

}


function computerChoice(){
    //update the dom
    const choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;

    document.querySelector(`.${choice}`).classList.add('active');

    setTimeout(() =>{
        document.querySelector(`.${choice}'`).classList.remove('active');
    }, 700);

    return choice;
}

function checkWins(){
    let playerWins = winners.filter((item)=> item == 'Player').length;
    let computerWins = winners.filter((item) => item == 'Computer').length;
    return Math.max(playerWins,computerWins)

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


startGame();