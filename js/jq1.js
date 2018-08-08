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
			width:'400px',
			height:'400px'
		},700);
	});
	$("#ddimy").mouseout(function(){
		$("#dimy").animate({
			width:'40px',
			height:'40px'
		},700);
	});
	$("#ddimy").click(function(){
		var q=0;
		if(q===0){
			$("#dimy").animate({
			width:'400px',
			height:'400px'
		},700);
			q=1;
		}
		else{
			$("#dimy").animate({
			width:'40px',
			height:'40px'
		},700);
			q=0;
		}
	});
	
		
	
});
