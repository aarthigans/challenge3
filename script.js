// Assignment code here

//declaring the variables lowerCase, upperCase, numbers, specialCharacters
lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
],
  upperCase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ],
numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //add your logic here

  //charLimit function is to set the limit of characters in the password field
  //
  var charLimit = function () {
    let limit = window.prompt(
      "How many characters would you like to enter? Password should be in between 8 and 128"
    );
    console.log(limit);
    if (limit >= 8 && limit <= 128) {
      // console.log(limit);
      return limit;
    } else {
      return null;
    }
  };
  let fCharLmt = charLimit();
  console.log(fCharLmt);
  if (fCharLmt == null) {
    window.alert("Enter the valid number");
    return "";
  }

  let fUpper = window.confirm("Confirm to add UpperCase to your password");
  //var fLower = window.confirm("Confirm to add LowerCase to your password");
  var fNumbers = window.confirm("Confirm to add numbers to your password");
  var fSpecialCharacters = window.confirm(
    "Confirm to add special characters to your password"
  );

  //Lower case is assigned in fChars
  //if uppercase,special characters, numbers are needed-it'll be concatenated to the lowercase to generate random values
  //then the array values are pushed to form the password
  let fChars = lowerCase;
  if (fUpper) fChars = fChars.concat(upperCase);
  if (fSpecialCharacters) fChars = fChars.concat(specialCharacters);
  if (fNumbers) fChars = fChars.concat(numbers);
  const fArrPassword= [];
  for (let i = 0; i < fCharLmt; i++) {
    const fCharCode =fChars[Math.floor(Math.random() * fChars.length)];
    fArrPassword.push(fCharCode);
  }
  return fArrPassword.join('');
} 

// Write password to the #password input
function writePassword(password) {
  var password = generatePassword();
   window.alert(password);

}

// Add event listener to generate button)
generateBtn.addEventListener("click", writePassword);
