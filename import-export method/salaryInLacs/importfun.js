const employeeData = require('./employeelist.json');

const salaryInLacs = require('./exportfun.js');

const convertedSalary = salaryInLacs(employeeData.employeeDetails);

console.log(convertedSalary);