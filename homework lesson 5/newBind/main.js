function newBind(){
    var args=[],
        i, func, context;
    for (i=0; i<arguments.length; i++){
        args[i]=arguments[i];
    }
    func=args[0];
    context=args[1];
    args.splice(0, 2);
    return function(){
        for (var i=0; i<arguments.length; i++) args.push(arguments[i]);
        func.apply(context, args);
    }
}

var obj={
    name: 'Alex',
    sayHi: function(){
        console.log('Hi, ' + this.name);
        console.log('my arguments are: ', arguments);
    }
};

var sayHi=newBind(obj.sayHi, obj, 1, 2, 3);

var anotherObj={
    name: 'Bill',
    innerObj:  {
        sayWhatsUp: function(args) {
            console.log('Whats Up, ' + this.name);
            console.log(args);
        }
    }
};

var sayWhatsUp=newBind(anotherObj.innerObj.sayWhatsUp, anotherObj, 'how are you, nigga?');

function myFunc(arg){
    console.log('Hello, ' + arg);
}

var myFunc=newBind(myFunc, null, 'Anton');

sayHi(4, 5);
sayWhatsUp();
myFunc();
