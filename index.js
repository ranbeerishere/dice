
var randomNumber1 = Math.floor(Math.random()*6) + 1;

var randomDiceImage = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

var image2 = document.querySelectorAll("img")[1];

// Button stylesheet

document.querySelector(".btn").addEventListener("click", myfunction);

function myfunction() {
  (image1.setAttribute("src", randomDiceImage), image2.setAttribute("src", randomImageSource2));

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "😁 Player 1 Wins!";
  }

  else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 😁";
  }

  else {
    document.querySelector("h1").innerHTML = "Draw!";

  }
}








// Button stylesheet



var randomNumber2 = Math.floor(Math.random()*6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
