var fName = document.getElementById('fName');
var msg = document.getElementById('msg');
var logInPage = document.getElementById('log-in-page');
var gameSection = document.getElementById('game-section');
var resultSection = document.getElementById('result-section');
var hint = document.getElementById('result');
var startBtn = document.getElementById('start-btn');
var numberCnter = document.getElementById('number-container');
var submit = document.querySelector('.submit');


let firstName ;
startBtn.addEventListener('click', function(e){ 
     firstName = fName.value;
    if(firstName !== ""){
        e.preventDefault();
       logInPage.style.display = "none";
      gameSection.style.display = "block";
    } else{
        alert("Please, enter your name.")
    }
    
});
let x = parseInt(Math.random() * 100);
let chances = 0;
submit.addEventListener('click', function(e){
    let y = parseInt(numberCnter.value);

    if( y <= 100 && y >= 1){
        e.preventDefault();
    chances++;
    console.log(x , y);
    if(x != y ){
        if(x > y){
            hint.textContent = "Your guess the wrong number, try larger number."
            hint.style.display = "block";
        } else{
            hint.textContent = "Your guess the wrong number, try smaller number."
            hint.style.display = "block";
        }
    } else {
        msg.textContent = firstName + ", You took "+ chances +" chances to win the game"
        gameSection.style.display = "none";
        resultSection.style.display = "block";
    }
    } else {
        alert("Please, enter number between 1 to 100.")
        e.preventDefault();
    }
    
});

