img1on  = new Image(24,24);  img1on.src  = '../images/prev_over.jpg';
img1off = new Image(24,24);  img1off.src = '../images/prev.jpg';
img2on  = new Image(24,24);  img2on.src  = '../images/next_over.jpg';
img2off = new Image(24,24);  img2off.src = '../images/next.jpg';
img3on  = new Image(24,24);  img3on.src  = '../images/index_over.jpg';
img3off = new Image(24,24);  img3off.src = '../images/index.jpg';

img4on  = new Image(24,24);  img4on.src  = '../images/stop_over.jpg';
img4off = new Image(24,24);  img4off.src = '../images/stop.jpg';


function imgOver(which) {
	//alert("qqq");	
	//which.style.filter="alpha(opacity=100)";
	//document[which].style.filter="alpha(opacity=20)";
	
	imgon = eval(which + "on");
	document[which].src = imgon.src;
}

function imgOut(which) {
	//alert("qqq");
	
	imgoff = eval(which + "off");
	document[which].src = imgoff.src;	
}