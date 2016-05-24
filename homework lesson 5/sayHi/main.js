function sayHi(helloWord, name) {
    console.log(helloWord + name);
}

var sayHi=sayHi.bind(null, 'Hello, ');

sayHi('Anton');
sayHi('Bill');
sayHi('Anna');

