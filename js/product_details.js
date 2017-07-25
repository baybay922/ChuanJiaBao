
new iScroll('w_commodity',{//iscroll
  onBeforeScrollStart:function(e){
	var target=e.target;
	while(target.nodeType!=1){
		target=target.parentNode;
	}
	 var ele=e.target.tagName.toLowerCase();
	 if(ele!='input' && ele!='textarea' && ele!='select'){
		e.preventDefault();
	 }
},
checkDOMChanges:true,
fadeScrollbar:true,
vScrollbar: false
});

var pages = $(".w_slideBox"),
pageW = $(window).width();
$(".w_title").on("click","li",function(){
var ind = $(this).index();
$(this).addClass("cur").siblings().removeClass("cur");
if(ind==0){
	pages.animate({
		"margin-left":0
	},300)
new iScroll('w_commodity',{
  onBeforeScrollStart:function(e){
	var target=e.target;
	while(target.nodeType!=1){
		target=target.parentNode;
	}
	 var ele=e.target.tagName.toLowerCase();
	 if(ele!='input' && ele!='textarea' && ele!='select'){
		e.preventDefault();
	 }
},
checkDOMChanges:true,
fadeScrollbar:true,
vScrollbar: false
});	
	var pages = $(".w_slideBox"),
pageW = $(window).width();
$(".w_title").on("click","li",function(){
var ind = $(this).index();
$(this).addClass("cur").siblings().removeClass("cur");
if(ind==0){
	pages.animate({
		"margin-left":0
	},300)
	new iScroll('w_commodity',{
	onBeforeScrollStart:function(e){
		var target=e.target;
		while(target.nodeType!=1){
			target=target.parentNode;
		}
		var ele=e.target.tagName.toLowerCase();
		if(ele!='input' && ele!='textarea' && ele!='select'){
			e.preventDefault();
		}
	},
		checkDOMChanges:true,
		fadeScrollbar:true,
		vScrollbar: false
	});
	
	// 商品 and 详情的tab切换
	var pages = $(".w_slideBox"),
		 pageW = $(window).width();
	$(".w_title").on("click","li",function(){
		var ind = $(this).index();
		$(this).addClass("cur").siblings().removeClass("cur");
		if(ind==0){
			pages.animate({
				"margin-left":0
			},300)
			new iScroll('w_commodity',{
				vScrollbar: false
			});
			$(".w_nav").show();
			$(".carteList").removeClass("carteListRotate")
		}else if(ind==1){
			pages.animate({
				"margin-left":-pageW+'px'
			},300);
		}
	})
	
	// 点击放大轮播图效果
	var imgLen = $(".ThuBox").find("div.swiper-slide").length;
	var swiper = new Swiper('.Thumbnail', {
		pagination: '.swiper-pagination',
		autoplay:3000,
		onSlideChangeEnd:function(swiper){ //切换结束的时候   	
			$(".w_curCount").html(swiper.activeIndex+1);
			
		},
		onTouchEnd:function(){//当释放slider时执行
			if(swiper.activeIndex+1 == imgLen){
				pages.animate({
					"margin-left":-pageW+'px'
				},300);
				$(".w_title li").eq(1).addClass("cur").siblings().removeClass("cur");
			}
		},
		onClick:function(swiper){
			$(".w_FullSee").animate({
				"opacity":1,
				"z-index":9999999
			},100);
			var swiper = new Swiper('.BigPicture', {
				pagination: '.swiper-pagination',
				initialSlide:swiper.activeIndex,
				onSlideChangeEnd:function(swiper){
					$(".current").html(swiper.activeIndex+1);
					if(swiper.activeIndex+1 == imgLen){
						$(".w_hint").show(100,function(){
							setTimeout(function(){
								$(".w_hint").hide()
							},3000)
						})
					}else{
						$(".w_hint").hide()
					}
				},
				onClick:function(){
					$(".w_FullSee").animate({
						"opacity":0,
						"z-index":-1
					},100)
				}
			});
		}
	});
	
	var imgLen = $(".BigPBox").find("div.swiper-slide").length;
		$(".aggregate").html(imgLen);
		$(".altogether").html(imgLen);

	var innerPage = $(".w_innerTab div.pages")
	$(".inside_title").on("click","li",function(){
		var indexs = $(this).index();
		innerPage.eq(indexs).show().siblings().hide();
		
	})	
	
	// 底部（客服咨询、收藏、购物车）显示隐藏
	$(".w_innerTab").on("scroll",function(){
		var scrollT = $(this).scrollTop();
		if(scrollT>100){
			$(".w_nav").hide();
			$(".menuBtn").show();
		}else{
			$(".w_nav").show();
			$(".menuBtn").hide();
			$(".carteList").removeClass("carteListRotate")
		}
	})
	// 收藏点击变红	
	var falg = true;
	$("#l_moneyG").on("click",function(){
		if(falg){
			$(this).addClass("called");
			falg = false;
		}else{
			$(this).removeClass("called");
			falg = true;
		}
	})
	// 点击（客服咨询）显示电话号码
	$("#l_homeR").on("click",function(){
		if(falg){
			$(".w_shade").show(1,function(){
				$(".w_shade").on("click",function(){
					$(".w_shade").hide()
				})
			})
			falg = false;
		}else{
			$(".w_shade").hide();
			falg = true;
		}
	})
	
	$(".w_enshrine").on("click",function(){
		if(falg){
			$(this).find("span").addClass("lickIcon");
			falg=false;
		}else{
			$(this).find("span").removeClass("lickIcon");
			falg=true;
		}
	})
	
	$('div.pinch-zoom').each(function () {
	    new RTP.PinchZoom($(this), {});
	});
	
	// 返回顶部
	$(".Gotop").on("click",function(){
		$(".w_innerTab").scrollTop(0)
	})
	
	// 加入购物车
	$(".w_join").on("click",function(){
		$(this).find("span").addClass("parabolaShow")
		setTimeout(function(){
			$(".w_join").find("span").removeClass("parabolaShow")
		},1000)
	})

	// 点击消息显示菜单
	$(".moreIcon").on("click",function(event){
		event.stopPropagation()
		$(".moreMenu").show()
	})

	$(document).on("click",function(){
		$(".moreMenu").hide()
	})
	
	// 点击搜索显示搜索页面
	$(".search_btn").on("click",function(){
		$(".searchBox").show();
	})
	
	// 点击返回按钮关闭搜索页面
	$(".close").on("click",function(){
		$(".searchBox").hide();
	})

	// 点击“+”按钮出现 （返回顶部，购物车，收藏）图标
	$(".menuBtn").on("click",function(){
		$(this).toggleClass("spin");
		if($(this).hasClass("spin")){
			$(".carteList").addClass("carteListRotate")
		}else{
			$(".carteList").removeClass("carteListRotate")
		}
	})
	
	// 点击“+”按钮出现（收藏）图标变色
	$(".lickBtn").on("click",function(){
		if(falg){
			$(this).addClass("lickIcon");
			falg=false;
		}else{
			$(this).removeClass("lickIcon");
			falg=true;
		}
	})

	if($(".w_join").hasClass("w_empty")){/*  物品为空的时候加上这个  */
		$(".w_join").off()
	}
	// 点击“+”按钮出现（购物车）图标，显示“+1”
	$(".shoppingCar").on("click",function(){
		$(".addNubber").animate({
			"opacity":1,
			"top":-2+'rem'
		},800,function(){
			$(".addNubber").animate({
				"opacity":0,
				"top":-.5+'rem'
		},0)
		})
	})
	
	
	
	