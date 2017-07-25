// JavaScript Document

//rem自适应字体大小方法
var docEl = document.documentElement,
    //当设备的方向变化（设备横向持或纵向持）此事件被触发。绑定此事件时，
    //注意现在当浏览器不支持orientationChange事件的时候我们绑定了resize 事件。
    //总来的来就是监听当然窗口的变化，一旦有变化就需要重新设置根字体的值
resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
recalc = function() {
    //设置根字体大小
    docEl.style.fontSize = 10 * (docEl.clientWidth / 320) + 'px';
    
};
//绑定浏览器缩放与加载时间
window.addEventListener(resizeEvt, recalc, false);
document.addEventListener('DOMContentLoaded', recalc, false);


//优化原生滚动效果
var overscroll = function(el) {
  el.addEventListener('touchstart', function() {
    var top = el.scrollTop
      , totalScroll = el.scrollHeight
      , currentScroll = top + el.offsetHeight
    //If we're at the top or the bottom of the containers
    //scroll, push up or down one pixel.
    //
    //this prevents the scroll from "passing through" to
    //the body.
    if(top === 0) {
      el.scrollTop = 1
    } else if(currentScroll === totalScroll) {
      el.scrollTop = top - 1
    }
  })
  el.addEventListener('touchmove', function(evt) {
    //if the content is actually scrollable, i.e. the content is long enough
    //that scrolling can occur
    if(el.offsetHeight < el.scrollHeight)
      evt._isScroller = true
  })
}
overscroll(document.querySelector('.l_NewScroll'));
document.body.addEventListener('touchmove', function(evt) {
  //In this case, the default behavior is scrolling the body, which
  //would result in an overflow.  Since we don't want that, we preventDefault.
  if(!evt._isScroller) {
    evt.preventDefault()
  }
})

//验证码倒计时效果
var TimerNum=60;
function clock(){
  
  if (TimerNum == 0) {
    $(".l_codeBTN").text("获取验证码");
    $(".l_codeBTN").removeAttr('disabled');
    clearTimeout("clock()");
    TimerNum=60;
  }else{
    $(".l_codeBTN").attr("disabled","");
    $(".l_codeBTN").text(TimerNum + "秒");
    TimerNum-=1;
    setTimeout("clock()",1000);
  }
};

//按钮点击增加变色效果
$("body").delegate("button","touchstart", function (e) {
	e.stopPropagation();
    $(this).addClass("iconShadow");
    });
$("body").delegate("button","touchend", function (e) {
	e.stopPropagation();
    $(this).removeClass("iconShadow");
    });


//错误提示效果
function errrTip(val,id){
		var $id=$('#'+id);	
		$('#'+id +"+b").text(val).addClass("l_errrShow");
		$id.addClass("l_RedLine");
}

//错误提示Toast效果
function errrTipToast(val){ 
    $(".errrTipToast").text(val).show().fadeOut(4000);
    
}

//输入框字符数量限制方法

function limitNUM(n){
    var leg = $(".limitNUM"+n).val().length;
    if (leg > n) {
		$(".limitNUM"+n).val($(".limitNUM"+n).val().substring(0,n));
    }
}

//输入框文字清除按钮功能
$(".l_deleteB").on("touchend",function(e){
  e.preventDefault();
  e.stopPropagation();
  $(this).siblings("input").val("");
  $(this).hide();
})


//公共alert方法
function pubAlertInner(){
  var box = $("<div>").addClass("l_pubAlertmask").appendTo("body"),
      sec = $("<section>").addClass("l_pubAlert").appendTo(".l_pubAlertmask"),
      p = $("<p>").appendTo(".l_pubAlert"),
      span = $("<span>").attr("id","l_pubAlertText").appendTo(".l_pubAlert p"),
      btn = $("<button>").text("确定").appendTo(".l_pubAlert");

}
function pubAlert(tex){
  $("#l_pubAlertText").text(tex);
  $(".l_pubAlertmask").show();
  $(".l_pubAlert button").on("touchend",function(e){
    $(".l_pubAlertmask").hide();
  })
}
$(function(){
  pubAlertInner();
})

