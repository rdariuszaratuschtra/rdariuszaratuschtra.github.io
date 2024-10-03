// index
/*src="tn_01.jpg"
src="tn_107.jpg"
src="tn_108.jpg"
src="tn_129.jpg"
                 
src="tn_2.jpg"
src="tn_213 a.jpg"
src="tn_213 b.jpg"
src="tn_213.jpg"
                 
src="tn_252.jpg"
src="tn_253.jpg"
src="tn_267.jpg"
src="tn_273.jpg"*/


// index2
/*src="tn_54 7.jpg"
src="tn_54 8.jpg"
src="tn_54 9.jpg"
src="tn_54 B.jpg"                       
                       
src="tn_54 C 2.jpg"
src="tn_54 C 3.jpg"
src="tn_54 C.jpg"
src="tn_54 C4.jpg"                       
                       
src="tn_54 I.jpg"
src="tn_54 II.jpg"
src="tn_54 III.jpg"
src="tn_54 IIII.jpg"*/

//alert("test");

img1 = new Image(24,24); img1.src = "tn_01.jpg";
img2 = new Image(24,24); img2.src = "tn_54 7.jpg";
var x = 0;

function nextIndex() {
	//alert("test");
	if (x==0) document.images[0].src = img2.src;
	if (x==1) document.images[0].src = img1.src;
	x=!x;
}