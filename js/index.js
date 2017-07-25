// JavaScript Document
//优化原生滚动效果
	var overscroll = function(el) {
	  el.addEventListener('touchstart', function() {
		var top = el.scrollTop
		  , totalScroll = el.scrollHeight
		  , currentScroll = top + el.offsetHeight
		
		if(top === 0) {
		  el.scrollTop = 1
		} else if(currentScroll === totalScroll) {
		  el.scrollTop = top - 1
		}
	  })
	  el.addEventListener('touchmove', function(evt) {
		
		if(el.offsetHeight < el.scrollHeight)
		  evt._isScroller = true
	  })
	}
	overscroll(document.querySelector('.l_NewScroll'));
	document.body.addEventListener('touchmove', function(evt) {
	  
	  if(!evt._isScroller) {
		evt.preventDefault()
	  }
	})
	
	//轮播图
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination'
	});
	
	//搜索
	$(".search_input").on("click",function(){
		$(".searchBox").show();
	})
	
	//点击底部菜单时	
	$('.list').bind('touchstart',function(){
		$(this).addClass('on').siblings().removeClass('on');
		var imgSrc = $(this).find("img").attr("src");
		var imgNum = imgSrc.split(".");
		var imgName = "."+imgNum[0] + imgNum[1] + "_red." + imgNum[2];
		$(this).find("img").attr("src", imgName);
		
		var AllImage = $(this).siblings().find('img');	       
		for (var i = 0; i < AllImage.length; i++) {
			$(AllImage[i]).attr("src", $(AllImage[i]).attr("src").replace("_red", ""));
		}
	})

	//默认顶部搜索背景无背景色，向下滑动时背景变成黑色80%的透明
	$(function(){ 
		var lastScrollTop = 0;
		$(window).scroll(function(event){
		   var st = $(this).scrollTop();
		   if(st == 0){
			   $('.header_top').css("background","none"); 
		   }else if (st > lastScrollTop ){
			   // 向下滑动
			   $('.header_top').fadeIn(300); 
			   $('.header_top').css("background","#000"); 
			   $('.header_top').css("opacity","0.8"); 
		   }else {
			  // 向上滑动
			  //$('.header_top').fadeIn(300);
		   }
		   lastScrollTop = st;
		});
	});

	$(function(){
		ChangeWidth(80,$(".progressBoxBar"))
		function ChangeWidth(number,self){/* 进度条 */
			self.animate({
				"width":number+"%"
			},800)
			$(".w_figure span").html(number)
		}
	})