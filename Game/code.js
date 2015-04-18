$(document).ready(function(){
    // $("input#hide").click(function(){
    //     $("#circle").hide();
    // });
  var c = document.getElementById("head");
	var ctx = c.getContext("2d");
	ctx.beginPath();
	ctx.arc(95,50,40,0,2*Math.PI);
	ctx.stroke();

	var b = document.getElementById("body");
	var ctx1 = b.getContext("2d");
	ctx1.moveTo(100,0);
	ctx1.lineTo(100,100);
	ctx1.stroke();

	var ra = document.getElementById("rarm");
	var ctx2 = ra.getContext("2d");
	ctx2.moveTo(0,0);
	ctx2.lineTo(300,200);
	ctx2.stroke();

	var la = document.getElementById("larm");
	var ctx3 = la.getContext("2d");
	ctx3.moveTo(200,0);
	ctx3.lineTo(50,120);
	ctx3.stroke();

	var rl = document.getElementById("rleg");
	var ctx4 = rl.getContext("2d");
	ctx4.moveTo(0,0);
	ctx4.lineTo(300,200);
	ctx4.stroke();

	var ll = document.getElementById("lleg");
	var ctx5 = ll.getContext("2d");
	ctx5.moveTo(200,0);
	ctx5.lineTo(50,120);
	ctx5.stroke();

	var x = document.getElementById("x");
	var ctxx = x.getContext("2d");
	ctxx.moveTo(50,0);
	ctxx.lineTo(50,400);
	ctxx.lineWidth = 15;
	ctxx.stroke();

	var y = document.getElementById("y");
	var ctxy = y.getContext("2d");
	ctxy.moveTo(0,50);
	ctxy.lineTo(100,50);
	ctxy.lineWidth = 15;
	ctxy.stroke();

	var z = document.getElementById("z");
	var ctxz = z.getContext("2d");
	ctxz.moveTo(25,0);
	ctxz.lineTo(25,50);
	ctxz.lineWidth = 15;
	ctxz.stroke();
}); 
