
//  Create a function that takes a number and prints all even numbers upto that number

//USING NAMED FUNCTION
function printNumbers(evenNumber) {                      // function declaration
    for (let i = 1; i <= evenNumber; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}
printNumbers(100);                                   // function calling

// Create a function that takes 2 parameters => an array of employees and age and returns all employees whose age is less than input age.


const employeeDetails = [{
    firstName: 'monika',
    email: 'itsmemonika07@gmail.com',
    age: 21,
    address: 'Sudama Nagar indore',
    contact: 9898985657,
    areYouMarried: 'false'
},
{
    firstName: 'pratik',
    email: 'pratikt22@gmail.com',
    age: 55,
    address: 'palasia, indore',
    contact: 9632587412,
    areYouMarried: 'true'
},
{
    firstName: 'john',
    email: 'john01@gmail.com',
    age: 35,
    address: 'abc, indore',
    contact: 9898985657,
    areYouMarried: 'true'
},
{
    firstName: 'trapti',
    email: 'bhagattrapti@gmail.com',
    age: 60,
    address: 'Nyay Nagar, indore',
    contact: 7845123698,
    areYouMarried: 'true'
}];
console.log(employeeDetails.filter((employee) => employee.age <= 50));

// Create a function that takes 2 parameters => an array of employees and an attribute and returns all employees sorted based on the employees attribute being passed as the second parameter.


function SortAccordingToAttribute(givenArray, attribute) {
    const type = typeof attribute;
    switch (type) {
        case 'string':
            return sortAccordingToString(givenArray, attribute);
        case 'number':
            return sortAccordingToNumber(givenArray, attribute);
        case 'boolean':
            return sortAccordingToBoolean(givenArray, attribute);
        default:
            console.log("please enter valid input");
    }
}
function sortAccordingToString(givenArray, attribute) {

    const employeeLenth = givenArray.length;
    for (let i = 0; i < employeeLenth; i++) {
        return givenArray.sort((x, y) => {
            let a = x[attribute],
                b = y[attribute];
            if (a < b) {
                return -1;
            }
            if (a > b) {
                return 1;
            }
            return 0;
        });
    }
}
function sortAccordingToNumber(givenArray, attribute) {
    const employeeLenth = givenArray.length;
    for (let i = 0; i < employeeLenth; i++) {
        return givenArray.sort((a, b) => {
            return a[attribute] - b[attribute];
        });
    }
}
function sortAccordingToBoolean(givenArray, attribute) {
    const employeeLenth = givenArray.length;
    for (let i = 0; i < employeeLenth; i++) {
        return givenArray.sort(function (a, b) {
            return !a[attribute] && b[attribute];
        });
    }
}
console.log(accordingToAttribute(employeeDetails, "firstName"));

console.log(accordingToAttribute(employeeDetails, "areYouMarried"));

console.log(accordingToAttribute(employeeDetails, "age"));
