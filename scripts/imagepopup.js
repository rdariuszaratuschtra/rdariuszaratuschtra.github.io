// our global vars
var picfile = new Image();
var picname;


//function viewPic(img)
function viewPic(which)
{ 	
	// HELL: Sometimes we get an undefined for which in IE. FireFox works OK.
	// What's going on?
	//var img = which.href;
	//alert(img);
	//alert(which);
	
    //picfile = new Image(); 
    picfile.src = which.href;
    
    picname = which.name;
    
    //fileCheck(img);
    //fileCheck(which);
    fileCheck();
}

//function viewPic2(img)
function viewPic2(img, title)
{ 	
	//alert(img);
	
    //picfile = new Image(); 
    picfile.src = img;
    
    // get real titel from string comparison
    picname = title;
    
    //fileCheck(img);
    //fileCheck(which);
    fileCheck();
}




//function fileCheck(img)
//function fileCheck(which)
function fileCheck()
{ 	
    if( (picfile.width!=0) && (picfile.height!=0) )
    { 
        //makeWindow(img);
        //makeWindow(which); 
        makeWindow(); 
    }
    else 
    {
        //funzione="fileCheck('"+img+"')"; 
        //funzione="fileCheck('"+which+"')";
        
        //alert("Wrong image size"); 
        funzione="fileCheck()"; 
        intervallo=setTimeout(funzione,50);
        
    }
} 

//function makeWindow(img)
//function makeWindow(which)
function makeWindow()
{ 	
	wd = picfile.width;// + 18;
    ht = picfile.height;// + 26;
    
    //alert(wd + " x " + ht);
     
     
    var args= "height=" + ht + ",innerHeight=" + ht;
    args += ",width=" + wd + ",innerWidth=" + wd;
    if (window.screen) 
    { 
        var avht = screen.availHeight; 
        var avwd = screen.availWidth;
        var xcen = (avwd - wd) / 2; 
        var ycen = (avht - ht) / 2;
        args += ",left=" + xcen + ",screenX=" + xcen;
        args += ",top=" + ycen + ",screenY=" + ycen + ",status=0,menubar=0,resizable=0"; 	
    }
    
    //return window.open(img, '', args);
    
    //var index = img.lastIndexOf('/');
    //var filename = img.substring(index+1,img.length);
    //filename = unescape(filename);
    
    // TODO: Why can't we find the image? 
    // Here's the bugger: the "which" argument does not correctly give the href object to
    // this function. Sucks!!! Better use global var.
    //var img = which.href;
    var img = picfile.src;
    //alert(img);
    
    // NOTE: same goes for this
    //var filename = which.name;
    var filename = picname;
    
    // TODO: there is still another very annoying bug: if we view a picture and then later decide to make it bigger or
    // smaller, the popup window will stay the same size of the old picture. It is as if it gets the old image size from a
    // cache somewhere. Emptying the browser cache does not solve the prob, though.
    // It is as if the popup window, once created, will always stay the same size.
    // NOTE2: problem half solved: we initialize var picfile = new Image(); as global var instead of in viewPic(). Now when
    // we use a different image, we get the wrong size the first time, but the second time we get the correct size.
    // The culprit seems to be new Image(), e.g. putting picfile = new Image(); as the last statement in makeWindow()
    // will keep giving false sizes.
    
    // NOTE: Also very annoying: Windows SP2 causes IE to display www.rdariuszaratuschta.nl and then the title. Also, it
    // will always show the statusbar.
    
    
    // preload image (already done above but just to be sure)
    //pic = new Image();
    //pic.src = img;
    
    var popwin = window.open("","_blank",args)
	//popwin.document.open()
	//popwin.document.write('<html><head><title>'+img+'</title></head><body bgcolor=white scroll=no topmargin=0 leftmargin=0 rightmargin=0 bottommargin=0 marginheight=0 marginwidth=0>  <div style="position: absolute; top:0px;left:0px"><a href="javascript:window.close()">  <img src="'+img+'" width="'+wd+'" height="'+ht+'" border="0"></a></div></body></html>')
	
	//popwin.document.write('<html><head><title>'+filename+'</title></head><body bgcolor=white scroll=no topmargin=0 leftmargin=0 rightmargin=0 bottommargin=0 marginheight=0 marginwidth=0 onblur="self.close()" onclick="self.close()">');
	popwin.document.write('<html><head><title>'+filename+'</title></head><body bgcolor=white scroll=no topmargin=0 leftmargin=0 rightmargin=0 bottommargin=0 marginheight=0 marginwidth=0 onclick="self.close()">');
	popwin.document.write('<img src="'+img+'" width="'+wd+'" height="'+ht+'" border="0">');
	//popwin.document.write('<img src="'+img+'" border="0">');
	popwin.document.write('</body></html>');
	popwin.document.close();
	
	// TEST:
	//picfile = new Image();
}





