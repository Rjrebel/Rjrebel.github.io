var fName = document.getElementById('fName');
var msg = document.getElementById('msg');
var logInPage = document.getElementById('log-in-page');
var gameSection = document.getElementById('game-section');
var resultSection = document.getElementById('result-section');
var hint = document.getElementById('result');
var lastGuess = document.getElementById('last-guess');
var startBtn = document.getElementById('button');
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
            hint.textContent = "(Hint : try LARGER number than your previously guessed.)"
            hint.style.display = "block";
            numberCnter.value = "";
            alert("You guessed it wrong, try again.")
        } else{
            hint.textContent = "(Hint : try SMALLER number than your previously guessed.)"
            hint.style.display = "block";
            numberCnter.value = "";
            alert("You guessed it wrong, try again.")
        }
        lastGuess.textContent = "Your last guessed number : "+ y;
        numberCnter.style.backgroundColor = "#f74d4d";
    } else {
        msg.textContent = firstName + ", You took "+ chances +" chances to win the game"
        gameSection.style.display = "none";
        resultSection.style.display = "block";
    }
    } else {
        alert("Please, enter number between 0 to 100.");
        numberCnter.value = "";
        e.preventDefault();
    }
    
});

numberCnter.addEventListener('focus', function(){
    numberCnter.style.backgroundColor = "white";
    hint.style.display = "none";
    lastGuess.textContent = "";
});

