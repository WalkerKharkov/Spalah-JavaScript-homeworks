var Utils={
    inCopy: function(source, dest){
        for (var key in source) {
            ((typeof source[key]) == 'object') ? inCopy(source[key], dest[key]={}) : dest[key]= source[key];
        }
    },
    copy: function(source){
        if ((typeof source )!='object') return;
        var dest={};
        inCopy(source, dest);
        return dest;
    },
    extend: function(source, dest){
        if (((typeof source )!='object')||((typeof dest )!='object')) return;
        inCopy(source, dest);
    }
}
