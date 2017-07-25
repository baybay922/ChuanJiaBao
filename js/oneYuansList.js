// JavaScript Document
var dataInt = {"url":null,"rows":[{"commodityType":1,"ImgWay":"ShoppingCar_Img_01.png","commodityTitle":"力量的貔貅挂坠项链玉","duobaoLimit":3000,"duobaoSheng":10,"ShoppingCarNum":5},{"commodityType":1,"ImgWay":"ShoppingCar_Img_01.png","commodityTitle":"敏捷的貔貅挂坠项链玉","duobaoLimit":2000,"duobaoSheng":100,"ShoppingCarNum":10},{"commodityType":2,"ImgWay":"ShoppingCar_Img_01.png","commodityTitle":"维特之脚","commodityTitle2":"真的只有一只……","ShoppingCarNum":1,"commodityValue":998},{"commodityType":2,"ImgWay":"ShoppingCar_Img_01.png","commodityTitle":"德玛西亚之力","commodityTitle2":"充气盖伦……","ShoppingCarNum":1,"commodityValue":9999999},{"commodityType":2,"ImgWay":"ShoppingCar_Img_01.png","commodityTitle":"不知道是神马的饰品","commodityTitle2":"不知道是神马你还买","ShoppingCarNum":1,"commodityValue":8},{"commodityType":2,"ImgWay":"ShoppingCar_Img_01.png","commodityTitle":"天竺生产的神奇的油","commodityTitle2":"鬼知道你要买这个做什么","ShoppingCarNum":1,"commodityValue":666}]};


//页面渲染方法

function GoodsList(){
  if (dataInt == "") {
    //如果没有数据，显示购物车空空哒图标（待ui）o=(>_<)=o
    
  }else{
    //插入初始结构
    var l_commodity = $("<ul style='background:transparent;'>").appendTo("section");
        ShoppingCarNum = 0;

    //遍历取得的数据，渲染到页面中
    $.each(dataInt.rows,function(key,value){
      //计算购物车的总商品件数
      
      //判断当前数据中的商品种类
      if (value.commodityType == 2 ) {
        ShoppingCarNum +=value.ShoppingCarNum;
        var listBox1 = $("<li style='border:none;margin-bottom:1rem;display:inline-block;background:#fff;'>").appendTo(l_commodity),
          headImg1 = $("<p>").html("<img src='images/"+value.ImgWay +"'>").appendTo(listBox1),
          title1 = $("<p>").addClass("text-overflow").text(value.commodityTitle).appendTo(listBox1),
          title2 = $("<p>").addClass("text-overflow").text(value.commodityTitle2).appendTo(listBox1),
          mainInfo1 = $("<p style='text-align:left; line-height: 100%; position: absolute;bottom: 3rem;left: 9.5rem;'>").attr({"id":"commodityNum","data-commodityVal":value.commodityValue}).addClass("text-overflow").text("￥"+parseFloat(value.commodityValue).toLocaleString("en-us",{stylt:"currency",currency:"USD"})+".00").appendTo(listBox1),
          addBTN1 = $("<p style='width: 4rem;height: auto;position: absolute;bottom: 3rem;right: 5%;overflow: hidden;color: #afafaf;text-align: right;'>").attr("id","addBTN").text("X"+value.ShoppingCarNum).appendTo(listBox1);
      }
    })
    $("header span").text(ShoppingCarNum);
  }
}

GoodsList();
