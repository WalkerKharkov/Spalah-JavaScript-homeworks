var doc=document;
var numOfItems=function(){
    return [].slice.apply(doc.getElementsByTagName('li')).length;
};
var ul=doc.getElementById('ul');
var sortElementFlag=true;

function addLiElem(flag){
    var newElem=doc.createElement('li');
    newElem.innerHTML=""+(numOfItems()+1)+" item  ";
    var newDelButton=doc.createElement('button');
    newDelButton.innerHTML=" X ";

    /*
     * для удаления элемента без применения делегирования
     *
     * newDelButton.setAttribute('onclick', 'deleteLiElem(this)');
     * newDelButton.id="b"+numOfItems();
     * newElem.id=numOfItems();
     *
     */

    newElem.appendChild(newDelButton);
    switch (flag){
        case 'f':
            ul.appendChild(newElem);
            break;
        case 'l':
            ul.insertBefore(newElem, ul.firstChild);
    }
}

ul.onclick = function(event){
    if (event.target.parentNode.nodeName=='LI') ul.removeChild(event.target.parentNode);
};

function sort(sortElem, i){
    var newDelButton=doc.createElement('button');
    sortElem.innerHTML=""+(i+1)+" item  ";
    newDelButton.innerHTML=" X ";
    sortElem.appendChild(newDelButton);
}

ul.ondblclick = function(){
    var liElems=[].slice.apply(doc.getElementsByTagName('li'));
    if (sortElementFlag) {
        for (var i=0; i<numOfItems(); i++) sort(liElems[i], i);
        sortElementFlag=false;
    }
    else {
        for (var i=(numOfItems()), j=0; i>0; i--, j++) sort(liElems[i-1], j);
        sortElementFlag=true;
    }
};

/*
 * Вариант удаления элемента без применения делегирования
 *
 * function deleteLiElem(buttonID){
 *
 *     delIndex=buttonID.id.substr(1, buttonID.id.length-1);
 *     delElem=doc.getElementById(delIndex);
 *     delElem.remove();
 * }
 */
