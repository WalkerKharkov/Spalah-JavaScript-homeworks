/**
 * Created by User on 30.01.2016.
 */
function sumOfLargers(a, b, c) {
    var sum=0;
    if ((typeof a)!='number' || (typeof b)!='number' || (typeof c)!='number')
        return 0;
    if (a==b || a==c || b==c)
        return -1;
    if (a>b || a>c){
        sum+=a;
        sum+= b>c?b:c;
    }
    else
        sum=b+c;
    return sum;
}

console.log(sumOfLargers(1, 2, 3));
console.log(sumOfLargers(5, 2, 3));
console.log(sumOfLargers(2, 2, 3));
console.log(sumOfLargers('ggg', 2, 3));
