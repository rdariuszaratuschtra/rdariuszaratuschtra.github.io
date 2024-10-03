//*****************************************
// Blending Image Slide Show Script- 
// © Dynamic Drive (www.dynamicdrive.com)
// For full source code, visit http://www.dynamicdrive.com/
//*****************************************

//specify interval between slide (in milli seconds)
var slidespeed=1000

//specify images
var slideimages=new Array("images/dariusheader8_slide2.jpg","images/dariusheader8_slide1.jpg")

//specify corresponding links
var slidelinks=new Array("http://www.dynamicdrive.com","http://javascriptkit.com","http://www.geocities.com")

var newwindow=1 //open links in new window? 1=yes, 0=no

var imageholder=new Array()
var ie=document.all
for (i=0;i<slideimages.length;i++){
	imageholder[i]=new Image()
	imageholder[i].src=slideimages[i]
}

function gotoshow(){
	if (newwindow)
		window.open(slidelinks[whichlink]);
	else
		window.location=slidelinks[whichlink];
}



///////////////////////////////////////////////////////////////////////
var whichlink=0
var whichimage=0
var blenddelay=(ie)? document.images.slide.filters[0].duration*1000 : 0

function slideit(){
	if (!document.images) return;	
	if (ie) document.images.slide.filters[0].apply();
	
	document.images.slide.src=imageholder[whichimage].src;
	
	if (ie) document.images.slide.filters[0].play();
	
	whichlink=whichimage;
	whichimage=(whichimage<slideimages.length-1)? whichimage+1 : 0;
	
	setTimeout("slideit()",slidespeed+blenddelay);
}

slideit()
