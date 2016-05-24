/*var person={
    name: 'Bill',
    sayHi: function(){
        var fn=function(){
            return this.name;
        }
        return fn.bind(this);
    }
}

console.log(person.sayHi()());
*/

var Car={
    d: 0,
    drive: function(){

    },
    constructor: function(color, privod){
        this.color=color;
        this.privod=privod||'zadniy';
        return this;
    }
}

var myCar=Object.create(Car).constructor('red', 'peredniy');
var myCar1=Object.create(Car).constructor('white');
var myCar2=Object.create(Car).constructor('black');

console.log(myCar2);
console.log(myCar2.d);
console.log(myCar2.drive);

// наследование

var Track=Object.create(Car);
Track.constructor=function(color, privod, kuzov){
    Car.constructor.apply(this, arguments);
    this.kuzov=kuzov;
    return this;
}

var track=Object.create(Track).constructor('red', null, 'big');

console.log(track);

console.log(Car.isPrototypeOf(track));
console.log(Track.isPrototypeOf(track));


//----------------------------------------------------

var Class={
    extendClass: function(dest, extClass){
        dest.prototype = Object.create(extClass.prototype);
        dest.prototype.constructor=dest;
    }
}

function Car(color){
    //console.log(this instanceof Car);
    this.color=color;
    return {
        a: 1,
        b: 2
    }
}

//console.log(Car.prototype);
Car.prototype.drive=function(){
    this.d++;
};
Car.prototype.d=0;


var carObj1 = new Car('red');
//var carObj2 = new Car('blue');
//var carObj3 = new Car('green');

console.dir(carObj1.prototype);
//console.dir(carObj2);
//console.dir(carObj3);


/*function  Car(color){
    if(!(this instanceof Car)){
        return new Car(this.arguments);
    }
}

var c = Car('red');
*/


function Track(color, weight){
    Car.apply(this, arguments);
    this.weight=weight;
}

Class.extendClass(Track, Car);
//Track.prototype=Object.create(Car.prototype);
//Track.prototype.constructor=Track;

var track=new Track('red', 100);

console.log(track);