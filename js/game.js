$(document).ready(function() {
//listing squares
const sq1 = $('#square1');
const sq2 = $('#square2');
const sq3 = $('#square3');
const sq4 = $('#square4');
const sq5 = $('#square5');
const sq6 = $('#square6');
const sq7 = $('#square7');
const sq8 = $('#square8');
const sq9 = $('#square9');
//play vaid is assigning a square
let playValid = false;
// winning will be true
let win = false;

// asking if we can play tile with X or O
function validatePlay(squareplayed) {
	if ( $(squareplayed).hasClass('free') ) {
		playValid = true;
		$("#playedSquare").hide();
		$("#drawMessage").hide();
	} else {
		playValid = false;
		return false;
	}
}
// this will be to clear all squares and messages
function clearBoard() {
	$('.tile').removeClass('played');
	$('.tile').removeClass('O-play');
	$('.tile').removeClass('X-play');
	$('.tile').html('');
	$('.tile').addClass('free');
	$("#winMessage").hide();
	$("#loseMessage").hide();
	$("#drawMessage").hide();
	$("#playedSquare").hide();
}
// this will show a message if X wins or if 0 wins
function winAlert(player) {
	win = true;
	if (player === "X") {
		$("#winMessage").show();
	} else {
	win = false;
		$("#loseMessage").show();
	}
}

//Check if X win or is O wins
function checkWin() {

	if ( sq1.hasClass('X-play') && sq2.hasClass('X-play') && sq3.hasClass('X-play') ) {
		winAlert("X");
	} else if ( sq1.hasClass('O-play') && sq2.hasClass('O-play') && sq3.hasClass('O-play') ) {
		winAlert("O");
	}

	else if ( sq4.hasClass('X-play') && sq5.hasClass('X-play') && sq6.hasClass('X-play') ) {
		winAlert("X");
	} else if ( sq4.hasClass('O-play') && sq5.hasClass('O-play') && sq6.hasClass('O-play') ) {
		winAlert("O");
	}

	else if ( sq7.hasClass('X-play') && sq8.hasClass('X-play') && sq9.hasClass('X-play') ) {
		winAlert("X");
	} else if ( sq7.hasClass('O-play') && sq8.hasClass('O-play') && sq9.hasClass('O-play') ) {
		winAlert("O");
	}

	else if ( sq1.hasClass('X-play') && sq4.hasClass('X-play') && sq7.hasClass('X-play') ) {
		winAlert("X");
	} else if ( sq1.hasClass('O-play') && sq4.hasClass('O-play') && sq7.hasClass('O-play') ) {
		winAlert("O");
	}

	else if ( sq5.hasClass('X-play') && sq2.hasClass('X-play') && sq8.hasClass('X-play') ) {
		winAlert("X");
	} else if ( sq5.hasClass('O-play') && sq2.hasClass('O-play') && sq8.hasClass('O-play') ) {
		winAlert("O");
	}

	else if ( sq6.hasClass('X-play') && sq9.hasClass('X-play') && sq3.hasClass('X-play') ) {
		winAlert("X");
	} else if ( sq6.hasClass('O-play') && sq9.hasClass('O-play') && sq3.hasClass('O-play') ) {
		winAlert("O");
	}

	else if ( sq1.hasClass('X-play') && sq5.hasClass('X-play') && sq9.hasClass('X-play') ) {
		winAlert("X");
	} else if ( sq1.hasClass('O-play') && sq5.hasClass('O-play') && sq9.hasClass('O-play') ) {
		winAlert("O");
	}

	else if ( sq5.hasClass('X-play') && sq7.hasClass('X-play') && sq3.hasClass('X-play') ) {
		winAlert("X");
	} else if ( sq5.hasClass('O-play') && sq7.hasClass('O-play') && sq3.hasClass('O-play') ) {
		winAlert("O");
	}
}
//No one wins, so a draw and will display a draw message
function checkDraw() {
	if ( !($('.tile').hasClass('free')) ) {
			$("#drawMessage").show();
			$("#playedSquare").hide();
	}
}

// this is the computer player funtions
function Oplay() {

// Function for when O plays tactically
	function Oplaying(square) {

		validatePlay(square)

		if (playValid) {
			square.removeClass('free');
			square.addClass('played');
			square.addClass('O-play');
			square.html("O");

		}
	}

// Function for when O plays randomly
	function Orandomplay() {
		for (let i = 0; i < 10; i++) {
// Loop to find a valid play

			const randomNumber = Math.floor((Math.random() * 9) + 1);
			const randomSquare = $('#square'+randomNumber);
			validatePlay(randomSquare);
			if (playValid) {

				randomSquare.removeClass('free');
				randomSquare.addClass('played');
				randomSquare.addClass('O-play');
				randomSquare.html("O");
				break;
			}
		}
	}


	// Tactical Plays

	win123_sq3 = ( sq1.hasClass('X-play') && sq2.hasClass('X-play') || sq1.hasClass('O-play') && sq2.hasClass('O-play') ) && !(sq3.hasClass('played'))
	win123_sq2 = ( sq1.hasClass('X-play') && sq3.hasClass('X-play') || sq1.hasClass('O-play') && sq3.hasClass('O-play') ) && !(sq2.hasClass('played'))
	win123_sq1 = ( sq3.hasClass('X-play') && sq2.hasClass('X-play') || sq3.hasClass('O-play') && sq2.hasClass('O-play') ) && !(sq1.hasClass('played'))

	win456_sq6 = ( sq4.hasClass('X-play') && sq5.hasClass('X-play') || sq4.hasClass('O-play') && sq5.hasClass('O-play') ) && !(sq6.hasClass('played'))
	win456_sq5 = ( sq4.hasClass('X-play') && sq6.hasClass('X-play') || sq4.hasClass('O-play') && sq6.hasClass('O-play') ) && !(sq5.hasClass('played'))
	win456_sq4 = ( sq5.hasClass('X-play') && sq6.hasClass('X-play') || sq5.hasClass('O-play') && sq6.hasClass('O-play') ) && !(sq4.hasClass('played'))

	win789_sq9 = ( sq7.hasClass('X-play') && sq8.hasClass('X-play') || sq7.hasClass('O-play') && sq8.hasClass('O-play') ) && !(sq9.hasClass('played'))
	win789_sq8 = ( sq7.hasClass('X-play') && sq9.hasClass('X-play') || sq7.hasClass('O-play') && sq9.hasClass('O-play') ) && !(sq8.hasClass('played'))
	win789_sq7 = ( sq8.hasClass('X-play') && sq9.hasClass('X-play') || sq8.hasClass('O-play') && sq9.hasClass('O-play') ) && !(sq7.hasClass('played'))

	win147_sq7 = ( sq1.hasClass('X-play') && sq4.hasClass('X-play') || sq1.hasClass('O-play') && sq4.hasClass('O-play') ) && !(sq7.hasClass('played'))
	win147_sq4 = ( sq1.hasClass('X-play') && sq7.hasClass('X-play') || sq1.hasClass('O-play') && sq7.hasClass('O-play') ) && !(sq4.hasClass('played'))
	win147_sq1 = ( sq4.hasClass('X-play') && sq7.hasClass('X-play') || sq4.hasClass('O-play') && sq7.hasClass('O-play') ) && !(sq1.hasClass('played'))

	win528_sq8 = ( sq5.hasClass('X-play') && sq2.hasClass('X-play') || sq5.hasClass('O-play') && sq2.hasClass('O-play') ) && !(sq8.hasClass('played'))
	win528_sq2 = ( sq5.hasClass('X-play') && sq8.hasClass('X-play') || sq5.hasClass('O-play') && sq8.hasClass('O-play') ) && !(sq2.hasClass('played'))
	win528_sq5 = ( sq2.hasClass('X-play') && sq8.hasClass('X-play') || sq2.hasClass('O-play') && sq8.hasClass('O-play') ) && !(sq5.hasClass('played'))

	win693_sq3 = ( sq6.hasClass('X-play') && sq9.hasClass('X-play') || sq6.hasClass('O-play') && sq9.hasClass('O-play') ) && !(sq3.hasClass('played'))
	win693_sq9 = ( sq6.hasClass('X-play') && sq3.hasClass('X-play') || sq6.hasClass('O-play') && sq3.hasClass('O-play') ) && !(sq9.hasClass('played'))
	win693_sq6 = ( sq9.hasClass('X-play') && sq3.hasClass('X-play') || sq9.hasClass('O-play') && sq3.hasClass('O-play') ) && !(sq6.hasClass('played'))

	win159_sq9 = ( sq1.hasClass('X-play') && sq5.hasClass('X-play') || sq1.hasClass('O-play') && sq5.hasClass('O-play') ) && !(sq9.hasClass('played'))
	win159_sq5 = ( sq1.hasClass('X-play') && sq9.hasClass('X-play') || sq1.hasClass('O-play') && sq9.hasClass('O-play') ) && !(sq5.hasClass('played'))
	win159_sq1 = ( sq5.hasClass('X-play') && sq9.hasClass('X-play') || sq5.hasClass('O-play') && sq9.hasClass('O-play') ) && !(sq1.hasClass('played'))

	win573_sq3 = ( sq5.hasClass('X-play') && sq7.hasClass('X-play') || sq5.hasClass('O-play') && sq7.hasClass('O-play') ) && !(sq3.hasClass('played'))
	win573_sq5 = ( sq5.hasClass('X-play') && sq3.hasClass('X-play') || sq5.hasClass('O-play') && sq3.hasClass('O-play') ) && !(sq5.hasClass('played'))
	win573_sq7 = ( sq7.hasClass('X-play') && sq3.hasClass('X-play') || sq7.hasClass('O-play') && sq3.hasClass('O-play') ) && !(sq7.hasClass('played'))



	// Win 1 2 3
	if ( win123_sq3 ) {
		Oplaying(sq3)
	} else if ( win123_sq2 ) {
		Oplaying(sq2)
	} else if ( win123_sq1 )  {
		Oplaying(sq1)
	}

	// Win 4 5 6
	else if ( win456_sq6 ) {
		Oplaying(sq6)
	} else if ( win456_sq5 ) {
		Oplaying(sq5)
	} else if ( win456_sq4 ) {
		Oplaying(sq4)
	}

	// Win 7 8 9
	else if ( win789_sq9 ) {
		Oplaying(sq9)
	} else if ( win789_sq8 ) {
		Oplaying(sq8)
	} else if ( win789_sq7 ) {
		Oplaying(sq7)
	}

	// Win 1 4 7
	else if ( win147_sq7 ) {
		Oplaying(sq7)
	} else if ( win147_sq4 ) {
		Oplaying(sq4)
	} else if ( win147_sq1 ) {
		Oplaying(sq1)
	}

	// Win 5 2 8
	else if ( win528_sq8 ) {
		Oplaying(sq8)
	} else if ( win528_sq2 ) {
		Oplaying(sq2)
	} else if ( win528_sq5 ) {
		Oplaying(sq5)
	}

	// Win 6 9 3
	else if ( win693_sq3 ) {
		Oplaying(sq3)
	} else if ( win693_sq9 ) {
		Oplaying(sq9)
	} else if ( win693_sq6 ) {
		Oplaying(sq6)
	}

	// Win 1 5 9
	else if ( win159_sq9 ) {
		Oplaying(sq9)
	} else if ( win159_sq5 ) {
		Oplaying(sq5)
	} else if ( win159_sq1 ) {
		Oplaying(sq1)
	}

	// Win 5 7 3
	else if ( win573_sq3 ) {
		Oplaying(sq3)
	} else if ( win573_sq7 ) {
		Oplaying(sq7)
	} else if ( win573_sq5 ) {
		Oplaying(sq5)
	}


	else {
		Orandomplay();
	}
	checkDraw();
	checkWin();
}

//this is so that O will not play again if X is click on a played square and show a message that a played squaer have been clicked again
$('.tile').on('click', function Xplay() {
  if ($(this).html() === 'X' || $(this).html() === 'O' ) {
		$("#playedSquare").show();
		$("#winMessage").hide();
		$("#loseMessage").hide();
		$("#drawMessage").hide();
    return
		}
    $(this).removeClass('free');
    $(this).addClass('played');
    $(this).addClass('X-play');
    $(this).html("X");
		Oplay();
	});

// reset button to start the game again
$('#reset-button').on('click', function() {
	clearBoard();
	})


}); // end document ready
