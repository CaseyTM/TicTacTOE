// User should be able to click box, and have a mark show up.
// put an onclick in the first square
// when user clicks, call function that places x in the box
// MILESTONE
// Put an x on the square
// keep track of who's turn it is
// when a square is clicked, put the symbol in and change whos turn it is
// keep player from over writing the square
var whosTurn = 1;
var player1Squares = [];
var player2Squares = [];
var someoneWon = false;
var computerPlayer = false;

// Set up winners array
	var winningCombos=[
	['a1','b1','c1'],
	['a2','b2','c2'],
	['a3','b3','c3'],
	['a1','a2','a3'],
	['b1','b2','b3'],
	['c1','c2','c3'],
	['a3','b2','c1'],
	['a1','b2','c3']
	]
// console.log(winningCombos)
function markSquare(currentSquare){
			// console.log(square.id);
	if((currentSquare.innerHTML === "X") || (currentSquare.innerHTML === "O")){
		return "taken";
	}else if(someoneWon){
	}else{
			if(whosTurn == 1){
				currentSquare.innerHTML = "X";
				whosTurn = 2;
				player1Squares.push(currentSquare.id);
				checkWin(1, player1Squares);
				if(computerPlayer){
					computerMove();
				}
			}else{
				currentSquare.innerHTML = "O";
				whosTurn = 1;
				player2Squares.push(currentSquare.id);
				checkWin(2, player2Squares);
			}
				// checkWin();
		}
	}
	function computerMove(){
		// go find a random square
		var needAsquare = true;
		var squareDivs = document.getElementsByClassName('square');
while(needAsquare){
		var randomNumber = squareDivs(Math.ceil(Math.random()*8) + 1);
		var randomSquare = squareDivs[randomNumber];
		isTaken = markSquare(randomSquare)
		console.log(isTaken)
		if(isTaken !== "taken"){
			needAsquare = false;
		}
	}
}
	function checkWin(whoJustWent, currentPlayerSquares){
		// if(whoJustWent === 1){
		// 	playerArray = player1Squares;
		// }else{
		// 	playerArray = player2Squares;
		// }
		// OUTER LOOP
		for(var i =0; i < winningCombos.length; i++){
			// INNER LOOP
			var rowCount = 0;
			console.log(player1Squares);
			for(var j = 0; j < winningCombos[i].length; j++){
				// console.log(winningCombos[i][j]);
				var winningSquare = winningCombos[i][j];
				if(currentPlayerSquares.indexOf(winningSquare) > -1){
					rowCount++;

				}
			}
			if(rowCount === 3){
				// if player had all 3 of these J's then winners
				console.log("Player" + whoJustWent + "won")
				gameOver(whoJustWent, winningCombos[i]);
				break;
			}
			// console.log("finished");
		}
	}
	function gameOver(whoJustWon, winningCombo){
		var message = "congrats to player" + whoJustWon + ", You just won with" + " , " + winningCombo
		document.getElementById('message').innerHTML = message;
		for(var i=0; i<winningCombo.length; i++){
			document.getElementById(winningCombo[i]).className += ' winning-square';

		}
		someoneWon = true;

	}