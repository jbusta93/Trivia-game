$(document).ready(function() {

function startScreen() {
	startContent = "<p class='text-center main-button-container'><a class='btn btn-info btn-lg btn-block start-button'>Start Quiz</a></p>";
	$(".quiz-area").html(startContent);
}

startScreen();


$("body").on("click", ".start-button", function(event){
	event.preventDefault();
	generateQuestion();

	timer();

});

$("body").on("click", ".answer", function(event){
	selectedAnswer = $(this).text();
	if(selectedAnswer === correctAnswers[questionNumber]) {

		clearInterval(timerInterval);
		correctAnswer();
	}
	else {
		clearInterval(timerInterval);
		wrongAnswer();
	}
});

$("body").on("click", ".reset-button", function(event){
	resetGame();
});

});

function OutOfTime() {
	unansweredCount++;
	gameContent = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionNumber] + "</p>";
	imageContent = "<img class='img-wrong' src='assets/images/broken.jpg'>";
	$(".quiz-area").html(gameContent);
	$(".img-area").html(imageContent);
	setTimeout(nextQuestion, 4000);
}

function correctAnswer() {
	correctCount++;
	gameContent = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionNumber] + "</p>";
	imageContent = imageArray[questionNumber];
	$(".quiz-area").html(gameContent);
	$(".img-area").html(imageContent);
	setTimeout(nextQuestion, 4000);
}

function wrongAnswer() {
	incorrectCount++;
	gameContent = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionNumber] + "</p>";
	imageContent = "<img class='img-wrong' src='assets/images/broken.jpg'>";
	$(".quiz-area").html(gameContent);
	$(".img-area").html(imageContent);
	setTimeout(nextQuestion, 4000);
}

function generateQuestion() {
	gameContent = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionNumber] + "</p><a class='btn btn-dark btn-lg btn-block text-white answer'>A. " + answerArray[questionNumber][0] + "</a><a class='btn btn-dark btn-lg btn-block text-white answer'>B. "+answerArray[questionNumber][1]+"</a><a class='btn btn-dark btn-lg btn-block text-white answer'>C. "+answerArray[questionNumber][2]+"</a><a class='btn btn-dark btn-lg btn-block text-white answer'>D. "+answerArray[questionNumber][3]+"</a>";
	$(".quiz-area").html(gameContent);
}

function nextQuestion() {
	if (questionNumber < 7) {
	questionNumber++;
	$(".img-area").html("");
	generateQuestion();
	counter = 30;
	timer();
	}
	else {
		$(".img-area").html("");
		results();
	}
}

function timer() {
	timerInterval = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(timerInterval);
			OutOfTime();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function results() {
	gameContent = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctCount + "</p>" + "<p>Wrong Answers: " + incorrectCount + "</p>" + "<p>Unanswered: " + unansweredCount + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-info btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
	$(".quiz-area").html(gameContent);
}

function resetGame() {
	questionNumber = 0;
	correctCount = 0;
	incorrectCount = 0;
	unansweredCount = 0;
	counter = 30;
	generateQuestion();
	timer();
}

var startScreen;
var gameContent;
var counter = 30;
var questionArray = ["What Capcom game features a blue android who can blast energy from his hand?", "What Sega game features Arthur in his quest against an army of undead to save the princess?", "What archaic text adventure game makes the player survive a journey to the Western United States, avoiding all causes of death from starvation to dysentery?", "What Nintendo fighting game brought major characters like Mario, Link and Samus to the same stage to see who can knock all other players off screen first?", "What groundbreaking game was created by a programmer who never profited from its distribution due to the laws of the Soviet Union?", "What PlayStation game features a furry mammal journeying through dimensions with a magical mask to fight a mad scientist?", "What computer game contains a secret cow level?", "In what game is the cake a lie?"];
var answerArray = [["Hyperman", "Megaman", "Gigaman", "Super Metroid"], ["Ghouls 'n Ghosts","King's Quest","Dragon's Lair","The Evil Dead"], ["Survivor", "Red Dead Redemption", "Don't Starve", "Oregon Trail"], ["Killer Instinct","Clay Fighters","Nintendo AllStars","Super Smash Bros"], ["Pong", "MineSweeper", "Tetris", "Solitaire"], ["Crash Bandicoot","Jak and Daxter","Ratchet and Clank","Spyro"], ["Diablo", "Diablo 2", "Starcraft", "Warcraft"], ["Half-Life","Team Fortress","FEAR","Portal"]];
var imageArray = ["<img src='assets/images/megaman.gif'>", "<img src='assets/images/ghouls.jpg'>", "<img src='assets/images/oregontrail.jpg'>", "<img src='assets/images/smash.jpg'>", "<img src='assets/images/tetris.jpg'>", "<img src='assets/images/crash.jpg'>", "<img src='assets/images/diablo2.jpg'>", "<img src='assets/images/portal.jpg'>"];
var correctAnswers = ["B. Megaman", "A. Ghouls 'n Ghosts", "D. Oregon Trail", "D. Super Smash Bros", "C. Tetris", "A. Crash Bandicoot", "B. Diablo 2", "D. Portal"];
var questionNumber = 0;
var selecterAnswer;
var timerInterval;
var correctCount = 0;
var incorrectCount = 0;
var unansweredCount = 0;
