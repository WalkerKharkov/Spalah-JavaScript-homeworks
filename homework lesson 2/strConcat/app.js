/**
 * Created by User on 30.01.2016.
 */
function strConcat() {
    var str = document.getElementById('str').value;
    var n = Number(document.getElementById('n').value);
    var result="";
    if (isNaN(n)){
        alert('Во втором поле ввода ОБЯЗАТЕЛЬНО должно быть число!');
        return;
    }
    for(i=0;i<n;i++){
        result+=str;
    }
    document.getElementById('result').innerHTML='Результат конкатенации: '+result;
}