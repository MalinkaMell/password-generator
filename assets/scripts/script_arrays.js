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
  let pwdLenght = parseInt(prompt("How long?"));

  console.log(pwdLenght);

  //check if user had insert the number
  if (isNaN(pwdLenght)) {
    alert("must be number!");
    return;
  }

  //check if it is at least 8 characters long
  if (pwdLenght < 8) {
    alert("at least 8!");
    return;
  }

  //check if it is not longer than 128 chars
  if (pwdLenght > 128) {
    alert("max 128!");
    return;
  }

  //ask user if he wants special chars
  let specials = confirm("Specials?");

  //ask user if he wants numeric chars
  let numeric = confirm("numerics?");

  //ask user if he wants lower case chars
  let lower = confirm("lowers?");

  //ask user if he wants upper case chars
  let upper = confirm("uppers?");

  //check if none of the options were chosen, in that case, return
  if (!specials && !numeric && !lower && !upper) {
    alert("at least one set please");
    return;
  }
  //create an object with options
  let options = {
    pwdLenght,
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
  let concats = []; //add here characters based on selected options
  let guaranted = []; //if the option was selected, we want at least one character from given set to be guaranted, so while selecting and adding to the contacts, also will pick one random char from set and add here
  let finalPwd = []; //final password generated for user 

  if (options.specials) {
    concats = [...concats, ...specialChars];
    guaranted.push(pickRandom(specialChars));
  }

  if (options.numeric) {
    concats = [...concats, ...numericChars];
    guaranted.push(pickRandom(numericChars));
  }

  if (options.lower) {
    concats = [...concats, ...lowerCasedChars];
    guaranted.push(pickRandom(lowerCasedChars));
  }

  if (options.upper) {
    concats = [...concats, ...upperCasedChars];
    guaranted.push(pickRandom(upperCasedChars));
  }

  //make a for loop based on chosen password length, loop trough concats array, pick random characters and push in final password array
  for (let i = 0; i < options.pwdLenght; i++) {
    finalPwd.push(pickRandom(concats));
  }
  //take guaranted array with our guaranted characters, and substitute characters from final password array with those
  for (let i = 0; i < guaranted.length; i++) {
    finalPwd[i] = guaranted[i];
  }

  console.log("guaranted: ", guaranted);
  console.log("concats: ", concats);
  console.log("finalPwd: ", finalPwd);
  //return final password, transfor it to string
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