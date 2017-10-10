'use strict'



function playAudio(event) {
    var boom = new Audio('sounds/boom.wav');
    var clap = new Audio('sounds/clap.wav');
    var hihat = new Audio('sounds/hihat.wav');
    var kick = new Audio('sounds/kick.wav');
    var openhat = new Audio('sounds/openhat.wav');
    var ride = new Audio('sounds/ride.wav');
    var snare = new Audio('sounds/snare.wav');
    var tink = new Audio('sounds/tink.wav');
    var tom = new Audio('sounds/tom.wav');

    event.target.getElementById
    .play();
}

var drumkit = document.getElementById("drumkit").addEventListener('click', playAudio, false);