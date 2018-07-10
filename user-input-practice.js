var readline = require("readline-sync");
// Remember that you can comment parts of your code in and out!
// Try this as you move from question to question below.

// 1. Ask the user to enter a number, and print out "The square root of ___ is ___ ", but with the blanks filled in correctly. (Not sure how to get the square root of a number in JavaScript? Google it!)
var numberName = readline.question("Please enter a number  ");
var sqName = Math.sqrt(numberName);
console.log("The square root of" + numberName + "is" + sqName );


// 2. Ask the user to enter their name, and print out "Your name has ___ letters", but with the blank filled in. Not sure how to get the number of letters in a string in JavaScript? Google it!

var personName = readline.question("Please enter your name ");
var personName = personName.length;
console.log("Your name has" + personName + "letters");

// 3. Ask the user to enter any word, and print out "The word ____ starts with the letter ___", but with the blanks filled in. Not sure how to get the first letter of a string in JavaScript? ...

var wordName = readline.question("Please enter any word ");
//var stringName = "wordName";
var stringCount = "wordName.charAt(0)";
console.log("The word" + wordName + "starts with the letter" + stringCount);


// 4. Ask the user to enter two numbers, and print out "The average of ___ and ___ is ____", but with the blanks filled in.

var oneNumber = readline.question("Enter the 1st number ");
var twoNumber = readline.question("Enter the 2nd number");
var answer = (oneNumber+twoNumber)/2;
console.log("The average of" + oneNumber + "and" + twoNumber + "is" + answer);
