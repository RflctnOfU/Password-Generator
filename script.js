// Assignment Code
var generateBtn = document.querySelector("#generate");

characterSet = {
  lowerCaseCharacters: "abcdefghijklmnopqrstuvwxyz",
  upperCaseCharacters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numberCharacters: "0123456789",
  specialCharacters: "`~!@#$%^&*()"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  var pwLength = prompt("How long would you like your password? 8-128");
    // console.log(pwLength);
  alert("You chose " + pwLength);
  
  var lowerCase = prompt("Would you like to use lower case letters? y/n");

  alert("You chose " + lowerCase);

  var upperCase = prompt("Would you like to use upper case letters? y/n");

  alert("You chose " + upperCase);

  var numberCase = prompt("Would you like to use numbers? y/n");

  alert("You chose " + numberCase);

  var specialCase = prompt("Would you like to use special characters? y/n");

  alert("You chose " + numberCase);
  
  if (lowerCase === "y") {
    generatePassword(+ characterSet.lowerCaseCharacters)
  };

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
