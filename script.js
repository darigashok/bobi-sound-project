const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const showmanAppearTime = 3000; // time in milliseconds for showman to appear
const showmanDisappearTime = 17000; // time in milliseconds for showman to disappear
const showmanTime = showmanDisappearTime - showmanAppearTime; // time in milliseconds for showman to stay on the scene
const imageTimes = [17000, 19000, 21000]; // array of time intervals for switching between images

/*

26 - 31 - audience applause
31 - 36 - piano intro
37 - 40 - drums intro 
41 - 46 - guitar intro
46 - 51 - piano assault to guitar
51 - 54 - drums assault to piano
54 - 57 - guitar assault to drums
58 - 61 - piano's offer to have a battle
61 - 63 - drums's yes
63 - 65 - guitar's yes
65 - 69 - audience applause
72 - 88 - piano
89 - 102 - drums
103 - 117 - guitar
118-121 - audience disgust
121-131 - agreement to play together
132-135 - audience applause
136 - 187 - performance
188-197 - audience applause
198 - 215 - host talk
*/

function spotlight(instrumentID) {

    showman.style.display = "none";
    imageContainer.style.opacity = "1";

  setupSpotlight("spotlight1", instrumentID);

  // call the setupSpotlight function for the vertical spotlight
  setupSpotlight("spotlight2", instrumentID);
}

function setupSpotlight(spotlightId, instrumentID) {
  let spotlight = document.getElementById(spotlightId); // define spotlight variable here

  let spotlightPositions;
  if (spotlightId === "spotlight1") {
    spotlightPositions = [13, 34, 56];
  } else {
    spotlightPositions = [18, 39, 61];
  }

  spotlight.style.transform =
    "translate" +
    (spotlightId === "spotlight1" ? "X" : "Y") +
    "(" +
    spotlightPositions[instrumentID] +
    (spotlightId === "spotlight1" ? "vw)" : "vh)");

  spotlight.style.opacity = "1";
}


const imagePiano = document.getElementById('piano');
const imageDrums = document.getElementById('drums');
const imageGuitar = document.getElementById('guitar');

const showman = document.getElementById('showman');
const imageContainer = document.getElementById('image-container');
//var for music_effect
const music_effect = document.getElementById('music_effect');

// get the audio element
const audio = document.getElementById('audio-player');
let currentTime = audio.currentTime;

audio.addEventListener('loadedmetadata', function() {
  audio.play();
  setInterval(function() {
    currentTime = audio.currentTime;
  }, 1000);
});

setInterval(function() {
  console.log("EGG", currentTime);
  currentTime += 0.5;
  //console.log(currentTime);
}, 1000);

//use currentTime for timestamps
setInterval(function() {
  //piano timestamps

  if(currentTime<=5)
  {
    music_effect.style.opacity="0";
    imageContainer.style.opacity = "0";
    showman.style.display = "none";
  }

  if(currentTime>5 && currentTime<16) {
    imageContainer.style.opacity = "0";
    showman.style.display = "block";
  }

  if(currentTime>16 && currentTime<17)
  {
    showman.style.display = "none";
    imageContainer.style.opacity = "1";
  }

  if ((currentTime>17 && currentTime<18) ||
      (currentTime>31 && currentTime<36) ||
      (currentTime>46 && currentTime<51) ||
      (currentTime>58 && currentTime<61)||
      (currentTime>72 && currentTime<88)) {
    console.log("PIANO THING");
    spotlight(0);
  }
  //drums timestamps
  if ((currentTime>18 && currentTime<19) ||
      (currentTime>37 && currentTime<40) ||
      (currentTime>51 && currentTime<54) ||
      (currentTime>61 && currentTime<63) ||
      (currentTime>89 && currentTime<102)) {
    console.log("DRUMS THING");
    spotlight(1);
  }
  //guitar timestamps
  if ((currentTime>19 && currentTime<20) ||
      (currentTime>41 && currentTime<46) ||
      (currentTime>54 && currentTime<57) ||
      (currentTime>63 && currentTime<65) ||
      (currentTime>103 && currentTime<117)) {
    console.log("GUITAR THING");
    spotlight(2);
  }

  //music effect 
  if(currentTime>136 && currentTime<187){
    music_effect.style.opacity="0.5";
    //add the music_effect.png image with half opacity across the three instrument images
    music_effect.style.opacity = "0.5";
    music_effect.style.display="block";
  }

  //showman timestamps
  if (currentTime>197){
    spotlight(1)
    music_effect.style.opacity="0";
    imageContainer.style.opacity = "0";
    imageContainer.style.display="none"
    showman.style.display = "block";
  }
  //guy
}, 10);



// showman.style.display = "none";
// setTimeout(function() {
//   showman.style.display = "block";
// }, showmanAppearTime);

// var showmanInterval = setInterval(function() {
//   showman.style.display = "none";
//   
// }, showmanDisappearTime);