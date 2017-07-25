// JavaScript Document
  var $load = $("#load");

  $(".l_pswBtn").on("touchend",function(e){
    e.preventDefault();
    e.stopPropagation();
    $(this).toggleClass("l_pswBtn2");
      $(this).hasClass("l_pswBtn2")?$("#PassW").prop("type","text"):$("#PassW").prop("type","password");
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
  //密码前端验证
  function checkPassWord(val){
    var $PSW = $("#PassW");
    
    //用户名为空
    if(val==""){
      $load.removeClass("test2");
    //用户名不合法
    }else{
      $load.addClass("test2");
    }
  }
  //登录按钮异步验证
function load(){
  //用户名密码都不为空
  if( !$load.hasClass("test1") ){
    errrTip("请输入正确的手机号","userID");
  }else if (!$load.hasClass("test2")) {
    errrTip("请输入登录密码","PassW");
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