//Array created for words

var words = ["chicken", "potatoes", "steak", "fish", "lasagna", "fettuccine", "ceviche", "pasta", "oysters"
, "pizza","salmon"];

//Set inital valus for win, loss, and number of guesses
var win = 0;
var loss = 0;
var selectedword, placeholder, splitword, totalLetters;
var guessNumber = 10;
var alreadyGuessed = [];
var correctguesses = 0;

//start game
function initializeGame() {
guessNumber = 10;
alreadyGuessed = [];
correctguesses = 0;

//Choose a word at random
	for (var i = 0; i < words.length; i++) {
		var wordindex = Math.floor(Math.random()*words.length);
		selectedword = words[wordindex];
		words.splice(wordindex, 1);

//Generate blanks for selected word
    placeholder = selectedword.split("");
		for (var i = 0; i < placeholder.length; i++) {
      placeholder[i]=" _";
      console.log(placeholder);
			}
	};
//Creates array with the letters of the choosen word
	splitWord = selectedword.split("");

	totalLetters = splitWord.length;
};
initializeGame();
// Check if user input is only alphabet keys
function lettersOnly() {
	var charCode = event.keyCode;
	if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)) {
		return true;
	} else {
		return false;
	}
}
// When the user presses a key, it will run the following function...
document.onkeyup = function(event) {
var userGuess = event.key

// Check if the letter has already been used
function prevGuess () {
	if (alreadyGuessed.includes(userGuess)) {
		return true;
	}
	else {
		return false;
	}
}

if (lettersOnly() == true) {
	console.log("way to go!")
	}
	else {
	alert("Please press a letter key only")
	}

// Comparing the user's guess to the letters contained in splitWord array (the picked word)
	for (var i = 0; i < splitWord.length; i++) {
		if ((prevGuess()) ==false && (lettersOnly()==true)){

			if ((userGuess == splitWord[i])) {
			// console.log ("You guessed " + userGuess);
			guessNumber--;
			alreadyGuessed.push(userGuess);
		}
		else if ((userGuess !== splitWord[i])) {
			guessNumber--;
			alreadyGuessed.push(userGuess);
		}

		else if ((prevGuess() == true) || (lettersOnly()==false)) {
			console.log("Keep guessing");
		}

	}
};

// input correct letter guessed
		for (var i = 0; i < splitWord.length; i++) {
			if (splitWord[i] == userGuess) {
				placeholder[i]=placeholder[i].replace(' _', userGuess);
			}
		}

//Winner?
correctLetters=0;
for (var i = 0; i < splitWord.length; i++) {

		if ((splitWord[i] == placeholder[i])){
			correctLetters++;

			if ((totalLetters == correctLetters) && (guessNumber > 0)) {
				document.querySelector("#selectedword").innerHTML = selectedword
				win++;
				initializeGame();
			}

		} else if ((totalLetters !== correctLetters) && (guessNumber == 0)) {
			document.querySelector("#selectedword").innerHTML = selectedword
			loss++;
			initializeGame();
		}
};


//spaces displaying for current word
	    document.querySelector("#word").innerHTML = placeholder;
//amount of wins will display
		document.querySelector("#wins").innerHTML = win;
//amount of losses will display
		document.querySelector("#losses").innerHTML = loss;
//display amount of guesses left
		document.querySelector("#guessesleft").innerHTML = guessNumber;
//display letters guessed so far
	    var guessedLetters = alreadyGuessed.toString();
		document.querySelector("#Lettersused").innerHTML = guessedLetters;
};
