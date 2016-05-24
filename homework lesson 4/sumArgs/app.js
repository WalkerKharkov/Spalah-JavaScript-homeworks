function sumArgs(){
    var sum=0;
    for(var i=0; i<arguments.length; i++){
        sum+=arguments[i];
    }
    return sum;
}

console.log(sumArgs(1, 2, 3));
console.log(sumArgs(5, 20, 100, 4, 31));
console.log(sumArgs(1, 2, 'hello'));
console.log(sumArgs('hello', 25, 'Alex'));