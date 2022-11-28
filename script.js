// These 2 lines tell the script to reference the html for the button run code once clicked.
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// Vars for all available character type for prompt
var numeric = "0123456789";
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var Capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specialCharacters = " !'#$%&()*+,-./:;<>=?@[]\^{}\~`";

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password
}
//Starts the password generator with alert prompts for each preferece 
//Includes alerts for errors/recursive loop
function generatePassword() {
  var password = "";
  var passwordLength = prompt("How long would you like your Password to be? Please select a Number larger than 8 and smaller than 128.");
    if (passwordLength > 128) {
    alert("Please enter a Number smaller than 128, but larger than 8.");
      generatePassword();
    }
    else if (passwordLength < 8) {
      alert("Please enter a Number smaller than 128, but larger than 8.");
      generatePassword();
    };
    
    var capitalConfirm = confirm("Would you like capital letters included?");
    var lowerCaseConfirm = confirm("Would you like lower case letters included?");
    var numericConfirm = confirm("Would you like numbers included?");
    var specialCharConfirm = confirm("Would you like Special characters (i.e. !?*) included?");
   
    //This creates the loop to run the script using the Vars above

    for (let i = 0; i < passwordLength; i++) {
      if (capitalConfirm === true && password.length < passwordLength) {
        var capitalPosition = Math.floor(Math.random() * Capital.length);
        password = password + Capital[capitalPosition];
      }
      if (lowerCaseConfirm && password.length < passwordLength) {
        var lowerCasePosition = Math.floor(Math.random() * lowerCase.length);
        password = password + lowerCase[lowerCasePosition];
      }
      if (numericConfirm && password.length < passwordLength) {
        var numericPosition = Math.floor(Math.random() * numeric.length);
        password = password + numeric[numericPosition];
      }
      if (specialCharConfirm && password.length < passwordLength) {
        specialCharPosition = Math.floor(Math.random() * specialCharacters.length);
        password = password + specialCharacters[specialCharPosition]
      }
      
    }

  return password;
  
}


