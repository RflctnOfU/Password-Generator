// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    var passwordChar;
    var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
    var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numberCaseChar = "0123456789";
    var symbolCaseChar = "~`!@#$%^&*()";
    // 1. prompt user
        // pw length - error if outside range to validate
    function promptLength() {
        var passwordLength = parseInt(prompt("Select a password length 8-128."));
        while ((passwordLength < 8) || (passwordLength > 128)) {
        alert("Error, value out of range.");
        return promptLength();
        } 
    }

    // confirm character types - lower, upper, numeric, symbols, and validate that at least one was selected

    function characterTypes() {
        var lowerCase = confirm("Would you like to include lower case letters?");

        var upperCase = confirm("Would you like to include upper case letters?");

        var numberCase = confirm("Would you like to include numbers?");

        var symbolCase = confirm("Would you like to include symbolss?");

        while ((lowerCase === false) && (upperCase === false) && (numberCase === false) && (symbolCase === false)) {
            alert("You must select at least one character type.")
            return characterTypes();
        }

        if (lowerCase === true) {
            passwordChar += lowerCase;
        }
    }






    promptLength();
    characterTypes();
    console.log(passwordChar)
  
    

    
    // var lowerCase = confirm("Would you like to include lower case letters?");

    // var upperCase = confirm("Would you like to include upper case letters?");

    // var numberCase = confirm("Would you like to include numbers?");

    // var symbolCase = confirm("Would you like to include symbolss?");
        
    
    // 4. pw is then written to page    
    
    
    
    
//     return generated password
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);