// console.log("test");
window.onload = function() {
	var c = document.getElementById("circle");
	var ctx = c.getContext("2d");
	ctx.beginPath();
	ctx.arc(95,50,40,0,2*Math.PI);
	ctx.stroke();

	var c = document.getElementById("line");
	var ctx1 = c.getContext("2d");
	ctx1.moveTo(0,0);
	ctx1.lineTo(50,50);
	ctx1.stroke();
}