// JavaScript Document


function Nowbind(){

  //购物车按钮选择效果

  //单选效果
  $(".l_choiceTap").on("touchstart",function(e){
      e.preventDefault();
      e.stopPropagation();
      $(".l_choiceAll").parent().removeClass("l_checked");
      $(this).parent().parent().children("p").removeClass("l_checked");
      $(this).css("opacity",0.3).parent().toggleClass("l_checked");
      addAll();
      
  })
  $(".l_choiceTap").on("touchend",function(e){
      e.preventDefault();
      e.stopPropagation();
      $(this).css("opacity",0);
  })

  //单选删除效果
  $(".l_choiceTapDel").on("touchstart",function(e){
      e.preventDefault();
      e.stopPropagation();
      $(".l_choiceAllDel").parent().removeClass("l_checked");
      $(this).parent().parent().children("p").removeClass("l_checked");
      $(this).css("opacity",0.3).parent().toggleClass("l_checked");
  })
  $(".l_choiceTapDel").on("touchend",function(e){
      e.preventDefault();
      e.stopPropagation();
      $(this).css("opacity",0);
  })

  //组选效果
  $(".l_choicePart").on("touchstart",function(e){
      e.preventDefault();
      e.stopPropagation();
      $(".l_choiceAll").parent().removeClass("l_checked");
      $(this).css("opacity",0.3).parent().toggleClass("l_checked");
      ($(this).parent().hasClass("l_checked"))?($(this).parent().parent().children("li").addClass("l_checked")):($(this).parent().parent().children("li").removeClass("l_checked"));
      addAll();
  })
  $(".l_choicePart").on("touchend",function(e){
      e.preventDefault();
      e.stopPropagation();
      $(this).css("opacity",0);
  })

  //全选效果
  $(".l_choiceAll").on("touchstart",function(e){
      e.preventDefault();
      e.stopPropagation();
      $(this).css("opacity",0.3).parent().toggleClass("l_checked");
      if($(this).parent().hasClass("l_checked")){
        $("section li").addClass("l_checked");
        $(".l_choicePart").parent().addClass("l_checked");
      }else{
        $("section li").removeClass("l_checked");
        $(".l_choicePart").parent().removeClass("l_checked");
      };
      addAll();
  })
  $(".l_choiceAll").on("touchend",function(e){
      e.preventDefault();
      e.stopPropagation();
      $(this).css("opacity",0);
  })

  //全选删除效果
  $(".l_choiceAllDel").on("touchstart",function(e){
      e.preventDefault();
      e.stopPropagation();
      $(this).css("opacity",0.3).parent().toggleClass("l_checked");
      if($(this).parent().hasClass("l_checked")){
        $("section li").addClass("l_checked");
      }else{
        $("section li").removeClass("l_checked");
      };
  })
  $(".l_choiceAllDel").on("touchend",function(e){
      e.preventDefault();
      e.stopPropagation();
      $(this).css("opacity",0);
  })

  //增加商品（+）按钮方法
  $(".add").on("touchstart",function(e){
      e.preventDefault();
      e.stopPropagation();
      $(this).addClass("addSub");
      $(this).next().next().removeClass("addSubDis");
      $(this).parent().parent("li").addClass("l_checked");
      if ($(this).parent().parent().children("p").hasClass("duobaoSheng")) {
        if (parseInt($(this).parent().children("input").val())<$(this).parent().parent().children(".duobaoSheng").attr("data-duobaoSheng")) {
          $(this).parent().children("input").val(parseInt($(this).parent().children("input").val())+1);
          $("#shopsNumber").text(parseInt($("#shopsNumber").text()) +1);
          addAll();
        }else{
          $(this).addClass("addSubDis");
        }
      }else{
          $("#shopsNumber").text(parseInt($("#shopsNumber").text()) +1);
          $(this).parent().children("input").val(parseInt($(this).parent().children("input").val())+1);
          addAll();
      }

  })
  $(".add").on("touchend",function(e){
      e.preventDefault();
      e.stopPropagation();
      $(this).removeClass("addSub");
  })

  //减少商品（-）按钮方法
  $(".sub").on("touchstart",function(e){
      e.preventDefault();
      e.stopPropagation();
      $(this).addClass("addSub");
      $(this).parent().parent("li").addClass("l_checked");
      $(this).parent().children(".add").removeClass("addSubDis");
      if($(this).parent().children("input").val()>1){
        $(this).parent().children("input").val(parseInt($(this).parent().children("input").val())-1);
        $("#shopsNumber").text(parseInt($("#shopsNumber").text()) -1);
      }else{
        $(this).addClass("addSubDis");
        // console.log($(this).parent().parent().parent().children("li").length)
        // if ($(this).parent().parent().parent().children("li").length == 1) {
        //   $(this).parent().parent().parent().remove();
        // };
        // $(this).parent().parent("li").remove();
      };
      addAll();
  })
  $(".sub").on("touchend",function(e){
      e.preventDefault();
      e.stopPropagation();
      $(this).removeClass("addSub");
  })

  //去结算按钮方法
  $("#statement").on("click",function(e){
      e.preventDefault();
      e.stopPropagation();
      if ($(".l_saleOut").is("li")) {
        $(".mask").show();
      }else if ($("#allValue").text() != "￥0.00") {
        location.href="FirmOrder.html";
      }else{
        $(".mask>p").text("亲，您还未选择结算商品哦~");
        $(".mask").show();
      };
  })
    //删除购物车按钮方法
  $("#Delete").on("click",function(e){
      e.preventDefault();
      e.stopPropagation();
      $("section li.l_checked").remove();
  })
      //售罄商品按钮解绑方法
  $(".l_saleOut>p>i.add").unbind("touchstart");
  $(".l_saleOut>p>i.sub").unbind("touchstart");
  $(".l_saleOut>p>i.add").unbind("touchend");
  $(".l_saleOut>p>i.sub").unbind("touchend");
      //售罄弹窗关闭按钮方法
  $(".l_close").on("click",function(e){
      e.preventDefault();
      e.stopPropagation();
      $(".mask").hide();
  })


}


//总价值计算
function addAll(){
  $(".l_saleOut").removeClass("l_checked");
	var allValue = 0,
		checkedNum = 0;
	$("li.l_checked").each(function(index){
    
		allValue+=$(this).children("#commodityNum").attr("data-commodityval")*parseFloat($(this).children("#addBTN").children("input").val()).toLocaleString("en-us",{stylt:"currency",currency:"USD"});
		checkedNum+=parseInt($(this).children("#addBTN").children("input").val());
	})
	$("#allValue").text("￥"+parseFloat(allValue).toLocaleString("en-us",{stylt:"currency",currency:"USD"})+".00");
	$(".l_statement button").text("去结算（"+checkedNum+"）");
  // console.log(allValue);

}

Nowbind();
addAll();