function countDown( maxtime,fn ){    
   var timer = setInterval(function(){
	if(maxtime>=0){ 
	   	d=parseInt(maxtime/3600/24);
		h=parseInt((maxtime/3600)%24);
		minutes=parseInt((maxtime/60)%60);
		seconds=parseInt(maxtime%60);
		//minutes = Math.floor(maxtime/60);   
		//seconds = Math.floor(maxtime%60);   
		//msg = d+"天"+h+"小时"+minutes+"分"+seconds+"秒";  
		msg = seconds+"s"; 
		fn( msg );
		//if(maxtime == 5*60) //alert('注意，还有5分钟!');   
		--maxtime;   
    }   
	else{   
	   clearInterval( timer );
	   //location.href="index.html"
	}   
 }, 1000);
}
countDown(5,function( msg ){
  document.getElementById('timer1').innerHTML = msg;
});

