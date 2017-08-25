function colorChange() {
	var colorful = document.getElementById('myname');
	var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
	var wordhue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
	
	colorful.style.backgroundColor = hue;
	
	var allColor = document.getElementsByTagName('a');	
	for (var i = 0; i<allColor.length; i++) {
		allColor[i].style.color = hue;
	}
	
	var buttonColor = document.getElementsByClassName('myButton');
	for (var i = 0; i<buttonColor.length; i++) {
		buttonColor[i].style.backgroundColor = hue;
		buttonColor[i].style.color = wordhue;
	}
	
	var fourSixty = document.querySelectorAll('span');
	for (var i = 0; i<fourSixty.length; i++) {
		fourSixty[i].style.color = hue;
		fourSixty[i].style.transition = 'linear 1s';
	}
	
	var pageColor = document.querySelector('body');
	pageColor.style.transition = 'linear 1s';
	pageColor.style.backgroundColor = wordhue;
	
	document.querySelector('footer').style.opacity = 0.5;
}

var myButton = document.querySelector('button.myButton');
	//myButton.onclick = colorChange;
	myButton.addEventListener('mouseover', colorChange, false);
