var myArray=[ 1, 2, 5, 10, 50, 'Alex', true, {name: 'Alex'}, [2, 4, 6, 8]];

myArray.forEach(function(value, key){
    console.log('Значение элемента с индексом ['+key+'] : '+value);
});

console.log('---------------------------------------------------------');

function getArrayElements(arr) {
    for (var i = 0; i <= (myArray.length - 1); i++){
        console.log('Значение элемента с индексом ['+i+'] : '+arr[i]);
    }
}

getArrayElements(myArray);




