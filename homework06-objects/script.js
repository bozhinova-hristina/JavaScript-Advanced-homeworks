console.log("WE ARE LIVE")

// Exercise 1
// Create 3 object templates. Academy, Student and Subject. The structure should be: 
//Academy
// Name - string
// Students - array of Students
// Subjects - array of Subjects
// Start - Date when it starts
// End - Date when it ends
// NumberOfClasses - number of subjects * 10, not settable
// PrintStudents - method that prints all students in console
// PrintSubjects - method that prints all subjects in console

// Subject
// Title - string
// NumberOfClasses - default 10, not settable
// isElective - boolean
// Academy - Academy object
// Students - array of Students
// OverrideClasses - accepts a number and rewrites the NumberOfClasses property with that number. The number can't be smaller than 3.

// Student
// FirstName - string
// LastName - string
// Age - number
// CompletedSubjects - emptyArray as default, not settable
// Academy - null as default, not settable
// CurrentSubject - null as default, not settable
// StartAcademy - accepts Academy object that it sets to the Academy property of the student
// StartSubject - accepts Subject object and adds it to the CurrentSubject property but only if the student has an Academy object in the Academy property and that subject exists in the academy. If not, give error in console and do not set the CurrentSubject property


// Exercise 2
// Make the functions StartAcademy and StartSubject dynamic.

// StartAcademy - When the student calls StartAcademy, the student should also be added to the Academy property Students ( The academy that he is starting )
// StartSubject - When the student calls StartSubject the student should also be added to the Subject property Students ( The subject that he is starting ). If there was another subject in the CurrentSubject property, that subject should be transferred to CompletedSubjects and then add the new Subject



class Academy {
 constructor(academyName, academyStudents, academySubjects, academyStart, academyEnd){
  this.name = academyName;
  this.students = academyStudents;
  this.subjects = academySubjects;
  this.start = academyStart;
  this.end = academyEnd;
  this.numberOfClasses = this.academySubjects?.length*10;
 }
 printStudents(){
  this.students?.forEach(student => {
   console.log(student)
  });
 }
 printSubjects(){
  console.log(`Subjects in the academy: ${this.name}:`);
  this.subjects.forEach((subject) => {
   console.log(subject.title);
  })
 }
}

class Subject{
 constructor(title, academy, isElective = false){
  this.title = title;
  this.numberOfClasses = 10;
  this.isElective  = isElective;
  this.academy = academy;
  this.students = [];
 }
 overrideClasses(num){
  if(num >= 3){
   this.numberOfClasses = num;
  }
  console.log('Number of classes cannot be less than 3.')
 }
}


class Student {
 constructor(firstName, lastName, age){
  this.fullName = `${firstName} ${lastName}`;
  this.age = age;
  this.completedSubjects = [];
  this.academy = null;
  this.currentSubject = null;
 }
 startAcademy(academy){
  this.academy = academy;
  academy.students.push(this);
 }
// startAcademy(academyInput) {
//   // checks if the parameter "academyInput" is object made from the class Academy (as instance it has all the propeties and methods from the class Academy)
//   if (!(academyInput instanceof Academy)) {
//       console.log("You entered invalid academy");
//       return;
//   }
//   academyInput.students.push(this);
//   this.academy = academyInput;
// }

startSubject(subject){
 if(!(subject instanceof Subject)){
     console.log("Please enter valid subject");
     return;
 }
 if(!this.academy){
     console.log("The student does not have an academy");
     return;
 }
 if(!this.academy.subjects.find(sub => sub.title === subject.title)){
     console.log("Error: That subject is not offered in the academy you are in.");
     return;
 }
 if(this.currentSubject){
     this.completedSubjects.push(this.currentSubject);
 }
 this.currentSubject = subject;
 this.currentSubject.students.push(this);
}
}








const hristina = new Student('Hristina', 'Bohzinova', 29);
const monika = new Student('Monika', 'Krstova', 27);

const html = new Subject('Html');
const javaScript = new Subject('JavaScript');
const cSharp = new Subject('C#');


const academy = new Academy ('SEDC', [], [html, javaScript, cSharp], 
new Date('2022', '09', '10'),
new Date('2023', '09', '10')
);


hristina.startSubject(html);
console.log(hristina.currentSubject);

hristina.startSubject(cSharp);
console.log(hristina.completedSubjects); 
console.log(hristina.currentSubject); 


hristina.startAcademy(academy);
monika.startAcademy(academy);
console.log(academy);


academy.printStudents();
academy.printSubjects();