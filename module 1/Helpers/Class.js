var Class={
    extend: function(){
        var args=[];
        for (var i=0; i<arguments.length; i++)args[i] = arguments[i];
        function prototypeCopy(destination, source){
            destination.prototype=Object.create(source.prototype);
            destination.prototype.constructor=destination;
        }
        function propertyCopy(destination, source){
            for (var key in source){
                destination.prototype[key]=((typeof source[key])=='object') ? propertyCopy(source[key]) : source[key];
            }
        }
        switch (args.length){
            case 2:
                if(((typeof args[0])=='function')&&((typeof args[1])=='function')){
                    prototypeCopy(args[0], args[1]);
                    break;
                }else if(((typeof args[0])=='function')&&((typeof args[1])=='object')){
                    propertyCopy(args[0], args[1]);
                    break
                }else return;
            case 3:
                if(((typeof args[0])=='function')&&((typeof args[1])=='function')&&((typeof args[2])=='object')){
                    prototypeCopy(args[0], args[1]);
                    propertyCopy(args[0], args[2]);
                    break;
                }else return;
                break;
            default:
                return;
        }
    }
};

