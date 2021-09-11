//Take another parameter as salary and keep it above 500000 in numbers in json and print it upto one decimal place only with a unit as Lac.

const salaryInLacs = function (employeeData) {
    return employeeData.map(function (employeeDetails) {
        return {
            ...employeeDetails,
            salary: (employeeDetails.salary / 100000).toFixed(2) + “lacs”
        }
    });
}
module.exports = { salaryInLacs };
