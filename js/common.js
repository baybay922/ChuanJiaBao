//输入框字符数量限制方法
var timer = 60,
	timeOut,
    $prompt = $("#prompt"),	
	$w_userBox = $("#w_userBox");
function limitNUM(n){
    var leg = $(".limitNUM"+n).val().length;
    if (leg > n) {
		$(".limitNUM"+n).val($(".limitNUM"+n).val().substring(0,n));
    }
}
function focusing(){
	$("#prompt").removeClass("promptShow");	
	$("#Testpwd").removeClass("promptShow");	
	$("#valid").removeClass("promptShow");
	$("#w_userBox").css({
		"border-bottom":"1px solid #9e938f"
	})
}
function OutFocus(val){	
	if(val==""){
		$prompt.addClass("promptShow").html("手机号不能为空");
		$w_userBox.css({
			"border-bottom":"1px solid red"
		})			
	}else if(!(/^1[3|4|5|8|7][0-9]\d{4,8}$/.test(val))){
		$prompt.addClass("promptShow").html("请输入正确的手机号");
		$w_userBox.css({
			"border-bottom":"1px solid red"
		})
	}else if(val.length<11){
		$prompt.addClass("promptShow").html("不是完整的11位手机号");
		$w_userBox.css({
			"border-bottom":"1px solid red"
		})
	}else{
		$w_userBox.css({
			"border-bottom":"1px solid #9e938f"
		})
		if($("#veriBtn")){
			$("#veriBtn").click(timeout())
			
		}else{
			return false;
		}
	}
}

function passwordf(passval1,$this){
	if(passval1 =="" )//只处验证不能为空并且只能为英文或者数字或者下划线组成的２－１５个字符
	{
		if(passval1==0){
			$("#Testpwd").addClass("promptShow").html("请您输入密码");
			$this.parent().css({
				"border-bottom":"1px solid red"
			})
		}else{
			$("#Testpwd").addClass("promptShow").html("请输入4~20位字母加数字字符");
			$this.parent().css({
				"border-bottom":"1px solid red"
			})
		}
	}else{
		
		if(passval1.length>=4 && passval1.length<=20 && /^[0-9a-zA-Z]+$/.test(passval1)){
			$("#Testpwd").addClass("promptShow").html("请输入4~20位字母加数字字符");
			$this.parent().css({
				"border-bottom":"1px solid red"
			})
		}else{
			$("#Testpwd").addClass("promptShow").html("请输入4~20位字母加数字字符");
			$this.parent().css({
				"border-bottom":"1px solid red"
			})
		}
		
	}
}

function validf(vali,$this){
	if(vali =="" )
	{
		if(vali ==0){
			$("#valid").addClass("promptShow").html("请您输入验证码");
			$this.parent().css({
				"border-bottom":"1px solid red"
			})			
		}else{
			$("#valid").removeClass("promptShow");
			$this.parent().css({
				"border-bottom":"1px solid #9e938f"
			})
			
		}
	}else{
		
		if(vali.length==4 ){
			$("#valid").removeClass("promptShow");
			$this.parent().css({
				"border-bottom":"1px solid #9e938f"
			})
			
		}else{
			$("#valid").addClass("promptShow").html("验证码4位数字");
			$this.parent().css({
				"border-bottom":"1px solid red"
			})
		}
	}
}

function timeout(){
	timeOut=setInterval(function() {
			if (timer==0) {
				 clearTimeout(timeOut);
				 $("#veriBtn").html("获取验证码");
				 timer=60;
			}else{
				$("#veriBtn").off("click")
				$("#veriBtn").html(timer--+"s").css({
					"width":"6.5rem"
				})
			}
		}, 1000);
}

$("#w_reveal").on("click",function(){
	$(this).toggleClass("w_revealShow");
	if($(this).hasClass("w_revealShow")){
		$("#pwd").attr("type","text")
	}else{
		$("#pwd").attr("type","password")
	}
})

function closeVal($this,val){
	if( val == "" ){
		$this.parent().find(".w_close").css({"display":"none"})
	}else {
		$this.parent().find(".w_close").css({"display":"block"})
	}
}
$(".w_close").on("click",function(){
	$(this).parent().find("input").val("");
	$(this).hide();
	$("#prompt").removeClass("promptShow");
	$("#w_userBox").css({
		"border-bottom":"1px solid #9e938f"
	})
})

$(".w_SignIn").on("click",function(){
	var userVal = $(".limitNUM11").val(),
		pwdVal = $("#pwd").val();
		OutFocus(userVal)
		passwordf(pwdVal,$("#pwd"))
})
$("#w_SignIn").on("click",function(){
	var RuserVal = $(".limitNUM11").val(),
		RTestVal = $(".proving").val(),
		RpwdVal =$(".Rpwd").val();
		OutFocus(RuserVal);
		validf(RTestVal,$(".proving"))
		passwordf(RpwdVal,$(".Rpwd"))
		
})