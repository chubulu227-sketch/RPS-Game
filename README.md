<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>rcp-game</title>
    <style>
        *{
    padding: 0px;
    margin: 0px;
}
.background{
    background-image: url('background\ img4.jpg');
    opacity: 1;
    width: 100%;
    height: 738px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: -122;

}
.heding{
    background-color: rgba(8, 4, 79, 0.844);
    width: 100%;
    height: 6rem;
    text-align: center;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
}
#head-para{
    font-size: 40px;
    font-weight: 900;
    color: white;
    letter-spacing: 3px;
}
.choses{
    display: flex;
    justify-content: space-evenly;
    margin-top: 50px;
}
.chose{
    height: 225px;
    width: 225px;
}
.chose img{
    opacity: 1;
    border: 5px black solid;
    border-radius: 50%;
}
.chose img:hover{
   opacity: 0.6;
}
#paper img{
    height: 100%;
    width: 100%;
}
#scissor img{
    height: 100%;
    width: 100%;
}
.score-bar{
    width: 100%;
    height: 8rem;
    margin-top: 40px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.my-scor{
    margin-left: 275px;
    font-size: 40px;
    font-weight: 900;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;
}

.com-scor{
    margin-right: 220px;
    font-size: 40px;
    font-weight: 900;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;
}
.info-bar{

    width: 100%;
    height: 5rem;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}
#info{
    font-size: 25px;
    color: rgb(52, 5, 96);
    font-weight: bold;
    display: inline-block;
    background-color: white;
}
.win{
    background-color: rgb(7, 142, 7);
    color: white;
}
.lose{
    background-color: red;
    column-rule: white;
}
    </style>
</head>
<body>
    <div class="background">
        <div class="heding">
            <p id="head-para">ROCK PAPER SCISSOR GAME </p>
        </div>
        <div class="choses">
            <div id="rock" class="chose"><img src="rock.png" alt="" ></div>
            <div id="paper" class="chose"><img src="paper.jpeg" alt="" srcset=""></div>
            <div id="scissor" class="chose"><img src="scissor.png" alt="" srcset=""></div>
        </div>
        <div class="score-bar">
            <div class="my-scor">
                <p id="self">0</p>
                <p>YOU</p>
            </div>
            <div class="com-scor">
                <p id="comp">0</p>
                <p>COMPUTER</p>
            </div>
        </div>
        <div class="info-bar">
            <p id="info">Play the game!</p>
        </div>
    </div>
    <script>
        let userScor=0;
let compScor=0;

const input=document.querySelectorAll(".chose");
const msg=document.querySelector("#info");
const userScorPara=document.querySelector("#self");
const compScorPara=document.querySelector("#comp");

const genComChoice=()=>{
    const option=["rock","paper","scissor"];
    const ranId=Math.floor(Math.random()*3);
    return option[ranId];
}
const drawGame=()=>{
   //console.log("game was draw.")
   msg.innerText="Game was draw.play again";
   msg.style.backgroundColor="yellow";
   msg.style.color="black";
}

const showWinner=(userWin,userChoice,comChoice)=>{
  if(userWin){
    //console.log("you win")
    msg.innerText=`You win! you ${userChoice} bets ${comChoice}`;
    msg.style.backgroundColor="green";
    msg.style.color="white";
    //msg.classList.add(".win");
   // msg.classList.remove(".lose");
    userScor++;
    userScorPara.innerText=userScor;
  }else{
    //console.log("you lose")
    msg.innerText=`You lose! ${comChoice} bets your ${userChoice} `;
     msg.style.backgroundColor="red";
     msg.style.color="white";
     //msg.classList.add(".lose");
     //msg.classList.remove(".win");
    compScor++;
    compScorPara.innerText=compScor;
  }
}

const playGame=(userChoice)=>{
   //console.log("user choice=",userChoice);
   const comChoice=genComChoice();
   //console.log("comp choice=",comChoice);
   
   if(userChoice===comChoice){
    drawGame();
   }else{
    let userWin= true;
    if(userChoice==="rock"){
        userWin=comChoice==="paper"?false:true;
    }else if(userChoice==="paper"){
        userWin=comChoice==="scissor"?false:true
    }else{
        userWin=comChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,comChoice);
   }

}

input.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
       playGame(userChoice);
    })
})
    </script>
</body>
</html>
