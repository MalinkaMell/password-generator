1. create array or string with special characters
2. create array or string with numeric characters
3. create array or string with lowercase characters
4. create array or string with uppercase characters
5. define a function which will return password options
  - whithin this function create confirm alerts asking user:
    - how many characters
    - do we want special characters
    - do we want numeric characters
    - do we want lowercase characters
    - do we want uppercase characters
  - at the end create an object with choosen values
  - Bonus: 
      - check if password length is a number (isNaN)
      - check if password length is less than 8 characters
      - check if password length is more than 128 characters

6. define generate password function which will return final password
    - define variable which will call password options function
    - define a variable which will hold all selected options
    - define a variable that will hold guaranted characters
    - define a variable that will hold final password

7. define a function that will pick random character from set (pickRandom)

8. set of if statements verifying if user wants specials, numbers, lowercase or uppercase, ad if true, push related sets to array of selected options, within the same if conditions pick random character and push in guaranted array

9. create a for loop on password length and pick and push random characters (using pickRandom function) to final password array

10. create a for loop on guaranted characters array and replace first N characters with characters from guaranted array

11. create write password function that
  - will call generate password function
  - write generated final password to the DOM element

12. select generate password button from the DOM, add click event listener and call write password function

