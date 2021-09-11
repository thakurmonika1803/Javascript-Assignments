//" - Divide the employee age by null and handle the error. Also if the error occurs divide it by 2 and print it.
 
const employeeDetails = [ {
    firstName : 'monika',
    email : 'itsmemonika07@gmail.com',
    age : 21,
    address : 'Sudama Nagar indore',
    contact :  9898985657,
    areYouMarried : 'true'
},
 
{
    firstName : 'pratik',
    email : 'pratikt22@gmail.com',
    age : 55,
    address : 'palasia, indore',
    contact :  9632587412,
    areYouMarried : 'true'
},
{
    firstName : 'john',
    email : 'john01@gmail.com',
    age : 35,
    address : 'abc, indore',
    contact :  9898985657,
    areYouMarried : 'true'
},
{
    firstName : 'trapti',
    email : 'bhagattrapti@gmail.com',
    age : 60,
    address : 'Nyay Nagar, indore',
    contact :  7845123698,
    areYouMarried : 'true'
}];
const employeeLength = employeeDetails.length;
for(let i = 0; i < employeeLength; i++){
    try{
        const divideEmployeeAge = employeeDetails[i].age/null;
        /*if(divideEmployeeAge === Infinity){ }
        */
       console.log(divideEmployeeAge);
    }
     catch(error){
        const checkResult = employeeDetails[i].age/2;
        console.log(` after dividing age by 2 ${checkResult}`);
    }
}
