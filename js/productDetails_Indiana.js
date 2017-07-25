$(function(){
	ChangeWidth(80,$(".progressBoxBar"))
	function ChangeWidth(number,self){/* 进度条 */
		self.animate({
			"width":number+"%"
		},800)
		$(".w_figure span").html(number)
	}
	$("#immediately").on("click",function(){
		$("#quantityBox").show();
		$(".quantity").animate({
			"bottom":4+"rem"
		},300)
	})
	$(".w_close").on("click",function(){
		$(".quantity").animate({
			"bottom":-9+"rem"
		},300);
		$("#quantityBox").hide(300);
	})
	/*$(document).on("click",function(event){
		event.stopPropagation();			
		$("#quantityBox").hide();
		$(".quantity").animate({
			"bottom":-9+"rem"
		},300)
	})*/
	/* 个数价格计算 */
	var univalence = $(".w_univalence").text();
	$(".priseTotal").html(univalence);
	$(".Multiple").on("click","li",function(){
		var thisVal = $(this).find("span").text();
		$(this).find("span").addClass("Highlight").parent("li").siblings().find("span").removeClass("Highlight");
		$(".priseTotal").html(thisVal*univalence+".00");
		$(".w_number").val(thisVal)
	})
	/* 数量减少计算 */
	$(".reduce").on("click",function(){
		var pTotal = $("#priseTotal").text(),
			single = $("#w_number").val();
		$(".priseTotal").html(pTotal-univalence+".00");
		$(".w_number").val(single-1);
		$("span").removeClass("Highlight")
		if(single==0){
			$(".priseTotal").html("0.00");
			$(".w_number").val(0);
		}
	})
	/* 数量增加计算 */
	$("#increase").on("click",function(){
		var pTotal = $("#priseTotal").text(),
			single = $("#w_number").val(),
			were = parseFloat(Math.floor(pTotal)+Math.floor(univalence)); 
		console.log(pTotal+univalence)
		$(".priseTotal").html(were+".00");
		$(".w_number").val(parseFloat(Math.floor(single)+Math.floor(1)));

		$("span").removeClass("Highlight");
	})
	/* 用户自己输入次数计算 */
	$("#w_number").on("input propertychange",function(){
		var thisVal = $(this).val();
		$("#priseTotal").html(thisVal*univalence+".00")
	})
})
