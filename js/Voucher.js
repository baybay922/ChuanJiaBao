// JavaScript Document
$("header ul li p").on("click",function(e){
    e.preventDefault();
    e.stopPropagation();
    $("header ul li p").removeClass("l_focus");
    $(this).addClass("l_focus");
    $("section ul").hide();
    $("#"+$(this).attr("id")+"List").show();
})