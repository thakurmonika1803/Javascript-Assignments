// Take an array of objects of employees created above and print those employees whose age is less than 50.


const employeeDetails = [{
    firstName: 'MONIKA',
    email: 'itsmemonika07@gmail.com',
    age: 21,
    address: '21,Sudama Nagar indore',
    contact: 9898985657,
    areYouMarried: 'false'
},
{
    firstName: 'XYZ',
    email: 'xyz@gmail.com',
    age: 55,
    address: 'xyz, indore',
    contact: 9632587412,
    areYouMarried: 'true'
},
{
    firstName: 'JOHN',
    email: 'john01@gmail.com',
    age: 35,
    address: '18, abc, indore',
    contact: 9898985657,
    areYouMarried: 'true'
},
{
    firstName: 'TRAPTI',
    email: 'bhagattrapti@gmail.com',
    age: 60,
    address: '54, Nyay Nagar, indore',
    contact: 7845123698,
    areYouMarried: 'true'
}]
const sortedAge = employeeDetails.filter(filteredAge => filteredAge.age < 50);
console.log(sortedAge);

