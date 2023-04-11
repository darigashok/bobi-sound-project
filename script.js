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

  if (instrumentID === -1)
  {
    let spotlight = document.getElementById("spotlight1");
    spotlight.style.opacity = "0";
    let spotlight2 = document.getElementById("spotlight2");
    spotlight2.style.opacity = "0";
  }
  else {
    showman.style.display = "none";
    imageContainer.style.opacity = "1";

  setupSpotlight("spotlight1", instrumentID);

  // call the setupSpotlight function for the vertical spotlight
  setupSpotlight("spotlight2", instrumentID);
}
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

const showman = document.getElementById('showman');
const imageContainer = document.getElementById('image-container');

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
}, 1000);

//use currentTime for timestamps
setInterval(function() {
  //piano timestamps

  if(currentTime<=5)
  {
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
      (currentTime>72 && currentTime<88) ||
      (currentTime > 128 && currentTime < 131)) {
    spotlight(0);
    showman.style.display = "none";
    imageContainer.style.opacity = "1";
  }
  //drums timestamps
  if ((currentTime>18 && currentTime<19) ||
      (currentTime>37 && currentTime<40) ||
      (currentTime>51 && currentTime<54) ||
      (currentTime>61 && currentTime<63) ||
      (currentTime>89 && currentTime<102) ||
      (currentTime > 123 && currentTime < 127)) {
    spotlight(1);
    showman.style.display = "none";
    imageContainer.style.opacity = "1";
  }
  //guitar timestamps
  if ((currentTime>19 && currentTime<20) ||
      (currentTime>41 && currentTime<46) ||
      (currentTime>54 && currentTime<57) ||
      (currentTime>63 && currentTime<65) ||
      (currentTime>103 && currentTime<117)) {
    spotlight(2);
    showman.style.display = "none";
    imageContainer.style.opacity = "1";
  }

  //music effect 
  if(currentTime>136 && currentTime<187){
    spotlight(-1);
    showman.style.display = "none";
    imageContainer.style.opacity = "1";
  }

  //showman timestamps
  if (currentTime>197){
    spotlight(-1);
    imageContainer.style.opacity = "0";
    showman.style.display = "block";
  }
}, 10);