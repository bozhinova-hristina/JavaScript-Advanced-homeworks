
// Exercise 1
// Make 3 functions:

// Function that takes a number through a parameter and returns how many digits that number has
// Function that takes a number through a parameter and returns if its even or odd
// Function that takes a number through a parameter and returns if its positive or negative
// Create a function that takes a number through a parameter and calls all three functions for the number that was passed. It should show the results in the console.

// Ex:
// Code: getNumberStats(-25); Console: 2 Digits, Odd, Negative


function getDigits(number){
 if(number < 0){
     return number.toString().length - 1;
 }
 return number.toString().length;
}

console.log(getDigits(234));
console.log(getDigits(-3235465))



function evenOrOdd(number){
 // if(number % 2 == 0)
 // if(number % 2 == 1){
 //  return 'even' 
 // }
 //  return 'odd'

return (number % 2  == 0) ? "even" : "odd"

}
console.log(evenOrOdd(23))



function positivAndNegativNumbers(number) {
 if (number >= 0) {
  if (number == 0) {
      return "zero";
  } 
      return "positive";
 }  
      return "negative";
}


console.log(positivAndNegativNumbers(-25));

function getNumberStats(num) {
return `The number has ${getDigits(num)} digits, he is ${evenOrOdd(num)}, and ${positivAndNegativNumbers(num)}.`
}


console.log(getNumberStats(876));