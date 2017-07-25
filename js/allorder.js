$(function(){
	pushData(0)
	var imgLen = $(".headNav").find("li").length,
		orderList = $(".orderList"),
		windowW = $(window).width(),	
		ind = 0;

	$(".headNav").on("click","li",function(){
		ind = $(this).index();
		orderList.animate({
			"margin-left":-windowW*ind+'px'
		},300);
		$(".headNav li").eq(ind).addClass("cur").siblings().removeClass("cur");

		pushData(ind)
		
	})
	function pushData(ind){
		$(".page"+ind).on("scroll",function(){
			var scrollTop= $(this).find("ul").outerHeight(true),
				selfH=$(this).scrollTop()+$(window).height();
			    if( scrollTop <= selfH){
			    	alert("11")
			        setTimeout(function(){
						tips = $("<p class='l_lastTips'>加载更多...</p>").appendTo($(".pay_page"+ind));					
					},0);
			    }	
		})
	}

	$(".DeleteOrder").on("click",function(){
		$(this).closest("li").attr("dataId","dataId")
		$.dialog({
			isDisMask:true,
		   	title:"确定要删除吗？",
			button:["确定","取消"],
		    callback:null,
		    ind:1
		})
	})


	/*$(".page").on("scroll",function(){/*待支付数据加载
		var scrollTop= $(this).find("ul").outerHeight(true),
	        selfH=$(this).scrollTop()+$(window).height();
	        console.log(selfH)
	    if( scrollTop <= selfH){
	        setTimeout(function(){
				$(".l_lastTips").remove(); 
				tips = $("<p class='l_lastTips'>加载更多...</p>").appendTo($(this).find("ul.pay_page"));					
			},0);
	    }
	})

		$(".delivery").on("scroll",function(){/*待发货数据加载
		var scrollTop= $(this).find("ul").outerHeight(true),
	        selfH=$(this).scrollTop()+$(window).height();
	        console.log(selfH)
	    if( scrollTop <= selfH){
	        setTimeout(function(){
				$(".l_lastTips").remove(); 
				tips = $("<p class='l_lastTips'>加载更多...</p>").appendTo($("#delivery"));					
			},0);
	    }
	})

	$(".akeDelivery").on("scroll",function(){/*待收货数据加载
		var scrollTop= $(this).find("ul").outerHeight(true),
	        selfH=$(this).scrollTop()+$(window).height();
	        console.log(selfH)
	    if( scrollTop <= selfH){
	        setTimeout(function(){
				$(".l_lastTips").remove(); 
				tips = $("<p class='l_lastTips'>加载更多...</p>").appendTo($("#akeDelivery"));					
			},0);
	    }
	})

	$(".complete").on("scroll",function(){/*已完成数据加载
		var scrollTop= $(this).find("ul").outerHeight(true),
	        selfH=$(this).scrollTop()+$(window).height();
	        console.log(selfH)
	    if( scrollTop <= selfH){
	        setTimeout(function(){
				$(".l_lastTips").remove(); 
				tips = $("<p class='l_lastTips'>加载更多...</p>").appendTo($("#complete"));					
			},0);
	    }
	})

	$(".cancel").on("scroll",function(){/*已取消数据加载
		var scrollTop= $(this).find("ul").outerHeight(true),
	        selfH=$(this).scrollTop()+$(window).height();
	        console.log(selfH)
	    if( scrollTop <= selfH){
	        setTimeout(function(){
				$(".l_lastTips").remove(); 
				tips = $("<p class='l_lastTips'>加载更多...</p>").appendTo($("#cancel"));					
			},0);
	    }
	})*/

})