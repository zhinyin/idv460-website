function addZero(i) {
	if (i<10) {
		i = "0" +i;
	}
	return i;
}



function time() {
var today = new Date();
var hourNow = today.getHours();
var minutesNow = addZero(today.getMinutes());
var secondsNow = addZero(today.getSeconds());
//alert(hourNow);
var greeting;
var x = document.getElementById("tellme");
var y = document.getElementById("current");
var runningClock = setTimeout(time);

if (hourNow > 17) {
	greeting = "Good evening";
	document.body.style.backgroundColor = "LemonChiffon";
	document.body.style.transition = "linear 0.5s";	
} else if (hourNow >= 12) {
	greeting = "Good afternoon";
	//document.body.style.backgroundColor = "orange";
	
	var bg = document.getElementById("background");
	bg.style.backgroundImage = "url(images/afternoon.jpg)";
	bg.style.transition = "linear 0.5s";
	var h = document.getElementsByTagName("h1");
	var i;
	for (i=0; i < h.length; i++) {
		h[i].style.color = "white";
		h[i].style.transition = "linear 1s";
	}
	
} else {
	greeting = "Good morning";
	
}

x.innerHTML = "<h3>" + greeting + "</h3>";
y.innerHTML = "The time is now" + "<span>" + hourNow + "</span>" + ":" + "<span>" + minutesNow + "</span>" + ":" + "<span>" + secondsNow + "</span>";

}
