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
let NamePlayer = document.getElementById('nomePlayerInput')
  const Nome = document.getElementById('nomePlayer')
let ActualScore = 0;
let HighScore = 0;








ActualScoreText.innerHTML = ActualScore;
HighScoreText.innerHTML = HighScore;

randomN = Math.floor(Math.random() * 3);

let finalizaFunc = 'Name';

let Apresentation = document.createElement("div");



function GameStart() {
  
  ButtonStart.removeAttribute('onclick')
  turnOnLights()
  switch(finalizaFunc){
    case 0:
      
      finalizaFunc = 'Name'
      CanClick=false
      AppearText("Rock, Paper, Scissors", Apresentation);
    break;
    case 1:
      
      
      
      CanClick = false
      AppearText(' Level - ' + (ActualScore+1), Apresentation);
      finalizaFunc = 2
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
      case 'Name':
        finalizaFunc = 1
 

        NameArea()
        
        
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


  document.getElementById('VS').innerHTML = '<hr/>VS<hr/>'

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

selectBtn.addEventListener('click',function selectFunction(){
  
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
  document.getElementById('VS').innerHTML = '<hr/>DRAW<hr/>'
  setTimeout(()=>{
  document.getElementById('VS').innerHTML = '<hr/>Play Again<hr/>'

  },500)


}


function VerificaPlacar(){
  if(ActualScore > HighScore){
    HighScoreText.innerHTML = ActualScore
  }
}

function turnOnLights(){
  ScreenDiv.style.backgroundColor = '#9B9E4D' 
  document.getElementById('score').style.backgroundColor = "#9B9E4D"
  document.getElementById('onlight').style.backgroundColor = 'greenyellow'
  document.getElementById('onlight').style.boxShadow ='0 0 15px 8px greenyellow'
}

function NameArea(){
  
  document.getElementById('nameP').style.display = 'flex'
  document.getElementById('nomePlayerInput').focus()
 
  ButtonStart.addEventListener('click' , ()=>{
    if(NamePlayer.value.length === 3 ){
      document.getElementById('nameP').style.display = 'none'
      Nome.innerText = NamePlayer.value
      

      GameStart()
    }else if(NamePlayer.value.length == 0){
      textName.innerHTML = 'Você precisa ter um nome!'
    }else if(NamePlayer.value.length >0 && NamePlayer.value.length<3){
      textName.innerHTML = 'Seu nome precisa ter 3 letras!'

    }
  })
  
}
