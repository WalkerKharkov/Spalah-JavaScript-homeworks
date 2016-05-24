function delegateListener(elem, event, selector, fn){
    var target=event.target;
    while (target!=elem){
        console.log(target);
        if(target==selector){
            target.addEventListener(event, fn);
            return;
        }
        target=target.parentNode;
    }

}
