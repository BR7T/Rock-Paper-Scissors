const BotPick = ["rock", "paper", "scissors"];
const UserPick = ["rock", "paper", "scissors"];
const ActualScoreText = document.getElementById("actualScore");
const HighScoreText = document.getElementById("highScore");
const ScreenDiv = document.getElementById("visorArea");
const rockPick = document.getElementById('rock')
const paperPick = document.getElementById('paper')
const scissorsPick = document.getElementById('scissors')


const UserPickVisor = document.getElementById('playerPick')
const BotPickVisor = document.getElementById('botPick')

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
      AppearText("Jokempo", Apresentation);
    break;
    case 1:
      AppearText("Level - " + finalizaFunc, Apresentation);
    break;
    case 2:
      Start()
      ;
    break;
  
  }
}

function AppearText(t, div) {
  let D = div;
  let T = t;
  ScreenDiv.appendChild(D);
  let i = 0;
  writing();
  function writing() {
    if (i <= T.length) {
      D.innerHTML += T.charAt(i);
      setTimeout(writing, 200);
      i++;
    } else {
      D.innerHTML = "";
      finalizaFunc++;
      GameStart();
    }
  }
}
let PickPlay = 'pedra'
function Start(){
    rockPick.addEventListener('click' , ()=>{
      
      UserPickVisor.style.backgroundImage = 'none'
      UserPickVisor.style.backgroundImage = 'url(assets/image/pedra.png)'
      PickPlay = 'pedra'
      console.log(BotPick[randomN])

      
    })
    paperPick.addEventListener('click', ()=>{
      
      UserPickVisor.style.backgroundImage = 'none'
      UserPickVisor.style.backgroundImage = 'url(assets/image/papel.png)'
      PickPlay = 'papel'
      console.log(BotPick[randomN])

    })
    scissorsPick.addEventListener('click',()=>{
      
      UserPickVisor.style.backgroundImage = 'none'
      UserPickVisor.style.backgroundImage = 'url(assets/image/tesoura.png)'
      PickPlay = 'tesoura'
      console.log(BotPick[randomN])

    })

    document.getElementById('select').addEventListener('click',()=>{
      randomN = Math.floor(Math.random() * 3);
      if(PickPlay == 'pedra'){RockVar(randomN)}
      else if(PickPlay == 'papel'){PaperVar(randomN)}
      else if(PickPlay == 'tesoura'){ScissorsVar(randomN)}
      
    })
    ActualScoreText.innerHTML = ActualScore;

    let Jogo1 = document.getElementById('Game');Jogo1.style.display = 'flex';
}

function RockVar(randomN){
  if(PickPlay == 'pedra' && BotPick[randomN] == 'rock'){
    console.log('empate')
    BotPickVisor.style.backgroundImage = 'none'
    BotPickVisor.style.backgroundImage = 'url(assets/image/pedra.png)'

  }
  else if(PickPlay == 'pedra' && BotPick[randomN] == 'paper'){
    console.log('perdeu')
    BotPickVisor.style.backgroundImage = 'none'
    BotPickVisor.style.backgroundImage = 'url(assets/image/papel.png)'
    ActualScore = 0
    ActualScoreText.innerHTML = ActualScore;


  }else if(PickPlay == 'pedra' && BotPick[randomN] == 'scissors'){
    console.log('ganhou')
    BotPickVisor.style.backgroundImage = 'none'
    BotPickVisor.style.backgroundImage = 'url(assets/image/tesoura.png)'
    ActualScore += 1
    ActualScoreText.innerHTML = ActualScore;

  }
}


function PaperVar(randomN){
  
  if(BotPick[randomN] == 'rock'){
    console.log('ganhou')
    BotPickVisor.style.backgroundImage = 'none'
    BotPickVisor.style.backgroundImage = 'url(assets/image/pedra.png)'
    ActualScore += 1
    ActualScoreText.innerHTML = ActualScore;


  }
  else if(BotPick[randomN] == 'paper'){
    console.log('empate')
    BotPickVisor.style.backgroundImage = 'none'
    BotPickVisor.style.backgroundImage = 'url(assets/image/papel.png)'

  }else if(BotPick[randomN] == 'scissors'){
    console.log('perdeu')
    BotPickVisor.style.backgroundImage = 'none'
    BotPickVisor.style.backgroundImage = 'url(assets/image/tesoura.png)'
    ActualScore =0
    ActualScoreText.innerHTML = ActualScore;


  }
}



function ScissorsVar(randomN){

  if(BotPick[randomN] == 'rock'){
    console.log('perdeu')
    BotPickVisor.style.backgroundImage = 'none'
    BotPickVisor.style.backgroundImage = 'url(assets/image/pedra.png)'
    ActualScore =0
    ActualScoreText.innerHTML = ActualScore;


  }
  else if(BotPick[randomN] == 'paper'){
    console.log('ganhou')
    BotPickVisor.style.backgroundImage = 'none'
    BotPickVisor.style.backgroundImage = 'url(assets/image/papel.png)'
    ActualScore += 1
    ActualScoreText.innerHTML = ActualScore;


  }else if(BotPick[randomN] == 'scissors'){
    console.log('empate')
    BotPickVisor.style.backgroundImage = 'none'
    BotPickVisor.style.backgroundImage = 'url(assets/image/tesoura.png)'
  }
}
