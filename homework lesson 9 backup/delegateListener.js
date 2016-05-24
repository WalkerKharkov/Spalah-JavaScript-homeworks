function delegateListener(elem, event, selector, fn){
    while (!=elem){

    }
    .addEventListener(event, fn);
}
