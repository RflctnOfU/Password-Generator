// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    
    // 1. prompt user
    var passwordLength = parseInt(prompt("Select a password length 8-128."), 10);

    // pw length - error if outside range
    if (passwordLength !== 8-128) {
        var passwordLength = parseInt(prompt("Error, please input value between 8 and 128."), 10);
    }

    function caseSelection() {
        var lowerCase = confirm("Would you like to include lower case letters?");

        var upperCase = confirm("Would you like to include upper case letters?");

        var numberCase = confirm("Would you like to include numbers?");

        var symbolCase = confirm("Would you like to include symbolss?");
    }
    
    caseSelection();
        
    if ((caseSelection.lowerCase === false) && (upperCase === false) && (numberCase === false) && (symbolCase === false)) {
        alert("Error. Please select at least one type of character.");

        var lowerCase = confirm("Would you like to include lower case letters?");

        var upperCase = confirm("Would you like to include upper case letters?");

        var numberCase = confirm("Would you like to include numbers?");

        var symbolCase = confirm("Would you like to include symbolss?");

    }
        // confirm character types - lower, upper, numeric, symbols
    // 2. each prompt validated - at least one character type must be selected
    // 3. pw generated that matches criteria 
    // 4. pw is then written to page    
    
    
    
    
    return
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);