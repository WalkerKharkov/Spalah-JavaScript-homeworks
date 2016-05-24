var doc=document;
var inputTags=[].slice.apply(doc.getElementsByTagName('input'));
for (var i=0; i<inputTags.length; i++) console.log(i, inputTags[i]);
console.log('------------------------------------------------------------------');
var inputSelectors=[].slice.apply(doc.querySelectorAll('form > input'));
for (var i=0; i<inputSelectors.length; i++) console.log(i, inputSelectors[i]);
console.log('------------------------------------------------------------------');
var formElem=[].slice.apply(doc.getElementsByTagName('form'))[0];
for (var i in formElem.childNodes) if (formElem.childNodes[i].nodeType==1) console.log(i, formElem.childNodes[i]);
console.log('------------------------------------------------------------------');
inputSelectors.forEach(function(item, i){
    console.log("Свойство id "+i+"го элемента :"+item.id);
    console.log("Аттрибут id "+i+"го элемента :"+item.getAttribute('id'));
    console.log("Свойство value "+i+"го элемента :"+item.value);
    console.log("Аттрибут value "+i+"го элемента :"+item.getAttribute('value'));
});

