arrow1on  = new Image(24,24);  arrow1on.src  = '../images/prev_over.jpg';
arrow1off = new Image(24,24);  arrow1off.src = '../images/prev.jpg';
arrow2on  = new Image(24,24);  arrow2on.src  = '../images/next_over.jpg';
arrow2off = new Image(24,24);  arrow2off.src = '../images/next.jpg';

function arrowOver(which) {
	//alert("qqq");	
	//which.style.filter="alpha(opacity=100)";
	//document[which].style.filter="alpha(opacity=20)";
	
	imgon = eval(which + "on");
	document[which].src = imgon.src;
}

function arrowOut(which) {
	//alert("qqq");
	
	imgon = eval(which + "off");
	document[which].src = imgon.src;	
}