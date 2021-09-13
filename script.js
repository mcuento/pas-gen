

// Assignment code here
funtion getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

funtion getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

funtion getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() *26) + 48);
}

funtion getRandomSymbols() {
  const symbols = "!@#$%^&*";
  return symbols[Math.floor(Math.random() *symbols.leght)];
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");





// Write password to the #password input
function writePassword() {
  var password = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", (writePassword) => {
  const lenght = +lenghtEl.value;
  const hasLower= lowercaseEl.checked;
  const hasUpper= uppercaseEl.checked;
  const hasSymbol= symbolsEl.checked;
  console.log(length);
});


const resultEl = document.getElementById('result');
const lenghtEl = document.getElementById('result');
const uppercaseEl = document.getElementById('result');
const lowercaseEl = document.getElementById('result');
const numbersEl = document.getElementById('result');
const generateEl = document.getElementById('result');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  Symbol: getRandomSymbols
};