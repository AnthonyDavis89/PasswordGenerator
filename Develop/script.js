// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var lengthOfPassword = prompt(
    "Please choose a length of at least 8 characters and no more than 128 characters"
  );

  if (lengthOfPassword >= 8 && lengthOfPassword <= 128) {
    //Alerts
    var resultSpecial = confirm("Click ok to confirm using special characters");
    var resultNumeric = confirm("Click ok to confirm using numeric characters");
    var resultLower = confirm("Click ok to confirm using lowercase characters");
    var resultUpper = confirm("Click ok to confirm using uppercase characters");
  } else {
    alert(
      "Password length must be a length of at least 8 characters and no more than 128 characters"
    );
    return "";
  }

  if (resultSpecial || resultNumeric || resultLower || resultUpper) {
    console.log("Pass");
  } else {
    alert("Must have at least 1 special condition");
  }

  var creatingPassword = [];
  var counter = 1;

  for (let index = 1; index <= lengthOfPassword; index = counter) {
    if (resultSpecial == true && counter <= lengthOfPassword) {
      getRandomSymbol();
      counter++;
    }

    if (resultNumeric == true && counter <= lengthOfPassword) {
      getNumber();
      counter++;
    }

    if (resultLower == true && counter <= lengthOfPassword) {
      getLower();
      counter++;
    }

    if (resultUpper == true && counter <= lengthOfPassword) {
      getUpper();
      counter++;
    }
  }

  // Random char
  function getRandomSymbol() {
    var symbol = "!@#$%^&*(){}[]=<>/,.|~?";
    var holdSymbol = symbol[Math.floor(Math.random() * symbol.length)];

    creatingPassword.push(holdSymbol);
  }

  // Random UpperCase
  function getUpper() {
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var holdUpper = upperCase[Math.floor(Math.random() * upperCase.length)];

    creatingPassword.push(holdUpper);
  }

  // Random Lower
  function getLower() {
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var holdLower = lowerCase[Math.floor(Math.random() * lowerCase.length)];

    creatingPassword.push(holdLower);
  }

  // Random Number
  function getNumber() {
    var number1 = "1234567890";
    var holdNumber = number1[Math.floor(Math.random() * number1.length)];

    creatingPassword.push(holdNumber);
  }

  creatingPassword.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  return creatingPassword.join("");
}
