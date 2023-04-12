/*
The base time stamps used for the connection between visual representation of the scene and audio file. 
Please see the JS main code for the exact final times used.
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

//////////////////////////////////////////

function spotlight(instrumentID) {
 /* In case -1 is passed as an argument, we set the opacity of both desktop-style and mobile spotlights to 0,
- make them invisible*/
// Instument IDs for the placement of spotlight on instruments:
// -1 - No instrument
// 1 - Piano
// 2 - Drums
// 3 - Guitar
  if (instrumentID === -1)
  {
    // to access the opacity of desktop spotlight, it is retrieved from HTML code using ID "spotlight1"
    let spotlight = document.getElementById("spotlight1"); 
    spotlight.style.opacity = "0";
    // to access the opacity of spotlight, it is retrieved from HTML code using ID "spotlight2"
    let spotlight2 = document.getElementById("spotlight2");
    spotlight2.style.opacity = "0";
  }
  else {
    showman.style.display = "none"; // make showman image disappear
    imageContainer.style.opacity = "1"; // make all instruments visible
    // call the setupSpotlight function for the desktop spotlight 
    setupSpotlight("spotlight1", instrumentID);
    // call the setupSpotlight function for the mobile spotlight
    setupSpotlight("spotlight2", instrumentID);
}
}

function setupSpotlight(spotlightId, instrumentID) {
  let spotlight = document.getElementById(spotlightId); // define spotlight variable here

  let spotlightPositions;
  if (spotlightId === "spotlight1") { // initialize spotlight positions array for desktop-style spotlight
    spotlightPositions = [13, 34, 56]; // pre-defined positions for the spotlight (in vw) according to the positions of instruments
  } else {
    spotlightPositions = [18, 39, 61]; // pre-defined positions for the spotlight (in vw) according to the positions of instruments
  }
// move the position of spotlight to the correct position
  spotlight.style.transform =
    "translate" +
    (spotlightId === "spotlight1" ? "X" : "Y") + // if desktop-style, move across X, alternatively, Y
    "(" +
    spotlightPositions[instrumentID] +
    (spotlightId === "spotlight1" ? "vw)" : "vh)"); // if desktop-style, move by vw (viewport width), alternatively, viewport height

  spotlight.style.opacity = "1"; // make spotlight visible
}

const showman = document.getElementById('showman'); // access showman image accessed by 'showman' ID defined in HTML file
const imageContainer = document.getElementById('image-container');// access instrument images in div with 'image-container' ID defined in HTML file

let currentTime=0; // initialize current time to 0

setInterval(function () {
  var audio = document.getElementById('audio-player'); // access HTML audio player
  currentTime=parseInt( audio.currentTime );
}, 1000);

//use currentTime for timestamps
setInterval(function() {
      //piano timestamps
// For all the code below, 
// set display to 'none'/ set opacity to "0" -> make the object invisible
// set display to 'block'/ set opacity to "1" -> make the object appear on screen

// conditions like (currentTime>16 && currentTime<17) -> if currentTime is in interval [16,17]
// Time stamps for every instruments are unified using OR || operator to make the code inside IF condition execute
// whenever currentTime falls into one of the intervals defined
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
    
}, 10); // update currentTime reading every 10 milliseconds
