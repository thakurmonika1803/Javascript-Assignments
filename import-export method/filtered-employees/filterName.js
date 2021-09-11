// Add a function to return a list of employees that contains ""am"" in his name. Add it in a separate file and import it to call in another file.


const employeeData = require('./employeelist.json');
const employeeString = JSON.stringify(employeeData);
const employeeObject = JSON.parse(employeeString);

const searchNameString = 'am';
const filteredNames = employeeObject.employeeDetails.filter((employee) => employee.firstName.includes(searchNameString)
);

module.exports = { filteredNames };









