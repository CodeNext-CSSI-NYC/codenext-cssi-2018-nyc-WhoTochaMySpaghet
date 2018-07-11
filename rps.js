var readline = require("readline-sync");



const compNum = Math.random() * 3
var compChoice = compNum;

if(compNum < 1 && compNum > 0){
	compChoice = "rock";
	console.log("rock");
}
if(compNum < 2 && compNum > 1){
	compChoice = "scissors";
	console.log("scissors");
}
if(compNum < 3 && compNum > 2){
	compChoice = "paper";
	console.log("paper");
}
console.log("The computer has chosen " + compChoice);


var playerChoice = readline.question(" Rock, paper or scissors  ");

var playerNum;
if(playerNum < 1 && playerNum > 0){
		playerChoice = "rock";
		console.log("rock");
	}
if(playerNum < 2 && playerNum > 1){
		playerChoice = "scissors";
		console.log("scissors");
	}
if(playerNum < 3 && playerNum > 2){
		playerChoice = "paper";
		console.log("paper");
		}
			