// JavaScript Document
var oneYuanList={
  stopmove:function(){
    //阻止底层列表在侧边栏区域触摸时滑动
     $(".l_leftBar").on("touchmove",function(e){
        e.preventDefault();
        e.stopPropagation();
    });
  },
  focus2:function(){
    // // 横向删选栏点击效果
    // $(".l_swiperTap>li").on("touchstart",function(e){
    //     // e.stopPropagation();
    //     // e.preventDefault();
    //   $(".l_leftBar").removeClass("l_in");
    //   $(".l_mask").removeClass("l_in"); 
        
    // });

    // $(".l_swiperTap>li").on("click",function(e){
    //     e.preventDefault();
    //     e.stopPropagation();
    //     $(".l_focus2").removeClass("l_focus2");
    //     $(this).addClass("l_focus2");
    //     //渲染相应数据到夺宝列表中
    //     // alert("渲染相应列表");
    //     $(".l_leftBar").addClass("l_in");
    //     $(".l_mask").addClass("l_in");
    //     //渲染相应按钮到筛选边栏中
    //     // alert("渲染按钮");
    // });
    // $(".l_swiperTap>p").on("click",function(e){
    //     e.preventDefault();
    //     e.stopPropagation();
    //     $(".l_focus2").removeClass("l_focus2");
    //     $(this).addClass("l_focus2");
    //     $(".l_leftBar").removeClass("l_in");
    //     $(".l_mask").removeClass("l_in");
    //     //渲染全部数据到夺宝列表中
    // });
    $(".l_mask").on("touchend",function(e){
        e.preventDefault();
        e.stopPropagation();
        $(".l_leftBar").removeClass("l_in");
        $(".l_mask").removeClass("l_in");
    });
  },
  focus3:function(){
    // 侧边栏删选按钮效果
    $(".l_leftBarTap>li").on("touchstart",function(e){
        e.preventDefault();
        e.stopPropagation();
        $(this).addClass("l_focus3");

    });
    $(".l_leftBar>button").on("touchstart",function(e){
        e.preventDefault();
        e.stopPropagation();
        $(this).addClass("l_focus3");

    });
    $(".l_leftBarTap>li").on("touchend",function(e){
        e.preventDefault();
        e.stopPropagation();
        $(this).removeClass("l_focus3");
        $(".l_leftBar").removeClass("l_in");
        $(".l_mask").removeClass("l_in");
        //渲染相应数据到夺宝列表中
        // alert("渲染相应列表");
    });
    $(".l_leftBar>button").on("touchend",function(e){
        e.preventDefault();
        e.stopPropagation();
        $(this).removeClass("l_focus3");
        $(".l_leftBar").removeClass("l_in");
        $(".l_mask").removeClass("l_in");
        //渲染相应数据到夺宝列表中
        // alert("渲染相应列表");
    });
  },
  // 进度条计算动画
  perLine:function(){
    $(".l_NewScroll li:visible").each(function(index){
      var all = parseInt($(this).find(".l_all").text()),
          last =parseInt( $(this).find(".l_last").text()),
          percent = last/all*100;
      $(this).find(".l_perLine span").css("width",percent+"%");

    })
  },
  swiper:function(){
    //横向筛选栏滚动效果
    
    $(".l_swiperBox>ul:visible").css("left","0");
    var winWid = $("body").width(),
      leg = $(".l_swiperBox>ul:visible li").length+1,
      left, startX,startY,X,Y;
    $(".l_swiperBox>ul:visible").css("width",100/4.4*leg+"%");//计算父级ul的宽度
    $(".l_swiperBox>ul:visible li").css("width",winWid/4.4);//设置子li的宽度
    $(".l_swiperBox>ul:visible p").css("width",winWid/4.4);//设置子p的宽度
    var eleWid = $(".l_swiperBox>ul:visible li").width();
    // 监听touchmove事件
    $(".l_swiperBox>ul:visible").on("touchstart", function(e) {
        e.preventDefault();
        e.stopPropagation();
        startX = e.originalEvent.changedTouches[0].pageX,
        startY = e.originalEvent.changedTouches[0].pageY;
        leftStart = $(".l_swiperBox>ul:visible").offset().left;
        // console.log(leftStart);
    });
    $(".l_swiperBox>ul:visible").on("touchmove", function(e) {
        e.preventDefault();
        e.stopPropagation();
        moveEndX = e.originalEvent.changedTouches[0].pageX,
        moveEndY = e.originalEvent.changedTouches[0].pageY,
        X = moveEndX - startX,
        Y = moveEndY - startY;
        $(".l_swiperBox>ul:visible").css("left",leftStart+X);
        // console.log(leftStart);
    });
    $(".l_swiperBox>ul:visible").on("touchend", function(e) {
        e.preventDefault();
        e.stopPropagation();
        moveEndX = e.originalEvent.changedTouches[0].pageX,
        moveEndY = e.originalEvent.changedTouches[0].pageY,
        X2 = moveEndX - startX,
        // console.log(X2+","+X);
        // console.log(leftStart);
        leftEnd = $(".l_swiperBox>ul:visible").offset().left;
        // console.log(leftEnd);
        // console.log(leftStart);
        // console.log(-(leg-4)*eleWid);
      if (Math.abs(X) < winWid/4.5 && X2!=0 && X!=0) {//当滑动距离没超过半屏
        $(".l_swiperBox>ul:visible").css("left",leftEnd-X);//返回原位
      }else if(Math.abs(X) >= winWid/4.5 &&X>0&& X2!=0){ 
        if (leftStart >= 0||leftStart <= -(leg-4.5)*eleWid) {
          //防止滑动超出左边界
            $(".l_swiperBox>ul:visible").animate({left:"0"},"fast","swing");
          }
        }else if(Math.abs(X) >= winWid/4.5 &&X<0&& X2!=0){
          if (leftStart <= -(leg-4)*eleWid||leftEnd <= -(leg-4.5)*eleWid) {
            //防止滑动超出右边界
            $(".l_swiperBox>ul:visible").animate({left:-(leg-4.5)*eleWid},"fast","swing");
          }
          
        }else{
          var eleEq = Math.floor((startX+Math.abs(leftStart))/eleWid);
         
          if(eleEq>0){
            if (!$(".l_swiperTap>li").eq(eleEq-1).hasClass("l_focus2")) {
              // 模拟按钮点击事件
              $(".l_leftBar").removeClass("l_in");
              $(".l_mask").removeClass("l_in");
              setTimeout(function(){
                  $(".l_focus2").removeClass("l_focus2");
                  $(".l_swiperTap>li").eq(eleEq-1).addClass("l_focus2");
                  //渲染相应数据到夺宝列表中
                  // alert("渲染相应列表");
                  $(".l_leftBar").addClass("l_in");
                  $(".l_mask").addClass("l_in");
                  //渲染相应按钮到筛选边栏中
                  // alert("渲染按钮");
              },500);
            }
          }else{
            $(".l_focus2").removeClass("l_focus2");
            $(".l_swiperTap>p").addClass("l_focus2");
            $(".l_leftBar").removeClass("l_in");
            $(".l_mask").removeClass("l_in");
            //渲染全部数据到夺宝列表中
          }
          return false;
      }     
    }); 
  },
  goTop:function(){
      $(".l_NewScroll").on("scroll",function(){
        var offsetTop = $(".l_NewScroll ul li").eq(3).offset().top;
        (offsetTop<=0)?$(".l_goTop").show():$(".l_goTop").hide();
      });
      $(".l_goTop").on("click",function(e){
        e.preventDefault();
        e.stopPropagation();
        $(".l_NewScroll").animate({scrollTop:"0"},500);
      });
  },
  listLoad:function(){
      // 页面初次加载后插入下面的提示;
      var lastTips = $("<div>").addClass("l_lastTips").text("向下滑动加载更多").appendTo(".l_NewScroll ul");
      $(".l_NewScroll").on("scroll",function(){
        // var lastTips = $("<div>").addClass("l_lastTips").text("向下滑动加载更多").appendTo(".l_NewScroll ul");
        var listScrollTop = $(this).scrollTop(),
            winHeight = $(this).outerHeight(),
            mianBoxHight = $(".l_NewScroll ul").outerHeight()-15;
        // console.log(listScrollTop+winHeight+","+mianBoxHight);
        if (listScrollTop+winHeight >= mianBoxHight ) {
            
            //加载渲染方法
            alert("开始渲染数据并再次插入lastTips");
            $(".l_lastTips").remove();
        }
        
      });
  },
}
$(function(){
  oneYuanList.stopmove();
  oneYuanList.focus2();
  oneYuanList.focus3();
  oneYuanList.perLine();
  oneYuanList.swiper();
  oneYuanList.goTop();
  oneYuanList.listLoad();
  $(".search_input").on("click",function(){
    $(".searchBoxTip").show();
  })
  $(".l_nodataBTN").on("click",function(){
    $(".searchBoxTip").hide();
  })
});
