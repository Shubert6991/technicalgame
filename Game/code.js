// console.log("test");
window.onload = function() {
	var c = document.getElementById("circle");
	var ctx = c.getContext("2d");
	ctx.beginPath();
	ctx.arc(95,50,40,0,2*Math.PI);
	ctx.stroke();

	var l = document.getElementById("line");
	var ctx1 = l.getContext("2d");
	ctx1.moveTo(50,0);
	ctx1.lineTo(100,100);
	ctx1.stroke();
}

$(document).ready(function(){
    $("input#hide").click(function(){
        $("#circle").hide();
    });
}); 