function viewPic(img)
{ 	
    picfile = new Image(); 
    picfile.src =(img); 
    fileCheck(img); 
} 

function fileCheck(img)
{ 	
    if( (picfile.width!=0) && (picfile.height!=0) )
    { 
        makeWindow(img); 
    }
    else 
    {
        funzione="fileCheck('"+img+"')"; 
        intervallo=setTimeout(funzione,50); 
    }
} 

function makeWindow(img)
{ 	
    ht = picfile.height;// + 26;
    wd = picfile.width;// + 18; 

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
    
    var index = img.lastIndexOf('/');
    var filename = img.substring(index+1,img.length);
    filename = unescape(filename);
    
    popwin=window.open("","_blank",args)
	popwin.document.open()
	//popwin.document.write('<html><head><title>'+img+'</title></head><body bgcolor=white scroll=no topmargin=0 leftmargin=0 rightmargin=0 bottomargin=0 marginheight=0 marginwidth=0>  <div style="position: absolute; top:0px;left:0px"><a href="javascript:window.close()">  <img src="'+img+'" width="'+wd+'" height="'+ht+'" border="0"></a></div></body></html>')
	popwin.document.write('<html><head><title>'+filename+'</title></head><body bgcolor=white scroll=no topmargin=0 leftmargin=0 rightmargin=0 bottomargin=0 marginheight=0 marginwidth=0 onblur="self.close()" onclick="self.close()">  <img src="'+img+'" width="'+wd+'" height="'+ht+'" border="0"> </body></html>')
	popwin.document.close()
} 