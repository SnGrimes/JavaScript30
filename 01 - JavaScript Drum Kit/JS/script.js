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
const leftTom_all = document.getElementById("Left_Tom_all");
const rightTom_all = document.getElementById("Right_Tom_all");
const floorTom = document.getElementById("floor_tom");
const kickDrum = document.getElementById("kick_drum");
const snareDrum = document.getElementById("snare_drum");
const hihatCymbal = document.getElementById("hihat_cymbal");

const ride_tl = new TimelineMax({paused: true});
const leftTom_tl = new TimelineMax({paused:true});
const rightTom_tl = new TimelineMax({paused:true});
const floorTom_tl = new TimelineMax({paused:true});
const kickDrum_tl = new TimelineMax({paused:true});
const snareDrum_tl = new TimelineMax({paused:true});
const hihatCymbal_tl = new TimelineMax({paused:true});

/** 
 * Drum element timelines
 */
ride_tl.to(rideCymbal, 0.1, {rotation: 10, transformOrigin: "center center"})
        .to(rideCymbal, 2, {rotation: 0, transformOrigin:"center center", ease: Elastic.easeOut.config(2, 0.3)});
leftTom_tl.to(leftTom, 0.1, {scaleX: 1.01, transformOrigin: "center center", ease: Expo.easeOut})
          .to(leftTom, 0.1, {scaleY: 0.94, transformOrigin: "center center", ease: Expo.easeOut}, '0')
          .to(leftTom_all, 0.1, {rotation: -3, transformOrigin: "right center", ease: Elastic.easeOut}, '0')
          .to(leftTom, 0.4, {scale: 1, transformOrigin: "center center", ease: Elastic.easeOut})
          .to(leftTom_all, 0.6, {rotation: 0, transformOrigin: "right center", ease: Elastic.easeOut.config(1, 0.2)}, "-=0.4");
rightTom_tl.to(rightTom, 0.1, {scaleX: 1.01, transformOrigin: "center center", ease: Expo.easeOut})
           .to(rightTom, 0.1, {scaleY: 0.94, transformOrigin: "center center", ease: Expo.easeOut}, '0')
           .to(rightTom_all, 0.1, {rotation: 3, transformOrigin: "left center", ease: Elastic.easeOut.config(1, 0.2)}, '0')
           .to(rightTom, 0.4, {scale: 1, transformOrigin: "center center", ease: Elastic.easeOut})
           .to(rightTom_all, 0.7, {rotation: 0, transformOrigin: "left center", ease: Elastic.easeOut.config(1, 0.2)}, "-=0.4");

floorTom_tl.to(floorTom, 0.1, {scaleX: 1.01, transformOrigin:"bottom center", ease: Expo.easeOut})
           .to(floorTom, 0.1, {scaleY: .95, transformOrigin:"bottom center", ease: Expo.easeOut}, '0')
           .to(floorTom, 0.4, {scale: 1, transformOrigin: "bottom center", ease: Elastic.easeOut.config(1, 0.3)});
kickDrum_tl.to(kickDrum, 0.1, {scaleX: .96, transformOrigin:"center center", ease: Expo.easeOut})
           .to(kickDrum, 0.1, {scaleY: .96, transformOrigin:"center center", ease: Expo.easeOut}, '0')
           .to(kickDrum, 0.3, {scale: 1, transformOrigin:"center center", ease: Elastic.easeOut});
snareDrum_tl.to(snareDrum, 0.1, {scaleX: .98, transformOrigin:"bottom center", ease: Expo.easeOut})
            .to(snareDrum, 0.1, {scaleY: .90, transformOrigin:"bottom center", ease: Expo.easeOut}, '0')
            .to(snareDrum, 0.3, {scale: 1, transformOrigin:"bottom center", ease: Elastic.easeOut.config(.9, .8)});
hihatCymbal_tl.to(hihatCymbal, 0.1, {rotation: 3, transformOrigin: "center center"})
              .to(hihatCymbal, 1, {rotation:0, transformOrigin: "center center", ease:Elastic.easeOut.config(2, 0.5)});
/** 
 * Drum Element button click functionality
*/            
rideCymbal.addEventListener('click', function() {
    ride.currentTime = 0;
    ride.play();
    ride_tl.restart();
    ride_tl.play();
}, false);
leftTom.addEventListener('click', function() {
    tom.currentTime = 0;
    tom.play();
    leftTom_tl.restart();
    leftTom_tl.play();
}, false);
rightTom.addEventListener('click', function() {
    tom.currentTime = 0;
    tom.play();
    rightTom_tl.restart();
    rightTom_tl.play();
}, false);
floorTom.addEventListener('click', function() {
    boom.currentTime = 0;
    boom.play();
    floorTom_tl.restart();
    floorTom_tl.play();
}, false);
kickDrum.addEventListener('click', function() {
    kick.currentTime = 0;
    kick.play();
    kickDrum_tl.restart();
    kickDrum_tl.play();
}, false);
snareDrum.addEventListener('click', function() {
    snare.currentTime = 0;
    snare.play();
    snareDrum_tl.restart();
    snareDrum_tl.play();
}, false);
hihatCymbal.addEventListener('click', function() {
    hihat.currentTime = 0;
    hihat.play();
    hihatCymbal_tl.restart();
    hihatCymbal_tl.play();
}, false);


document.addEventListener('keydown', (event) => {
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
            floorTom_tl.restart();
            floorTom_tl.play();
            break; 
        case 'd':
            kick.currentTime = 0;
            kick.play();
            kickDrum_tl.restart();
            kickDrum_tl.play();
            break;
        case 'f':
            snare.currentTime = 0;
            snare.play();
            snareDrum_tl.restart();
            snareDrum_tl.play();
            break;
        case 'j':
            hihat.currentTime = 0;
            hihat.play();
            hihatCymbal_tl.restart();
            hihatCymbal_tl.play();
            break;
        case 'k':
            tom.currentTime = 0;
            tom.play();
            leftTom_tl.restart();
            leftTom_tl.play();
            break;
        case 'l':
            tom.currentTime = 0;
            tom.play();
            rightTom_tl.restart();
            rightTom_tl.play();
            break;
        default:
            console.log("No valid key pressed.");
    }
});

