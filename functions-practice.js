// MAKE SURE YOU CHOOSE GOOD, RELEVANT NAMES FOR YOUR FUNCTIONS AND PARAMETERS

// 1a. Write (declare) a function that prints out "meow"
// function sound(){
// 	sound="meow";
// 	console.log(sound);
// }
// 	sound();
// 1b. Call it three times in a row. Run your code to make sure it works.
function sound()
{
	sound="meow";
	console.log(sound);
	console.log(sound);
	console.log(sound);
}
	sound();


// 2a. Write (declare) a function that takes one parameter and prints out the square of that number
// var readline = require("readline-sync");
// var number = readline.question ("Type a number ");
// var numSq;

// function numSq()
// {
// 	console.log(Math.pow(number,2));
// }
// 	console.log(Math.pow(number,2));
// 2b. Call it three times with three different parameters. Run your code to make sure it works.

var readline = require("readline-sync");
var number = readline.question ("Type a number ");
var numSq;

function numSq()
{
	console.log(Math.pow(number,2));
}
	console.log(Math.pow(number,2));
	console.log(Math.pow(number,2));
	console.log(Math.pow(number,2));


// 3a. Write (declare) a function that takes two parameters and prints out
// "_____ is greater than ____" with the blanks filled in correctly with the two inputs.

var number1 = readline.question ("Type 1st number ");
var number2 = readline.question ("Type 2nd number ");
var greater;
function greater( number1 >= number2 || number2 <= number1)
{
	console.log(number1 || number2 "is greater than" number1 || number2);
}
// 3b. Call it three times with three different parameters
// Make sure to try cases where the first one is bigger, the second one is bigger, and when they are equal.
// Run your code to make sure it works.



// 4a. Write (declare) a function that takes one parameter called name and
// returns (not prints out, just returns) the string "Hello ____", with the name in the blank.

// 4b. Call the function and store the result in a variable. Then, print out that variable.
// Repeat this three times with different names.



// 5a. Write (declare) a function that takes two parameters and
// returns (not prints out, just returns) the average of the parameters.

// 5b. Call the function and store the result in a variable. Then, print out that variable
// in a sentence like "The average is _____".
// Repeat this three times with different numbers. What happens if you pass in
// something that isn't a number, like true or "apple"?
