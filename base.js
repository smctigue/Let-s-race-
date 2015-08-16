console.log('JS is working');
$(document).ready(function(){

// -------------------------------------------

//Change image on move (attempt)

// $('#sonicspn').html('<css/imgs/sonicsprite.png>')
//   $('#sonicspn img').keypress( function()) {
//   		this.src = "http://i1.someimage.com/YGF3N5f.gif"
//   }
//   	function () {
//   		this.src = "css/imgs/sonicsprite.png"
//   	}


// ---------------------------------------------------

var sonic = document.getElementById('sonicguy');
var sonicontain = document.getElementById('sonicontainer');

var knuckles = document.getElementById('knucklesguy');
var knucklescont = document.getElementById('knuckcontainer');

var finishline = document.getElementById('finline');

var moveLeftS = 0;
var moveLeftK = 0;


$('#startRace').click(function(){
  var counter = 5;
  setInterval(function() {
    counter -= 1;
    if (counter >= 0) {
      span = document.getElementById("count");
      span.innerHTML = counter;
    }
    if (counter === 0) {
    	$("#count").text( "Go!" )
        clearInterval(counter);
    }
  }, 1000);
    
});



// Ends race
function endRace(a) {
	if (sonic == finishline) {
		alert("Sonic wins!");
	}


document.onkeydown = animate;
}

//Moves characters by 5 px per specific keystroke
function animate(x) {
	if (x.keyCode === 65) {
		moveLeftS += 10;
		sonicguy.style.left = moveLeftS + 'px';
	}
	if (x.keyCode === 76) {
		moveLeftK += 10;
		knucklesguy.style.left = moveLeftK + 'px';
	}

}



// Calls for race to begin!
endRace();




//End the 'round'


// Count each rounds winner on the scoreboard
// use for loop? Check rps/fund game


//Close $(document).ready
});










