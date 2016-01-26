$(document).ready(function(){
	var time1 = setInterval(function(){
		clearInterval(time1);
		$(".img").fadeIn(1000,function(){
			$('.content').slideDown(1000,function(){
				$('#reading').slideDown(1000,function(){
					$("#go").slideDown(1000,function(){
						$('#dream').slideDown()
					});
				})
			});});
	},1000)
})
