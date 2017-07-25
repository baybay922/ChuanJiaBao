// JavaScript Document
var data = 999;
$("#Bank_CCB").on("click",function(e){
    e.preventDefault();
    e.stopPropagation();
    $(".l_bankBTN>li").removeClass("l_bankCheck");
    $(this).addClass("l_bankCheck");
   $(".l_mortgageList1").show().addClass("l_left").removeClass("l_mid l_right").html("<li class='l_checked'>6期，每期金额约为RMB "+data+"元，总计约RMB 9,999元（银行收取0%手续费）</li> <li>9期，每期金额约为RMB "+data+"元，总计约RMB 9,999元（银行收取0%手续费）</li> <li>12期，每期金额约为RMB "+data+"元，总计约RMB 9,999元（银行收取0%手续费）</li>");
   $(".l_mortgageList2").hide();
   l_checkedBind();
})

$("#Bank_CMB").on("click",function(e){
    e.preventDefault();
    e.stopPropagation();
    $(".l_bankBTN>li").removeClass("l_bankCheck");
    $(this).addClass("l_bankCheck");
    $(".l_mortgageList1").show().addClass("l_mid").removeClass("l_left l_right").html("<li class='l_checked'>6期，每期金额约为RMB "+data+"元，总计约RMB 9,999元（银行收取0%手续费）</li> <li>9期，每期金额约为RMB "+data+"元，总计约RMB 9,999元（银行收取0%手续费）</li> <li>12期，每期金额约为RMB "+data+"元，总计约RMB 9,999元（银行收取0%手续费）</li>");
    $(".l_mortgageList2").hide();
    l_checkedBind();
})

$("#Bank_ICBC").on("click",function(e){
    e.preventDefault();
    e.stopPropagation();
    $(".l_bankBTN>li").removeClass("l_bankCheck");
    $(this).addClass("l_bankCheck");
    $(".l_mortgageList1").show().addClass("l_right").removeClass("l_mid l_left").html("<li class='l_checked'>6期，每期金额约为RMB "+data+"元，总计约RMB 9,999元（银行收取0%手续费）</li> <li>9期，每期金额约为RMB "+data+"元，总计约RMB 9,999元（银行收取0%手续费）</li> <li>12期，每期金额约为RMB "+data+"元，总计约RMB 9,999元（银行收取0%手续费）</li>");
    $(".l_mortgageList2").hide();
    l_checkedBind();
})

$("#Bank_CMBC").on("click",function(e){
    e.preventDefault();
    e.stopPropagation();
    $(".l_bankBTN>li").removeClass("l_bankCheck");
    $(this).addClass("l_bankCheck");
   $(".l_mortgageList2").show().addClass("l_left").removeClass("l_mid l_right").html("<li class='l_checked'>6期，每期金额约为RMB "+data+"元，总计约RMB 9,999元（银行收取0%手续费）</li> <li>9期，每期金额约为RMB "+data+"元，总计约RMB 9,999元（银行收取0%手续费）</li> <li>12期，每期金额约为RMB "+data+"元，总计约RMB 9,999元（银行收取0%手续费）</li>");
   $(".l_mortgageList1").hide();
   l_checkedBind();
})

$("#Bank_BC").on("click",function(e){
    e.preventDefault();
    e.stopPropagation();
    $(".l_bankBTN>li").removeClass("l_bankCheck");
    $(this).addClass("l_bankCheck");
    $(".l_mortgageList2").show().addClass("l_mid").removeClass("l_left l_right").html("<li class='l_checked'>6期，每期金额约为RMB "+data+"元，总计约RMB 9,999元（银行收取0%手续费）</li> <li>9期，每期金额约为RMB "+data+"元，总计约RMB 9,999元（银行收取0%手续费）</li> <li>12期，每期金额约为RMB "+data+"元，总计约RMB 9,999元（银行收取0%手续费）</li>");
    $(".l_mortgageList1").hide();
    l_checkedBind();
})

$("#Bank_ABC").on("click",function(e){
    e.preventDefault();
    e.stopPropagation();
    $(".l_bankBTN>li").removeClass("l_bankCheck");
    $(this).addClass("l_bankCheck");
    $(".l_mortgageList2").show().addClass("l_right").removeClass("l_mid l_left").html("<li class='l_checked'>6期，每期金额约为RMB "+data+"元，总计约RMB 9,999元（银行收取0%手续费）</li> <li>9期，每期金额约为RMB "+data+"元，总计约RMB 9,999元（银行收取0%手续费）</li> <li>12期，每期金额约为RMB "+data+"元，总计约RMB 9,999元（银行收取0%手续费）</li>");
    $(".l_mortgageList1").hide();
    l_checkedBind();
})

function l_checkedBind(){
  $(".l_mortgageList li").on("click",function(e){
    e.preventDefault();
    e.stopPropagation();
    $(".l_mortgageList li").removeClass("l_checked");
    $(this).addClass("l_checked") ;
  })

}
l_checkedBind();
$("#next").on("click",function(e){
  window.name=$(".l_bankBTN>li.l_bankCheck").attr("data-BankName") + "     每期金额约为RMB "+data+"元";
  location.href="FirmOrder.html"
})