function closureSum(a){
    return function (b){
        return a+b;
    }
}

console.log(closureSum(1)(3));
console.log(closureSum(20)(10));
console.log(closureSum('Hello, ')('World'));

