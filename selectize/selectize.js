    function selectize(selector) {
        var elements=[].slice.call(document.querySelectorAll(selector));
        var select=document.querySelector('select');
        elements.forEach(function (elem) {
            elem.style.display='none';
            var div=document.createElement('div');
            div.classList.add('selectize-wrap');
            div.appendChild(document.createTextNode(elem.firstElementChild.textContent));
            var dropdownList=createDropdownList(elem.children);
            div.appendChild(dropdownList);
            elem.parentNode.insertBefore(div, elem);
            div.appendChild(elem);
            select.dataset.value=elem.firstElementChild.value;
        });
        bindEvents();
    }
    
    function createDropdownList(option) {
        var ul=document.createElement('ul');
        ul.style.display='none';
        for(var i=0; i<option.length; i++){
            var li=document.createElement('li');
            li.appendChild(document.createTextNode(option[i].textContent));
            li.dataset.value=option[i].value;
            ul.appendChild(li);
        }
        return ul;
    }
    
    function bindEvents() {
        document.body.addEventListener('click', function (event) {
           var target = event.target;
            while (target != this) {
                if (target.matches('.selectize-wrap')) {
                    toggleDropdown(target);
                    break;
                }
                if (target.tagName=='LI'){
                    var div=document.querySelector('.selectize-wrap');
                    var select=document.querySelector('select');
                    div.firstChild.textContent=target.textContent;
                    select.dataset.value=target.dataset.value;
                    toggleDropdown(target.parentNode.parentNode);
                    break;
                }
            target = target.parentNode;
            }
        })
    }
    
    function toggleDropdown(wrap) {
        var children=wrap.children;
        for (var i=0; i<children.length; i++){
            if (children[i].tagName=='UL'){
                children[i].style.display=children[i].style.display=='none'?'block':'none';
            }
        }
    }
