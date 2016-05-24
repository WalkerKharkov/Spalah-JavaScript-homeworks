function ITCompany(){
    Company.apply(this.arguments);
    var specification="IT";
    this.setSpecification=function(spec){
        return specification;
    };
}
