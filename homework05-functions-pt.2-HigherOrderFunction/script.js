console.log('---------------HOMEWORK - FUNCTIONS PT.2 - Higher order functions----------------')



// Exercise 1
// There is a JSON file with students. Make a call to the file and get the following data from it:
// ..........................//
// Use higher order functions to find the answers Link: https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json





fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json")
 .then(response => response.json())
 .then(students => {
  // console.log(students);

  // All students with an average grade higher than 3
  let task1 = students.filter(student => student.averageGrade > 3)
  console.log(`All students with an average grade higher than 3:`, task1)
  
  // All female student names with an average grade of 5
 let task2 = 
 students.filter(student => student.gender === "Female" && student.averageGrade === 5)
 .map(student => `${student.firstName} ${student.lastName} ` )
 console.log(`All female student names with an average grade of 5: \n`, task2)

  // All male students full names who live in Skopje and are over 18 years old
let task3 = 
students.filter(student => student.gender === "Female" && student.city === 'Skopje' && student.age > 18)
.map(student => `${student.firstName} ${student.lastName} ` )
console.log(`All male students full names who live in Skopje and are over 18 years old: `, task3)

 // The average grades of all female students over the age of 24
 let task4 = students.filter(student => student.gender === 'Female' && student.age > 24)
 .map(student =>`${student.firstName} ${student.lastName} ${student.averageGrade}` )
 console.log(`The average grades of all female students over the age of 24:`, task4)


// let femaleOver24 = students.filter(student => student.gender === 'Female' && student.age > 24);
// let  totalGrades = femaleOver24.reduce((sum, student) => sum + student.averageGrade, 0);
// let averageGrades = totalGrades / femaleOver24.length;
// console.log(`The average grade of all female over the age 24:`, averageGrades);


// let task4WithReduce = students
// .reduce((prev, curr) => {
//     if (curr.gender === "Female" && curr.age > 24) {
//         prev.push(curr.averageGrade);
//     }
//     return prev;
// }, []);
// console.log(`Only the average grades of all females over the age of 24:`, task4WithReduce);


 // All male students with a name starting with B and average grade over 2

let task5 = students.filter(student => student.gender === 'Male' && student.averageGrade > 2)
.filter(student => student.firstName.startsWith('B'))
//.map(student => `${student.firstName} ${student.lastName} ` )

console.log(`All male students with a name starting with B and average grade over 2: \n`, task5)

  })
  .catch(error => {
    console.error("An error occurred:", error);
  });








