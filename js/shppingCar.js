// JavaScript Document
var dataInt = {"url":null,"rows":[{"commodityType":1,"ImgWay":"ShoppingCar_Img_01.png","commodityTitle":"力量的貔貅挂坠项链玉","duobaoLimit":3000,"duobaoSheng":10,"ShoppingCarNum":5},{"commodityType":1,"ImgWay":"ShoppingCar_Img_01.png","commodityTitle":"敏捷的貔貅挂坠项链玉","duobaoLimit":2000,"duobaoSheng":100,"ShoppingCarNum":10},{"commodityType":2,"ImgWay":"ShoppingCar_Img_01.png","commodityTitle":"维特之脚","commodityTitle2":"真的只有一只……","ShoppingCarNum":1,"commodityValue":998},{"commodityType":2,"ImgWay":"ShoppingCar_Img_01.png","commodityTitle":"德玛西亚之力","commodityTitle2":"充气盖伦……","ShoppingCarNum":1,"commodityValue":9999999},{"commodityType":2,"ImgWay":"ShoppingCar_Img_01.png","commodityTitle":"不知道是神马的饰品","commodityTitle2":"不知道是神马你还买","ShoppingCarNum":1,"commodityValue":8},{"commodityType":2,"ImgWay":"ShoppingCar_Img_01.png","commodityTitle":"天竺生产的神奇的油","commodityTitle2":"鬼知道你要买这个做什么","ShoppingCarNum":1,"commodityValue":666}]};

//编辑按钮方法
$("#changeShopCar").on("click",function(e){
    e.preventDefault();
    e.stopPropagation();
    if ($(this).hasClass("l_done")) {
      $(this).text("编辑").removeClass("l_done");
      $("section").children().remove();
      $(".l_statement").remove();
      ShopCarList();

    }  else{
      $(this).text("完成").addClass("l_done");
      $("section").children().remove();
      $(".l_statement").remove();
      ShopCarListDelete();
      
    }
    Nowbind();
})

//页面渲染方法

function ShopCarList(){
	if (dataInt == "") {
		//如果没有数据，显示购物车空空哒图标（待ui）o=(>_<)=o
		
	}else{
		//插入初始结构
		var l_oneYuan = $("<ul>").appendTo("section").addClass("l_oneYuan"),
			l_oneYuanTip =$("<p>").html("<span class='l_choicePart'></span>一元夺玉").appendTo(l_oneYuan),
			l_commodity = $("<ul>").appendTo("section").addClass("l_commodity"),
			l_commodityTip =$("<p>").html("<span class='l_choicePart'></span>商品").appendTo(l_commodity),
			l_statement = $("<p>").html("<span class='l_choiceAll'></span>全选<i>合计：<span id='allValue'>￥0.00</span></i><button id='statement'>去结算（0）</button>").addClass("l_statement"),
			ShoppingCarNum = 0;
			$("footer").before(l_statement);

		//遍历取得的数据，渲染到页面中
		$.each(dataInt.rows,function(key,value){
			//计算购物车的总商品件数
			ShoppingCarNum +=value.ShoppingCarNum;
			//判断当前数据中的商品种类
			if (value.commodityType == 1 ) {//一元夺玉
				var listBox = $("<li>").appendTo(l_oneYuan),
					headImg = $("<p>").html("<img src='images/"+value.ImgWay +"'>").appendTo(listBox),
					title = $("<p>").addClass("text-overflow").text(value.commodityTitle).appendTo(listBox),
					LimitInfo = $("<p>").addClass("text-overflow duobaoSheng").attr({"data-duobaoSheng":value.duobaoSheng,"id":"duobaoSheng"}).text("总需"+value.duobaoLimit+"人次，剩余"+value.duobaoSheng+"人次").appendTo(listBox),
					mainInfo = $("<p>").attr({"id":"commodityNum","data-commodityVal":1}).addClass("text-overflow").text("￥1.00").appendTo(listBox),
					addBTN = $("<p>").attr("id","addBTN").html("<i class='add'>+</i><input type='text' readonly='readonly' disabled value='"+value.ShoppingCarNum+"' ><i class='sub'>-</i>").appendTo(listBox),
					lastInfo = $("<span>").addClass("l_choiceTap").appendTo(listBox);
		
			}else{
				var listBox1 = $("<li>").appendTo(l_commodity),
					headImg1 = $("<p>").html("<img src='images/"+value.ImgWay +"'>").appendTo(listBox1),
					title1 = $("<p>").addClass("text-overflow").text(value.commodityTitle).appendTo(listBox1),
          title2 = $("<p>").addClass("text-overflow").text(value.commodityTitle2).appendTo(listBox1),
					mainInfo1 = $("<p>").attr({"id":"commodityNum","data-commodityVal":value.commodityValue}).addClass("text-overflow").text("￥"+parseFloat(value.commodityValue).toLocaleString("en-us",{stylt:"currency",currency:"USD"})+".00").appendTo(listBox1),
					addBTN1 = $("<p>").attr("id","addBTN").html("<i class='add'>+</i><input type='text' readonly='readonly' disabled value='"+value.ShoppingCarNum+"' ><i class='sub'>-</i>").appendTo(listBox1),
					lastInfo1 = $("<span>").addClass("l_choiceTap").appendTo(listBox1);
			}
		})
		$("#shopsNumber").text(ShoppingCarNum);
	}
}
ShopCarList();

function ShopCarListDelete(){
  if (dataInt == "") {
    //如果没有数据，显示购物车空空哒图标（待ui）o=(>_<)=o
    
  }else{
    //插入初始结构
    var l_commodity = $("<ul style='background:transparent;'>").appendTo("section"),
        l_statement = $("<p>").html("<span class='l_choiceAllDel'></span>全选<button id='Delete'>删除</button>").addClass("l_statement"),
        ShoppingCarNum = 0;
        $("footer").before(l_statement);

    //遍历取得的数据，渲染到页面中
    $.each(dataInt.rows,function(key,value){
      //计算购物车的总商品件数
      
      //判断当前数据中的商品种类
      if (value.commodityType == 2 ) {
        ShoppingCarNum +=value.ShoppingCarNum;
        // var listBox = $("<li>").appendTo(l_oneYuan),
        //   headImg = $("<p>").html("<img src='images/"+value.ImgWay +"'>").appendTo(listBox),
        //   title = $("<p>").addClass("text-overflow").text(value.commodityTitle).appendTo(listBox),
        //   LimitInfo = $("<p>").addClass("text-overflow duobaoSheng").attr({"data-duobaoSheng":value.duobaoSheng,"id":"duobaoSheng"}).text("总需"+value.duobaoLimit+"人次，剩余"+value.duobaoSheng+"人次").appendTo(listBox),
        //   mainInfo = $("<p>").attr({"id":"commodityNum","data-commodityVal":1}).addClass("text-overflow").text("￥1.00").appendTo(listBox),
        //   addBTN = $("<p>").attr("id","addBTN").html("<i class='add'>+</i><input type='text' readonly='readonly' disabled value='"+value.ShoppingCarNum+"' ><i class='sub'>-</i>").appendTo(listBox),
        //   lastInfo = $("<span>").addClass("l_choiceTap").appendTo(listBox);
        var listBox1 = $("<li style='border:none;margin-bottom:1rem;display:inline-block;background:#fff;'>").appendTo(l_commodity),
          headImg1 = $("<p>").html("<img src='images/"+value.ImgWay +"'>").appendTo(listBox1),
          title1 = $("<p>").addClass("text-overflow").text(value.commodityTitle).appendTo(listBox1),
          title2 = $("<p>").addClass("text-overflow").text(value.commodityTitle2).appendTo(listBox1),
          mainInfo1 = $("<p style='text-align:left; line-height: 100%; position: absolute;bottom: 3rem;left: 11.5rem;'>").attr({"id":"commodityNum","data-commodityVal":value.commodityValue}).addClass("text-overflow").text("￥"+parseFloat(value.commodityValue).toLocaleString("en-us",{stylt:"currency",currency:"USD"})+".00").appendTo(listBox1),
          addBTN1 = $("<p style='width: 4rem;height: auto;position: absolute;bottom: 3rem;right: 5%;overflow: hidden;color: #afafaf;text-align: right;'>").attr("id","addBTN").text("X"+value.ShoppingCarNum).appendTo(listBox1),
          lastInfo1 = $("<span>").addClass("l_choiceTapDel").appendTo(listBox1);
      }
      // }else{
      //   var listBox1 = $("<li>").appendTo(l_commodity),
      //     headImg1 = $("<p>").html("<img src='images/"+value.ImgWay +"'>").appendTo(listBox1),
      //     title1 = $("<p>").addClass("text-overflow").text(value.commodityTitle).appendTo(listBox1),
      //     mainInfo1 = $("<p>").attr({"id":"commodityNum","data-commodityVal":value.commodityValue}).addClass("text-overflow").text("￥"+parseFloat(value.commodityValue).toLocaleString("en-us",{stylt:"currency",currency:"USD"})+".00").appendTo(listBox1),
      //     addBTN1 = $("<p>").attr("id","addBTN").html("<i class='add'>+</i><input type='text' readonly='readonly' disabled value='"+value.ShoppingCarNum+"' ><i class='sub'>-</i>").appendTo(listBox1),
      //     lastInfo1 = $("<span>").addClass("l_choiceTap").appendTo(listBox1);
      // }
    })
    $("#shopsNumber").text(ShoppingCarNum);
  }
}


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
      if ($("#allValue").text() != "￥0.00") {
        location.href="FirmOrder.html";
      }else{
        alert("还未选择商品哦")
      };
  })
    //删除购物车按钮方法
  $("#Delete").on("click",function(e){
      e.preventDefault();
      e.stopPropagation();
      $("section li.l_checked").remove();
  })
}


//总价值计算
function addAll(){
	var allValue = 0,
		checkedNum = 0;
	$("li.l_checked").each(function(index){
    
		allValue+=$(this).children("#commodityNum").attr("data-commodityval")*parseFloat($(this).children("#addBTN").children("input").val()).toLocaleString("en-us",{stylt:"currency",currency:"USD"});
		checkedNum+=parseInt($(this).children("#addBTN").children("input").val());
	})
	$("#allValue").text("￥"+parseFloat(allValue).toLocaleString("en-us",{stylt:"currency",currency:"USD"})+".00");
	$(".l_statement button").text("去结算（"+checkedNum+"）");
  console.log(allValue);
}
Nowbind();