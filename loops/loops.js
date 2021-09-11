// Find sum of first 10 natural numbers

// using while loop

let sum = 0, i = 1, number = 10;

while (i <= number) {
    sum = sum + i;
    i++;
}

console.log("the sum of 10 natural numbers : ", sum);    // Result 55

//using for loop

let sum = 0, number = 10;
for (let i = 1; i <= number; i++) {
    sum = sum + i
}
console.log("the sum of 10 natural numbers : ", sum);     //Result 55  

// using do while loop

let sum = 0, i = 1, number = 10;
do {
    sum = sum + i;
    i = i + 1;
}

while (i <= number);
console.log("the sum of 10 natural numbers : ", sum);     // Result 55

//2. Print fibonacci series upto first 10 numbers.

// using while loop

let number = 8, i = 1, num1 = 0, num2 = 1, num3;

console.log(num1);
console.log(num2);

while (i < number) {
    num3 = num1 + num2;
    console.log(num3);
    num1 = num2;
    num2 = num3;
    i++;
}


// using for loop

let number = 10, i, num1 = 0, num2 = 1, num3;

console.log(num1);
console.log(num2);
num3 = num1 + num2;
for (i = 1; i < number; ++i) {
    console.log(num3);
    num1 = num2;
    num2 = num3;
    num3 = num1 + num2;
}

// using do while loop

let number = 8, i = 1, num1 = 0, num2 = 1, num3;
console.log(num1);
console.log(num2);
do {
    num3 = num1 + num2;
    console.log(num3);
    num1 = num2;
    num2 = num3;
    i++;
}
while (i < number);


// Print all the keys and values of the employee object used in the first problem.

const employeeDetails = {
    firstName: 'Monika',
    email: 'itsmemonika07@gmail.com',
    age: 21,
    address: '21,Sudama Nagar indore',
    contact: 9898985657,
    areYouMarried: 'False'
};

// using for..in statement

for (const property in employeeDetails) {
    console.log(`${property}: ${employeeDetails[property]}`);

}
