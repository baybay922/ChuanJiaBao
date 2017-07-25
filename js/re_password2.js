$(document).ready(function(){
	//眼睛的点击事件
	$(".l_pswBtn").on("touchend",function(e){
		e.preventDefault();
		e.stopPropagation();
		$(this).toggleClass("l_pswBtn2");
		  $(this).hasClass("l_pswBtn2")?$("#userPsw").prop("type","text"):$("#userPsw").prop("type","password");
	})
	
	$("#userName").blur(function(){
		$(".feedback_tip").html("");
		$("#submit_btn").removeClass("re_psw_btn").addClass("re_psw_btnhui");
		if($("#userName").val()=="" ){
			$(".feedback_tip").html("请输入收货人姓名");
			return false;
		}
		return true;
	});
	$("#userNum").blur(function(){
		$(".feedback_tip").html("");
		$("#submit_btn").removeClass("re_psw_btn").addClass("re_psw_btnhui");
		if($("#userNum").val()=="" ){
			$(".feedback_tip").html("请输入验证码");
			return false;
		}
		return true;
	});
	$("#userPsw").blur(function(){
		$(".feedback_tip").html("");
		$("#submit_btn").removeClass("re_psw_btn").addClass("re_psw_btnhui");
		if($("#userPsw").val()=="" ){
			$(".feedback_tip").html("请输入新密码");
			return false;
		}
		return true;
	});
  
	$("input").blur("input",function(){
	//$("#submit").click(function(){
		if($("#userName").val() != "" && $("#userNum").val() != "" && $("#userPsw").val() != ""){
			$("#submit_btn").removeClass("re_psw_btnhui").addClass("re_psw_btn");
			$("#submit").attr('disabled',"true");
			$(".feedback_tip").html("您重置密码成功！");
		}else{
			$('#submit').removeAttr("disabled"); 
		}
	})
	
	//点击验证码时的倒计时
	$("#re_getvalid").click(function(){
        if($("#userName").val() != ""){
            timer($(this));
        }else{
			$(".feedback_tip").html("请输入收货人姓名");
			return false;
		}
    });
	var intDiff = parseInt(59);//倒计时总秒数量
	function timer(timeval){
		
		timeval.attr("disabled",true);
		timeval.html('60秒');
		intDiff=59;
		interval=window.setInterval(function(){
		timeval.html(intDiff+'秒');
		if(intDiff<=0){
			timeval.attr("disabled",false);
			timeval.html('重新获取');
			clearTimeout(interval); 
			return;
		}
		intDiff--;
		}, 1000);
	}
});