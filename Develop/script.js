// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  // prompt for length
  var charLength = prompt("Please select the length of your password between 8 and 128 characters.")
  console.log(charLength);

  // prompt for lowercase
  var lowerCase = confirm("Would you like to use lower case letters? Ok = Yes Cancel = No")
  console.log(lowerCase)
  // prompt for uppercase
  var upperCase = confirm("Would you like to use UPPER CASE letters? Ok = Yes Cancel = No")
  console.log(upperCase)
  // prompt for numeric
  var numeric = confirm("Would you like to use Numb3r5? Ok = Yes Cancel = No")
  console.log(numeric)
  // prompt for special characters
  var speChar = confirm("Would you like to use $peci@l Ch@r@cter$? Ok = Yes Cancel = No")
  console.log(speChar)
}







// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




























// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page