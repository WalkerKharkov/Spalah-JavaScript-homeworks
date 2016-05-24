/**
 * Created by User on 30.01.2016.
 */
function sumOfLargers() {
    var a = Number(document.getElementById('a').value);
    var b = Number(document.getElementById('b').value);
    var c = Number(document.getElementById('c').value);
    var sum=0;
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert('Некорректный ввод! Все значения должны быть числами!');
        return;
    }
    if (a==b || a==c || b==c){
        alert('Числа должны быть разными по величине!');
        return;
    }
    if (a>b || a>c){
        sum+=a;
        sum+= b>c?b:c;
    }
    else
        sum=b+c;
    document.getElementById('result').innerHTML='Результат сложения двух максимальных чисел: '+sum;
}