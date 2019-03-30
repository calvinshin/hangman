// Word related variables
var unknownWord = "";
var secretWord = "";
var secretWordArray = Array();
var guessedLettersArray = Array();
// ~~~~~~~~~~~~~~~~~~~~~~~~~~ OH GOD THERE IS AN ISSUE WITH CAPITALIZED LETTERS.
var entireArray = ["pikachu", "rattata", "squirtle", "charmander", "mew"];
var currentArray = entireArray;
// var otherArray = ["test", "two"];
var pokemonNumber = 0;

// var onWindow is used to figure out which commands should be valid
    // onwWindow = "guessing" allows the keypresses to function
    // onWIndow = "main" allows the main menu to function
    // onWindow = "choosing" allows the user to select which library of words to use
var onWindow = "guessing";
var isGuessingEnabled = false;

// Sound variables
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~ Need to make it so that when mutepage is true, mutesfx is false/etc. Currently set up in the function call.
var muteBGM = true;
var muteSFX = false;

var missedSound = new Audio("assets/sounds/attempt.mp3");
var runSound = new Audio("assets/sounds/flee.mp3");
var successSound = new Audio("assets/sounds/Poke_Caught.wav");
successSound.volume = .4;
var completeSound = new Audio("assets/sounds/DexSound8.wav");
var bGM = new Audio("assets/sounds/107 - battle (vs wild pokemon).mp3");
bGM.loop = true;
bGM.volume = .1;

function play(sound) {
    // console.log("sound", sound)
    // console.log("missedSound", [missedSound])
    // Need to do the sound.src and match them together;
    if (muteSFX === false) {

        sound.play();
    }
    // if (muteBGM === false) {
    //     sound.play()
    // }
}

function pause(sound) {
    sound.pause();
};

//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Took the words from someone else on how to build mute/unmute.
// https://stackoverflow.com/questions/14044761/how-to-mute-all-sound-in-a-page-with-js
                                            // // Mute a singular HTML5 element
                                            // function muteMe(elem) {
                                            //     elem.muted = true;
                                            //     elem.pause();
                                            // }

                                            // // Try to mute all video and audio elements on the page
                                            // function mutePage() {
                                            //     var elems = document.querySelectorAll("video, audio");

                                            //     [].forEach.call(elems, function(elem) { muteMe(elem); });
                                            // }

// Game mechanic variables
// wanted to create concept of multiple lives (before game is over)
var lives = 3;
// guesses for pokemon
var guesses = 8;
var numberCaught = 0;

// Setting how blurred the image is for catching the pokemon.
// Easy = see the sprite AKA youngster 
// Medium = silhouette, grayscale AKA .trainer
// Hard = blurred silhouette AKA .acetrainer
// Master = nothing shown of image (blank) AKA .champion
var difficultyArray = ["youngster", "trainer", "acetrainer", "champion"]
var difficulty = "medium";
// ~~~~~~~~~~~~~~~~~~~~~~ need to create a list of caught pokemon.

// ~~~~~~~~~~~~~~~~~~~~~~~~ using keypress to change the class of all the things
// ~~~~~~~~~~~~~~~~~~~~~~~~ can also remove on multiple elements even if it doesn't work. Need to do this when updating class of the used letters.
// document.getElementById(secretWord).classList.add("teststyle")
// document.getElementById(secretWord).classList.remove("teststyle")
// document.getElementById(secretWord).classList.remove("teststyle")

function newGame() {
    // console.log("This tests that the newGame button works");
    // Hides the you win!
    document.getElementById("winMessage").classList.add("hidden");
    document.getElementById("winwindow").classList.add("hidden");
    // Set the first value in entireArray as the secret word
    pokemonNumber = Math.floor(Math.random() * currentArray.length);
    secretWord = currentArray[pokemonNumber];
    arrayify(secretWord);
    // Tests shifting the array as this will be possible with the different word lists; looks to work correctly.
    // currentArray = otherArray;
    // Enables guessing
    isGuessingEnabled = true;
    guesses = 8;
    document.getElementById("guesses").innerHTML = guesses;
    document.getElementById("whatquestion").innerHTML = "What will you do?"
    // console.log("isguessing in newgame" + isGuessingEnabled);
    play(bGM);

};

function arrayify(secretWord) {
    // Clear guessedLettersArray
    guessedLettersArray = Array();
    document.getElementById("guessedLettersArray").innerHTML = guessedLettersArray;
    // Core function of arrayify that creates an array from the secret word
    // Also creates the unknown word at the same time (for a single for loop)
    secretWordArray = [secretWord[0]];
    unknownWord = "";
    for (i=0; i < secretWord.length; i++) {
        secretWordArray.push(secretWord[i]);
        unknownWord = "_" + unknownWord;
        // console.log(secretWordArray);
    };
    document.getElementById("unknownWord").innerHTML = unknownWord;
    // console.log(secretWordArray);
    // console.log(unknownWord);
    // console.log("isguessing in arrafify" + isGuessingEnabled);
}

arrayify(secretWord)

// Doing a keypress.
document.onkeydown = function(keypress) {
    // Enables the guessing logic if isGuessingEnabled=True. Otherwise, can't guess!
    if(isGuessingEnabled === true) {
        // console.log("isGuessing " + isGuessingEnabled)
        if(keypress.which <= 90 && keypress.which >= 65) {
            // console.log(keypress.key + " was pressed")
            // checks if the letter is new or was already pressed in the round
            var keypressValue = keypress.key.toLowerCase()
            // The function of guessing! Very important!
            guessing(keypressValue)
        }
    }
    // If either space or enter is pressed, then a new game is started
    if(isGuessingEnabled === false) {
        if(keypress.keyCode === 13 || keypress.keyCode === 32) {
            newGame();
        }
    }
}

function guessing(keyValue) {
    if(guessedLettersArray.indexOf(keyValue) === -1) {
        // Checks for if the key is in the array
        // If you didn't find the letter... this happens
        if(secretWordArray.indexOf(keyValue) === -1) {
            // console.log("This character was not found!")
            play(missedSound)
            guesses --;
            document.getElementById("guesses").innerHTML = guesses;
            document.getElementById("whatquestion").innerHTML = "There's no " + keyValue + "!"
            if(guesses === 0) {
                pause(bGM);
                play(runSound);
                isGuessingEnabled = false;
                lives -= 1;
                document.getElementById("winMessage").innerHTML = "You didn't catch the Pokemon.<br>Play again?";
                document.getElementById("winMessage").classList.remove("hidden");
                document.getElementById("winwindow").classList.remove("hidden");
            }
            // ~~~~~~~~~~~~~~~~~~~~ IF THE VALUE IS 0, GAME OVER AND A LIFE IS LOST.
        }
        // You found the letter, so the logic is now checked
        else{
            // console.log("This character was found!");
            // replace the dash with a letter
            for (letter = 0; letter<unknownWord.length; letter++) {
                // console.log(letter)
                // console.log(secretWord[letter]===keypressValue)
                // If you guessed correctly,
                if(secretWord[letter]===keyValue) {
                    // console.log(unknownWord[letter] + " " + keypressValue)
                    // replace doesn't actually replace the string UNLESS it is re-set as the variable. Nothing happens unkown the unknownWord = is at the front
                    unknownWord = unknownWord.substring(0, letter) + keyValue + unknownWord.substring(letter+1);
                    document.getElementById("whatquestion").innerHTML = "You found the " + keyValue + "!";
                    // console.log(unknownWord)
                }
            }
            // Update the value of the unknownWord on the document screen
            document.getElementById("unknownWord").innerHTML = unknownWord.charAt(0).toUpperCase() + unknownWord.slice(1);
            if(unknownWord.indexOf("_") === -1) {
                document.getElementById("winMessage").innerHTML = "You win!<br>Play again?";
                document.getElementById("winMessage").classList.remove("hidden");
                document.getElementById("winwindow").classList.remove("hidden");
                numberCaught += 1;
                document.getElementById("caught").innerHTML = numberCaught;
                pause(bGM);
                play(successSound);
                // Sets guessing to false so no characters can be checked/read.
                isGuessingEnabled = false;
                // console.log("Isguessing " + isGuessingEnabled)
                // Remove the pokemon from the array if it exists once caught. 
                if(currentArray.indexOf(secretWord) > -1) {
                    currentArray.splice(pokemonNumber, 1);
                };
                // Checks whether all of the pokemon in the set was caught.
                //  ~~~~~~~ Should disable the new game button from being pressed 
                if(currentArray.length === 0) {
                    play(completeSound);
                    document.getElementById("winMessage").innerHTML = "You caught all the pokemon! Congratulations, trainer!";
                }
                // ~~~~~~~~~~~~~~~~ Show button that says play again?
                // If that button is pressed, call the newGame function
                // ~~~~~~~~~~~~~~~~ When you win, disable guessing. Probably have a disableGuessing variable
            }
        }
        // After checking for the letter, the guessedLettersArray is appended
        // Checks if array is blank
        if(guessedLettersArray.length === 0) {
            guessedLettersArray = Array(keyValue);
        }
        // adds new values if the array is not blank
        else {
            guessedLettersArray.push(keyValue)
        }
        // ~~~~~~ currently displays all the guessedLetters in an array. Not necessary later iff
        // ~~~~~~~~~~~~~~~~~~ The classes of the displayed letters on the screen should be changed.
        document.getElementById("guessedLettersArray").innerHTML = guessedLettersArray;
        // console.log(guessedLettersArray)
    }
    else {
        console.log("This character was already pressed!")
        document.getElementById("whatquestion").innerHTML = "Already guessed " + keyValue + "!" 
    }
}

function runAway() {
    lives -= 1;
    newGame();
    document.getElementById("whatquestion").innerHTML = "You ran away... try again!"
}

// Core of game elements:::
// if onWindow is true, clicking enter, n, or the button leads to the next page


// Game Start
document.getElementById("winMessage").innerHTML = "Guess the Pokemon!<br>The Pokemon's name will show on the top left.";
document.getElementById("unknownWord").innerHTML = unknownWord;

// Button on-click events
    // Guessing Menu events
document.getElementById("runButton").addEventListener("click", runAway);