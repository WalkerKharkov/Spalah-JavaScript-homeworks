function Company(name, spec, employees){
    this.name=name;
    var specification=spec;
    var self=this;
    this.employees=employees;
    this.setSpecification=function(spec){
        specification=spec;
    };
    this.getSpecification=function(){
        return specification;
    }
}

Company.prototype.addEmployee=function(newEmployee){
    this.employees.push(newEmployee);
};

Company.prototype.deleteEmployee=function(existEmployee){
    var index=this.employees.indexOf(existEmployee);
    if(index!=-1) this.employees.splice(index,1);
};
