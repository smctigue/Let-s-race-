console.log('JS is working');
$(document).ready(function() {

    // Renders gameboard & sprites to page
    $(function render() {

        var boardTemplate = _.template($('#game-template').html());

        var racers = players.sprites;

        players.sprites.forEach(function(sprites) {

            var boardHtml = boardTemplate(sprites);
            $('#board-placeholder').append(boardHtml);
        });

    });

    // Counter - to begin race
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



// --------------------Probably unnecessary---------------------
var sonic = document.getElementById('sonicguy');
var sonicontain = document.getElementById('sonicontainer');

var knuckles = document.getElementById('knucklesguy');
var knucklescontain = document.getElementById('knuckcontainer');
// -------------------------------------------------------------


function animate(e) {

    var keyCode = window.keyCode;

    if (keyCode === 65) {
        sonic += 10;
        sonic.style.left = sonic + 'px';
    } else if (keyCode === 76) {
        sonic += 10;
        knuckles.style.left = knuckles + 'px';
    }
    winsRace();
}


function winsRace(playerName, counter) {

    var counter = 1100;

    if (sonic === counter) {
        winner = 'Sonic';
        $('.newwinner').text(winner + '!');
    } else if (knuckles === counter) {
        winner = 'Knuckles';
        $('.newwinner').text(winner + '!');
    }
};




// Data to be rendered
var players = {
    sprites: [{
        id: 0,
        image: "css/imgs/sonicsprite.png",
        name: "sonic",
    }, {
        id: 1,
        image: "css/imgs/knucklessprite.png",
        name: "knuckles",
    }]
};