// STEP 1 
// Convert the following highlighted identifiers to Camel Case notation
let someMonth;
function theMonth(){};
let currentMonth;
let summerMonth;
let myLibraryFunction;

// STEP 2
// Literal Expression
// 8.8              // numeric literal expression
// 'My Assignment'  // string literal expression
// True             // Boolean literal expression
// null             // null literal expression

// STEP 3
// complex / variable expressions
// let $theFirstAssignment = (100 - 0.5 * 20 ) /5;
// let _theResult = true || null;

// STEP 4
// DECLARE MANY VARIABLES
// let firstName, lastName, address, city, state, zipCode, yourAge, referralSource, mayWeContactYou; // Camel Casing
// let txtFirstName, txtLastName, txtAddress, txtCity, txtState, numZipCode, numYourAge, txtReferralSource, celMayWeContactYou; // Hungarian Notation

// STEP 5
// Way 1
// let firstName, lastName, zipCode;
// firstName = 'Minge';
// lastName = 'Chao';
// zipCode = 92122;
// Way 2
// let firstName = 'Minge';
// let lastName = 'Chao';
// let zipCode = 92122;
// Way 3
// let firstName = 'Minge', lastName = 'Chao', zipCode = 92122;

// STEP 6
// Variable Coercion: string + number --> string
// alert(`Anne lives in San Diego` + ', ' + 'CA ' + 92122);

// STEP 7
// Variable Coercion: string + boolean --> string
// let isZero = false, theTempreture = 'Now the tempreture is';
// let today = theTempreture + ' ' + isZero;
// console.info(today);
// Variable Coercion: number + boolean --> number
// let numRoom = 30, isAllEmpty = true;
// let allEmpty = numRoom + isAllEmpty;
// console.info(allEmpty);

// STEP 8
// string literal valid
// let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."';
// window.console.log(someString);

// STEP 9
// null and undefined value
// let x = 2; x = null;
// let z;
// alert(x);
// alert(z);

// STEP 10
// The unary typeof operator on various literals
// let today = typeof 'Today is a sunny day.';  //returns string
// alert(today);
// let numRoom = typeof 30;
// alert(numRoom);
// let isMale = typeof true;
// alert(isMale);
// let car = new Object();
// let myCar = typeof car;
// alert(myCar);
//  let z;
//  let mine = typeof z;
//  alert(mine);

// STEP 11
// use the concatenation operator (+)
// let greet = 'Hello ';
// let yourClass = 'Anne, welcome to the JavaScript class!';
// alert(greet + ' ' + yourClass);

// STEP 12
// let greet = 'Hello ';
// let myName = 'Anne';
// let yourClass = ', welcome to the JavaScript class!';
// alert(greet + ' ' + myName + yourClass);

// STEP 13
// let greet = 'Hello ';
// let myName = 'Anne';
// let course = 'JavaScript';
// alert(greet + ' ' + myName + ', welcome to the' + ' ' + course + ' ' + 'class!');

// STEP 14:  Line break
// alert('Hello Zak Ruvalcaba.\nWelcome to the JavaScript class!');

// STEP 15 PROMPT
// let $yourName = prompt(`Please enter your name`);
// console.log('Hello' + ' ' + $yourName + '.\nWelcome to the JavaScript class!');
// alert('Hello' + ' ' + $yourName + '.\nWelcome to the JavaScript class!');

// STEP 16 PROMPT
// let $yourName = prompt(`Please enter your name`);
// let yourClass = prompt(`Please enter your class name`);
// alert('Hello' + ' ' + $yourName + '.\nWelcome to the' + ' ' + yourClass + ' ' + 'class!');

// STEP 17 ADDITION OPERATOR
// let x = 10, y = 20;
// let sum = x + y;
// console.log(sum);

// STEP 18
// let x = 20;
// console.log(x += 20);

// STEP 19 MULTIPLY
// let x = 20;
// console.log(x *= 5);

// STEP 20 Modulus, Divide and assign
// let x = 20 % 3;
// console.log(x /=1);

// STEP 21
// let workingTime = Number(prompt(`Please enter number`));
// if (workingTime >= 9) {
//     console.log(`Anne is at work.`)
// } else {
//     console.log('Anne is at home.')
// }; // end function

// STEP 22
// let isSnow, tempreture;
// isSnow = false;
// if (isSnow && tempreture > 0) {
//     console.log('It won\'t snow. ')
// } else {
//     console.log(`It will snow.`)
// }; // end if...else

