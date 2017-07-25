// JavaScript Document
var $oldPSW = $("#oldPSW"),
    $newPSW1 = $("#newPSW1"),
    $newPSW2 = $("#newPSW2"),
    $exit = $(".l_exit")
$("input").on("input",function(){
  ($oldPSW.val() == "" || $newPSW1.val() == "" || $newPSW2.val() == "") ? $exit.addClass("l_disable").attr("disabled",""): $exit.removeClass("l_disable").removeAttr('disabled');
})
$exit.on("click",function(e){
    e.preventDefault();
    e.stopPropagation();
    if ($oldPSW.val().length<6||$oldPSW.val().length>20) {
      errrTipToast("当前密码不正确");
      $oldPSW.addClass("l_RedLine");
      return false;
    }
    if ($newPSW1.val().length<6||$newPSW1.val().length>20) {
      errrTipToast("新密码格式不正确");
      $newPSW1.addClass("l_RedLine");
       return false;
    }
     if ($newPSW2.val().length<6||$newPSW2.val().length>20) {
      errrTipToast("新密码格式不正确");
      $newPSW2.addClass("l_RedLine");
       return false;
    }
     if ($newPSW1.val() != $newPSW2.val()) {
      errrTipToast("两次密码输入不一致");
      $newPSW1.addClass("l_RedLine").val("");
      $newPSW2.addClass("l_RedLine").val("");
       return false;
    }
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
    alert("前往后端校验密码")
    $(".l_mask").show();
    fiveSclock();
})

//修改成功方法
 var tm = 5;
 function fiveSclock(){
    if (tm == 0) {
        clearTimeout("fiveSclock()");
        location.href="myinfo.html";
    }else{
      $(".l_changeSuccess span").text(tm+"S后自动回到登陆页面")
      tm-=1;
      setTimeout("fiveSclock()",1000);
    }
  }



