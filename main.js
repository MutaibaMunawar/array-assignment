// <..........Q 1:.........>
// create an array named fruits that contain the following string
var fruits = ["apple", "mango", "banana", "orange"];
console.log(fruits);
//<..........Q 2:..........>
//declare an array name numbers that can contain only number element.
var number = [10, 20, 30, 40];
console.log(number);
//<..........Q 3:..........>
//acce the third element of the fruits array and assign it to a variable named thirdfruirt.
var thirdfruirt = fruits[2];
console.log(thirdfruirt);
//<..........Q 4:..........>
// change the second element of the num array 25
number[2] = 25;
console.log(number);
//<..........Q 5:..........>
//Add the element "graph" to the end of the fruit array using the method.
fruits.push("Graph");
console.log(fruits);
//<..........Q 6:.........>
//Remove the last element from the fruits array.
var lastFruit = fruits.pop();
console.log(fruits);
//<........Q 7:...........>
//Remove the first element from the fruits array 
var firstFruit = fruits.shift();
console.log(fruits);
//<.........Q 8:...........>
//add the element kiwi to the begning of the fruits array
fruits.unshift("kiwi");
console.log(fruits);
//<...........Q 9:...........>
//Remove 2 elements from the fruits array 
fruits.splice(1, 2);
console.log(fruits);
//<...........Q 10:..........>
//insert the element "pinapple" "pear" at index 2 of the fruits array
fruits.splice(2, 0, "pinapple", "pear");
console.log(fruits);
//<...........Q 11:..............>
//creat anew array named citrusFruit that contain the first two element of the fruits array
// using the method
var citrusFruit = fruits.slice(0, 2);
console.log(citrusFruit);
//<...........Q 12:.............>
//create a new array named lasttwoFruits that contain the last two element of the fruits array
//using the method
var lasttwoFruits = fruits.slice(-2);
console.log(lasttwoFruits);
//Assignment Done.........
