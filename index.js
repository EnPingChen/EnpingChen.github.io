$(document).ready(function(){
	var time1 = setTimeout(function(){
		$(".img").fadeIn(1000,function(){
			$('.content').slideDown(1000,function(){
				$('#reading').slideDown(1000,function(){
					$("#go").slideDown(1000,function(){
						$('#dream').slideDown(1000,function(){
							$('#row1').animate({width:'60%'},1000,function(){
								$('#row2').animate({width:'80%'},1000,function(){
									$('#row3').animate({width:'70%'},1000,function(){
										$('#row4').animate({width:'89%'},1000,function(){
											$('#row5').animate({width:'60%'})
										})		
									})
								})
							})
						})
					});
				})
			});});
	},1000)
	var time2;
	setTimeout(function(){
		time2 = setInterval(function(){
			var height = $(document).height()-$(window).height()
			$("html, body").animate({scrollTop:height});
		},2000)
	},2000)
	setTimeout(function(){
		clearInterval(time2);
		console.log("dhf");
	},15000)
})
