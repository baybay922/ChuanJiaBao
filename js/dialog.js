;(function($){
  var dialog=function(sets){
      var defaults={
      	 isDisMask:true,
         title:"您尚未注册，</br> 关注下方二维码注册并</br>理财即可参与抽奖！",
      	 button:["确定","分享"],
         callback:null,
         ind:1
      }

      var opts=$.extend(defaults,sets); 
      opts.isDisMask && ($('<div class="mask" id="mask">').appendTo($('body')));
      var html='<div id="box">'
                  +'<div class="inner">'
                      +'<h2>'+opts.title+'</h2>'
                      +'<div class="w_attention" style="background:rgba(0,0,0,0)">'           
                      +'</div>'
                      +'<div class="button" id="button"><span id="yes">'+opts.button[0]+'</span><span id="cancel">'+opts.button[1]+'</span></div>'
                  +'</div>'
               +'</div>';
      $(html).appendTo($('body'));
      function showMiddle(){
         var w=$(window),
             box=$('.inner'),
             ml=(w.width()-box.outerWidth(true))/2,
             mt=(w.height()-box.outerHeight(true))/2;
         box.css({
             'left':ml+'px',
             'top':mt+'px'
         })
      }
      showMiddle();

      $(window).resize(function(){
          showMiddle();
      })

      // 关闭
      $('#yes').on('click',function(){
          $('#mask') && $('#mask').remove();
          $('#box').remove();
          $(".w_remove").closest("li").eq(opts.ind).remove();
          $("li[dataId=dataId]").remove()
         
      })
      $("#cancel").on("click",function(){
          $('#mask') && $('#mask').remove();
          $('#box').remove();
      })
  }

  $.dialog=function(opts){
  	 return new dialog(opts);
  }
})(jQuery)