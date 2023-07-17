const employee = {
    name : "Sam",
    streetAddress : "11 Broadway"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value,
        //can I add an object in here that says name: Sam and streetaddress: 11 Broadway
      };

};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
};


function deleteFromEmployeeByKey(employee, key){
const emp2 = {
        ...employee
    };

    delete emp2[key]
    return emp2;
};
//test says let newEmployee = deleteFromEmployeeByKey(employee, 'name');
//I want to employees to return name: Sam and streetaddress: 12 Broadway


function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];

    return employee;
}
//let newEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'name');
//expect(employee).to.equal(newEmployee);
