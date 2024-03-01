const BotPick = ["rock", "paper", "scissors"];

const ActualScoreText = document.getElementById("actualScore");
const HighScoreText = document.getElementById("highScore");
const ScreenDiv = document.getElementById("visorArea");
const rockPick = document.getElementById('rock')
const paperPick = document.getElementById('paper')
const scissorsPick = document.getElementById('scissors')
const QM = document.getElementById('QuestionPick')
const selectBtn = document.getElementById('select')
const UserPickVisor = document.getElementById('playerPick')
const BotPickVisor = document.getElementById('botPick')
const Jogo1 = document.getElementById('Game');
const ButtonStart = document.getElementById('buttonStart')
const removebg = BotPickVisor.style.backgroundImage = 'none';
const NamePick = document.getElementById('NamePick')
let CanClick = true;

let ActualScore = 0;
let HighScore = 0;

ActualScoreText.innerHTML = ActualScore;
HighScoreText.innerHTML = HighScore;

randomN = Math.floor(Math.random() * 3);

let finalizaFunc = 0;

let Apresentation = document.createElement("div");

function GameStart() {
 ButtonStart.removeAttribute('onclick')
  switch(finalizaFunc){
    case 0:
      AppearText("Rock, Paper, Scissors", Apresentation);
      finalizaFunc = 1
      CanClick=false

      

    break;
    case 1:
      CanClick = false
      finalizaFunc = 2
      AppearText(' Level - ' + (ActualScore+1), Apresentation);
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
  CanClick = false
  let i = 0;
  writing();
  function writing() {
    if (i <= t.length) {
      div.innerHTML += t.charAt(i);
      setTimeout(writing, 150);
      i++;
    } else {
      GameStart()
      div.innerHTML =''
    }
  }
}


let PickPlay = 'pedra'


function Start(){
  UserPickVisor.style.animation='alternate both infinite pulsePick .8s steps(5)'
  BotPickVisor.style.animation='alternate both infinite pulsePick .8s steps(5)'


  document.getElementById('NumbScore').style.display = 'flex'
    QM.style.display = 'block'
    Jogo1.style.display = 'flex'
    BotPickVisor.style.backgroundImage = 'url(assets/image/QM.png)'
    

}
rockPick.addEventListener('click' , ()=>{
      
  UserPickVisor.style.backgroundImage = 'none'
  UserPickVisor.style.backgroundImage = 'url(assets/image/pedra.png)'
  PickPlay = 'pedra'
  NamePick.innerHTML = PickPlay

  

  
})
paperPick.addEventListener('click', ()=>{
  UserPickVisor.style.backgroundImage = 'none'
  UserPickVisor.style.backgroundImage = 'url(assets/image/papel.png)'
  PickPlay = 'papel'
  NamePick.innerHTML = PickPlay
  

})
scissorsPick.addEventListener('click',()=>{
  UserPickVisor.style.backgroundImage = 'none'
  UserPickVisor.style.backgroundImage = 'url(assets/image/tesoura.png)'
  PickPlay = 'tesoura'
  NamePick.innerHTML = PickPlay

  

})

selectBtn.addEventListener('click',()=>{
  NamePick.innerHTML = ''
  
  if(!CanClick){
    return
  }
  CanClick=false

  randomN = Math.floor(Math.random() * 3);

  BotPickVisor.style.backgroundImage = 'url(assets/image/pedra.png)'
  
  UserPickVisor.style.animation='SwingHands  2s alternate  steps(6)'
  BotPickVisor.style.animation='SwingHands  2s alternate  steps(6)'


  UserPickVisor.classList.add('Swing')

  if(PickPlay == 'pedra')
  {RockVar(randomN)}
  else if(PickPlay == 'papel')
  {PaperVar(randomN)}
  else if(PickPlay == 'tesoura'){ScissorsVar(randomN)}
  
  QM.style.display = 'none'
  
  if(CanClick == false){
    selectBtn.removeAttribute('addEventListener')
  }
  
})



function RockVar(randomN){
  if(BotPick[randomN] == 'rock'){
    setTimeout(()=>{
      removebg
      BotPickVisor.style.backgroundImage = 'url(assets/image/pedra.png)'
      
    }, 2000)
    setTimeout(()=>{
      Draw()
      VerificaPlacar()
    },3000)
    

  }
  else if(BotPick[randomN] == 'paper'){
    
    
    setTimeout(()=>{
      removebg
      BotPickVisor.style.backgroundImage = 'url(assets/image/papel.png)'
      
    },2000)
    setTimeout(()=>{
      Lose()
      VerificaPlacar()
    },3000)

  }else if(BotPick[randomN] == 'scissors'){
    
    
    setTimeout(()=>{
      removebg
      BotPickVisor.style.backgroundImage = 'url(assets/image/tesoura.png)'

  }, 2000)

  setTimeout(()=>{
    Win()
    VerificaPlacar()
  },3000)

    
  }
}
function PaperVar(randomN){
  
  if(BotPick[randomN] == 'rock'){
    
    
    setTimeout(()=>{
      removebg
      BotPickVisor.style.backgroundImage = 'url(assets/image/pedra.png)'
      
    }, 2000)

    setTimeout(()=>{
      Win()
      VerificaPlacar()
    },3000)

  }
  else if(BotPick[randomN] == 'paper'){
    setTimeout(()=>{
      removebg
      BotPickVisor.style.backgroundImage = 'url(assets/image/papel.png)'
    }, 2000)

    setTimeout(()=>{
      Draw()
      VerificaPlacar()
    },3000)
    

  }else if(BotPick[randomN] == 'scissors'){
    
    
    setTimeout(()=>{
      removebg
    BotPickVisor.style.backgroundImage = 'url(assets/image/tesoura.png)'
      
    }, 2000)  
    setTimeout(()=>{
      Lose()
      VerificaPlacar()
    },3000)



    ActualScoreText.innerHTML = ActualScore;


  }
}
function ScissorsVar(randomN){

  if(BotPick[randomN] == 'rock'){
    
   
    setTimeout(()=>{
      removebg
    BotPickVisor.style.backgroundImage = 'url(assets/image/pedra.png)'
      
    }, 2000)  

    setTimeout(()=>{
      Lose()
      VerificaPlacar()
    },3000)



  }
  else if(BotPick[randomN] == 'paper'){
    
    
    setTimeout(()=>{
      removebg
    BotPickVisor.style.backgroundImage = 'url(assets/image/papel.png)'
    }, 2000)  

    setTimeout(()=>{
      Win()
      VerificaPlacar()
    },3000)


  }else if(BotPick[randomN] == 'scissors'){
    
    setTimeout(()=>{
      removebg
      BotPickVisor.style.backgroundImage = 'url(assets/image/tesoura.png)'
    }, 2000)

    setTimeout(()=>{
      Draw()
      VerificaPlacar()
    },3000)
    
    
  }
}

function Win(){
  ActualScore +=1
  ActualScoreText.innerHTML = ActualScore
  Jogo1.style.display = 'none'
  finalizaFunc = 'win'
  CanClick = true
  GameStart()
}
function Lose(){
  
  ActualScore = 0
  ActualScoreText.innerHTML = ActualScore
  finalizaFunc = 'lose'
  Jogo1.style.display = 'none'
  CanClick = true
  GameStart()
  

}

function Draw(){
  UserPickVisor.style.animation='alternate both infinite pulsePick .8s steps(5)'
  BotPickVisor.style.animation='alternate both infinite pulsePick .8s steps(5)'
  CanClick = true

  ActualScore = ActualScore
    ActualScoreText.innerHTML = ActualScore;
  document.getElementById('VS').innerHTML = 'DRAW'

}


function VerificaPlacar(){
  if(ActualScore > HighScore){
    HighScoreText.innerHTML = ActualScore
  }
}