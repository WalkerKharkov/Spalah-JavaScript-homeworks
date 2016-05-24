function Employee(fName, lName, age, gender, position, company){
    Person.apply(this, arguments);
    var self=this;
    this.position=position;
    this.company=company;///////////////////////////////////////////////
}

Employee.prototype.setCompany=function(oldCompany, newCompany){
    this.oldCompany.deleteEmployee(this);
    this.newCompany.addEmployee(this);
};

Class.extend(Employee, Person);

/*var test1= new Employee('Petya', 'Chizhikov', 30, 'male', 'junior', 'Microsoft');

console.log(test1);
*/