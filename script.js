    // define variables for the images and spotlight
    var images = document.querySelectorAll(".image-container img");
    var spotlight = document.getElementById("spotlight");

    // define an array of spotlight positions
    var spotlightPositions = [13, 34, 56];

    // define variables for the current spotlight position and image index
    var currentSpotlightPosition = 0;
    var currentImage = 0;

    // move the spotlight to the correct position over each image
    function moveSpotlight() {
      // move the spotlight to the correct position
      spotlight.style.transform = "translateX(" + spotlightPositions[currentSpotlightPosition] + "vw)";

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