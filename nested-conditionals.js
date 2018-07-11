// 1. Ask the user to type in fruit or veggie.
// If they say fruit, ask them to choose a or b.
// If they say a, print out apple. If they say b, print out banana.
// If they said veggie at the beginning, ask them to choose m or p.
// If they say m, print out mushroom. If they say p, print out pepper.
	var readline = require("readline-sync");
	var choice = readline.question("Type fruit or veggie ");
	if(choice="fruit"){
		var letter1 = readline.question("a or b ");
			if(letter1=="a"){
				console.log("apple");
			}
			else{
				console.log("b");
			}
	}
	if(choice="veggie"){
		var letter1 = readline.question("m or p ");
			if(letter1=="m"){
				console.log("mushroom");
			}
			else{
				console.log("pepper");
			}
	}

// 2. Ask the user to choose square or rectangle.
// Also ask them to choose area or perimeter.
// Tell them the formula depending on what they chose.
// For example, if they said square and perimeter, you could print: 4 * s
var shape = readline.question("square or rectangle ");
	if(shape="square"){
		console.log("4*s");
	}
	if(shape="rectangle"){
		console.log("length*width");
	}
	if(){

	}
var formu = readline.question("area or perimeter ");
	if(formu="area"){
		console.log("l*w");
	}
	if(formu="perimeter"){
		console.log("add all sides");
	}
// BONUS CHALLENGE
// 3. Pretend you are running a fast food shop.
// Start out with the line let totalCost = 0;
// Ask the user if they want a value meal, or if they will order individual items.
// If they want a value meal, ask if they want the burger ($7) or the chicken ($6).
// Add the amount to totalCost, then tell them how much they owe.
// If they want individual items, ask them (one item at a time)
//     if they want burger ($4), fries ($2), drink ($1), dessert ($2).
// Each time they say yes, add the right amount to the totalCost.
// At the end, tell them how much they owe.