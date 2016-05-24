var Form={
    init: function () {
        selectize('select');
        this.bindEvents();
    },
    bindEvents: function () {
        var self=this;
        document.addEventListener('submit', function (event) {
            if(self.valid(event.target)){
                /*отправка формі*/
            }
            else{
                /*обработка ошибок*/
            }
            event.preventDefault();
        })
    },
    valid: function (form) {
        var elements=form.elements;
        var errors={};
        this.removeErrors();
        for (var i=0; i<elements.length; i++){
            if (elements[i].tagName!='INPUT') continue;
            var error=this.checkValid(elements[i]);
            if (error){
                errors[elements[i].name]=error;
            }
        }
        if (Object.keys(errors).length){
            this.errorHandler(form, errors);
            return false;
        }
        return true;
    },
    checkValid: function (input) {
        if(input.required&&!input.value.length){
            return "Введите єто поле";
        }
    },
    errorHandler: function (form, errors) {
        var keys=Object.keys(errors);
        var elements=form.elements;
        keys.forEach(function (key) {
            var input=elements[key];
            var error=document.createElement('span');
            error.classList.add('error');
            error.appendChild(document.createTextNode(errors[key]));
            input.parentNode.appendChild(error);
        })
    },
    removeErrors: function () {
        var errors=document.querySelectorAll('.error');
        for (var i=0; i<errors.length; i++){
            errors[i].parentNode.removeChild(errors[i]);
        }
    }
};

Form.init();
