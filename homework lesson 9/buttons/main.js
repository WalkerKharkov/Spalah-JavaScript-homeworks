var doc=document;
var numOfItems=function(){
    return [].slice.apply(doc.getElementsByTagName('li')).length;
};
var ul=doc.getElementsByTagName('ul')[0];
var body=doc.getElementsByTagName('body')[0];
var sortElementFlag=true;

function addLi(flag){
    var newElem=doc.createElement('li');
    newElem.textContent=""+(numOfItems()+1)+" item  ";
    var newDelButton=doc.createElement('button');
    newDelButton.textContent=" X ";
    newElem.appendChild(newDelButton);
    switch (flag){
        case 'app':
            ul.appendChild(newElem);
            break;
        case 'prep':
            ul.insertBefore(newElem, ul.firstChild);
    }
}

function sort(sortElem, i){
    var newDelButton=doc.createElement('button');
    sortElem.textContent=""+(i+1)+" item  ";
    newDelButton.textContent=" X ";
    sortElem.appendChild(newDelButton);
}

function sortLi(){
    var liElems=[].slice.apply(doc.getElementsByTagName('li'));
    if (sortElementFlag) {
        for (var i=0; i<numOfItems(); i++) sort(liElems[i], i);
        sortElementFlag=false;
    }
    else {
        for (var i=(numOfItems()), j=0; i>0; i--, j++) sort(liElems[i-1], j);
        sortElementFlag=true;
    }
}

function clickSelect(event){
    var target=event.target;
    while (target.tagName!='BODY'){
        if (target.tagName == 'BUTTON') {
            if (target.id) {
                addLi(target.id);
                return;
            }
            else {
                ul.removeChild(event.target.parentNode);
                return;
            }
        }
        target=target.parentNode;
    }
}

body.addEventListener('click', clickSelect);
body.addEventListener('dblclick', sortLi);
