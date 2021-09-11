//Use the class in index file to create few employees and use the functions in class on them"

const employeeClass = require("./emp.js");
const employeeData1 = new employeeClass.employeeDetails(101, 'luis', "luis@gmail", 56, "Jaipur", 5612457812, "male", true, 5012400);
const employeeData2 = new employeeClass.employeeDetails(102, 'john', "john@gmail", 35, "Bhopal", 8989898988, "female", false, 5120000);
console.log(employeeData1.sortByParameter("age"));
