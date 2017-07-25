$(function(){ 
	$(window).scroll(function() { 
		var MainBoxH = $(".header").height() + $(".content").height()  ,
			scrollTop = $(window).scrollTop() + $(window).height() - 65;
		var winScrollTop = $(window).scrollTop();
        (winScrollTop>750)?$(".l_goTop").show():$(".l_goTop").hide(); 
			//console.log(scrollTop+ "==="+MainBoxH);
		if ( MainBoxH <= scrollTop){
			setTimeout(function(){
				$(".l_lastTips").remove(); 
				var list1 = $("<dl>").html("<dd><div class='goods_img'><img src='./images/index/sp_1.jpg' /></div><p>金镶和田玉玉坠项链展</p><div class='goods_price'><font><i>￥</i>88888</font><button>立即购买</button></div></dd><dd><div class='goods_img'><img src='./images/index/sp_1.jpg' /></div><p>金镶和田玉玉坠项链展</p><div class='goods_price'><font><i>￥</i>88888</font><button>立即购买</button></div></dd>").appendTo(".scroller"),
				tips = $("<p>").addClass("l_lastTips").text("加载更多...").appendTo($(".scroller"));
			},1000);
		}else{
			$(".l_lastTips").text("数据已全部加载完！");
		} 
	});
	
	$(".search_input").on("click",function(){
		$(".searchBox").show();
	})
	

	//判断滚轮是向上还是向下
	var lastScrollTop = 0;

	$(window).scroll(function(event){
	   var st = $(this).scrollTop();
	   //alert(lastScrollTop);
	   if(st == 0){
		   $('.header_top').css("background","none"); 
	   }else if (st > lastScrollTop ){
		   // 向下滑动
		   $('.header_top').fadeOut(); 
		   $('.header_top').css("background","#000"); 
		   $('.header_top').css("opacity","0.8"); 
	   }else {
		  // 向上滑动
		  $('.header_top').fadeIn();
	   }
	   lastScrollTop = st;
	});
// JavaScript Document
var oneYuanList={
	// 返回顶部功能
  goTop:function(){
      $(".l_goTop").on("click",function(e){
        e.preventDefault();
        e.stopPropagation();
        $(window).scrollTop(0);
      });
  },
}
oneYuanList.goTop();

});