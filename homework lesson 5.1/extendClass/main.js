var Class={
    extendClass: function(){
        /*
        Формат вызова функции:
         - ((функция-конструктор класса1), (функция-конструктор класса2)) - для наследования классом1 класса2
         - ((функция-конструктор класса), (объект)) - для наследования классом свойств объекта
         - ((функция-конструктор класса1), (функция-конструктор класса2), (объект)) - для наследования классом1 класса2
            и свойств объекта
        */
        var args=[];
        for (var i=0; i<arguments.length; i++)args[i] = arguments[i];
        function prototypeCopy(destination, source){
            destination.prototype=Object.create(source.prototype);
            destination.prototype.constructor=destination;
        }
        function propertyCopy(destination, source){
            for (var key in source){
                destination.prototype[key]=((typeof source[key])=='object') ? propertyCopy(source[key]) : source[key];
            }
        }
        switch (args.length){
            case 2:
                if(((typeof args[0])=='function')&&((typeof args[1])=='function')){
                    prototypeCopy(args[0], args[1]);
                    break;
                }else if(((typeof args[0])=='function')&&((typeof args[1])=='object')){
                    propertyCopy(args[0], args[1]);
                    break
                }else return alert ('Invalid arguments');
            case 3:
                if(((typeof args[0])=='function')&&((typeof args[1])=='function')&&((typeof args[2])=='object')){
                    prototypeCopy(args[0], args[1]);
                    propertyCopy(args[0], args[2]);
                    break;
                }else return alert ('Invalid arguments');
                break;
            default:
                return alert ('Wrong number of arguments!!!');
        }
    }
};

//-------------------------------------------------------------------------------------------


function Car(color){
    this.color=color;
    this.wheels=4;
}

function Track(color, weight){
    Car.apply(this, arguments);
    this.weight=weight;
}

Class.extendClass(Track, Car);

console.log(Track.prototype);


var carObj1 = new Track('red', 1000);
console.log(carObj1);

Class.extendClass(Track, {a:1, b:2});

var carObj2=new Track('blue', 2000);
console.log(carObj2);
console.log(Track.prototype);
console.log(carObj2.a);

function SuperTrack(color, level){
    Car.apply(this, arguments);
    this.level=level;
}

Class.extendClass(SuperTrack, Car, {driver: 'strong', speed: 140});

console.log(SuperTrack.prototype);
console.dir(SuperTrack.prototype);
console.log(SuperTrack.__proto__);


