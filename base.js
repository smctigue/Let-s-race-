console.log('JS is working');



// var sonic = document.getElementById('sonic');
// var knuckles = document.getElementById('knuckles');
// var board = document.getElementById('gameboard');
// var moveRight = 0;


//-------------------------------------------

// $('#sonicspn').html('<css/imgs/sonicsprite.png>')
//   $('#sonicspn img').keypress( function()) {
//   		this.src = "http://i1.someimage.com/YGF3N5f.gif"
//   }
//   	function () {
//   		this.src = "css/imgs/sonicsprite.png"
//   	}

$(document).ready(function() {

	$('.sonic').on("keypress", function moveSonic(event) {

	    if (keyCode === 65 ) {
	      $(".sonic").animate({ 'left' : '-=2px'});
		};
	});
});