/**
 * Created by User on 30.01.2016.
 */
function strConcat(str, n){
    var result='';
    str = String(str);//Можно, конечно, сделать и +'', но как-то выглядит коряво, неохота привыкать к такому
    if ((typeof n)!='number'){
        return str;
    }
    for(i=0;i<n;i++){
        result+=str;
    }
    return result;
}
console.log(strConcat('петя', 5));
console.log(strConcat('вася', 3));
console.log(strConcat('гриша', '5'));
