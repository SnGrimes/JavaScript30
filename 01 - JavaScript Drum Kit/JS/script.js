'use strict'

const ride = document.getElementById("ride");
const boom = document.getElementById("boom");
const kick = document.getElementById("kick");
const snare = document.getElementById("snare");
const hihat = document.getElementById("hihat");
const tom = document.getElementById("tom");

const rideCymbal = document.getElementById("ride_cymbal").addEventListener('click', function() {
    ride.currentTime = 0;
    ride.play();
}, false);
const leftTom = document.getElementById("Left_Tom").addEventListener('click', function() {
    tom.currentTime = 0;
    tom.play();
}, false);
const rightTom = document.getElementById("Right_Tom").addEventListener('click', function() {
    tom.currentTime = 0;
    tom.play();
}, false);
const floorTom = document.getElementById("floor_tom").addEventListener('click', function() {
    boom.currentTime = 0;
    boom.play();
}, false);
const kickDrum = document.getElementById("kick_drum").addEventListener('click', function() {
    kick.currentTime = 0;
    kick.play();
}, false);
const snareDrum = document.getElementById("snare_drum").addEventListener('click', function() {
    snare.currentTime = 0;
    snare.play();
}, false);
const hihatCymbal = document.getElementById("hihat_cymbal").addEventListener('click', function() {
    hihat.currentTime = 0;
    hihat.play();
}, false);
const test = document.getElementById("ride_cymbal");
document.addEventListener('keydown', (event) => {
    console.log(`The key pressed was ${event.key}`);
    switch (event.key) {
        case 'a':
            ride.currentTime = 0;
            ride.play();
            TweenLite.to(test, 3, {rotate: 45});
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

