console.log('JS is working');
$(document).ready(function(){

// -------------------------------------------

// Change image on move (attempt)
// $('#sonicspn').html('<css/imgs/sonicsprite.png>')
//   $('#sonicspn img').keypress( function()) {
//   		this.src = "http://i1.someimage.com/YGF3N5f.gif"
//   }
//   	function () {
//   		this.src = "css/imgs/sonicsprite.png"
//   	}


// ---------------------------------------------------

// var sonic = document.getElementById('sonicguy');
// var sonicontain = document.getElementById('sonicontainer');

// var knuckles = document.getElementById('knucklesguy');
// var knucklescont = document.getElementById('knuckcontainer');

var moveLeft = 0;

//Moves characters by 2 px per specific keystroke
function animate(x) {
	if (x.keyCode === 65) {
		moveLeft += 2;
		sonicguy.style.left = moveLeft + 'px';
	}
	else if (x.keyCode === 76) {
		moveLeft += 2;
		knucklesguy.style.left = moveLeft + 'px';
	}
}

document.onkeydown = animate;






//Close $(document).ready
});










