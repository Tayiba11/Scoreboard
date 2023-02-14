let num1 = 0;
let num2 = 0;
// document.getElementById("score").textContent = num1; 
document.getElementById("score").textContent = num1;
document.getElementById("score1").textContent = num2;

// Home

let Score = document.getElementById("score");

function increment1(){
   
  // let result =+ 1;
  // Score.textContent = result;
  num1 = num1 + 1;
  Score.textContent = num1;
}

function increment2(){
  num1 = num1 + 2;
  Score.textContent = num1;
    
  }

  function increment3(){
   
    num1 = num1 + 3;
  Score.textContent = num1;
  }
  

  // Guest
  let Score1 = document.getElementById("score1");

  function increment4(){
    num2 = num2 + 1;
    Score1.textContent = num2;
  }
  
  function increment5(){
    num2 = num2 + 2;
    Score1.textContent = num2;
  }
  
  function increment6(){
    num2 = num2 + 3;
    Score1.textContent = num2;
  }
  

