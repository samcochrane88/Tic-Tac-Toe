$(document).ready(function() {

    const sq1 =$('#square1');
    const sq2 =$('#square2');
    const sq3 =$('#square3');
    const sq4 =$('#square4');
    const sq5 =$('#square5');
    const sq6 =$('#square6');
    const sq7 =$('#square7');
    const sq8 =$('#square8');
    const sq9 =$('#square9');
const playValid = false;
const win = false;

function playValid (squareplayed) {
  if ($(squareplayed).hasClass('free')) {
    else{
      playValid= false;
      return false;
    }
  }
}

function clearboard() {
  $('.tile').removeClass('played');
  $('.tile').removeClass('O-play');
  $('.tile').removeClass('X-play');
  $('.tile').html(''); // I HAVE KNOW WHATS HAPPEING HERE ABOAUT THIS
  $('.tile').addClass('free');
}

function winAlert (player) {
  win =true;

  if (player == "X"){
    alert("Congratulations, you won!")
  }else {
      alert("You lost! Try again")
    }
    clearBoard ();
}

function checkWin () {

  if (sq1.hasClass ('X-play')&& sq2.hasClass('X-play') && sq3.hasClass ('X-play'))
winAlert ("X");
    {
  } else if (sq1.hasClass ('O-play')&& sq2.hasClass('O-play') && sq3.hasClass ('O-play'))

}




})
