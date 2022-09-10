let pselect = document.querySelectorAll('.player-btns button')
let result1 = document.querySelector(".result1 h2")
let result2 = document.querySelector(".result2")
let quit = document.querySelector(".close button")
let neew = document.querySelector(".new")
let playagain = document.querySelector(".play-again button")
let cont = document.querySelector(".game-container")
let pbar1 = document.querySelector(".c1")
let pbar2= document.querySelector(".c2")
let pbar3= document.querySelector(".c3")
let pbar4 = document.querySelector(".c4")
let pbar5 = document.querySelector(".c5")
let revbar = document.querySelector(".play-again button")
let cbar1 = document.querySelector(".p1")
let cbar2= document.querySelector(".p2")
let cbar3= document.querySelector(".p3")
let cbar4 = document.querySelector(".p4")
let cbar5 = document.querySelector(".p5")







let com = 0;
let player = 0;





function game(){
    
    
    
    
    

    
    function getComputerChoice(){
        let comChoice = ["rock", "paper", "scissor"];
        let c = Math.floor(Math.random()*3)
        return comChoice[c];
    }


        randomWin =()=>{
            let randomWinStatement = ["Niccce","Well Played!","Predicted!","Master?"]
            let c = Math.floor(Math.random()*4)
            return randomWinStatement[c]
        };
        randomLose =()=>{
            let randomLoseStatement = ["Unlucky!","Ouch!","Bad Choice!","Looooser!"]
            let c = Math.floor(Math.random()*4)
            return randomLoseStatement[c]
        };
        randomDraw =()=>{
            let randomLoseStatement = ["Watta Draw!","Draw!","TIE!","Draaaawww!"]
            let c = Math.floor(Math.random()*4)
            return randomLoseStatement[c]
        };

    let comInput = getComputerChoice();
    
  if(this.value === comInput){
    result1.innerText = randomDraw();
   

  }else if(this.value === "rock" && comInput === "paper" || this.value === "paper" && comInput === "scissor" || this.value === "scissor" && comInput === "rock"){
    result1.innerText = randomLose()
    com++
    
  }else if(this.value === "paper" && comInput === "rock" || this.value === "scissor" && comInput === "paper" || this.value === "rock" && comInput === "scissor"){
    result1.innerText = randomWin();
    player++;
    
  }


  if(com === 5){
    result2.innerText = "Nothing is Worst than Defeat!"
    neew.classList.remove("newgame")
    
    
   
    pselect.forEach(input => {
        input.disabled = true;})
        cont.style.filter = "blur(5px)";
    

}else if(player === 5){
    result2.innerText = 'Winner, Winner Chicken Scisser!'
    
    
    
    neew.classList.remove("newgame")
    pselect.forEach(input => {
        input.disabled = true;})
        cont.style.filter = "blur(5px)"
}

    if(com === 5){
        pbar1.style.backgroundColor = "white";
    }else if(com === 4){
        pbar2.style.backgroundColor = "white";
    }else if(com === 3){
        pbar3.style.backgroundColor = "white";
    }else if(com === 2){
        pbar4.style.backgroundColor = "white";
    }else if(com === 1){
        pbar5.style.backgroundColor = "white";
    }

    if(player === 1){
        cbar1.style.backgroundColor = "white";
    }else if(player === 2){
        cbar2.style.backgroundColor = "white";
    }else if(player === 3){
        cbar3.style.backgroundColor = "white";
    }else if(player === 4){
        cbar4.style.backgroundColor = "white";
    }else if(player === 5){
        cbar5.style.backgroundColor = "white";
    } 

//get player Input +++
  pselect.forEach(input => {
  input.addEventListener('click',game)})

  

//quitgame+++++
 

if(result2.innerText === "Nothing is Worst than Defeat!"){
    revbar.innerText = "Go BACK and Revenge?"
}else{
    revbar.innerText = "Play Again?"
}

quit.addEventListener("click",()=>{
    window.close();
})

playagain.addEventListener("click",()=>{
    pselect.forEach(input => {
        input.disabled = false;})
    com = 0;
    player = 0;
    result1.innerText = "Choose Your Weapon"
    neew.classList.add("newgame")
    cont.style.filter = "blur(0px)"
  
    

    if(com === 0){
        pbar1.style.backgroundColor = "green"
        pbar2.style.backgroundColor = "green"
        pbar3.style.backgroundColor = "green"
        pbar4.style.backgroundColor= "green"
        pbar5.style.backgroundColor= "green"
    }

    if(player === 0){
        cbar1.style.backgroundColor = "red"
        cbar2.style.backgroundColor = "red"
        cbar3.style.backgroundColor = "red"
        cbar4.style.backgroundColor= "red"
        cbar5.style.backgroundColor= "red"
    }
})
}

game()






