// // Complete these one at a time. Test each one several times to make sure it works.
// // When you are done with each one, comment it out when you move to the next one, so it doesn't keep showing up.
var readline = require("readline-sync");
// // 1. Ask the user for a number and print whether it is positive or negative or zero.
// var numberName = readline.question("Please enter a number  ");
	if(numberName > 0 ){
	console.log("positive");
}
	else if(numberName == 0){
		console.log("positive");
	}
	else if(numberName < 0){
		console.log("negative");
	}
// // 2. Ask the user to enter three numbers, and then print out the biggest number they entered.
var num1 = readline.question("Please enter the 1st #  ");
var num2 = readline.question("Please enter the 2nd #  ");
var num3 = readline.question("Please enter the 3rd #  ");

	if(num1 > num2 && num1 > num3){
	console.log("the first is biggest");
}
    else if( num1 < num2 && num2 > num3){
    console.log("the 2nd is biggest");
    }
	else{
	console.log("the 3rd is biggest");
	}
//3. Ask the user for a number and print whether it is odd or even
var numberName = readline.question("Please enter a number  ");
	if(numberName%2 == 0){
		console.log("even");
}
	else if(numberName%2 != 0){
		console.log("odd");
	}
	
// }
// 4. Ask the user to enter a letter and tell them if it is a vowel or consonant
var letterName = readline.question("Please enter a letter  ");
	if(letterName != "a" || letterName == "e" || letterName == "i" || letterName == "o" || letterName == "u" ){
			console.log("its a vowel ");
		}
	else (letterName != "a" || letterName != "e" || letterName != "i" || letterName != "o" || letterName != "u") {
			console.log("its a consonant ");
	}
// 5. Ask the user to enter a year, and tell them if it was a leap year.
// (You can use Google if you're not sure when leap years happen.)
	var year = readline.question("enter a year  ");
	if(year/=4){
			console.log("its a leap year");
	}
	else if(year%0){
		console.log("not a leap year");
	}
// 6. Ask the user if they have been a citizen for at least 9 years (yes or no), ask them their age, and ask if they live in New York state.
// If they answer yes, their age is above 30, and yes, then tell them they can run for senate in NY. Otherwise, say that they cannot.
		// var cit = readline.question("Have you been a citizen for at least 9 years?  ");
		var age = readline.question("How old are you?  ");
		var loc = readline.question("Do you live in NYS?  ");
			if(cit==true && age>=30 && loc==true){
					console.log("you can run for senate in NYS");
			}
			else {
				console.log("you cant run bud");
			}
// 7. Write a program that asks the user to enter a whole number 1-7 and prints out the corresponding day of the week.
// If you want another challenge, look up how to use switch statements and use a switch instead of if-else for this.
// Note that we usually don't bother with switch statements unless there are more than a few elses.
var que = readline.question("Enter a number from 1-7 ");
	if(que==1){
		console.log("Monday");
	}
	else if(que==2){
		console.log("Tuesday");
	}
	else if(que==3){
		console.log("Wednesday");
	}
	else if(que==4){
		console.log("Thursday");
	}
	else if(que==5){
		console.log("Friday");
	}
	else if(que==6){
		console.log("Saturday");
	}
	else{
		console.log("Sunday");
	}
	