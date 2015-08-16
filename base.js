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

var moveLefts = 0;
var moveLeftk = 0;

//Moves characters by 2 px per specific keystroke
function animate(x) {
	if (x.keyCode === 65) {
		moveLefts += 5;
		sonicguy.style.left = moveLefts + 'px';
	}
	if (x.keyCode === 76) {
		moveLeftk += 5;
		knucklesguy.style.left = moveLeftk + 'px';
	}
}
document.onkeydown = animate;






//Close $(document).ready
});










