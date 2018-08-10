(function($){
	"use strict";
    $.ivyhole={
        timers:[],
        create:function(val,container){
            var ihm = $("<div class='ivyholemessage'></div>"),r = Math.floor(Math.random() * 254), g = Math.floor(Math.random() * 254), b = Math.floor(Math.random() * 254);
            ihm.html(val);
            ihm.css({position : 'absolute',fontSize : (Math.floor(Math.random() * 60))+"px",display : 'block',whiteSpace :'nowrap',top: (Math.floor(Math.random() * container.height())-24) + "px",width:ihm.width(),color: "rgb(" + r + "," + g + "," + b + ")",right : 0,});
            container.append(ihm);
            this.fly(ihm,container);
        },
        add:function(val,container){
            this.create(val,container);
        },
        fly:function(ihm,container){
            var i = 0;
            var timer = setInterval(function() {
                ihm.css({
                    right: (i += 1) + "px"
                });
                if ((ihm.offset().left + ihm.width()) < container.offset().left) {
                    ihm.remove();
                    clearInterval(timer);
                }
            }, 15);
            this.timers.push(timer);
        },
    };
})(jQuery);