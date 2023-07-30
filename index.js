const backgroundImage = document.querySelector(".background-image");

// Add event listener for keyboard input
document.addEventListener("keydown", (event) => {
  // Check if the user pressed the R key
  if (event.key === "R") {
    // Rotate the background image clockwise
    backgroundImage.classList.add("rotating");
  } else if (event.key === "ArrowRight") {
    // Rotate the background image counterclockwise
    backgroundImage.classList.add("rotating");
  } else {
    // Remove the rotating class from the background image
    backgroundImage.classList.remove("rotating");
  }
});