// Other things to do
// animated start
// animated reveal of the pokemon

// Word related variables
var unknownWord = "";
var secretWord = "";
var secretWordArray = [];
var guessedLettersArray = [];
var entireArray = ["absol","accelgor","aggron","archen","aurorus","banette","basculin","beartic","beautifly","bibarel","bisharp","blitzle","bonsly","bouffalant","braviary","camerupt","carracosta","castform","chandelure","charmander","chimchar","chingling","claydol","clefairy","cofagrigus","combee","corsola","cottonee","cradily","croagunk","delphox","dewgong","dewott","dialga","doduo","drifblim","drowzee","duosion","eelektross","elgyem","abomasnow","abra","aegislash","aerodactyl","alakazam","alomomola","altaria","amaura","ambipom","amoonguss","anorith","arbok","arcanine","arceus","archeops","aromatisse","aron","articuno","audino","avalugg","axew","azelf","azurill","bagon","baltoy","barbaracle","barboach","bastiodon","beedrill","beheeyem","beldum","bellsprout","bergmite","bidoof","binacle","blastoise","blaziken","blissey","boldore","braixen","breloom","bronzong","bronzor","budew","buizel","bulbasaur","buneary","bunnelby","burmy","butterfree","cacnea","cacturne","carbink","carnivine","carvanha","cascoon","caterpie","celebi","chansey","charizard","charmeleon","chatot","cherrim","cherubi","chesnaught","chespin","chimecho","cinccino","clauncher","clamperl","clawitzer","clefable","cloyster","cobalion","combusken","conkeldurr","corphish","cranidos","crawdaunt","cresselia","crustle","cryogonal","cubchoo","cubone","darkrai","darmanitan","darumaka","dedenne","deino","delcatty","delibird","deoxys","diancie","diggersby","diglett","ditto","dodrio","donphan","doublade","dragalge","dragonair","dragonite","drapion","dratini","drifloon","drilbur","druddigon","ducklett","dugtrio","durant","dusclops","dusknoir","duskull","dustox","dwebble","eelektrik","eevee","ekans","electabuzz","electivire","electrike","electrode","elekid","emboar","armaldo","deerling","emolga","empoleon","entei","escavalier","espurr","excadrill","exeggcute","exeggutor","exploud","farfetchd","fearow","feebas","fennekin","ferroseed","ferrothorn","filenames","finneon","flabebe","flareon","fletchinder", "mantyke","fletchling","floatzel","floette","florges","flygon","foongus","fraxure","frillish","froakie","frogadier","froslass","furfrou","gabite","gallade","galvantula","garbodor","garchomp","gardevoir","gastly","gastrodon","genesect","gengar","geodude","gible","gigalith","giratina","glaceon","glalie","glameow","gliscor","gloom","gogoat","golbat","goldeen","golduck","golem","golett","golurk","goodra","goomy","gorebyss","gothita","gothitelle","gothorita","gourgeist","graveler","greninja","grimer","grotle","groudon","grovyle","growlithe","grumpig","gulpin","gurdurr","gyarados","happiny","hariyama","haunter","hawlucha","haxorus","heatmor","heatran","heliolisk","helioptile","herdier","hippopotas","hippowdon","hitmonchan","hitmonlee","hitmontop","honchkrow","honedge","hooh","hoopa","horsea","houndoom","houndour","huntail","hydreigon","hypno","illumise","infernape","inkay","ivysaur","jellicent","jigglypuff","jirachi","jolteon","joltik","jynx","kabuto","kabutops","kadabra","kakuna","kangaskhan","karrablast","kecleon","keldeo","pumpkaboo","kingdra","kingler","kirlia","klang","klefki","klink","klinklang","koffing","krabby","kricketot","kricketune","krokorok","krookodile","kyogre","kyurem","lairon","lampent","landorus","lapras","larvesta","larvitar","latias","latios","leafeon","leavanny","lickilicky","lickitung","liepard","lileep","lilligant","lillipup","linoone","litleo","litwick","lombre","lopunny","lotad","loudred","lucario","ludicolo","lugia","lumineon","lunatone","luvdisc","luxio","luxray","machamp","machoke","machop","magby","magcargo","magikarp","magmar","magmortar","magnemite","magneton","magnezone","makuhita","malamar","mamoswine","manaphy","mandibuzz","manectric","mankey","mantine","shuppet","maractus","marowak","marshtomp","masquerain","mawile","medicham","meditite","meloetta","meowstic","meowth","mesprit","metagross","metang","metapod","mew","mewtwo","mienfoo","mienshao","mightyena","milotic","miltank","mimejr","minccino","minun","mismagius","moltres","monferno","mothim","mrmime","mudkip","muk","munchlax","munna","musharna","nidoking","nidoqueen","nidoranf","nidoranm","nidorina","nidorino","nincada","ninetales","ninjask","noibat","noivern","nosepass","numel","nuzleaf","octillery","oddish","omanyte","omastar","onix","oshawott","pachirisu","palkia","palpitoad","pancham","pangoro","panpour","pansage","pansear","paras","parasect","patrat","pawniard","pelipper","persian","petilil","phanpy","phantump","phione","pidgeot","pidgeotto","pidgey","pidove","pignite","pikachu","piloswine","pinsir","piplup","plusle","poliwag","poliwhirl","poliwrath","ponyta","poochyena","porygon","porygontwo","porygonz","primeape","prinplup","probopass","psyduck","vespiquen","pupitar","purrloin","purugly","pyroar","quilladin","raichu","raikou","ralts","rampardos","rapidash","raticate","rattata","rayquaza","regice","regigigas","regirock","registeel","relicanth","remoraid","reshiram","reuniclus","rhydon","rhyhorn","rhyperior","riolu","roggenrola","roselia","roserade","rotom","rufflet","sableye","salamence","samurott","sandile","sandshrew","sandslash","sawk","sawsbuck","scatterbug","sceptile","scolipede","scrafty","scraggy","scyther","seadra","seaking","sealeo","seedot","serperior","servine","sewaddle","sharpedo","shaymin","shedinja","shelgon","shellder","shellos","shelmet","shieldon","shiftry","shroomish","sigilyph","silcoon","simipour","simisage","skarmory","skiddo","skitty","skorupi","skrelp","skuntank","slakoth","sliggoo","slowpoke","smeargle","smoochum","snivy","snorlax","snorunt","solosis","solrock","spewpa","spheal","spinda","spoink","stantler","staravia","starly","starmie","staryu","stoutland","stunfisk","stunky","suicune","surskit","swablu","swadloon","swalot","swanna","swellow","swirlix","swoobat","taillow","talonflame","tangrowth","tauros","tentacruel","tepig","terrakion","throh","thundurus","timburr","togekiss","torkoal","tornadus","torterra","tranquill","treecko","trevenant","turtwig","tympole","tynamo","tyrunt","unfezant","ursaring","vanillish","vanillite","vanilluxe","vaporeon","venipede","venomoth","venonat","venusaur","vibrava","victini","victreebel","vileplume","volcanion","volcarona","voltorb","vullaby","vulpix","wailord","walrein","wartortle","watchog","weavile","weedle","weepinbell","whimsicott","whirlipede","whismur","wigglytuff","wingull","wormadam","wurmple","wynaut","xerneas","yamask","yanmega","yveltal","zapdos","zebstrika","zekrom","zigzagoon","zoroark","zorua","zubat","zygarde","seel","seismitoad","seviper","shinx","simisear","slaking","slowbro","slugma","slurpuff","snover","spearow","spiritomb","spritzee","squirtle","staraptor","swampert","swinub","sylveon","tangela","tentacool","tirtouga","torchic","toxicroak","trapinch","tropius","trubbish","tyranitar","tyrantrum","tyrogue","uxie","vigoroth","virizion","vivillon","volbeat","wailmer","weezing","whiscash","woobat","zangoose","zweilous"];
var currentArray = entireArray;
// var otherArray = ["test", "two"];
var pokemonNumber = 6;

// var onWindow is used to figure out which commands should be valid
    // onwWindow = "guessing" allows the keypresses to function
    // onWIndow = "main" allows the main menu to function
    // onWindow = "choosing" allows the user to select which library of words to use
var onWindow = "guessing";
var isGuessingEnabled = false;

// Sound variables
var muteBGM = true;
var muteSFX = true;

var missedSound = new Audio("assets/sounds/attempt.mp3");
missedSound.volume = .05;
var runSound = new Audio("assets/sounds/flee.mp3");
missedSound.volume = .05;
var successSound = new Audio("assets/sounds/Poke_Caught.wav");
successSound.volume = 0.01;
// console.log()
var completeSound = new Audio("assets/sounds/DexSound8.wav");
var bGM = new Audio("assets/sounds/107 - battle (vs wild pokemon).mp3");
bGM.loop = true;
bGM.volume = .007;

function play(sound) {
    // console.log("sound", sound)
    // console.log("missedSound", [missedSound])
    // Need to do the sound.src and match them together;
    // console.log(bGM.src);
    // console.log(sound.src);
    if(sound.src === bGM.src || sound.src === successSound.src){
        // console.log("Hey this was bgm!")
        if (muteBGM === true) {
            // don't play if BGM is muted
        }
        else {
            // console.log("bgm was played");
            sound.play();
        }
    }
    else{
        if (muteSFX === false) {
            sound.play();
        }
    }
    // if (muteBGM === false) {
    //     sound.play()
    // }
    console.log(sound.volume)
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
var difficulty = "trainer";
var difficultyImage = difficulty;
// ~~~~~~~~~~~~~~~~~~~~~~ need to create a list of caught pokemon.

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
    document.getElementById("whatquestion").innerHTML = "What will you do?";
    document.getElementById("pokemon").setAttribute("src", "assets/sprites/"+secretWord+".png");
    // console.log(difficulty)
    document.getElementById("pokemon").classList.remove(difficultyArray[0],difficultyArray[1],difficultyArray[2],difficultyArray[3]);
    document.getElementById("pokemon").classList.add(difficulty);
    difficultyImage = difficulty;
    for(i=0; i<alphabetArray.length; i++) {
        document.getElementById("letter"+alphabetArray[i]).classList.remove("disabled");
    }
    // Enabling all the buttons ~~~~~~~~~~~~~~ Need to do this for the other two buttons
    document.getElementById("inspectButton").classList.remove("disabled");
    document.getElementById("runButton").classList.remove("disabled");
    // console.log("isguessing in newgame" + isGuessingEnabled);
    play(bGM);
    // console.log("width+ " + document.getElementById("pokemon").naturalWidth)

};

function arrayify(secretWord) {
    // Clear guessedLettersArray
    guessedLettersArray = Array();
    document.getElementById("guessedLettersArray").innerHTML = guessedLettersArray;
    // Core function of arrayify that creates an array from the secret word
    // Also creates the unknown word at the same time (for a single for loop)
    // secretWordArray = [secretWord[0]];
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
    // Checks if you already guessed this letter or not. If it's not found, goes through the logic.
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
            // Checks to see if you won after updating the word
            document.getElementById("unknownWord").innerHTML = unknownWord.charAt(0).toUpperCase() + unknownWord.slice(1);
            if(unknownWord.indexOf("_") === -1) {
                document.getElementById("winMessage").innerHTML = "You win!<br>Play again?";
                document.getElementById("winMessage").classList.remove("hidden");
                document.getElementById("winwindow").classList.remove("hidden");
                // document.getElementById("pokemon").classList.add("trainer");
                document.getElementById("pokemon").classList.remove("trainer", "youngster", "acetrainer", "champion");
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
                if(currentArray.length === 0) {
                    play(completeSound);
                    document.getElementById("winMessage").innerHTML = "You caught all the pokemon! Congratulations, trainer!";
                }
                // If that button is pressed, call the newGame function
            }
        }
        // After checking for the letter, the guessedLettersArray is appended
        // Logic below could be fiex be changing guessedLettersArray = [] but the below is practice for if else logic
        // Checks if array is blank
        // if(guessedLettersArray.length === 0) {
        //     guessedLettersArray = Array(keyValue);
        // }
        // adds new values if the array is not blank
        // else {
            guessedLettersArray.push(keyValue);
            keyID = "letter" + keyValue;
            document.getElementById("letter"+keyValue).classList.add("disabled");
        // }
        document.getElementById("guessedLettersArray").innerHTML = guessedLettersArray;
        // console.log(guessedLettersArray)
    }
    // The key was already pressed, so a notification is provided that the key was pressed. 
    else {
        // console.log("This character was already pressed!")
        document.getElementById("whatquestion").innerHTML = "Already guessed " + keyValue + "!" 
    }
}

// Menu elements

function inspect() {
    if(isGuessingEnabled === true) {        
        document.getElementById("pokemon").classList.remove(difficultyImage);
        difficultyImage = difficultyArray[difficultyArray.indexOf(difficultyImage)-1]
        document.getElementById("pokemon").classList.add(difficultyImage);
    }
}
document.getElementById("inspectButton").addEventListener("click", inspect);

// function options() {
//     var optionsWindow = document.createElement("div");
//     optionsWindow.className = "options jumbotron";
//     optionsWindow.innerHTML = "Test"
//     document.getElementById("guessingWindow").appendChild(optionsWindow);
// }
// document.getElementById("optionsButton").addEventListener("click", options);

function option() {
    document.getElementById("optionwindow").classList.toggle("hidden");
}

document.getElementById("optionsButton").addEventListener("click", option)

// To allow the user to give up and try another pokemon pre-emptively
function runAway(value) {
    if(isGuessingEnabled === true) {        
        lives -= 1;
        newGame();
        document.getElementById("whatquestion").innerHTML = "You ran away... try again!"
    }
}

document.getElementById("runButton").addEventListener("click", runAway);

// Core of game elements:::
// if onWindow is true, clicking enter, n, or the button leads to the next page


// Sets the difficulty of the game and updates the buttons
var diffsettingsArray = document.getElementsByClassName("diffsettings");
for(i=0; i<diffsettingsArray.length; i++) {
    document.getElementsByClassName("diffsettings")[i].onclick = function() {
        for(j=0; j<diffsettingsArray.length; j++) {
            diffsettingsArray[j].classList.add("btn-light")
        };
        this.classList.remove("btn-light");
        this.classList.add("btn-success");
        difficulty = this.getAttribute("value");
        document.getElementById("pokemon").classList.remove(difficultyArray[0],difficultyArray[1],difficultyArray[2],difficultyArray[3]);
        document.getElementById("pokemon").classList.add(difficulty);
        // console.log(document.getElementsByClassName("diffsettings")[i].classList)
        // console.log()
    }
}

// Toggles the audio effects on/off
var audioArray = document.getElementsByClassName("audiotoggles");
for(i=0; i<audioArray.length; i++) {
    audioArray[i].onclick = function() {
        this.classList.toggle("btn-success");
        this.classList.toggle("btn-light");
        // console.log(this.id)
        if(this.id === "soundeffecttoggle") {
            console.log("This was a sfx")
            muteSFX = !muteSFX;
        }
        else{
            console.log("this was a bgm")
            muteBGM = !muteBGM;
            play(bGM);
        }
    }
}


// Game Start
document.getElementById("winMessage").innerHTML = "Guess the Pokemon!<br>The Pokemon's name will show on the top left.";
document.getElementById("unknownWord").innerHTML = unknownWord;

// when using classes, you have to create a for loop or specify which instance of the class triggers the function
for(i=0; i < document.getElementsByClassName("closingwindow").length;i++) {
    document.getElementsByClassName("closingwindow")[i].onclick = function() {
        option();
    }
};
// .addEventListener("click", option);

var alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// console.log("testing")


for (i=0; i<alphabetArray.length; i++) {
// Create an external div for col-1
// https://stackoverflow.com/questions/30616925/creating-26-alphabet-letter-buttons-with-the-for-loop-and-string-fromcharcode
    var alphabetDiv = document.createElement("div");
    alphabetDiv.className = "col-1 p-1 outerguessing";
    // Create an internal div for elements and spacing
    var alphabetDivTwo = document.createElement("div");
    alphabetDivTwo.className = "btn btn-secondary alphabetbutton btn-block p-1 disabled";
    alphabetDivTwo.setAttribute("letter", alphabetArray[i]);
    alphabetDivTwo.setAttribute("id", "letter"+alphabetArray[i]);
    alphabetDivTwo.onclick = function (e) {
        if(isGuessingEnabled === true) {
            guessing(this.getAttribute("letter"));
        }
    };
        // ("onclick", "guessing("+alphabetArray[i]+".string)");
    alphabetDivTwo.innerHTML = alphabetArray[i];
    alphabetDiv.appendChild(alphabetDivTwo);
    document.getElementById("guessingAlphabet").appendChild(alphabetDiv);
}

// Button on-click events
    // Guessing Menu events
