const readlineSync = require("readline-sync");

const weightInKg = readlineSync.questionInt("What is your weight in kilograms? ");
console.log("Your weight is ", weightInKg);

const heightInM = readlineSync.questionFloat("What is your height in meters? ");
console.log("Your height is ", heightInM);

let bmi = weightInKg / (heightInM * heightInM);
console.log("Your BMI is", bmi.toFixed(2));

console.log("Smaller than 16?", bmi < 16);

let category;

if (bmi < 16) {
  category = "Severely Underweight";
} else if (bmi >= 16 && bmi <= 18.4) {
  category = "Underweight";
} else if (bmi >= 18.5 && bmi <= 24.9) {
  category = "Normal";
} else if (bmi >= 25 && bmi <= 29.9) {
  category = "Overweight";
} else {
  category = "Obese";
}

console.log("Your BMI category is:", category);
