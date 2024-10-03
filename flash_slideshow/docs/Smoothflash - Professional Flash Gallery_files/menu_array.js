/*
 Milonic DHTML Menu
 Written by Andy Woolley
 Copyright 2002 (c) Milonic Solutions. All Rights Reserved.
 Plase vist http://www.milonic.co.uk/menu or e-mail menu3@milonic.com
 You may use this menu on your web site free of charge as long as you place prominent links to http://www.milonic.co.uk/menu and
 your inform us of your intentions with your URL AND ALL copyright notices remain in place in all files including your home page
 Comercial support contracts are available on request if you cannot comply with the above rules.

 Please note that major changes to this file have been made and is not compatible with versions 3.0 or earlier.

 You no longer need to number your menus as in previous versions. 
 The new menu structure allows you to name the menu instead, this means that you can remove menus and not break the system.
 The structure should also be much easier to modify, add & remove menus and menu items.
 
 If you are having difficulty with the menu please read the FAQ at http://www.milonic.co.uk/menu/faq.php before contacting us.

 Please note that the above text CAN be erased if you wish as long as copyright notices remain in place.
*/

//The following line is critical for menu operation, and MUST APPEAR ONLY ONCE. If you have more than one menu_array.js file rem out this line in subsequent files
menunum=0;menus=new Array();_d=document;function addmenu(){menunum++;menus[menunum]=menu;}function dumpmenus(){mt="<script language=javascript>";for(a=1;a<menus.length;a++){mt+=" menu"+a+"=menus["+a+"];"}mt+="<\/script>";_d.write(mt)}
//Please leave the above line intact. The above also needs to be enabled if it not already enabled unless this file is part of a multi pack.



////////////////////////////////////
// Editable properties START here //
////////////////////////////////////

// Special effect string for IE5.5 or above please visit http://www.milonic.co.uk/menu/filters_sample.php for more filters
if(navigator.appVersion.indexOf("MSIE 6.0")>0)
{
	effect = "Fade(duration=0.2)"
}
else
{
	effect = "" // Stop IE5.5 bug when using more than one filter
}


timegap=500				// The time delay for menus to remain visible
followspeed=5			// Follow Scrolling speed
followrate=40			// Follow Scrolling Rate
suboffset_top=13;		// Sub menu offset Top position 
suboffset_left=13;		// Sub menu offset Left position





style1=[				// style1 is an array of properties. You can have as many property arrays as you need. This means that menus can have their own style.
"404040",					// Mouse Off Font Color5F61B4
"transparent",				// Mouse Off Background Color (transparent)FDFAF1
"BB3617",				// Mouse On Font Color
"transparent",				// Mouse On Background Color
0,				// Menu Border Color 
12,						// Font Size in pixels
"normal",				// Font Style (italic or normal)
"normal",					// Font Weight (bold or normal)
"Arial",		// Font Name
1,						// Menu Item Padding
"",			// Sub Menu Image (Leave this blank if not needed)arrow.gif
,						// 3D Border & Separator bar
,				// 3D High Color
,				// 3D Low Color
,				// Current Page Item Font Color (leave this blank to disable)
,					// Current Page Item Background Color (leave this blank to disable)
,			// Top Bar image (Leave this blank to disable)arrowdn.gif
,				// Menu Header Font Color (Leave blank if headers are not needed)
,				// Menu Header Background Color (Leave blank if headers are not needed)
]

style2=[				// style1 is an array of properties. You can have as many property arrays as you need. This means that menus can have their own style.
"ffffff",					// Mouse Off Font Color
"E28727",				// Mouse Off Background Color (transparent)FDFAF1
"BB3617",				// Mouse On Font Color
"FFC05A",				// Mouse On Background Color
"FFDBB4",				// Menu Border Color 
12,						// Font Size in pixels
"normal",				// Font Style (italic or normal)
"normal",					// Font Weight (bold or normal)
"Arial",		// Font Name
3,						// Menu Item Padding
"http://www.smoothflash.com/en/script/arrow1.gif",			// Sub Menu Image (Leave this blank if not needed)arrow.gif
,						// 3D Border & Separator bar
"66ffff",				// 3D High Color
"000099",				// 3D Low Color
"#666666",				// Current Page Item Font Color (leave this blank to disable)
"FFF7C1",					// Current Page Item Background Color (leave this blank to disable)
,			// Top Bar image (Leave this blank to disable)arrowdn.gif
"ffffff",				// Menu Header Font Color (Leave blank if headers are not needed)
"000099",				// Menu Header Background Color (Leave blank if headers are not needed)
]






addmenu(menu=[		// This is the array that contains your menu properties and details
"mainmenu",			// Menu Name - This is needed in order for the menu to be called
67,					// Menu Top - The Top position of the menu in pixels
100,				// Menu Left - The Left position of the menu in pixels
,					// Menu Width - Menus width in pixels
,					// Menu Border Width 
,					// Screen Position - here you can use "center;left;right;middle;top;bottom" or a combination of "center:middle"
style1,				// Properties Array - this is set higher up, as above
1,					// Always Visible - allows the menu item to be visible at all time (1=on/0=off)
,				// Alignment - sets the menu elements text alignment, values valid here are: left, right or center
,					// Filter - Text variable for setting transitional effects on menu activation - see above for more info
,					// Follow Scrolling - Tells the menu item to follow the user down the screen (visible at all times) (1=on/0=off)
1, 					// Horizontal Menu - Tells the menu to become horizontal instead of top to bottom style (1=on/0=off)
,					// Keep Alive - Keeps the menu visible until the user moves over another menu or clicks elsewhere on the page (1=on/0=off)
,					// Position of TOP sub image left:center:right
,					// Set the Overall Width of Horizontal Menu to 100% and height to the specified amount (Leave blank to disable)
,					// Right To Left - Used in Hebrew for example. (1=on/0=off)
,					// Open the Menus OnClick - leave blank for OnMouseover (1=on/0=off)
,					// ID of the div you want to hide on MouseOver (useful for hiding form elements)
,					// Background image for menu when BGColor set to transparent.
,					// Scrollable Menu
,					// Reserved for future use

//,"<img src=script/trans.gif width=100 height=18 border=0>","",,,0
,"Home","http://www.smoothflash.com/en/index.html",,,0
,"<img src=http://www.smoothflash.com/en/script/space.gif width=22 height=18 border=0>","",,,0
,"Product","show-menu=1","#",,0
,"<img src=http://www.smoothflash.com/en/script/space.gif width=22 height=18 border=0>","",,,0
,"Gallery & Demo","show-menu=2","#",,0
,"<img src=http://www.smoothflash.com/en/script/space.gif width=22 height=18 border=0>","",,,0
," Purchase","show-menu=3","#",,0
,"<img src=http://www.smoothflash.com/en/script/space.gif width=22 height=18 border=0>","",,,0

," Online Document","show-menu=4","#",,0
,"<img src=http://www.smoothflash.com/en/script/space.gif width=22 height=18 border=0>","",,,0
,"Contact","http://www.smoothflash.com/en/contact.html",,,0
//," forum ","show-menu=5","#",,0
//,"<img src=http://www.smoothflash.com/en/script/space.gif width=22 height=18 border=0>","",,,0
//," support","show-menu=6","#",,0


//about smoothflash  |  online demo  |  how to buy?  |  download  |  support  |  contact us

])


	addmenu(menu=["1",                       
	,,170,1,"",style2,,"left","fade(duration=0.3);Shadow(color=777777, Direction=135, Strength=3)",,,,,,,,,,,,
,"Product Overview","http://www.smoothflash.com/en/product_overview.html",,,1
,"V.1","http://www.smoothflash.com/en/v1.html",,,1
,"640","http://www.smoothflash.com/en/640.html",,,1
,"PRO","http://www.smoothflash.com/en/pro.html",,,1
,"Comparison Chart","http://www.smoothflash.com/en/chart.html",,,1
	//,"full feature list","http://www.smoothflash.com/en/full_feature_list.html",,,1
	//,"developers","developers.html",,,1
	//,"free download","freedownload.html",,,1
	//,"press & event","http://www.smoothflash.com/en/press.html",,,1
	])


	addmenu(menu=["2",                       
	,,170,1,"",style2,,"left","fade(duration=0.3);Shadow(color=777777, Direction=135, Strength=3)",,,,,,,,,,,,
	,"Featured Gallery","http://www.smoothflash.com/en/futuregallery.html",,,1
	//,"functional gallery","functionalgallery.html",,,1
	//,"professional gallery","proffesionalgallery.html",,,1
,"User Demo","http://www.smoothflash.com/en/userdemo.html",,,1
	//,"smoothflash contest","contest.html",,,1

	])
	
	addmenu(menu=["3",                       
	,,170,1,"",style2,,"left","fade(duration=0.3);Shadow(color=777777, Direction=135, Strength=3)",,,,,,,,,,,,
	,"Online Store","http://smoothflash.com/store/home.php",,,1
	//,"about paypal","http://www.smoothflash.com/en/paypal.html",,,1
	
	])

		addmenu(menu=["4",                       
	,,170,1,"",style2,,"left","fade(duration=0.3);Shadow(color=777777, Direction=135, Strength=3)",,,,,,,,,,,,
	,"Install Manual","http://www.smoothflash.com/en/installmanual.html",,,1
	,"User Manual","http://www.smoothflash.com/en/usermanual.html",,,1
	,"FAQ","http://www.smoothflash.com/en/faq.html",,,1
	,"Testimonial","http://www.smoothflash.com/en/testimonial.html",,,1
		,"Web Hosting","http://www.smoothflash.com/en/web_hosting.html",,,1
//	,"quick start","http://www.smoothflash.com/en/quickstart.html",,,1
//	,"user manual","http://www.smoothflash.com/en/usermanual.html",,,1
//	,"support F.A.Q.","http://www.smoothflash.com/en/supportfaq.html",,,1
	//,"addtional manual","addtional_manual.html",,,1
//	,"troubleshooting ","troubleshooting.html",,,1


	])
	
		addmenu(menu=["5",                       
	,,170,1,"",style2,,"left","fade(duration=0.3);Shadow(color=777777, Direction=135, Strength=3)",,,,,,,,,,,,
	,"forum","http://www.smoothflash.com/en/forum.html",,,1
	//,"beginner","http://www.smoothflash.com/en/beginnerforum.html",,,1
	//,"tip & tricks","http://www.smoothflash.com/en/tiptricks.html",,,1
	//,"bug Report","http://www.smoothflash.com/en/bugreport.html",,,1


	])
	
		addmenu(menu=["6",                       
	,,170,1,"",style2,,"left","fade(duration=0.3);Shadow(color=777777, Direction=135, Strength=3)",,,,,,,,,,,,
	,"general support","http://www.smoothflash.com/en/general_support.html",,,1
	,"business support","http://www.smoothflash.com/en/business_support.html",,,1
	//,"hosting list (Free)","freehost.html",,,1
	//,"hosting list (Commercial)","commercial_host.html",,,1

	])
	

	
		addmenu(menu=["6a",                       
	,,170,1,"",style2,,"left","fade(duration=0.3);Shadow(color=777777, Direction=135, Strength=3)",,,,,,,,,,,,
	,"Navigation-1","#",,,1
	,"Navigation-2","#",,,1
	,"Navigation-3","#",,,1
	,"Navigation-4","#",,,1
	


	])
	

	

dumpmenus()