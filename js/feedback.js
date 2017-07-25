$(function(){
	$('#text').focus(function() {
		$('#text').text('');
	});
}) 
$(function(){
	function miaoShuf(){
		
			if($("#text").val()==""){			
				$(".feedback_tip").show();
				$(".feedback_tip").html("请输入反馈内容").fadeOut(3000);
			}else{
				window.location.href="s_ucenter.html";
			}
		
	}
	$("#text").blur(function(){
		miaoShuf($(this),1); 
	});
	$("#describe_btn").click(function(){
				
		miaoShuf($("#text"));

	});
})