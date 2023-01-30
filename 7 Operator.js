//Operator
console.log("Operator in Js");
/*
// 1 Arithmetic Operator
console.log("Arithmetic Operator");
let a = 450;
let b = 15;
console.log("a + b=",a+b);
console.log("a - b=",a-b);
console.log("a / b=",a/b);
console.log("a * b=",a*b);
console.log("a ** b=",a**b);
console.log("a % b=",a%b);
console.log("a ** b=",a**b);
//Increment or decrement 
console.log("++a=",++a);
console.log("a++=",a++);

console.log("--a=",--a);
console.log("a--=",a--);

console.log("a=",a);
console.log("a--=",a--);
*/


/*
// 2 Assignment Operator
console.log("Assignment Operator");
let a =10;
let b=10;
console.log(a);
console.log("a+=",a+b);
console.log("a-=",a-b);
console.log("a*=",a*b);
console.log("a/=",a/b);
console.log("a%=",a%b);
console.log("a**=",a**b);
*/

// 3 Comparison Operator

/* 5==5 => True
  6==5 => False
  5=='5' => True Here wee ignore the Data type.
  5==='5 => False
   === Equal value and equal type :- compare data type and compare their value
   
  # != not equal
   8!=5 => True
   5!=5 => False // Means data type is not matched
   5!==8 => True
   
   # > Greater than
     5>8 => False
     5<8 => True
     8>=8 => True
     8<=8 =>True 


console.log("Comparison Operator");
let comp1 = 6;
let comp2 = 7;
//let comp2 ="6"
console.log("comp1 == comp2 is", comp1 == comp2);
console.log("comp1 == comp2 is", comp1 != comp2);
console.log("comp1 === comp2 is", comp1 === comp2);
console.log("comp1 !== comp2 is", comp1 !== comp2);
console.log("comp1 > comp2 is", comp1 > comp2);
*/

// 4 Logical Operator
/*
 && and Logical operator  # ||or ! not
   (5<10 && 6>1) => True       (5==5 || 6==5) => true      !(6==5) => true
   (5>10 && 6>1)=> False       (7==5 || 6==5) => false
 
*/
console.log("Logical Operator")
let x=5;
let y=6;
console.log(x<y && x==5);
console.log(x>y || x==5);
console.log(!false);
console.log(!true);
/*
// 5 JavaScript nullish coalescing operator 

// JavaScript nullish coalescing operator (??) that accepts two values 
// and returns the second value if the first one is null or undefined.
// value1 ?? value2


// const result = value1;
// if(result === null || result === undefined){
//     result = value2;
// }
// A nullish value is a value that is either null or undefined.

console.log(' coalescing operator ')
const name = null ?? 'Abhishek';
console.log(name);

const age  = undefined ?? 28;
console.log(age);

//Why nullish coalescing operator
//When assigning a default value to a variable, you often use the logical OR operator (||). For example:
let count;
let result = count ||1;
console.log(result);

//The nullish coalescing operator is short-circuited
let r = undefined ?? console.log('Hii');

//Chaining with the AND or OR operator
const m =(null || undefined) ?? 'Ok';
console.log(m);
*/


// 6 Exponentiation Operator
//To raise a number to the power of an exponent, you often use the static method Math.pow() with the following syntax:
//Math.pow(base, exponent)
console.log('Exponentitation Operator')
let result = Math.pow(2,2);
console.log(result);

result = Math.pow(2,3);
console.log(result);

let results = 2 ** 2;
console.log(results);

let res = 2n ** 2n;
console.log(res);

let a = 2;
a **= 4;
console.log(a);

//The exponentiation operator ** raises a number to the power of an exponent.
//The exponentiation operator ** accepts values of the type number or bigint.


