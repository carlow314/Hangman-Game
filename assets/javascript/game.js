//Array created for words

var words = ["chicken", "potatoes", "steak", "fish", "lasagna", "fettuccine", "ceviche", "pasta", "oysters"
, "pizza","salmon","scallops","poke", "almonds", "carrots","peppers","jalapenos", "tilapia","clams","bolognese"];

//Set global variables
var win = 0;
var selectedword, placeholder, splitword, totalLetters,correctLetters;
var guessNumber = 10;
var alreadyGuessed = [];
var correctguesses = 0;

//start game/reset variables
function starthangman() {
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
starthangman();
// Check if user input is lowercase letters only
function lettersOnly() {
	var charCode = event.keyCode;
	if ((charCode > 96 && charCode < 123)) {
		return true;
	} else {
		return false;
	}
}
// Key press function of letter choice
document.onkeypress = function(event) {
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
if ((prevGuess()===false) && (lettersOnly())) {

if (splitWord.includes(userGuess)) {
alreadyGuessed.push(userGuess);
}

else if (splitWord != userGuess) {
guessNumber--;
alreadyGuessed.push(userGuess);
}
};


		for (var i = 0; i < splitWord.length; i++) {
			if (splitWord[i] == userGuess) {
				placeholder[i]=placeholder[i].replace(' _', userGuess);
			}
		}

correctLetters=0;
for (var i = 0; i < splitWord.length; i++) {

		if ((splitWord[i] === placeholder[i])){
			correctLetters++;

			if ((totalLetters == correctLetters) && (guessNumber > 0)) {
				document.querySelector("#selectedword").innerHTML = selectedword
				win++;
				starthangman();
			}

		} else if ((totalLetters !== correctLetters) && (guessNumber <=0)) {
			alert("You Lose! The word was:" + " " + selectedword)
			location.reload();
		}
};

//spaces displaying for current word, join function removing seperators of array
	    document.querySelector("#word").innerHTML = placeholder.join("");
//amount of wins will display
		document.querySelector("#wins").innerHTML = win;
//display amount of guesses left
		document.querySelector("#guessesleft").innerHTML = guessNumber;
//display letters guessed so far
	    var guessedLetters = alreadyGuessed.toString();
		document.querySelector("#Lettersused").innerHTML = guessedLetters;
};
