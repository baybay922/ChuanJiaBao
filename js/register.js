// JavaScript Document
  var $load = $("#load");
$(function(){
  $load.addClass("test4");
})
  $(".l_pswBtn").on("touchend",function(e){
    e.preventDefault();
    e.stopPropagation();
    $(this).toggleClass("l_pswBtn2");
      $(this).hasClass("l_pswBtn2")?$("#PassW").prop("type","text"):$("#PassW").prop("type","password");
  })
  $(".l_codeBTN").on("click",function(e){
    e.preventDefault();
    e.stopPropagation();
    if ($load.hasClass("test1")) {
      clock();
    }else{
      errrTip("请填写正确的手机号","userID");
    };
  })

  //勾选按钮功能
  $(".l_registCheck").on("touchend",function(e){
    e.preventDefault();
    e.stopPropagation();
    $(this).toggleClass("l_registUnCheck");
    $(this).hasClass("l_registUnCheck")?$load.removeClass("test4"):$load.addClass("test4");
  })

  //用户名前端验证
  function checkUserID(val){
    var $userID = $("#userID");
    
    //用户名为空
    if(val==""){
      $load.removeClass("test1");
    //用户名不合法
    }else if(!(/^1[3|4|5|8|7][0-9]\d{4,8}$/.test(val))){
      errrTip("手机格式错误","userID");
      $load.removeClass("test1");
    }else{
      $load.addClass("test1");
    }
  }
  //验证码前端验证
  function checkCodeWord(a){
    var $codeLeg = $("#code");
    //验证码为空
    if(a==""){
      $load.removeClass("test2");
    }else if(a.length < 6 || a.length > 6){
		// alert(1111);
      $load.removeClass("test2").addClass("test2X");
      
    }else{
      $load.addClass("test2").removeClass("test2X");
    }
  }
  //密码前端验证
  function checkPassWord(b){
    var $PSW = $("#PassW");
    //用户名为空
    if(b==""){
      $load.removeClass("test3"); 
    }else if( b.length<6 || b.length > 20  ){
		// alert(222);
	  $load.removeClass("test3").addClass("test3X");	  
	}else{
      $load.addClass("test3").removeClass("test3X");
    }
  }
  //验证码按钮验证

  //登录按钮异步验证
function load(){
if($load.hasClass("test2X")){
	errrTip("请输入正确的验证码","code");
	return false;
}
if($load.hasClass("test3X")){
	errrTip("请输入6~20位字母或数字","PassW");
	return false;
}
  //用户名密码都不为空
  if( !$load.hasClass("test1") ){
    errrTip("请输入正确的手机号","userID");
  }else if (!$load.hasClass("test2")) {
    errrTip("请输入正确的验证码","code");
  }else if (!$load.hasClass("test3")) {
    errrTip("请设置登录密码","PassW");
  }else if (!$load.hasClass("test4")) {
    errrTipToast("请勾选注册协议");
  }else{
      var name = $("#userID").val(),
      telNum = $("#telNum").val(),
      checkCode = $("#checkCode").val(),
      passWord = $("#passWord").val();
    // window.name = name;  
    // window.location="indexNew.html"; //本地测试样式使用，线上环境请删除此行。
    // $.ajax({
    //  type:"POST",
    //  url:"#",
    //  dataType:"json",
    //  data:{
    //    "userID":name,
    //    "telNum":telNum,
    //    "checkCode":checkCode,
    //    "passWord":passWord,
    //    },
    //  succsee:function(data){
    //    if(data.success){
    //      location.href="#"; //定向到首页
    //    }else{
    //      errrTip(val,"PassW");
    //    };
    //  },
    //  error:function(){
    //        alert("发生错误："+jqXHR.status);  
    //  }

    // })
    alert("前往后端校验用户名密码")
  }
} 