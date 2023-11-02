// alert("Hello World");
// console.log("Jose");

/*
//remember that the variable only holds the value and not the datatype. The value holds the datatype
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

*/
//==================================================
//12 let, const, and var

//perfectly to "REASSIGNING" a variable with a let
let age = 30;
age = 31;

//the value of const cannot be changed
const birthYear = 1991;
//birthYear = 1990; // this will cause an error
//when using const you need to assign something to it
// const job;//this will cause an error

//var at first sight will pretty much work the same as let

var job = "programmer";
job = "teacher"; // var has no problem redeclaring
console.log(job);

//Challenge 2
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

/* Write your code below. Good luck! 🙂 */

if (BMIMark > BMIJohn) {
  console.log("Mark's BMI is higher than John's!");
} else {
  console.log("John's BMI is higher than Mark's!");
}

//Type conversion and coercion
// you can convert strings into a number with type conversion

const inputYear = "1991"; // we have to convert this string into a number so that it can add instead of concat when adding with a number datatype
console.log(Number(inputYear), inputYear); // Number function will convert other datatypes into a Number

//type Coercion
let n = "1" + 1; //this will be '11' because it will concat the string ' 1 ' with number 1 converting 1 into '1' and contats
n = n - 1; //now that we have '11' then we will have to subtract it by one and
// since there is no subtraction in strings for any reasons then it will have to turn the string into a number
console.log(n); // outputs 10

//falsy values
//falsy values are values that are natually false when datatype is switch into a boolean datatype
console.log("these are falsy values");
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(""));

console.log(Boolean({})); // this is true

const money = 0;

if (money) {
  // in this statement where money is inputed. JS will try to convert it into a boolean. Meaning that it will turn 0 into a boolean and it's false
  console.log("you have some money");
} else {
  console.log("get a job");
}

//Switch statements

const day = "Monday";

switch (day) {
  case "Monday": //here does a strict comparison meaning does '==='
    console.log("today is monday!!");
    //the break is important because if there is no break then it will go on to the next case and run the code and stop there and hit the break there
    break;
}

//ternary operators

const bill = 275;

// it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
const tip = bill * (50 <= bill <= 300 ? 0.15 : 0.2);

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
