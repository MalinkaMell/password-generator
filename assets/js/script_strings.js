//special chars string
const specialChars = "@%+\\/'!#$^?:,)(}{][~-_.\"";
//numeric chars string
const numericChars = "0123456789";
//lower case chars string
const lowerCasedChars = "abcdefghijklmnopqrstuvwxyz";
//uppercase chars string
const upperCasedChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


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
  let concatStr = ""; //add here characters based on selected options
  let replaceWith = ""; //if the option was selected, we want at least one character from given set to be replaceWith, so while selecting and adding to the contacts, also will pick one random char from set and add here
  let finalPwd = ""; //final password generated for user 

  if (options.specials) {
    concatStr += specialChars;
    replaceWith += pickRandom(specialChars);
  }

  if (options.numeric) {
    concatStr += numericChars;
    replaceWith += pickRandom(numericChars);
  }

  if (options.lower) {
    concatStr += lowerCasedChars;
    replaceWith += pickRandom(lowerCasedChars);
  }

  if (options.upper) {
    concatStr += upperCasedChars;
    replaceWith += pickRandom(upperCasedChars);
  }

  //make a for loop based on chosen password length, loop trough concatStr array, pick random characters and push in final password array
  for (let i = 0; i < options.pwdLength; i++) {
    finalPwd += pickRandom(concatStr);
  }
  //take replaceWith array with our replaceWith characters, and substitute characters from final password array with those
  for (let i = 0; i < replaceWith.length; i++) {
    let str = finalPwd;
    finalPwd = str.replace(finalPwd[i], replaceWith[i]);
  }


  console.log("replaceWith: ", replaceWith);
  console.log("concatStr: ", concatStr);
  console.log("finalPwd: ", finalPwd);
  //return final password, transfor it to string
  return finalPwd;
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