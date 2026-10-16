## JavaScript

### Project 4

#### - Guess the Number (1-100)

``` javascript
function numberGuess(){
    // generate random value, +1 -> can be 100 not 0
    let randomNum = parseInt(Math.random() * 100 + 1);
    const submitBtn = document.querySelector('#submit');
    const userInput = document.querySelector('.userNum');
    const guessSlot = document.querySelector('.guesses');
    const remainingGuess = document.querySelector('.remaining');
    const lowHigh = document.querySelector('.lowHigh');
    const displayResult = document.querySelector('.result_wrapper');
    const displayErrMssg = document.querySelector('.err');

    // insert element
    const p = document.createElement('p');

    let prevGuess = [];
    let numGuess = 0;
    let playGame = true;

    if (playGame){
        submitBtn.addEventListener("click", (e) => {
            // as form will carry the data
            e.preventDefault();
            const guess = parseInt(userInput.value.trim());
            console.log(guess);
            validateGuess(guess);
        });
    }

    function validateGuess(guess){
        // validate userInput

        if (isNaN(guess)){
            displayErrMssg.innerHTML = "Invalid Input";
        }
        else if ((guess < 1) || (guess > 100)){
            displayErrMssg.innerHTML = "Number must be 1 to 100"
        }
        else if(guess === ""){
            displayErrMssg.innerHTML = "Input can't be empty"
        }
        else{
            prevGuess.push(guess);
            if (numGuess === 9){
                displayGuess(guess);
                displayMssg(`Game Over. Random number was ${randomNum}`);
                endGame();
            }else{
                displayGuess(guess);
                checkGuess(guess);
            }
        }
    }

    function checkGuess(guess){
        // check the correct guess or not

        if (guess === randomNum){
            displayMssg(`You guessed it right`);
            endGame();
        }
        else if(guess < randomNum){
            displayMssg(`Number is too low..`);
        }
        else if (guess > randomNum){
            displayMssg(`Number is too high..`);
        }
    }

    function displayGuess(guess){
        userInput.value = '';
        guessSlot.innerHTML += `${guess} `;
        numGuess++;
        remainingGuess.innerHTML = `${10 - numGuess}`;
    }

    function displayMssg(mssg){
        lowHigh.innerHTML = `${mssg}`;
    }

    function newGame(){
        const newGameBtn = document.querySelector('#newGame');
        newGameBtn.addEventListener("click", (e) => {
           randomNum = parseInt(Math.random() * 100 + 1);
           prevGuess = [];
           numGuess = 0;
           guessSlot.innerHTML = '';
           remainingGuess.innerHTML = `${10 - numGuess}`;
           userInput.removeAttribute('disabled');
           displayResult.removeChild(p);
            playGame = true;
        })
    }

    function endGame(){
        userInput.value = '';
        userInput.setAttribute("disabled", "");
        p.classList.add('button');
        p.innerHTML = `<h3 id="newGame">Start New Game</h3>`;
        p.style.cursor = "pointer";
        displayResult.appendChild(p);
        playGame = false;
        newGame();
    }
}

numberGuess();
```