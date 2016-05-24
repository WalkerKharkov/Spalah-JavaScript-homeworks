function delegateListener(_event, elem, selector, fn){
    _event=_event.toLowerCase();
    selector=selector.toUpperCase();
    function eventHandler(event){
        var target=event.target;
        while (target!=elem){
            if (target.tagName==selector){
                fn();
                return;
            }
            target=target.parentNode;
        }
    }
    elem.addEventListener(_event, eventHandler);
}


var ul=document.getElementsByTagName('ul')[0];
delegateListener('click', ul, 'button', function(){console.log(event.target.id);});
delegateListener('click', ul, 'li', function(){console.log('Li');});

