$(function($) {
	centerPos();
	
	$(window).resize(function(){
		centerPos();				  
	});
	
	$("#AllBox").queryLoader2({
			backgroundColor:"#ffffff",
			barColor: "#ffffff",
		percentage: true,
		completeAnimation: "fade",
		barHeight: 0,
		minimumTime: 1200
	});
	
	
});

function centerPos(){
	$w = $(window).width();
	$h = $(window).height();
	
	$posw = $w/2 - 460;
	$posh = $h/2 - 41;
	
	$('.nav').css({ 'top':$posh+'px', 'left':$posw+'px'});
	$('.ph_wrap .left').css('height',$h+'px');
	$('.ph_wrap .right').css('height',$h+'px');
	
	
	//$imgh = $('.ph_wrap .left img').height();

}


