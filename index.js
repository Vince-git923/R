function getComputerChoice(){
    let comChoice = ["rock", "paper", "scissor"];
    let c = Math.floor(Math.random()*3)
    return comChoice[c];
}


//individual round
function round(playerSelect, computerSelect){
    if(playerSelect === computerSelect){
      return 'Draw';
    }else if((playerSelect == "rock" && computerSelect ==="paper") || (playerSelect == "paper" && computerSelect === "scissor")){ 
      return "You Lose!" 
    }else{   
        return "You Win!"  
    }
  }



      let playerSelect = prompt("Enter: rock, paper,scissor")
      let computerSelect = getComputerChoice();
      let y = 0;
      let c = 0;
      
     
      //prompt and score increment

      function game(){
        playerSelect = prompt("Enter: rock, paper,scissor")
        computerSelect = getComputerChoice();
       
            if(round(playerSelect,computerSelect)==="You Lose!"){
                c++;
            }else if(round(playerSelect,computerSelect) === "You Win!"){
                y++
            }
        console.log(round(playerSelect,computerSelect) + ` PLAYER:${y}  COMPUTER:${c}`)
        
       } 
     
        
        
  
for( i = 0; i < 5; i++){
    
    game();
}


//final result
 function result(){
    if(c > y){
        return "Computer Won!"
    }else if(y > c){
        return "You Won!"
    }else{
        return "Draw"
    }
 }  
console.log(`Score(${y} : ${c})  ${result()}`)

  
