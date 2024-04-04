let uscore = 0;
let cpscore = 0;
 let choices= document.querySelectorAll(".box");  //it gives an array
 let userscore= document.querySelector("#userscore");
 let compscore= document.querySelector("#compscore");
 let result= document.querySelector("#answer");
 let userschoice= document.querySelector("#userchoice");
 let compschoice= document.querySelector("#compchoice");
choices.forEach((choice) => {
  choice.addEventListener("click",()=>{
    const userchoice = choice.getAttribute("id");
    startgame(userchoice);
  } 
  )
 
  
});


function startgame(userchoice){
options= ["rock","paper","scissor"]
let x= Math.floor(Math.random()*3);
const compchoice= options[x];
console.log("User's choice =", userchoice ,"  Computer's choice =", compchoice );
userschoice.innerText= `User's choice:  ${userchoice}`;
compschoice.innerText= `Computer's choice:  ${compchoice}`;


comparision(userchoice,compchoice)
}
    function comparision(userchoice,compchoice){
      
      if(userchoice == "scissor" && compchoice == "paper"){
        console.log("User Win");
        uscore ++;
      userscore.innerText = `User Score: ${uscore}`;
      result.innerText = "You Win";
      result.style.backgroundColor = "green";
        
      }
      else if(userchoice == "paper" && compchoice == "rock"){
        console.log("User Win");
        uscore ++;
        userscore.innerText = `User Score: ${uscore}`;
        result.innerText = "You Win";
        result.style.backgroundColor = "green";
      }
      else if(userchoice == "rock" && compchoice == "scissor"){
        console.log("User Win");
        uscore ++;
        userscore.innerText = `User Score: ${uscore}`;
        result.innerText = "You Win";
        result.style.backgroundColor = "green";
      }
      else if(userchoice ==  compchoice ){
        console.log("Game draw no change in scores" );
        result.innerText = "Game Draw";
        result.style.backgroundColor = "purple";
      }
      else{
        console.log("Computer Wins");
        cpscore ++;
        compscore.innerText = `Computer Score: ${cpscore}`;
        result.innerText = "You Lose";
        result.style.backgroundColor = "red";
      }


    }

    