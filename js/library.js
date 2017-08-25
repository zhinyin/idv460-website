$(document).ready(function(){
	$('.book').click(function(){
		$(this).hide();
	});
	
	$('button').dblclick(function(){
		$('.book').fadeIn(2000);
	});
	
});