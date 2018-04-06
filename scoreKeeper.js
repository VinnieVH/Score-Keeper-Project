	// selects the button tags in the HTML document and saves them in a var (container)
	var playerOneButton = document.querySelector("#playerOne");
	var playerTwoButton = document.querySelector("#playerTwo");
	var resetButton = document.querySelector("#resetButton");

	// selects the specific tags in the HTML document and saves them in a var (container)
	var displayPlayerOne = document.querySelector("#displayPlayerOne");
	var displayPlayerTwo = document.querySelector("#displayPlayerTwo");
	var inputNumber = document.querySelector("input");
	var playingToNumber = document.querySelector("#playingToNumber");

	// adds a value to the score, so the score starts at 0 and when the button gets clicked the count increases by 1
	var playerOneScore = 0;
	var playerTwoScore = 0;

	// variables to track if the game is over or not, when a certain score is reached
	var gameOver = false;
	var winningScore = 5;


	// player 1 button logic, if NOT  (!) gameOver then the if code runs
	playerOneButton.addEventListener("click", function(){
		if (!gameOver){
			playerOneScore++;
			if(playerOneScore === winningScore) {
				displayPlayerOne.classList.add("winner");
				gameOver = true;
			}
			displayPlayerOne.textContent = playerOneScore;
		}
	});

	// player 2 button logic, if NOT  (!) gameOver then the if code runs
	playerTwoButton.addEventListener("click", function(){
		if (!gameOver) {
			playerTwoScore++;
			if(playerTwoScore === winningScore) {
				displayPlayerTwo.classList.add("winner");
				gameOver = true;
			}
			displayPlayerTwo.textContent = playerTwoScore;
		}
	});

	// reset button
	resetButton.addEventListener("click", function(){
		reset();
	});

	// number input logic 
	inputNumber.addEventListener("change", function(){
		playingToNumber.textContent = this.value;
		winningScore = Number(this.value);
		reset();
	});

	// ----- FUNCTIONS ------ //

	// logic behind the reset function
	function reset() {
		playerOneScore = 0;
		displayPlayerOne.textContent = 0;
		displayPlayerOne.classList.remove("winner");
		playerTwoScore = 0;
		displayPlayerTwo.textContent = 0;
		displayPlayerTwo.classList.remove("winner");
		gameOver = false;
	}