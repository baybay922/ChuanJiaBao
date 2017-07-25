$(function(){
	//手机号
	function phonef(phone){
		$(".feedback_tip").html("");
		if(phone.val()=="" ){
			$(".feedback_tip").html("请输入手机号");
			return false;
		}else if(!/(^1[3|5|7|8][0-9]{9}$)/.test(phone.val())){
			$(".feedback_tip").html("手机号格式不对");
			return false;
		}
		return true;
	}
	//验证码
	function validf(vali){
		$(".feedback_tip").html("");
		if(vali.val()==""){
			$(".feedback_tip").html("请输入验证码");
			return false;
		}
		return true;
	}

	$("#submit").click(function(){
		if(phonef($("#phone"))){
			if(validf($("#valid"))){
			  window.location="re_password2.html";
			}
		}
	});
})