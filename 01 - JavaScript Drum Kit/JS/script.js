'use strict'

const ride = document.getElementById("ride");
const boom = document.getElementById("boom");
const kick = document.getElementById("kick");
const snare = document.getElementById("snare");
const hihat = document.getElementById("hihat");
const tom = document.getElementById("tom");

const rideCymbal = document.getElementById("ride_cymbal");
const rightTom = document.getElementById("Right_Tom");
const leftTom = document.getElementById("Left_Tom");
const floorTom = document.getElementById("floor_tom");
const kickDrum = document.getElementById("kick_drum");
const snareDrum = document.getElementById("snare_drum");
const hihatCymbal = document.getElementById("hihat_cymbal");



const ride_tl = new TimelineMax({paused: true});
const leftTom_tl = new TimelineMax({paused:true});


ride_tl.to(rideCymbal, 0.1, {rotation: 10, transformOrigin: "center center"})
        .to(rideCymbal, 2, {rotation: 0, transformOrigin:"center center", ease: Elastic.easeOut.config(2, 0.3)});

rideCymbal.addEventListener('click', function() {
    ride.currentTime = 0;
    ride.play();
    ride_tl.restart();
    ride_tl.play();
}, false);
leftTom.addEventListener('click', function() {
    tom.currentTime = 0;
    tom.play();
}, false);
rightTom.addEventListener('click', function() {
    tom.currentTime = 0;
    tom.play();
}, false);
floorTom.addEventListener('click', function() {
    boom.currentTime = 0;
    boom.play();
}, false);
kickDrum.addEventListener('click', function() {
    kick.currentTime = 0;
    kick.play();
}, false);
snareDrum.addEventListener('click', function() {
    snare.currentTime = 0;
    snare.play();
}, false);
hihatCymbal.addEventListener('click', function() {
    hihat.currentTime = 0;
    hihat.play();
}, false);


document.addEventListener('keydown', (event) => {
    console.log(`The key pressed was ${event.key}`);
    switch (event.key) {
        case 'a':
            ride.currentTime = 0;
            ride.play();
            ride_tl.restart();
            ride_tl.play();
            break;
        case 's': 
            boom.currentTime = 0;
            boom.play();
            break; 
        case 'd':
            kick.currentTime = 0;
            kick.play();
            break;
        case 'f':
            snare.currentTime = 0;
            snare.play();
            break;
        case 'j':
            hihat.currentTime = 0;
            hihat.play();
            break;
        case 'k':
        case 'l':
            tom.currentTime = 0;
            tom.play();
            break;
        default:
            console.log("No valid key pressed.");
    }
});

