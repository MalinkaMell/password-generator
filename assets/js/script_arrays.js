//special chars array
const specialChars = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
//numeric chars array
const numericChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//lower case chars array
const lowerCasedChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const upperCasedChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


//define how long and what type of characters we want in our password
function pwdOptions() {

  //how long our password should be?
  let pwdLength = parseInt(prompt("How many characters would you like your password to contain?"));

  console.log(pwdLength);

  //check if user had insert the number
  if (isNaN(pwdLength)) {
    alert("Password length must be provided as a number");
    return;
  }

  //check if it is at least 8 characters long
  if (pwdLength < 8) {
    alert("Password length must be at least 8 characters!");
    return;
  }

  //check if it is not longer than 128 chars
  if (pwdLength > 128) {
    alert("Password length must less than 128 characters");
    return;
  }

  //ask user if he wants special chars
  let specials = confirm("Click OK to confirm including special characters");

  //ask user if he wants numeric chars
  let numeric = confirm("Click OK to confirm including numeric characters");

  //ask user if he wants lower case chars
  let lower = confirm("Click OK to confirm including lowercase characters");

  //ask user if he wants upper case chars
  let upper = confirm("Click OK to confirm including uppercase characters");

  //check if none of the options were chosen, in that case, return
  if (!specials && !numeric && !lower && !upper) {
    alert("Select at least one set of characters");
    return;
  }
  //create an object with options
  let options = {
    pwdLength,
    specials,
    numeric,
    lower,
    upper
  }
  console.log("options: ", options)
  return options; //at the end the function will return an object with specified options
}

//main function that will generate password based on selected options
function generatePwd() {
  let options = pwdOptions(); //grab our options
  let concatArr = []; //add here characters based on selected options
  let replaceWith = []; //if the option was selected, we want at least one character from given set to be replaceWith, so while selecting and adding to the contacts, also will pick one random char from set and add here
  let finalPwd = []; //final password generated for user 

  if (options.specials) {
    concatArr = [...concatArr, ...specialChars];
    replaceWith.push(pickRandom(specialChars));
  }

  if (options.numeric) {
    concatArr = [...concatArr, ...numericChars];
    replaceWith.push(pickRandom(numericChars));
  }

  if (options.lower) {
    concatArr = [...concatArr, ...lowerCasedChars];
    replaceWith.push(pickRandom(lowerCasedChars));
  }

  if (options.upper) {
    concatArr = [...concatArr, ...upperCasedChars];
    replaceWith.push(pickRandom(upperCasedChars));
  }

  //make a for loop based on chosen password length, loop trough concatArr array, pick random characters and push in final password array
  for (let i = 0; i < options.pwdLength; i++) {
    finalPwd.push(pickRandom(concatArr));
  }
  //take replaceWith array with our replaceWith characters, and substitute characters from final password array with those
  for (let i = 0; i < replaceWith.length; i++) {
    finalPwd[i] = replaceWith[i];
  }

  console.log("replaceWith: ", replaceWith);
  console.log("concatArr: ", concatArr);
  console.log("finalPwd: ", finalPwd);
  //return final password, transform it to string
  return finalPwd.join("");
}
//call generate password function, and after it has been executed show created password in textarea
function writePwd() {
  let pwd = generatePwd();
  let area = document.getElementById("pwd");
  area.textContent = pwd;
}
//function to choose random character
function pickRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

//add event listener to button and call write password function
var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  writePwd();
})