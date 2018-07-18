// 1. Another way to use nested loops is to loop through the same array twice.
// One reason you might do this is to try to figure out if the array has any duplicates.
// The outer loop would track one item in the array, and the inner loop would
// go through all of the items in the array and check if they are the same as
// that first item. If so, the array contains at least one duplicate.
// But make sure you don't compare an item to itself, because that's not a duplicate.

// Get a basic version of this working. You should return true if there is at least one duplicated value.
// let arr1 = [3,4,5,6,7,1,2,5,9];
// let arr2 = ["apple", "banana", "pear", "banana"];
// let common;
// function hasDuplicate(arr) {
// 	for(let i = 0; i < arr1.length; i++){
// 		//let common = arr1[i] + arr2[i]
// 		for(let i = 0; i < arr2.length; i++){
// 			if(arr1[i] == arr2[i]){
// 				containBoth.push(common)
// 				console.log("true")
// 			} else {
// 				console.log("false")
// 			}
// 		}
// 		}
// }
// 	console.log(hasDuplicate())
// Here are some examples you can use to test
// let arr1 = [3,4,5,6,7,1,2,5,9];
// let arr2 = ["apple", "banana", "pear", "banana"];
// Also make some examples where the answer is false



// 2. Once you have this version working, make a different version that
// tells you which items in the array are duplicated.
// For example, in [3,4,5,6,7,1,2,5,9] the only duplicate is 5
// However, in [3,4,5,4,7,4,2,5,9] the duplicates are 5 and 4 (which appears three times)
// let array = [3,4,5,6,7,1,2,5,9]
// let duplicate = []
// function listDuplicates(arr) {
// 	for(let i = 0; i < array; i++){
// 		if(array[""] == array[""] ){
// 			console.log(duplicate)
// 		} else{
// 			console.log("no duplicates")
// 		}
// 		let duplicate = array[i]
// 		array.push(duplicate)
// 	}
// 	console.log(duplicate)
// }

// Bonus:
// 3. A related question (though one that has nothing to do with nested loops)
// is to find the mode (the item that appears most often) of an array.
// Write a function that does that.
let fruits = ["pear", "apple", "orange", "apple"]
var count = 0;
var counter = 1;
var common;
function findMode(arr) {
	for(let i =0; i < fruits.length; i++)
	{
		for(let j = i; j < fruits.length; j++){
			if(fruits[i] = fruits[j])
				count++;
			if(counter < count){
				counter = count;
				common = fruits[i]
			}
		}
	}
}
console.log(count++)
// If you test with [3,4,5,4,7,4,2,5,9] it should return 4.
// If it's a case where multiple items appear the most, you can decide to either
// return just one of them, or to return all of them.
// For example [3,4,5,4,7,3,2,5,9] has three values that appear most: 3, 4, and 5.