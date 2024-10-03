_menuCloseDelay=100;
_menuOpenDelay=150;
_subOffsetTop=2;
_subOffsetLeft=-2;

//var sub1TopOffset = 2; 
//var sub1LeftOffset = 2;


with(menuStyle=new mm_style()){
bgimage="blackforest.jpg";
fontfamily="Verdana, Tahoma, Arial";
fontsize="10px";
fontstyle="normal";
fontweight="normal";
headerbgcolor="#00000";
headercolor="#000000";
offcolor="#808080";
oncolor="#CAA9B8";
onsubimage="arrow_grey.gif";
outfilter="fade(duration=0.5)";
overfilter="Fade(duration=0.2);Alpha(opacity=90);Shadow(color=#777777', Direction=135, Strength=5)";
padding=5;
pagecolor="black";
separatorcolor="black";
separatorimage="whitestripe.gif";
separatorpadding=1;
subimage="grey.gif";
subimagepadding=2;
//bordercolor="black";
}

with(submenuStyle=new mm_style()){
styleid=1;
borderstyle="solid";
borderwidth=1;
bordercolor="silver";
fontfamily="Verdana, Tahoma, Arial";
fontsize="10px";
fontstyle="normal";
fontweight="normal";
headercolor="#000000";
offbgcolor="white";
offcolor="#AD8DA4";
onborder="1px solid #ffffff";
oncolor="#000000";
outfilter="fade(duration=0.5)";
overbgimage="gray.jpg";
overfilter="Fade(duration=0.2);Alpha(opacity=90);Shadow(color=#777777', Direction=135, Strength=5)";
padding=4;
pagecolor="white";
separatorsize=1;
subimage="purple5x5.gif";
subimagepadding=8;
}

with(milonic=new menuname("Main Menu")){
alwaysvisible=1;
itemheight=20;
itemwidth=152;//190;
left=100;
orientation="horizontal";
style=menuStyle;
top=10;
position="relative";
aI("align=center;status=Back To Home Page;text=Home;url=http://www.dariuszaratuschtra.com;");
aI("align=center;showmenu=Schilderijen;text=Schilderijen;");
aI("align=center;showmenu=Beelden;text=Beelden;");
aI("align=center;showmenu=Diverse Technieken;text=Diverse Technieken;");
aI("align=center;showmenu=Info;text=Info;");
}

with(milonic=new menuname("Schilderijen")){
//top = "offset=" + sub1TopOffset; 
//left = "offset=" + sub1LeftOffset;
margin=5;
style=submenuStyle;
aI("text=Cultuurschappen;url=http://www.milonic.com/cbuy.php;");
aI("text=Landschappen;url=http://www.milonic.com/contactus.php;");
aI("text=Zelfportretten;url=http://www.milonic.com/newsletter.php;");
aI("text=Intermenselijke Relaties / Verhoudingen;url=http://www.milonic.com/menufaq.php;");
aI("text=Studies / Portretten / Tekeningen;url=http://www.milonic.com/forum/;");
aI("text=Wachtenden / Naamlozen;url=http://www.milonic.com/license.php;");
aI("text=Paarden;url=http://www.milonic.com/privacy.php;");
}

with(milonic=new menuname("Beelden")){
//top = "offset=" + sub1TopOffset; 
//left = "offset=" + sub1LeftOffset;
itemwidth=130;	
margin=5;
style=submenuStyle;
aI("text=Paarden;url=http://www.a-q.co.uk/;");
aI("text=Diversen;url=http://www.sms2email.com/;");
}

with(milonic=new menuname("Diverse Technieken")){
//top = "offset=" + sub1TopOffset; 
//left = "offset=" + sub1LeftOffset;
itemwidth=130;	
margin=5;
style=submenuStyle;
aI("text=Glas-in-lood;url=http://www.apache.org/;");
aI("text=Grafisch;url=http://ww.mysql.com/;");
//aI("status=PHP - Web Server Scripting as used by Milonic;text=PHP - Development;url=http://www.php.net/;");
//aI("status=PHP Based Web Forum, Milonic's Recommended Forum Software;text=phpBB Web Forum System;url=http://www.phpbb.net/;");
//aI("showmenu=Anti Spam;status=Anti Spam Solutions, as used by Milonic;text=Anti Spam Tools;");
}

with(milonic=new menuname("Anti Spam")){
margin=5;
style=submenuStyle;
aI("text=Spam Cop;url=http://www.spamcop.net/;");
aI("text=Mime Defang;url=http://www.mimedefang.org/;");
aI("text=Spam Assassin;url=http://www.spamassassin.org/;");
}

with(milonic=new menuname("Info")){
//top = "offset=" + sub1TopOffset; 
//left = "offset=" + sub1LeftOffset;
itemwidth=130;	
margin=5;
style=submenuStyle;
aI("text=C.V.;url=http://www.milonic.com/login.php;");
aI("text=Cont@ct;url=http://www.milonic.com/mylicenses.php;");
}

drawMenus();

