/*test1*/

function checkAlcohol(element) {
  if (element.alt === "beer" || element.alt === "snaps") {
    console.log("Indeholder alkohol");
  } else {
    console.log("Alkoholfri");
  }
}

/*test2*/

function getTimeOfDay() {
  const currentHour = new Date().getHours();

  if (currentHour >= 5 && currentHour < 10) {
    console.log("Godmorgen");
  } else if (currentHour >= 10 && currentHour < 18) {
    console.log("Goddag");
  } else if (currentHour >= 18 && currentHour < 24) {
    console.log("Godaften");
  } else {
    console.log("Godnat");
  }
}

getTimeOfDay();

/*test3*/
let secretNumber;
let numberOfGuesses = 0;

function generateRandomNumber() {
  return Math.floor(Math.random() * 11);
}

function checkGuess() {
  const userGuess = parseInt(document.querySelector("#guess").value);

  if (isNaN(userGuess) || userGuess < 0 || userGuess > 10) {
    document.getElementById("result").textContent = "Indtast venligst et gyldigt tal mellem 0 og 10.";
    return;
  }

  numberOfGuesses++;

  if (userGuess === secretNumber) {
    document.getElementById("result").textContent = "Tillykke! Du har gættet rigtigt på ${numberOfGuesses} forsøg.";
    askForNewGame();
  } else if (userGuess < secretNumber) {
    document.getElementById("result").textContent = "For lavt. Prøv igen!";
  } else {
    document.getElementById("result").textContent = "For højt. Prøv igen!";
  }
}

function askForNewGame() {
  const playAgain = confirm("Vil du prøve igen med et nyt tal?");
  if (playAgain) {
    resetGame();
  }
}

function resetGame() {
  secretNumber = generateRandomNumber();
  numberOfGuesses = 0;
  document.getElementById("result").textContent = "";
  document.querySelector("#tal").value = "";
}

// Initialiser spillet ved indlæsning
window.onload = function () {
  resetGame();
};
