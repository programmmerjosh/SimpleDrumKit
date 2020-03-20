
      // click event
      var drums = document.querySelectorAll('.drum');

      // loop all the drum buttons to add event listeners to all of them
      for (i = 0; i < drums.length; i++) {
        drums[i].addEventListener('click', function () {

          var buttonInnerHTML = this.innerHTML;

          // play sound
          makeSound(buttonInnerHTML);

          // and show animation on button clicked
          buttonAnimation(this.classList[0]);
        });
      }

// keypress event
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});


// function that assigns audio to specific input
function makeSound(key) {

  switch (key) {
    case "q/w": // this case is for the click function
    case "q":
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a/s": // this case is for the click function
    case "a":
    case "s":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "z/x": // this case is for the click function
    case "z":
    case "x":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "e/r": // this case is for the click function
    case "e":
    case "r":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "d/f": // this case is for the click function
    case "d":
    case "f":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "t":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

      case "g/h": // this case is for the click function
      case "g":
      case "h":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    default: console.log(key);
  }
}


// animate each button as keypress or clicked
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add('pressed');

  setTimeout( function () {
    activeButton.classList.remove('pressed');
  }, 100);
}
