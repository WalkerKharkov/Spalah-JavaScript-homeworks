(function($){

    $.fn.timer=function(){
        var expiredDate=(this.attr("timer"))?this.attr("timer"):arguments[0];
        if (!expiredDate) return this;
        if (!moment(expiredDate, 'DD-MM-YYYY HH:mm:ss').isValid()) return this;
        var expiredTime=Number(moment(expiredDate, 'DD-MM-YYYY HH:mm:ss').format('x'));
        expiredDate=" expired "+expiredDate.toLocaleString();
        this.append("<span>timer</span>");
        var $spanElem=this.children().eq(this.children().length-1);
        var timeNow;
        var timer=setInterval(function(){
            timeNow=Date.now();
            if (expiredTime<=timeNow){
                clearInterval(timer);
                $spanElem.text(expiredDate).css("color", "red");
                return this;
            }
            $spanElem.text(remainTime(timeNow, expiredTime)).css("color", "#47CD32");
        },1000);

        function remainTime(time, exTime){
            var remTime=Math.floor((exTime-time)/1000);
            var seconds=Math.floor(remTime%60);
            var minutes=Math.floor((remTime/60)%60);
            var hours=Math.floor((remTime/(60*60))%24);
            var days=Math.floor(remTime/(60*60*24)%7);
            var weeks=Math.floor(remTime/(60*60*24*7));
            seconds=((""+seconds).length==1)?"0"+seconds:""+seconds;
            minutes=((""+minutes).length==1)?"0"+minutes:""+minutes;
            var remainTime=" "+weeks;
            remainTime+=(weeks==1)?" week, ":" weeks, ";
            remainTime+=days;
            remainTime+=(days==1)?" day, ":" days, ";
            remainTime+=hours+":"+minutes+":"+seconds;
            return remainTime;
        }
    }
})(jQuery);
