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
}




const imagePiano = document.getElementById('piano');
const imageDrums = document.getElementById('drums');
const imageGuitar = document.getElementById('guitar');

const showman = document.getElementById('showman');
const imageContainer = document.getElementById('image-container');

// get the audio element
const audio = document.getElementById('audio-player');
let currentTime = audio.currentTime;

//gets the timestamp every second
audio.addEventListener('loadedmetadata', function() {
  audio.play();
  setInterval(function() {
    currentTime = audio.currentTime;
    //console.log(currentTime);
  }, 1000);
});


//use currentTime for timestamps
setInterval(function() {
  console.log("EGG ", currentTime);
}, 1000);

//use currentTime for timestamps
setInterval(function() {
  if (currentTime>31 && currentTime<36) {
    console.log("PIANO THING");
    console.log("PIANO THING");
    console.log("PIANO THING");
    spotlight(0);
  }
  if (currentTime>37 && currentTime<40) {
    console.log("DRUMS THING");
    console.log("DRUMS THING");
    console.log("DRUMS THING");
    spotlight(1);
  }
  
  

}, 100);








// //function takes in spotlight type (vertical or horizontal) and instrument type (1, 2, 3)
// let spotlight = [1, 2] //desktop, mobile
// let instruments = [1, 2, 3] //piano, drums, guitar

// function spotlight(light, instrument) {
//   let lightImg;

//   if (light==1) {

//   } else {

//   }

//   if (instrument==1) {

//   } else if (instrument==2) {

//   } else {

//   }

//   spotlight.style.transform = "translate" + (spotlightId === "spotlight1" ? "X" : "Y") + "(" + spotlightPositions[currentSpotlightPosition] + (spotlightId === "spotlight1" ? "vw)" : "vh)");

// }


// //make the spotlight highlight the instrument that's talking based on audio timestamp
// if (currentTime>31 && currentTime<36) {

//   //put spotlight on piano
//   spotlight("spotlight1", piano)

// }




showman.style.display = "none";
setTimeout(function() {
  showman.style.display = "block";
}, showmanAppearTime);

var showmanInterval = setInterval(function() {
  showman.style.display = "none";
  clearInterval(showmanInterval);
  imageContainer.style.opacity = "1";
}, showmanDisappearTime);


//  // call the setupSpotlight function for the horizontal spotlight - desktop
//  setupSpotlight("spotlight1", [13, 34, 56]); //vw
//  // call the setupSpotlight function for the vertical spotlight - mobile
//  setupSpotlight("spotlight2", [18,39,61]); //vh


//  // SPOTLIGHT JS
//   function setupSpotlight(spotlightId, spotlightPositions) {
//     // get the spotlight element by id
//     var spotlight = document.getElementById(spotlightId);
//     // define variables for the current spotlight position and image index
//     var currentSpotlightPosition = 0;
//     var currentImage = 0;
  
//     // move the spotlight to the correct position over each image
//     function moveSpotlight() {
//       // move the spotlight to the correct position
//       spotlight.style.transform = "translate" + (spotlightId === "spotlight1" ? "X" : "Y") + "(" + spotlightPositions[currentSpotlightPosition] + (spotlightId === "spotlight1" ? "vw)" : "vh)");
//       // increment the current spotlight position and image index
//       currentSpotlightPosition += 1;
//       currentImage += 1;
//     }
  
//   }




//   // // SPOTLIGHT JS
//   // function setupSpotlight(spotlightId, spotlightPositions) {
//   //   // get the spotlight element by id
//   //   var spotlight = document.getElementById(spotlightId);
  
//   //   // define variables for the current spotlight position and image index
//   //   var currentSpotlightPosition = 0;
//   //   var currentImage = 0;
  
//   //   // move the spotlight to the correct position over each image
//   //   function moveSpotlight() {
//   //     // move the spotlight to the correct position
//   //     spotlight.style.transform = "translate" + (spotlightId === "spotlight1" ? "X" : "Y") + "(" + spotlightPositions[currentSpotlightPosition] + (spotlightId === "spotlight1" ? "vw)" : "vh)");
  
//   //     // increment the current spotlight position and image index
//   //     currentSpotlightPosition += 1;
//   //     currentImage += 1;
  
//   //     // wrap around to the first image when we reach the end
//   //     if (currentImage >= 3) {
//   //       currentSpotlightPosition = 0;
//   //       currentImage = 0;
//   //     }
//   //   }
  
//   //   // call the moveSpotlight function every 5 seconds
//   //   setInterval(moveSpotlight, 5000);
  
//   //   // show the spotlight image after 5 seconds
//   //   setTimeout(function() {
//   //     spotlight.style.opacity = "1";
//   //   }, 5000);
//   // }
  
 
  

