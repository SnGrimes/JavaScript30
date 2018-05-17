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

    function animation () {
        let sound = document.getElementById(event.target.id);
        sound.classList.toggle('play');
        setTimeout(() => {
            sound.classList.remove('play');
        }, 2000);

    }

    console.log(event.target.id);   
    switch (event.target.id) {
        case 'boom':
            boom.play();
            animation();        
            break;
        case 'clap':
            clap.play();
            break;
        case 'hihat':
            hihat.play();
            break;
        case 'kick':
            kick.play();
            break;
        case 'openhat':
            openhat.play();
            break;
        case 'ride':
            ride.play();
            break;
        case 'snare':
            snare.play();
            break;
        case 'tink':
            tink.play();
            break;
        case 'tom':
            tom.play();
            break;   

    }      
}

var drumkit = document.getElementById("drumkit").addEventListener('click', playAudio, false);