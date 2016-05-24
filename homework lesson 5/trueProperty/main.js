//------------------------варик 1-----------------------------

var person = {
    name: 'Bill',
    sayHi: function() {
                return function() {
                            console.log(this.name);
                        }
            }
}
person.sayHi().call(person);

//------------------------варик 2------------------------------

var person1 = {
    name: 'Bill',
    sayHi: function() {
        return function() {
            (function() {
                console.log(this.name);
            }).call(person1);
        }
    }
}
person1.sayHi()();

