//"1. Take 2 numbers and print the smallest one amongst them

const x = 10;
const y = 5;

if (x < y) {
    console.log("x is smallest number : " + x);
}
else {
    console.log("y is smallest number : " + y);
}

//2. Take 3 numbers and print the biggest one amongst them

const a = 10;
const b = 8;
const c = 3;

if (a > b && a > c) {
    console.log("a is Largest number : " + a);
}
else if (b > a && b > c) {
    console.log("b is largest number : " + b);
}
else {
    console.log("c is largest number : " + c);
}

/*
 3. Use switch case to return a grade for the score, either ""A"", ""B"", ""C"", ""D"", or ""F"". (Take convension for numbers and grades by yourself)
Anything below 50 is F"
*/

const score = 89;

switch (score) {
    case (score > 90 && score <= 100) && score:
        console.log("you are passed with A grade")
        break;
    case (score > 80 && score <= 90) && score:
        console.log("you are passed with B grade")
        break;
    case (score > 70 && score <= 80) && score:
        console.log("you are passed with C grade")
        break;
    case (score > 60 && score <= 70) && score:
        console.log("you are passed with D grade")
        break;
    case (score > 50 && score <= 60) && score:
        console.log("you are passed with E grade")
        break;
    case (score > 0 && score <= 50) && score:
        console.log("you are passed with F grade")
        break;
    default:
        console.log("please enter valid input");
        break;
}

