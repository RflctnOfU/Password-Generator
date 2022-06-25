// Assignment Code
var generateBtn = document.querySelector("#generate");

// generator code
function generatePassword() {
    var passwordRandom = "";
    var lowerCase;
    var upperCase;
    var numberCase;
    var symbolCase;
    var passwordLength;
    var passwordChar = "";
    var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
    var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numberCaseChar = "0123456789";
    var symbolCaseChar = "~`!@#$%^&*()";
   
    // pw length - error if outside range to validate
    function promptLength() {
        passwordLength = parseInt(prompt("Select a password length 8-128."));
        while ((passwordLength < 8) || (passwordLength > 128)) {
        alert("Error, value out of range.");
        return promptLength();
        } 

    }

    // confirm character types - lower, upper, numeric, symbols, and validate that at least one was selected
    function characterTypes() {
        lowerCase = confirm("Would you like to include lower case letters?");

        upperCase = confirm("Would you like to include upper case letters?");

        numberCase = confirm("Would you like to include numbers?");

        symbolCase = confirm("Would you like to include symbols?");

        while ((lowerCase === false) && (upperCase === false) && (numberCase === false) && (symbolCase === false)) {
            alert("You must select at least one character type.")
            return characterTypes();
        }

        // adding selections of character types to possibile choices for random selection
        if (lowerCase === true) {
            passwordChar += lowerCaseChar;
        }

        if (upperCase === true) {
            passwordChar += upperCaseChar;
        }

        if (numberCase === true) {
            passwordChar += numberCaseChar;
        }

        if (symbolCase === true) {
            passwordChar += symbolCaseChar;
        }
        
    }

    // random selector of Characters
    function getRandomChar() {
        return passwordChar[Math.floor(Math.random() * passwordChar.length)];
    }

    // generate the password
    function passwordGen() {
        for(let i = 0; i < passwordLength; i++){
            passwordRandom += getRandomChar();
        }
        // return passwordRandom;
    }

    // run functions and return password
    promptLength();
    characterTypes();
    passwordGen();
    return passwordRandom;
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);