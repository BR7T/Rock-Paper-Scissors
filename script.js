const BotPick = ["rock", "paper", "scissors"];
const UserPick = ["rock", "paper", "scissors"];
const ActualScoreText = document.getElementById("actualScore");
const HighScoreText = document.getElementById("highScore");
const ScreenDiv = document.getElementById("visorArea");

let ActualScore;
let HighScore = 12;

HighScoreText.innerHTML = HighScore;

randomN = Math.floor(Math.random() * 3);

let finalizaFunc = 0;

let Apresentation = document.createElement("div");
function GameStart() {
  if (finalizaFunc == 0) {
    AppearText("Jokempo", Apresentation);
  } else if (finalizaFunc == 1) {
    AppearText("Level -> " + finalizaFunc, Apresentation);
  } else if (finalizaFunc == 3) {
    Start();
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

function Start(){
    
}
