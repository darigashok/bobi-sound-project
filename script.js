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
const imagePiano = document.getElementById('piano');
const imageDrums = document.getElementById('drums');
const imageGuitar = document.getElementById('guitar');

const showman = document.getElementById('showman');
const imageContainer = document.getElementById('image-container');
const audio = document.getElementById('audio');

showman.style.display = "none";
setTimeout(function() {
  showman.style.display = "block";
}, showmanAppearTime);

var showmanInterval = setInterval(function() {
  showman.style.display = "none";
  clearInterval(showmanInterval);
  imageContainer.style.opacity = "1";
}, showmanDisappearTime);

  // SPOTLIGHT JS
  function setupSpotlight(spotlightId, spotlightPositions) {
    // get the spotlight element by id
    var spotlight = document.getElementById(spotlightId);
  
    // define variables for the current spotlight position and image index
    var currentSpotlightPosition = 0;
    var currentImage = 0;
  
    // move the spotlight to the correct position over each image
    function moveSpotlight() {
      // move the spotlight to the correct position
      spotlight.style.transform = "translate" + (spotlightId === "spotlight1" ? "X" : "Y") + "(" + spotlightPositions[currentSpotlightPosition] + (spotlightId === "spotlight1" ? "vw)" : "vh)");
  
      // increment the current spotlight position and image index
      currentSpotlightPosition += 1;
      currentImage += 1;
  
      // wrap around to the first image when we reach the end
      if (currentImage >= images.length) {
        currentSpotlightPosition = 0;
        currentImage = 0;
      }
    }
  
    // call the moveSpotlight function every 5 seconds
    setInterval(moveSpotlight, 5000);
  
    // show the spotlight image after 5 seconds
    setTimeout(function() {
      spotlight.style.opacity = "1";
    }, 5000);
  }
  
  // call the setupSpotlight function for the horizontal spotlight
  setupSpotlight("spotlight1", [13, 34, 56]);
  
  // call the setupSpotlight function for the vertical spotlight
  setupSpotlight("spotlight2", [18,39,61]); 
  