//"1. Take two numbers and perform all the arithmetic operations over them.
 
let number1 = 7;
let number2 = 6;
 
const sum = number1 + number2;                   //Addition
console.log(sum);
 
const subtract = number1 - number2;              //Subtraction
console.log(subtract);
 
const multiplication = number1 * number2;        //Multiply
console.log(multiplication);
 
const division = number1 / number2;              //Divide
console.log(division);
 
const modulus = number1 % number2;               //Modulus
console.log(modulus);
 
let increment = number1++;                   //increment
console.log(increment);
 
let decrement = number1-- ;                  //decrement
console.log(decrement); 
 
//2. Take 2 numberbers and 2 strings and perform addition operations on them in the same sequence.
 
const number1 = 5;
const number2 = 6;
const str1 = "Monika";
const str2 = "thakur";
 
console.log(number1 + number2 + str1 + str2);
 
 
//3. Take 2 Strings and 2 numbers and perform addition operations on them in the same sequence.
 
 
const str1 = "Monika";
const str2 = "Thakur";
const number1 = 5;
const number2 = 6;
console.log(str1 + str2 + number1 + number2);
 
 
//4. Write an operation to get its result as NaN.
 
const number1 = 12;
const str1 = "number";
const result = number1 * str1;
 
console.log(result);          //result NaN
 
//5. Take 2 boolean variables as true and false and perform And and Or logical operation over them and print the result as well as operation
 
const bool1   = true;
const bool2   = false;
 
 
 AND =  (bool1 && bool2);
 console.log(`bool1 && bool2: ${AND}`);         //Using (AND) && operator 
 
 OR  =  (bool1 || bool2);
 console.log(`bool1 || bool2: ${OR}`);          // using (OR) || operator
 
//6. Take 2 variables and compare them using == and ===, such that the result of both the comparison operations is not equal."
const var1 = 5;
const var2 = "5";
 
 console.log(var1 == var2);       //Using Equals to (==) Operator
 console.log(var1 === var2);      //Using Identical (===) Operator
 


/*

const c5 = null;
const d5 = undefined;

console.log(null==undefined);     //Using Equals to (==) Operator
console.log(null===undefined);     //Using Identical (===) Operator

*/