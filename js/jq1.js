// JavaScript Document
"use strict"
$(function(){
	$("#icmd").click(function(){
		$("#dcmd").toggle();
	});
});
$(function(){
	$("#dclose").click(function(){
		$("#close").slideToggle("slow");
	});
	$('#cllose').on('click', function() {
        if(confirm("Are you sure to close this page？")) {
            window.opener = null;
            window.open('', '_self');
            window.close();
        } else {}
    
    });
	$("#reload").click(function(){
		location.reload();
	});
});
$(function(){
	$("#ibaidu").click(function(){
		$("#baidu").toggle();
	});
	
});
$(function(){
	$("#imusic").click(function(){
		$("#dmusic").slideToggle("slow");
	});
	
});
$(function(){
	$("#ddimy").mouseover(function(){
		$("#dimy").animate({
			bottom:'430px',
			right:'430px',
            
		},700);
	});
	$("#ddimy").mouseout(function(){
		$("#dimy").animate({
			bottom:'-3px',
			right:'-3px'
		},700);
	});
	
	
		
	
});
