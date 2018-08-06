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