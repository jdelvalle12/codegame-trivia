var triviaQuestions = document.querySelector(".trivia-questions");
var score = document.querySelector("#score");
var timerEl = document.querySelector(".timer-countdown");
var activeBtn = document.querySelector(".active-btn");
var resetBtn = document.querySelector(".active-reset-button");
var nextBtn = document.querySelector(".active-next-btn");

var randomQuestions = [];
var answers = [];
var scoreCounter = 0;
var timer;
var timerCountdown;


// Array of questions & answers the user will guess
var questions = [
		{
		  question: "Who invented JavaScript?",
		  answers: {
			a: "Douglas Crockford",
			b: "Sheryl Sandberg",
			c: "Brendan Eich",
			d: "Jack Dorsey",
		  },
		  correctAnswer: "c",
		},
		{
		  question: "Which one of these is the programming language to make webpage interactive?",
		  answers: {
			a: "Node.js",
			b: "TypeScript",
			c: "JavaScript",
			d: "CSS",
		  },
		  correctAnswer: "c"
		},
		{
		  question: "Which programming language is used to style a webpage?",
		  answers: {
			a: "style",
			b: "jQuery",
			c: "HTML",
			d: "CSS",
		  },
		  correctAnswer: "d"
		},
		{
		  questions: "What is an array used for?",
		  answers: {
			a: "To start a timer",
			b: "Store multiple values",
			c: "Used as a Font-family",
			d: "To color",
		  },
		  correctAnswer: "b"
		},
		{
		  questions : "What does HTML stand for?",
		  answers: {
			a: "Hyper Text Markup Langauge",
			b: "Hyper Test Markup Language",
			c: "Hoop Text Markdown Language",
			d: "Hyper Test Markdown Language",
		  },
		  correctAnswer: "a"
		},
		displayQuestions()
	];

// The initPage() function is called when the page loads
function initPage() {
	
	getScore();
	displayQuestions();
	displayMessage();
}

function storeQuestions() {
	localStorage.setItem("question", JSON.stringify(question));
}

// Display questions on screen
function displayQuestions(question) {
	var question = [];
	var answers = [];
	for (var i = 0; i < randomQuestions.length; i++) {
		randomQuestions.addEventListener('click', function () {
			answers = [];
		});
	};
		return question;
		
}
console.log(questions);

var nextBtn = document.querySelector(".active-next-btn");

function displayNextTriviaQuestions () {
	for (var j = 0; j < randomQuestions.length; j++) {
		randomQuestions.addEventListener('click', function () {
			this.questions(questions);
		});
		
	}
}

// The startGame function is called when the start button is clicked
function startGame() {
	
	timerCount = 60;
	// Prevents start button from being clicked when round is in progress
	activeBtn.disabled = true;
	displayQuestions();
	startCountdown();
}

// The finishGame function is called when the finish condition is met
function finishGame() {
	triviaQuestions.textContent = "Your Score!!!";	
	activeBtn.disabled = false;	
}

// The endGame function is called when timer reaches 0
function endGame() {
	triviaQuestions.textContent = "GAME OVER";
	activeBtn.disabled = false;
}

var message = "Game Over";

function displayMessage(message) {
	var message = "";
	message.textContent = "GAME OVER";
	return message;
}
//console.log(message);
// Timer that counts down from 60
function startCountdown() {
	var timeLeft = 60;
  	// setInterval() method to call a function to be executed every 1000 milliseconds
	var timeInterval = setInterval(function () {
	  
	  if (timeLeft > 0) {
		
		timerEl.textContent = timeLeft + " " + ' seconds remaining';
		
		timeLeft--;

		if(timerCount > 0 ) {
			clearInterval(timer);
		}
	  } else if (timeLeft === 0) {
		
		timerEl.textContent = timeLeft + " " + ' seconds remaining';
		timeLeft--;
		
		if(timerCount > 0 ) {
			clearInterval(timer);
		}
	  } else {
		// Once `timeLeft` gets to 0, set `timerEl` to an empty string
		timerEl.textContent = '';
		// Use `clearInterval()` to stop the timer
		clearInterval(timeInterval);
		// Call the `displayMessage()` function
		displayMessage(message);
	  }
	}, 1000);
  }

  //Subtracts time by 10 seconds if user gets wrong answer 
  function subtractTime () {
	var timeLeft = 60;

   if(randomQuestions!== answers) {

	var timeInterval = setInterval(function () {
	(timeLeft -= 10) ;
	timerEl.textContent = timeLeft + " " + 'seconds remaining';
	timeLeft--;
	}, 1000);
   }
  }

// Updates score count on screen and sets score count to client storage
function setScore() {
	score.textContent = scoreCounter;
	localStorage.setItem("score", scoreCounter);
}

// These functions are used by init
function getScore() {
	// Get stored value from client storage, if it exists
	var storedScore = localStorage.getItem("score");
	// If stored value doesn't exist, set counter to 0
	if (storedScore === null) {
		scoreCounter = 0;
	} else {
		// If a value is retrieved from client storage set the scoreCounter to that value
		scoreCounter = storedScore;
	}
	//Render score count to page
	score.textContent = scoreCounter;
}

// Tests if guessed answer is wrong in question and renders it to the screen.
function checkAnswers(answer) {
	var answer = false;
	for (var i = 0; i < answer; i++) {
		if (randomQuestions[i] === answer) {
			answer = true;
		} else (randomQuestions[i] !== answer) 
			return false;
	    }
}


// Attach event listener to start button to call startGame function on click
activeBtn.addEventListener('click', startGame);

// Calls initPage() so that it fires when page opened
initPage();

//Reset button to reset the time
var resetBtn = document.querySelector(".active-reset-button");

function resetGame() {
	var timeLeft = 60;
	
	var timeout = setTimeout(function () {
	
		if (timeLeft === 60) {
			timerEl.textContent = timeLeft + " " + 'seconds remaining';
			timeLeft--;
			clearTimeout(timeout) ;
				return;
			}
	  },
	 1000);
}
// Attaches event listener to button
resetBtn.addEventListener("click", resetGame);