const employee = {
    name: "Naim",
    streetAddress: "13 Wall St."
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newList = {...employee};
    newList[key] = value;
    return newList;

};

/* console.log(updateEmployeeWithKeyAndValue(employee, "name", `"Naim","Mansi"`))
 */

function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress , value) {
    employee.streetAddress = value;
    return employee;
}

function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee.name;
    return employee
}

function deleteFromEmployeeByKey(employee, name) {
    const newList = {...employee};
    delete newList.name;
    return newList

}



