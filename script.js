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


