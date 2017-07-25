// JavaScript Document
$(function(){
	var windowName = window.name;
	if (windowName != "") {
		$(".l_payWay li").removeClass("l_checked");
		$(".l_payWay li:last-child").addClass("l_checked").text(windowName);
	}
	$("#payBal").on("click",function(e){
	    e.preventDefault();
	    e.stopPropagation();	
	    $(".l_payWay li:last-child").removeClass("l_checked").text("分期付款");
	    $(this).addClass("l_checked");	

	})
	$(".l_FirmOrderList2").on("click",function(e){
	    e.preventDefault();
	    e.stopPropagation();
	    location.href="goodsList.html";
	})  
})