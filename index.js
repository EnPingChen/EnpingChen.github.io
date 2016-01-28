$(document).ready(function(){
	var time1 = setTimeout(function(){
		height();
		$(".img").fadeIn(1000,function(){
			height();
			$('.content').slideDown(1000,function(){
				height();
				setTimeout(function(){
					$('#reading').slideDown(1000,function(){
						height();
						$("#go").slideDown(1000,function(){
							height();
							$('#dream').slideDown(1000,function(){
								height();
								$('#body3').show();
								$('#row1').animate({width:'60%'},1000,function(){
									height();
									$('#row2').animate({width:'80%'},1000,function(){
										height();
										$('#row3').animate({width:'70%'},1000,function(){
											height();
											$('#row4').animate({width:'89%'},1000,function(){
												height();
												$('#row5').animate({width:'60%'},1000,function(){
													$("#body4").slideDown(1000,function(){
														height();
													});
												})
											})		
										})
									})
								})
							})
						});
					})
				},2000)
			});});
	},1000)
	// var time2;
	// setTimeout(function(){
	// 	time2 = setInterval(function(){
	// 		var height = $(document).height()-$(window).height()
	// 		$("html, body").animate({scrollTop:height});
	// 	},2000)
	// },2000)
	// setTimeout(function(){
	// 	clearInterval(time2);
	// 	console.log("dhf");
	// },10000)
	// this is for the hover animate
	$('[data-toggle="tooltip"]').tooltip();   

	function height(){
		var hei;
		hei = $(document).height()-$(window).height()
		$("html, body").animate({scrollTop:hei});
	}
})
