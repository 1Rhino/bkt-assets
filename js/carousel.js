$(document).ready(function(){  
	$("#featured").tabs({fx:{opacity: "toggle"}}).tabs("rotate", 5000, true);  
		$(".ui-tabs-panel img").toggle(  
		function() {  
			$("#featured").tabs("rotate",0,true);  
		},  
		function() {  
		$("#featured").tabs("rotate",5000,true);  
	});  

	$(document).on("click", 'a[href="cong-bo-nang-luc.pdf"]', function (e) {
      e.preventDefault();
      window.open($(this).attr("href"), "_blank");
    });
})