// Author: FirstName LastName
var readline = require("readline-sync");
var cents = readline.question("bLeep blOop! i'm a CHanGE macHINe! Please enter cents as a positive integer:  ");

const q = Math.floor(cents / 25);
		
const d = Math.floor(cents / 10);
const n = Math.floor(cents / 5);
const p = Math.floor(cents / 1);
console.log( "cents makes:" );