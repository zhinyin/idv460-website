$(document).ready(function(){
	setInterval('rotateImages()', 4000);
});

function rotateImages() {
	var currentImage = $('#rotator div.current');
	var nextImage = currentImage.next();
	if (nextImage.length == 0)
		nextImage = $('#rotator div:first');
	currentImage.removeClass('current').addClass('previous');
	
	nextImage.css( {opacity: 0} ).addClass('current')
		.animate( {opacity: 1 }, 1000,
			function() {
				currentImage.removeClass('previous');
			});
}