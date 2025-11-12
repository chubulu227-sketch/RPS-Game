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