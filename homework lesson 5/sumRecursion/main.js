/*function sumRecursion(a){
    var sum=0;
    return function getArgs(b){
        if(b){
            sum+=b;
            var c;
            return getArgs(c);
        }
        return sum+=a;
    }
}

console.log(sumRecursion(1)(2)(3));
*/
/*function sum(a){
    return function (b){
        return function (c){
            return a+b+c;
        }
    }
}

console.log(sum(1)(2)(3));
*/


/*while(return function getArgs() ){

 }*/

function sumRecursion(){
   if (arguments) return sumRecursion()+arguments[0];
}

console.log(sumRecursion(1)(2)(3)(4));
