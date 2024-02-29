const BotPick = ["rock", "paper", "scissors"];
const UserPick = ["rock", "paper", "scissors"];
const ActualScoreText = document.getElementById("actualScore");
const HighScoreText = document.getElementById("highScore");
const ScreenDiv = document.getElementById("visorArea");
const rockPick = document.getElementById('rock')
const paperPick = document.getElementById('paper')
const scissorsPick = document.getElementById('scissors')
const QM = document.querySelector('#QuestionPick')
const selectBtn = document.getElementById('select')
const UserPickVisor = document.getElementById('playerPick')
const BotPickVisor = document.getElementById('botPick')
const Jogo1 = document.getElementById('Game');

const removebg = BotPickVisor.style.backgroundImage = 'none';

let CanClick = true;

let ActualScore = 0;
let HighScore = 0;

ActualScoreText.innerHTML = ActualScore;
HighScoreText.innerHTML = HighScore;

randomN = Math.floor(Math.random() * 3);

let finalizaFunc = 0;

let Apresentation = document.createElement("div");

function GameStart() {

  switch(finalizaFunc){
    case 0:
      AppearText("Rock, Paper, Scissors", Apresentation);
      finalizaFunc = 1
      CanClick = false;

      

    break;
    case 1:
      CanClick = false;
      finalizaFunc = 2
      AppearText(' Level - ' + ActualScore, Apresentation);
    break;
    case 2:
      CanClick = true;

      Start();
    break;
    case 'win':
      
      AppearText('You Win!' , Apresentation)
      finalizaFunc = 1
    break;
    case 'lose':
      
      AppearText('You Lose!' , Apresentation)
      finalizaFunc = 1;
      break;
  }
}

function AppearText(t, div) {
  ScreenDiv.appendChild(div);
  let i = 0;
  writing();
  function writing() {
    if (i <= t.length) {
      div.innerHTML += t.charAt(i);
      setTimeout(writing, 100);
      i++;
    } else {
      GameStart()
      div.innerHTML =''
    }
  }
}


let PickPlay = 'pedra'


function Start(){
    Jogo1.style.display = 'flex'
    BotPickVisor.style.backgroundImage = 'url(assets/image/QM.png)'
    

}
rockPick.addEventListener('click' , ()=>{
      
  UserPickVisor.style.backgroundImage = 'none'
  UserPickVisor.style.backgroundImage = 'url(assets/image/pedra.png)'
  PickPlay = 'pedra'
  

  
})
paperPick.addEventListener('click', ()=>{
  UserPickVisor.style.backgroundImage = 'none'
  UserPickVisor.style.backgroundImage = 'url(assets/image/papel.png)'
  PickPlay = 'papel'
  

})
scissorsPick.addEventListener('click',()=>{
  UserPickVisor.style.backgroundImage = 'none'
  UserPickVisor.style.backgroundImage = 'url(assets/image/tesoura.png)'
  PickPlay = 'tesoura'
  

})

selectBtn.addEventListener('click',()=>{
  
  if(!CanClick){
    return
  }
  CanClick=false

  randomN = Math.floor(Math.random() * 3);

  
  if(PickPlay == 'pedra')
  {RockVar(randomN)}
  else if(PickPlay == 'papel')
  {PaperVar(randomN)}
  else if(PickPlay == 'tesoura'){ScissorsVar(randomN)}
  
  setTimeout(()=>{
    CanClick = true
  }, 500)
  
  
})



function RockVar(randomN){
  if(BotPick[randomN] == 'rock'){
    removebg
    BotPickVisor.style.backgroundImage = 'url(assets/image/pedra.png)'
    ActualScore = ActualScore
    ActualScoreText.innerHTML = ActualScore;

  }
  else if(BotPick[randomN] == 'paper'){
    removebg
    BotPickVisor.style.backgroundImage = 'url(assets/image/papel.png)'
    ActualScoreText.innerHTML = ActualScore;
    Lose()

  }else if(BotPick[randomN] == 'scissors'){
    removebg
    BotPickVisor.style.backgroundImage = 'url(assets/image/tesoura.png)'
    
    Win()
    VerificaPlacar()

  }
}
function PaperVar(randomN){
  
  if(BotPick[randomN] == 'rock'){
    removebg
    BotPickVisor.style.backgroundImage = 'url(assets/image/pedra.png)'
    
    Win()
    VerificaPlacar()


  }
  else if(BotPick[randomN] == 'paper'){
    removebg
    BotPickVisor.style.backgroundImage = 'url(assets/image/papel.png)'
    ActualScore = ActualScore
    ActualScoreText.innerHTML = ActualScore;

  }else if(BotPick[randomN] == 'scissors'){
    removebg
    BotPickVisor.style.backgroundImage = 'url(assets/image/tesoura.png)'
    ActualScore = 0
    Lose()


    ActualScoreText.innerHTML = ActualScore;


  }
}
function ScissorsVar(randomN){

  if(BotPick[randomN] == 'rock'){
    removebg
    BotPickVisor.style.backgroundImage = 'url(assets/image/pedra.png)'
    ActualScoreText.innerHTML = ActualScore;
    Lose()


  }
  else if(BotPick[randomN] == 'paper'){
    removebg
    BotPickVisor.style.backgroundImage = 'url(assets/image/papel.png)'
    
    VerificaPlacar()
    Win()


  }else if(BotPick[randomN] == 'scissors'){
    removebg
    BotPickVisor.style.backgroundImage = 'url(assets/image/tesoura.png)'
    ActualScore = ActualScore
    ActualScoreText.innerHTML = ActualScore;
  }
}

function Win(){
  ActualScore +=1
  ActualScoreText.innerHTML = ActualScore
  Jogo1.style.display = 'none'
  finalizaFunc = 'win'
  GameStart()
}
function Lose(){
  
  ActualScore = 0
  ActualScoreText.innerHTML = ActualScore
  finalizaFunc = 'lose'
  Jogo1.style.display = 'none'
  GameStart()
  

}

function VerificaPlacar(){
  if(ActualScore > HighScore){
    HighScore = ActualScore
    HighScoreText.innerHTML = HighScore
  }
}



