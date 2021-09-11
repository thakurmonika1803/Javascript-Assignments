// Create a function that returns an array of employees from a random time from 1 to 2 seconds using promise chaining.
const employeeDetails = [{

    firstName: 'monika',
    email: 'itsmemonika07@gmail.com',
    age: 21,
    address: 'Sudama Nagar indore',
    contact: 9898985657,
    areYouMarried: 'true'
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

function getRandomNumber(minimumTime, maximumTime) {
    minimumTime = Math.ceil(minimumTime);
    maximumTime = Math.floor(maximumTime);
    return Math.floor(Math.random() * (minimumTime - minimumTime + 1)) + minimumTime;
}

const printEmployeeDetails = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(employeeDetails)
        }, getRandomNumber(1000, 2000)
        )
    }
    )
}
const sortAccordingToNames = (employees) => {
    return new Promise((resolve, reject) => {
        const sortingResult = employees.sort((x, y) => {
            const a = x.firstName.toUpperCase();
            const b = y.firstName.toUpperCase();
            return a == b ? 0 : a > b ? 1 : -1;
        });
        resolve(sortingResult);
    })
}
printEmployeeDetails().then((result) => {
    console.log(sortAccordingToNames(result));
}).catch(error => console.log(error)).finally(() => console.log("complete"))