// console.log("test");
// window.onload = function() {

// }

$(document).ready(function(){
    // $("input#hide").click(function(){
    //     $("#circle").hide();
    // });
  var c = document.getElementById("head");
	var ctx = c.getContext("2d");
	ctx.beginPath();
	ctx.arc(95,50,40,0,2*Math.PI);
	ctx.stroke();

	var l = document.getElementById("body");
	var ctx1 = l.getContext("2d");
	ctx1.moveTo(100,0);
	ctx1.lineTo(100,100);
	ctx1.stroke();

	var l = document.getElementById("rarm");
	var ctx1 = l.getContext("2d");
	ctx1.moveTo(0,0);
	ctx1.lineTo(300,200);
	ctx1.stroke();
}); 