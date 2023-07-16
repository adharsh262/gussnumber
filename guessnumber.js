let randomNumber=Math.ceil(Math.random()*100);
let inputInteger=document.getElementById("userInput");
let gameResult=document.getElementById("infoPara");

function checkGuessResult() {
    let guessNumber=parseInt(inputInteger.value);
    if (guessNumber>randomNumber) {
        gameResult.textContent="Too High !, Try Again.";
        gameResult.style.backgroundColor="#1e217c";
    }
    else if (guessNumber<randomNumber) {
        gameResult.textContent="Too low !, Try Again.";
        gameResult.style.backgroundColor="#1e217c";
    }
    else if (guessNumber===randomNumber) {
        gameResult.textContent="Congratulation!, You got it Right.";
        gameResult.style.backgroundColor="green";

    }
    else {
        gameResult.textContent="Please Provide a  Valid Input!! ";
        gameResult.style.backgroundColor="#1e217c";
    }
    

}

