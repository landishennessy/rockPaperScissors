

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
            playRound(img.id); //if image has id, play round with the ID
            document.querySelector(`#${img.id}`).classList.add('active');
            //removes the choice selected from active state after 700 ms
            setTimeout(() =>{
                document.querySelector(`#${img.id}`).classList.remove('active');
            }, 700);
        }
    }))

}

function playRound(playerSelection){
   
   let wins = checkWins();
   if(wins>=5){
       return
   }
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner)
   
    tallyWins();
    displayRound(playerSelection, computerSelection, winner);
    wins = checkWins();
    if(wins == 5){
        
        //displays end results
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
    document.querySelector('.computeChoice').textContent = `Computer chose ${computerSelection}`;
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


function computerChoice(){
    //creates choice const from the options given
    const choice = choices[Math.floor(Math.random()*choices.length)];
   
    //puts the choice selected in active state
    document.querySelector(`.${choice}`).classList.add('active');
    //removes the choice selected from active state after 700 ms
    setTimeout(() =>{
        document.querySelector(`.${choice}`).classList.remove('active');
    }, 700);

    return choice;
}
//uses the winner array to determine number of wins for each player
function checkWins(){
    let playerWins = winners.filter((item)=> item == 'Player').length;
    let computerWins = winners.filter((item) => item == 'Computer').length;
    return Math.max(playerWins,computerWins)

}

function checkWinner(choiceP, choiceC){
  
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