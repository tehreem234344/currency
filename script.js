let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
const userscoremsg = document.querySelector("#user-score");
const compscoremsg = document.querySelector("#comp-score");



const generatecompchoice =()=>{
    const options = [ "rock", "paper","scissor"];
    const randidx = Math.floor(Math.random()*3);
    return options[randidx];
};

const drawgame = ()=>{
    message.innerText = "Game is draw.Play again!";
    message.style.backgroundColor ="#081b31";
};
const showwinner =(userwin,userchoice,compchoice)=>{
    if (userwin){
        userScore++;
        userscoremsg.innerText= userScore;
        message.innerText = `You Win! Your ${userchoice} beats ${compchoice}`;
        message.style.backgroundColor ="green";
    } else {
        compScore++;
        compscoremsg.innerText= compScore;      
        message.innerText = `You Lose! ${compchoice} beats your ${userchoice}`;
        message.style.backgroundColor ="red";
    }
};

const playgame = (userchoice)=>{
    //generate computer choice
    const compchoice = generatecompchoice();
    if(userchoice === compchoice){
        //draw game
        drawgame();
    } else {
        let userwin = true;
        if ( userchoice === "rock"){
            //scissor, paper
            userwin = compchoice ==="paper"? false: true;
        }else if (userchoice==="paper"){
            //rock ,scissors
             userwin= compchoice ==="scissor"? false: true;
        }else{
             userwin= compchoice === "rock"?false : true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userchoice =choice.getAttribute("id");
        
        playgame(userchoice);
    });
});