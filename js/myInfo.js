// JavaScript Document

  $(".l_sex").on("click",function(e){
    e.preventDefault();
    e.stopPropagation();
    $(".l_mask").show();

  })
 function checkUName(val){
  var p = /(?!^\d+$)(?!^[a-zA-Z]+$)^[0-9a-zA-Z]{4,16}$/
  if (val != "" && (p.test(val))) {
      $(".inner").show();
      // $.ajax({
      //  type:"POST",
      //  url:"#",
      //  dataType:"json",
      //  data:{
      //    "userID":val,
      //    },
      //  succsee:function(data){
      //    if(data.success){
      //      $("#userId").attr('placeholder',val).val("");//清除输入框并改变提示文字
      //    }else{
      //      errrTipToast(val,"PassW");
      //    };
      //  },
      //  error:function(){
      //        alert("发生错误："+jqXHR.status);  
      //  }

      // })

       $("#userId").attr('placeholder',val).val("");
    
    
  }else if (val == "") {
    $("#userId").attr('placeholder',$("#userId").attr("data-userID")).val("");
  } else{
    errrTipToast("用户名格式不正确");
    $("#userId").attr('placeholder',$("#userId").attr("data-userID")).val("");
  }
  $(".inner").fadeOut(3000);
 }

//性别选择按钮
$(".l_choiceSex button").on("touchend",function(e){
    e.preventDefault();
    e.stopPropagation();
    var sex = $(this).val();
    $(".l_mask").hide();
    $(".l_sex").text(sex);
})
$(".l_mask").on("touchend",function(e){
    e.preventDefault();
    e.stopPropagation();
    $(".l_mask").hide();
})
$(".transparent").on("touchend",function(e){
    e.preventDefault();
    e.stopPropagation();
    $(this).hide();
    $("#userId").blur();
})