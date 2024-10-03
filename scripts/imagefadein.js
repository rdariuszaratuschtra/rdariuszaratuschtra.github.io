function ImageFadeIn()
{
	var ie=document.all;
	if (ie) {
		test.filters[0].apply();
		test.style.visibility="visible";
		test.filters[0].play();
	} else {
		test.style.visibility="visible";
	}
}


function ImageFadeOut()
{
	var ie=document.all;
	if (ie) {
		test.filters[0].apply();
		test.style.visibility="hidden";
		test.filters[0].play();
	} else {
		test.style.visibility="hidden";
	}	
}