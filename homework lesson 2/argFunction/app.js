/**
 * Created by User on 30.01.2016.
 */
function argFunction(n, successFn, errorFn){
    if((typeof successFn)!='function' || (typeof errorFn)!="function"){
        console.log('Ошибка аргументов функции!!!');
        return;
    }
    switch (n){
        case 1:
            successFn();
            break;
        case 2:
            errorFn();
            break;
        case 5:
            successFn();
            break;
        case 100:
            errorFn();
            break;
        default:
            errorFn();
    }
}

argFunction(1,
            function(){
                console.log('SUCCESS!!!');
            },
            function(){
                console.log('ERROR!!!');
            }
);
argFunction(1, 'success', 'error');
argFunction(1, 'success',
    function(){
        console.log('ERROR!!!');
    }
);
argFunction(2,
    function(){
        console.log('УСПЕХ');
    },
    function(){
        console.log('ОШИБКА!!!');
    }
);
argFunction(5,
    function(){
        console.log('УСПЕХ');
    },
    function(){
        console.log('ОШИБКА!!!');
    }
);
argFunction(34,
    function(){
        console.log('УСПЕХ');
    },
    function(){
        console.log('ОТРАБОТАЛ ДЕФОЛТ!!!');
    }
);