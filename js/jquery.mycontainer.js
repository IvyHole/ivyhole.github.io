(function($){
	"use strict";
    $.ivyhole={
		timers:[],
        create:function(val,container,color,size){
            var ihm = $("<div class='ivyholemessage'></div>"),r = Math.floor(Math.random() * 254), g = Math.floor(Math.random() * 254), b = Math.floor(Math.random() * 254);
            ihm.html(val);
            ihm.css({position : 'absolute',display : 'block',whiteSpace :'nowrap',top: (Math.floor(Math.random() * container.height())-24) + "px",width:ihm.width(),right : 0,});
			if(color === null){
				ihm.css({
					color: "rgb(" + r + "," + g + "," + b + ")",
				});
			}
			else{
				ihm.css({
					color: color
				});
			}
			if(size === null){
				ihm.css({
					fontSize : (Math.floor(Math.random() * 60))+"px",
				}); 
			}
			else{
				ihm.css({
					fontSize : size
				});
			}
            container.append(ihm);
            this.fly(ihm,container);
        },
		toper:function(val,container,color,size){
			var ihm = $("<div class='ivyholemessage'></div>"),r = Math.floor(Math.random() * 254), g = Math.floor(Math.random() * 254), b = Math.floor(Math.random() * 254);
            ihm.html(val);
            ihm.css({position : 'absolute',
					 display : 'block',
					 whiteSpace :'nowrap',
					 top: Math.floor(Math.random() * container.height()/2)+ "px",
					 width:ihm.width(),
					 right : 50 +"%",
					 transform: 'translate(-50%,-50%)',
					});
			if(color === null){
				ihm.css({
					color: "rgb(" + r + "," + g + "," + b + ")"
				});
			}
			else{
				ihm.css({
					color: color
				});
			}
			if(size === null){
				ihm.css({
					fontSize : (Math.floor(Math.random() * 60))+"px"
				}); 
			}
			else{
				ihm.css({
					fontSize : size
				});
			}
            container.append(ihm);
			this.top(ihm);
		},
        add:function(val,container,typenumber,color,size){
			//typenumber : 1 2 3
            if(typenumber === 1){
				this.create(val,container,color,size);
			}
			if(typenumber === 2){
				this.add(val,container,color,size);
			}
			
        },
        fly:function(ihm,container){
            var i = 0;
            var timer = setInterval(function() {
                ihm.css({
                    right: (i += 1) + "px"
                });
                if ( ihm.offset().right > container.offset().width()) {
                    ihm.remove();
                    clearInterval(timer);
                }
            }, 15);
            this.timers.push(timer);
        },
		top:function(ihm){
			setTimeout(timer(),3000);
			function timer(){
				ihm.remove();
			}
			}
    };
})(jQuery);