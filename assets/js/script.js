var triviaQuestions = document.querySelector(".trivia-questions");
var questionCount = document.querySelector("#question-count");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timer = document.querySelector(".timer-countdown");
var startButton = document.querySelector(".start-button");

var randomQuestions = "";
var answers = 4;
var winCounter = 0;
var loseCounter = 0;
var wins = false;
var timer;
var timerCountdown;


// Array of questions & answers the user will guess
var question = [
		{
		  question: "Who invented JavaScript?",
		  answers: {
			a: "Douglas Crockford",
			b: "Sheryl Sandberg",
			c: "Brendan Eich",
			d: "",
		  },
		  correctAnswer: "c",
		},
		{
		  question: "Which one of these is a JavaScript package manager?",
		  answers: {
			a: "Node.js",
			b: "TypeScript",
			c: "npm",
			d: "",
		  },
		  correctAnswer: "c"
		},
		{
		  question: "Which tool can you use to ensure code quality?",
		  answers: {
			a: "Angular",
			b: "jQuery",
			c: "RequireJS",
			d: "ESLint",
		  },
		  correctAnswer: "d"
		},
		{
		  questions: "",
		  answers: {
			a: "",
			b: "",
			c: "",
			d: "",
		  },
		  correctAnswer: ""
		},
		{
		  questions : "",
		  answers: {
			a: "",
			b: "",
			c: "",
			d: "",
		  },
		  correctAnswer: ""
		},
	];

// The initPage() function is called when the page loads
function initPage() {

}

function nextPage() {
	var storedQuestion = JSON.parse(localStorage.getItem("question"));

	if (storedQuestion !== null) {
		question = storedQuestion;
	}
	
}

function storeQuestions() {
	localStorage.setItem("question", JSON.stringify(question));
}

// Display questions on screen
function displayQuestions() {
	// Randomly picks questions from questions array
		triviaQuestions.innerHTML = "";
		questionCount.textContent = randomQuestions.length;
		chosenQuestions = randomQuestions[Math.floor(Math.random() * randomQuestions.length)];
		answers = 4;
		// Uses loop to push answers to questions array
		for (var i = 0; i < randomQuestions.length; i++) {
			var question = question[i];

			var button = document.createElement("button");
			button.textContent = "submit";

		}
		 return this.question + " " + this.answer;		
	}
	displayQuestions();

// The startGame function is called when the start button is clicked
function startGame() {
	wins = false;
	timerCount = 60;
	// Prevents start button from being clicked when round is in progress
	startButton.disabled = true;
	displayQuestions();
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

var message = "Game Over"
// Timer that counts down from 60
function countdown() {
	var timeLeft = 60;
  	// setInterval() method to call a function to be executed every 1000 milliseconds
	var timeInterval = setInterval(function () {
	  
	  if (timeLeft > 0) {
		
		timer.textContent = timeLeft + ' seconds remaining';
		
		timeLeft--;
	  } else if (timeLeft === 0) {
		
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
// Time subtracts when user gets answer wrong
  function subractTime() {
	var timeLeft = 60;
	
	var timeout = setTimeout(function () {
	
		if (timeLeft -= 10) {
			timer.textContent = timeLeft + 'second remaining';
			timeLeft--;
			clearTimeout(timeout);
	  }
	}, 1000);
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
	if (chosedQuestion === answers.join()) {
		win = true;
	}
}

// Tests if guessed answer is in question and renders it to the screen.
function checkAnswers(answer) {
	var answer = false;
	for (var i = 0; i < answer; i++) {
		if (chosenQuestions[i] === answer) {
			answer = true;
		} else (chosenQuestions[i] !== answer) 
			return wrong;
	    }
	}



// Attach event listener to start button to call startGame function on click
startButton.addEventListener('click', startGame);

// Calls initPage() so that it fires when page opened
initPage();

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
