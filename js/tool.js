$(document).ready(function(){

	$('.tooltip').click(function(e){
/*		if ( $(this).attr('data-tip-type') == 'text' ) {
			$('#tooltip-container').html( $(this).attr('data-tip-source') );
		} */
		
		//if ( $(this).attr('data-tip-type') == 'html' ) { 
			var elementToGet = '#' + $(this).attr('data-tip-source');
			var newHTML = $(elementToGet).html();
		
			$('#tooltip-container').html(newHTML);
			
		$('.chart').mouseover(function(e){

		//if ( $(this).attr('data-tip-type') == 'html' ) {
			var elementToGet = '#' + $(this).attr('data-tip-source');
			var newHTML = $(elementToGet).html();
		
			$('#chart-container').html(newHTML);
			$('#chart-container').css('display','block'); //add this to make the tootip appear on mouseover after the mouseout event below has made it disappear
		//}
	
	})
	
	/*.mousemove(function(e){
		$('#chart-container').css('left',(e.pageX+10)+'px');
		$('#chart-container').css('top',(e.pageY+10)+'px');
	
	})*/  //This is commented out because it is not working at present
	.mouseout(function(e){
		$('#chart-container').css('display','none');
	});	

		
	//}
	
	})
	
	$('.timeline').mouseover(function(e){
		if ( $(this).attr('data-tip-type') == 'text' ) {
			$('#timeline-container').html( $(this).attr('data-tip-source') );
		}
		
		if ( $(this).attr('data-tip-type') == 'html' ) {
			var elementToGet = '#' + $(this).attr('data-tip-source');
			var newHTML = $(elementToGet).html();
		
			$('#timeline-container').html(newHTML);
		}
	
	})
	
	/*.mousemove(function(e){
	
		$('#timeline-container').css('left',(e.pageX+10)+'px');
		$('#timeline-container').css('top',(e.pageY+10)+'px');
	
	})*/
	
	.mouseout(function(e){
	$('#chart-container').css('display','none');
	})
	
	$('.linegraph').mouseover(function(e){
		if ( $(this).attr('data-tip-type') == 'text' ) {
			$('#linegraph-container').html( $(this).attr('data-tip-source') );
		}
		
		if ( $(this).attr('data-tip-type') == 'html' ) {
			var elementToGet = '#' + $(this).attr('data-tip-source');
			var newHTML = $(elementToGet).html();
		
			$('#linegraph-container').html(newHTML);
		}
	
	})
	
	/*.mousemove(function(e){
	
		$('#linegraph-container').css('left',(e.pageX+10)+'px');
		$('#linegraph-container').css('top',(e.pageY+10)+'px');
	
	})*/
	
	.mouseout(function(e){
	$('#chart-container').css('display','none');
	});
	

}); 