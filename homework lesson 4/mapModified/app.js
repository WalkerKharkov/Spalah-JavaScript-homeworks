function mapModified(arr, callback){
    var newArr=[];
    for (var i=0; i<arr.length; i++){
        newArr[i]=callback(arr[i]);
    }
    return newArr;
}

var arr=['one', 'two', 'three', 'four'];

console.log(mapModified(arr, function (item) {
    return item.toUpperCase();
}));

console.log(mapModified(arr, function (item) {
    return item.substring(1, 2);
}));

var newArr=mapModified(arr, function (item) {
    return item.length;
});

console.log(newArr);