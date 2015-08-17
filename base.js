console.log('JS is working');
$(document).ready(function(){

// ---------------------------------------------------

// var sonic = document.getElementById('sonicguy');
// var sonicontain = document.getElementById('sonicontainer');

// var knuckles = document.getElementById('knucklesguy');
// var knucklescontain = document.getElementById('knuckcontainer');

var moveLeftS = 0;
var moveLeftK = 0;



// Get ready to race!
// Start button starts race 

$('#startbtn').click(function(){
  var counter = 5;
  setInterval(function() {
      counter -= 1;
    if (counter >= 0) {
      span = document.getElementById("count");
      span.innerHTML = counter;
    }
    if (counter === 0) {
    	$("#count").text( "Race!" )
        clearInterval(counter);

        //Calls function animate()
        document.onkeydown = animate;
    }
  }, 1000);
});


/* Move characters 10px per specific keypress and 
stops them once crossed the finish line */

function animate(x) {
	var winner;
	if (moveLeftS === 1000) {
		winner = 'Sonic';
		$('.scoreboard').text(winner + ' is the winner!');
	}
	else if (moveLeftK === 1000) {
		winner = 'Knuckles';
		$('.scoreboard').text(winner + ' is the winner!');
	}
	else if (x.keyCode === 65) {
		moveLeftS += 10;
		sonicguy.style.left = moveLeftS + 'px';
	}
	else if (x.keyCode === 76) {
		moveLeftK += 10;
		knucklesguy.style.left = moveLeftK + 'px';
	}
}






// ---------------------------------------------------

//Close $(document).ready
});




