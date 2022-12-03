var triviaQuestions = document.querySelector(".trivia-questions");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timer = document.querySelector(".timer-countdown");
var startButton = document.querySelector(".start-button");

var numQuestions = "";
var numAnswers = 3;
var winCounter = 0;
var loseCounter = 0;
var wins = false;
var timer;
var timerCount;

// Arrays used to create questions & answers on screen
var numQuestions = [];
var numAnswers = [];

// Array of questions & answers the user will guess
var questions = [
		{
		  question: "Who invented JavaScript?",
		  answers: {
			a: "Douglas Crockford",
			b: "Sheryl Sandberg",
			c: "Brendan Eich"
		  },
		  correctAnswer: "c"
		},
		{
		  question: "Which one of these is a JavaScript package manager?",
		  answers: {
			a: "Node.js",
			b: "TypeScript",
			c: "npm"
		  },
		  correctAnswer: "c"
		},
		{
		  question: "Which tool can you use to ensure code quality?",
		  answers: {
			a: "Angular",
			b: "jQuery",
			c: "RequireJS",
			d: "ESLint"
		  },
		  correctAnswer: "d"
		}
	  ];

// The init function is called when the page loads
function firstPage() {
	
}

// The startGame function is called when the start button is clicked
function startGame() {
	wins = false;
	timerCount = 60;
	// Prevents start button from being clicked when round is in progress
	startButton.disabled = true;
	renderQuestions();
}

// The winGame function is called when the win condition is met
function winGame() {
	triviaQuestions.textContent = "YOU WON!!!🏆 ";
	winCounter++;
	startButton.disabled = false;
	setWins();
}

// The loseGame function is called when timer reaches 0
function loseGame() {
	triviaQuestions.textContent = "GAME OVER";
	loseCounter++;
	startButton.disabled = false;
	setLosses();
}

// Timer that counts down from 60
function countdown() {
	var timeLeft = 60;
  	// setInterval() method to call a function to be executed every 1000 milliseconds
	var timeInterval = setInterval(function () {
	  
	  if (timeLeft > 1) {
		
		timer.textContent = timeLeft + ' seconds remaining';
		
		timeLeft--;
	  } else if (timeLeft === 1) {
		
		timerEl.textContent = timeLeft + ' second remaining';
		timeLeft--;

	  } else if (timeLeft -= 10) {
		timer.textContent = timeLeft + ' second remaining';
		timeLeft--;

	  } else {
		// Once `timeLeft` gets to 0, set `timer` to an empty string
		timer.textContent = '';
		// Use `clearInterval()` to stop the timer
		clearInterval(timeInterval);
		// Call the `displayMessage()` function
		displayMessage();
	  }
	}, 1000);
  }
  
// Creates questions on screen
function renderQuestions() {
	// Randomly picks questions from questions array
	chosenQuestions = questions[Math.floor(Math.random() * questions.length)];
	numAnswers = "3";
	// Uses loop to push answers to questions array
	for (var i = 0; i < numAnswers; i++) {
		
	}
	// Converts answer array into a string and renders it on the screen
	
}

// Updates win count on screen and sets win count to client storage
function setWins() {
	win.textContent = winCounter;
	localStorage.setItem("winCount", winCounter);
}

// Updates lose count on screen and sets lose count to client storage
function setLosses() {
	lose.textContent = loseCounter;
	localStorage.setItem("loseCount", loseCounter);
}

// These functions are used by init
function getWins() {
	// Get stored value from client storage, if it exists
	var storedWins = localStorage.getItem("winCount");
	// If stored value doesn't exist, set counter to 0
	if (storedWins === null) {
		winCounter = 0;
	} else {
		// If a value is retrieved from client storage set the winCounter to that value
		winCounter = storedWins;
	}
	//Render win count to page
	win.textContent = winCounter;
}

function getLosses() {
	var storedLosses = localStorage.getItem("loseCount");
	if (storedLosses === null) {
		loseCounter = 0;
	} else {
		loseCounter = storedLosses;
	}
	lose.textContent = loseCounter;
}

function checkWin() {
	// If the word equals the blankLetters array when converted to string, set win to true
	if (chosenWord === blanksLetters.join("")) {
		// This value is used in the timer function to test if win condition is met
		win = true;
	}
}

// Tests if guessed letter is in word and renders it to the screen.
function checkAnswers(answer) {
	var answer = false;
	for (var i = 0; i < answer; i++) {
		if (chosenQuestions[i] === answer) {
			answer = true;
		}
	}
	if (letterInWord) {
		for (var j = 0; j < answer; j++) {
			if (chosenQuestions[j] === letter) {
				answer[j] = letter;
			}
		}
		trivia.textContent = blanksLetters.join(" ");
	}
}

// Attach event listener to document to listen for key event
document.addEventListener("keydown", function (event) {
	// If the count is zero, exit function
	if (timerCount === 0) {
		return;
	}
	// Convert all keys to lower case
	;
	// Test if key pushed is letter
});

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

// Calls init() so that it fires when page opened
init();

// Bonus: Add reset button
var resetButton = document.querySelector(".reset-button");

function resetGame() {
	// Resets win and loss counts
	winCounter = 0;
	loseCounter = 0;
	// Renders win and loss counts and sets them into client storage
	setWins();
	setLosses();
}
// Attaches event listener to button
resetButton.addEventListener("click", resetGame);
