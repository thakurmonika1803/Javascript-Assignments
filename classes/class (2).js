// Add a js class called Employee and create methods in it to sort employees by different parameters and to filter by age.
 
const employeeArray = [];
class employeeDetails {
    constructor(empId, firstName, email, age, address, phone_number, gender, areYouMarried, salary) {
            this.empId = empId,
            this.firstName = firstName,
            this.email = email,
            this.age = age,
            this.address = address,
            this.phone_number = phone_number,
            this.gender = gender,
            this.areYouMarried = areYouMarried,
            this.salary = salary
 
            employeeArray.push(this)
    }
 sortByParameter(parameter) {
    if (typeof parameter == 'string') {
        return employeeArray.sort(function (a, b) {
            if (a[parameter] < b[parameter]) {
                return -1;
            }
            if (a[parameter] > b[parameter]) {
                return 1;
            }
            return 0;
        })
    } else if (typeof parameter == 'number') {
        return employeeArray.sort(function (a, b) {
            return a[parameter] - b[parameter];
        });
  } else if (typeof parameter == 'boolean') {
        return employeeArray.sort(function (a, b) {
            return !a[parameter] && b[parameter];
       });
    }
  }
}
module.exports = { employeeDetails, employeeArray };
