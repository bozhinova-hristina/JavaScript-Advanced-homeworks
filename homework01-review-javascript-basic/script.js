

console.log('-------Homework 01- review js basic--------')



// Task 1
// Write JS program which calculate sum 1+2+3+...n, where n is inputted by keyboard.



// let  number = prompt('Enter a number: ');

// let sum = 0, i = 1;
// while(i <= number) {
//     sum += i;
//     i++;
// }

// console.log('The sum is:', sum);




// Task 2
// Print all digits of a given number

function getDigits(num) {
 return num.toString().split('');
}
console.log(getDigits(545455)) 



// Task 3
// Change the character (-) of the members of the array let numArr = [4, -9, -98, -1, 444, 3, -555];

let numArr = [4, -9, -98, -1, 444, 3, -555];

for(let i= 0; i < numArr.length; i++) {
 if(numArr[i] <0) {
  numArr[i] = -numArr[i]
 }
}
console.log (numArr);




// Task 4
// Copy the odd elements from the given one into a new array. Print the new one in the console. const givenArr = [12, 45, 88, 1, 567, 3, 91];

const givenArr = [12, 45, 88, 1, 567, 3, 91];
let arrOfOddNumbers = [];
for (const num of givenArr) {
 if(num % 2 == 1){
  arrOfOddNumbers.push(num)
 }
}

console.log(arrOfOddNumbers)


// Task 5
// Delete all elements of the array except the numbers

let arr = ['12', 34, true, 2, 'A', null, 222, 'SEDC']  // FOR EX:

let onlyNumbers = [];

for (let i = 0; i < arr.length; i++) {
 if( typeof arr[i] === 'number') {
  onlyNumbers.push(arr[i])
 }
 
}
console.log(onlyNumbers)