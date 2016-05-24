function Person(fName, lName, age, gender){
    var firstName=fName;
    var lastName=lName;
    this.age=age;
    this.gender=gender;
    var self=this;
    this.setFirstName=function(fName){
        firstName=fName;
    };
    this.getFirstName=function(){
        return firstName;
    };
    this.setLastName=function(lName){
        lastName=lName;
    };
    this.getLastName=function(){
        return lastName;
    };
    this.mature=function(){
        self.age++;
    }
}

/*var test=new Person('Vasya', 'Ivanov', 25, 'male');
console.log(test);
console.log(test.getFirstName());
test.setFirstName('Juan');
console.log(test.getFirstName());
*/