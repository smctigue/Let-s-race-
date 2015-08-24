console.log('JS is working');

$(document).ready(function() {

    $('#startbtn').click(function() {
        var counter = 3;
        setInterval(function() {
            counter -= 1;
            if (counter >= 0) {
                span = document.getElementById("count");
                span.innerHTML = counter;
            }
            if (counter === 0) {
                $("#count").text("Go!")
                clearInterval(counter);

                //Calls function animate()
                document.onkeydown = animate;
            }
        }, 1000);
    });

});

/* Move characters 10px per specific keypress */
var moveSonic = 0;
var moveKnuckles = 0;

function animate(e) {
    if (e.keyCode === 65 && moveSonic <= 880) {
        moveSonic += 10;
        sonicguy.style.left = moveSonic + 'px';
    } else if (e.keyCode === 76 && moveKnuckles <= 880) {
        moveKnuckles += 10;
        knucklesguy.style.left = moveKnuckles + 'px';
    }
    getWinner();
};


function getWinner() {
    if (moveSonic === 880) {
        $("#player1").html(function() {
            $(".newwinner").text(player1.value + '!');
        });
    } else if (moveKnuckles === 880) {
        $("#player1").html(function() {
            $(".newwinner").text(player2.value + '!');
        });
    };
};




// --------------------------------------------------
// var sonic = document.getElementById('sonicguy');
// var sonicontain = document.getElementById('sonicontainer');

// var knuckles = document.getElementById('knucklesguy');
// var knucklescontain = document.getElementById('knuckcontainer');
// ---------------------------------------------------

// ---------------------------------------------------