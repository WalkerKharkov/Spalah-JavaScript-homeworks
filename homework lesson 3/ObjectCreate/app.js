var me={
    name: 'Alex',
    age: 39,
    sayHello: function sayHello(){
        alert('Hello, '+this.name);
    },
    langs: ['html', 'css', 'php', 'js'],
    body: {
        height: 175,
        weight: 90,
        head: {
            hair: 'brown',
            eyes: 'green'
        }
    }
}

//вариант №1

function objCopy(obj, newObj){
    if ((typeof obj )!='object') return;
    for (var key in obj) {
        ((typeof obj[key]) == 'object') ? objCopy(obj[key], newObj[key]={}) : newObj[key]= obj[key];
    }
}
var me1={};
objCopy(me, me1);
console.log(me1);
me.name='Ivan';
console.log(me1.name);

//вариант №2


function objCopy1(obj){
    if ((typeof obj )!='object') return;
    var newObj={};
    for (var key in obj){
        newObj[key]=((typeof obj[key])=='object') ? objCopy1(obj[key]) : obj[key];
    }
    return newObj;
}

var me2=objCopy1(me);
console.log(me2);
me.name='Vasya';
console.log(me2.name);

//остался один вопрос по итогу. Массив при клонировании превращается в объект, так как typeof массива возвращает объект. как с этим бороться?