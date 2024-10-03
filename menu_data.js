_menuCloseDelay=100;
_menuOpenDelay=150;
_subOffsetTop=2;
_subOffsetLeft=-2;

var sub1TopOffset = -2; 
var sub1LeftOffset = -2;


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
outfilter="fade(duration=0.5)";
/*overfilter="Fade(duration=0.2);Alpha(opacity=90);Shadow(color=#777777', Direction=135, Strength=5)";*/
padding=5;
pagecolor="black";
separatorcolor="silver";
//separatorimage="whitestripe.gif";
separatorpadding=0;
separatorsize=1;
//image="grey.gif";
//overimage="arrow_grey.gif";
//imagepadding=5;
subimage="arrow_grey.gif";
onsubimage="arrow_lilac.gif";
subimagepadding=2;
subimageposition="right";
//bordercolor="black";
//borderwidth=1;
//pagecolor="black";
//pagebgcolor="#dddddd";
//pagesubimage="arrow_black.gif";
//pagebgimage="blackforest2.jpg";
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
//onborder="1px solid #000000";
oncolor="#555555";
onbgcolor="#eeeeee";
outfilter="fade(duration=0.5)";
//overbgimage="gray.jpg";
overfilter="Fade(duration=0.2);Alpha(opacity=90);Shadow(color=#aaaaaa', Direction=135, Strength=5)";
padding=4;
pagecolor="white";
separatorsize=1;
subimage="arrow_submenu_lilac2.gif";
onsubimage="arrow_submenu_grey.gif";
subimagepadding=8;
//pagecolor="black";
//pagebgcolor="#dddddd";
}

with(milonic=new menuname("Main Menu")){
alwaysvisible=1;
itemheight=20;
itemwidth=150;//190;
left=100;
top=10;
position="relative";
orientation="horizontal";
style=menuStyle;
aI("align=center;status=Back To Home Page;text=Home;url=./index.html;");// NOTE: we need ./ in url, but not in pagematch=index.html;
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
//aI("text=Cultuurschappen;url=./gallery_cultuurschappen.html;"); // NOTE: we need ./ in url, but not in pagematch=darius4.html;
//aI("text=Landschappen;url=./intro_landschappen.html;");
//aI("text=Zelfportretten;url=./gallery_zelfportretten.html;");
//aI("text=Portretten;url=./gallery_portretten.html;");
//aI("text=Intermenselijke Relaties / Verhoudingen;url=./gallery_verhoudingen.html;");
//aI("text=Studies / Tekeningen;url=./gallery_studies.html;");
//aI("text=Wachtenden / Naamlozen;url=./gallery_wachtenden.html;");
//aI("text=Individuen;url=./gallery_individuen.html;");
//aI("text=Paarden;url=./gallery_paardenschilderijen.html;");
aI("text=Cultuurschappen;showmenu=CultuurschappenSubMenu;");
aI("text=Landschappen;showmenu=LandschappenSubMenu;");
aI("text=Zelfportretten;showmenu=ZelfportrettenSubMenu;");
aI("text=Portretten;showmenu=PortrettenSubMenu;");
aI("text=Intermenselijke Relaties / Verhoudingen;showmenu=VerhoudingenSubMenu;");
aI("text=Studies / Tekeningen;showmenu=StudiesSubMenu;");
aI("text=Wachtenden / Naamlozen;showmenu=WachtendenSubMenu;");
aI("text=Individuen;showmenu=IndividuenSubMenu;");
aI("text=Paarden;showmenu=PaardenschilderijenSubMenu;");
}

with(milonic=new menuname("CultuurschappenSubMenu")){
//top = "offset=" + sub1TopOffset; 
//left = "offset=" + sub1LeftOffset;	
itemwidth=140;	
margin=5;
style=submenuStyle;
aI("text=Intro;url=./intro_cultuurschappen.html;");
aI("text=Galerie;url=./gallery_cultuurschappen.html;");
aI("text=Slideshow;url=./slideshow.php?cat=0;");
aI("text=Database;url=./database.php?cat=0;");
}

with(milonic=new menuname("LandschappenSubMenu")){
//top = "offset=" + sub1TopOffset; 
//left = "offset=" + sub1LeftOffset;	
itemwidth=140;	
margin=5;
style=submenuStyle;
aI("text=Intro;url=./intro_landschappen.html;");
aI("text=Galerie;url=./gallery_landschappen.html;");
aI("text=Slideshow;url=./slideshow.php?cat=1;");
aI("text=Database;url=./database.php?cat=1;");
}

with(milonic=new menuname("ZelfportrettenSubMenu")){
//top = "offset=" + sub1TopOffset; 
//left = "offset=" + sub1LeftOffset;	
itemwidth=140;	
margin=5;
style=submenuStyle;
aI("text=Intro;url=./intro_zelfportretten.html;");
aI("text=Galerie;url=./gallery_zelfportretten.html;");
aI("text=Slideshow;url=./slideshow.php?cat=2;");
aI("text=Database;url=./database.php?cat=2;");
}

with(milonic=new menuname("PortrettenSubMenu")){
//top = "offset=" + sub1TopOffset; 
//left = "offset=" + sub1LeftOffset;	
itemwidth=140;	
margin=5;
style=submenuStyle;
aI("text=Intro;url=./intro_portretten.html;");
aI("text=Galerie;url=./gallery_portretten.html;");
aI("text=Slideshow;url=./slideshow.php?cat=3;");
aI("text=Database;url=./database.php?cat=3;");
}

with(milonic=new menuname("VerhoudingenSubMenu")){
//top = "offset=" + sub1TopOffset; 
//left = "offset=" + sub1LeftOffset;	
itemwidth=140;	
margin=5;
style=submenuStyle;
aI("text=Intro;url=./intro_verhoudingen.html;");
aI("text=Galerie;url=./gallery_verhoudingen.html;");
aI("text=Slideshow;url=./slideshow.php?cat=4;");
aI("text=Database;url=./database.php?cat=4;");
}

with(milonic=new menuname("StudiesSubMenu")){
//top = "offset=" + sub1TopOffset; 
//left = "offset=" + sub1LeftOffset;	
itemwidth=140;	
margin=5;
style=submenuStyle;
aI("text=Intro;url=./intro_studies.html;");
aI("text=Galerie;url=./gallery_studies.html;");
aI("text=Slideshow;url=./slideshow.php?cat=5;");
aI("text=Database;url=./database.php?cat=5;");
}

with(milonic=new menuname("WachtendenSubMenu")){
//top = "offset=" + sub1TopOffset; 
//left = "offset=" + sub1LeftOffset;	
itemwidth=140;	
margin=5;
style=submenuStyle;
aI("text=Intro;url=./intro_wachtenden.html;");
aI("text=Galerie;url=./gallery_wachtenden.html;");
aI("text=Slideshow;url=./slideshow.php?cat=6;");
aI("text=Database;url=./database.php?cat=6;");
}

with(milonic=new menuname("IndividuenSubMenu")){
//top = "offset=" + sub1TopOffset; 
//left = "offset=" + sub1LeftOffset;	
itemwidth=140;	
margin=5;
style=submenuStyle;
aI("text=Intro;url=./intro_individuen.html;");
aI("text=Galerie;url=./gallery_individuen.html;");
aI("text=Slideshow;url=./slideshow.php?cat=7;");
aI("text=Database;url=./database.php?cat=7;");
}

with(milonic=new menuname("PaardenschilderijenSubMenu")){
//top = "offset=" + sub1TopOffset; 
//left = "offset=" + sub1LeftOffset;	
itemwidth=140;	
margin=5;
style=submenuStyle;
aI("text=Intro;url=./intro_paardenschilderijen.html;");
aI("text=Galerie;url=./gallery_paardenschilderijen.html;");
aI("text=Slideshow;url=./slideshow.php?cat=8;");
aI("text=Database;url=./database.php?cat=8;");
}



with(milonic=new menuname("Beelden")){
//top = "offset=" + sub1TopOffset; 
//left = "offset=" + sub1LeftOffset;
itemwidth=140;	
margin=5;
style=submenuStyle;
aI("text=Paarden;showmenu=PaardenbeeldenSubMenu;;");
aI("text=Mediétoriet;url=./medietoriet.html;");
aI("text=Diversen;url=./gallery_diversen.html;");
}

with(milonic=new menuname("PaardenbeeldenSubMenu")){
//top = "offset=" + sub1TopOffset; 
//left = "offset=" + sub1LeftOffset;	
itemwidth=140;	
margin=5;
style=submenuStyle;
aI("text=Intro;url=./intro_paardenbeelden.html;");
aI("text=Galerie;url=./gallery_paardenbeelden.html;");
aI("text=Slideshow;url=./slideshow.php?cat=9;");
aI("text=Database;url=./database.php?cat=9;");
}


with(milonic=new menuname("Diverse Technieken")){
//top = "offset=" + sub1TopOffset; 
//left = "offset=" + sub1LeftOffset;
itemwidth=140;	
margin=5;
style=submenuStyle;
aI("text=Glas-in-lood;showmenu=Glas-in-loodSubMenu;");
aI("text=Grafisch;url=./gallery_grafisch.html;");
//aI("status=PHP - Web Server Scripting as used by Milonic;text=PHP - Development;url=http://www.php.net/;");
//aI("status=PHP Based Web Forum, Milonic's Recommended Forum Software;text=phpBB Web Forum System;url=http://www.phpbb.net/;");
//aI("showmenu=DariusSubMenu;status=Anti Spam Solutions, as used by Milonic;text=Darius SubMenu;");
}

with(milonic=new menuname("Glas-in-loodSubMenu")){
//top = "offset=" + sub1TopOffset; 
//left = "offset=" + sub1LeftOffset;	
itemwidth=140;	
margin=5;
style=submenuStyle;
aI("text=Intro;url=./intro_glas-in-lood.html;");
aI("text=Galerie;url=./gallery_glas-in-lood.html;");
aI("text=Slideshow;url=./slideshow.php?cat=10;");
aI("text=Database;url=./database.php?cat=10;");
}


with(milonic=new menuname("Info")){
//top = "offset=" + sub1TopOffset; 
//left = "offset=" + sub1LeftOffset;
itemwidth=140;	
margin=5;
style=submenuStyle;
aI("text=Nieuws;url=./nieuws.html;");
aI("text=Exposities;url=./exposities.html;");
//aI("text=Database;url=./database.php?cat=0;");
aI("text=Cursussen;url=./cursussen.html;");
aI("text=C.V.;url=./cv.html;");
aI("text=Cont@ct;url=./contact.html;");
aI("text=Links;url=./links.html;");
}

drawMenus();

