function mm_showMenu(menuName) // , alwaysVisState = optional. 1=on, 0=off 
{ 
  var menuNum = getMenuByName(menuName); 
  if (arguments.length > 1)_m[menuNum][7] = arguments[1]; 
  menuDisplay(menuNum, 1); 
} 

function mm_hideMenu(menuName) // , alwaysVisState = optional. 1=on, 0=off 
{ 
  var menuNum = getMenuByName(menuName); 
  if (arguments.length > 1)_m[menuNum][7] = arguments[1]; 
  menuDisplay(menuNum, 0); 
}




_menuCloseDelay=100;
_menuOpenDelay=150;
_subOffsetTop=2;
_subOffsetLeft=-2;

var sub1TopOffset = 1; 
var sub1LeftOffset = 0;


with(menuStyle=new mm_style()){
//bgimage="../menu2/blackforest.jpg";
fontfamily="Verdana, Tahoma, Arial";
fontsize="10px";
fontstyle="normal";
fontweight="normal";
headerbgcolor="#000000";
headercolor="#000000";
offcolor="#ffffff";
oncolor="black";//"#CAA9B8";
onbgcolor="white";
offbgcolor="black";//"#F5F5F5";
outfilter="fade(duration=0.5)";
/*overfilter="Fade(duration=0.2);Alpha(opacity=90);Shadow(color=#777777', Direction=135, Strength=5)";*/
padding=5;
pagecolor="black";
separatorcolor="silver";
//separatorimage="whitestripe.gif";
//separatorpadding=0;
//separatorsize=1;
//image="grey.gif";
//overimage="arrow_grey.gif";
//imagepadding=5;
//subimage="../menu2/arrow_grey.gif";
//onsubimage="../menu2/arrow_lilac.gif";
//subimagepadding=2;
//subimageposition="right";
bordercolor="black";
borderwidth=1;
//pagecolor="black";
//pagebgcolor="#dddddd";
//pagesubimage="arrow_black.gif";
//pagebgimage="blackforest2.jpg";
}

with(submenuStyle=new mm_style()){
styleid=1;
borderstyle="solid";
borderwidth=0;
bordercolor="red";
fontfamily="Verdana, Tahoma, Arial";
fontsize="10px";
fontstyle="normal";
fontweight="normal";
headercolor="#000000";
offbgcolor="white";
offcolor="#555555";//"gray"; //"#AD8DA4";
//onborder="1px solid #000000";
oncolor="#555555";
onbgcolor="white";
outfilter="fade(duration=0.5)";
//overbgimage="gray.jpg";
overfilter="Fade(duration=0.2);Alpha(opacity=90);"//Shadow(color=#aaaaaa', Direction=135, Strength=5)";
padding=4;
pagecolor="white";
separatorsize=1;
//subimage="../menu2/arrow_submenu_lilac2.gif";
//onsubimage="../menu2/arrow_submenu_grey.gif";
subimagepadding=8;
//pagecolor="black";
//pagebgcolor="#dddddd";
pointer="default";
}

with(milonic=new menuname("Main Menu")){
alwaysvisible=1;
itemheight=23;
//menuheight=23;
itemwidth=40;
menuwidth=40;
//margin=5;
left=654;
top=505;
position="absolute";
orientation="horizontal";
openstyle="up";
style=menuStyle;
//aI("align=center;status=Back To Home Page;text=Home;url=./index.html;");// NOTE: we need ./ in url, but not in pagematch=index.html;
aI("align=center;showmenu=Info;text=Info;");
//aI("align=center;showmenu=Beelden;text=Beelden;");
//aI("align=center;showmenu=Diverse Technieken;text=Diverse Technieken;");
//aI("align=center;showmenu=Info;text=Info;");
}



with(milonic=new menuname("Info")){
top = "offset=" + sub1TopOffset; 
left = "offset=" + sub1LeftOffset;
//margin=5;
//itemheight=20;
itemwidth=705;
//left=0;
//top=10;
openstyle="up";
style=submenuStyle;
aI("text=;onfunction=closeAllMenus();"); // dummy: because we use no menu border

///////////////////////////////////////
//alert(document.images[0].src);
//alert(test.src);

var filepath = test.src;
var filename = filepath.substring(filepath.lastIndexOf("/")+1, filepath.length);

// Cultuurschappen
if (filename == escape("161.jpg")) {
document.getElementById("title").innerHTML = unescape("Stadsuitzicht met steigers");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=55x65;onfunction=closeAllMenus();");
aI("text=2004;onfunction=closeAllMenus();");
aI("text=Verkocht;onfunction=closeAllMenus();");
} else   
if (filename == escape("162.jpg")) {
document.getElementById("title").innerHTML = unescape("Kruispunt");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=55x75;onfunction=closeAllMenus();");
aI("text=2001-2004;onfunction=closeAllMenus();");
aI("text=&euro; 1200,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 001.jpg")) {
document.getElementById("title").innerHTML = unescape("Stroom");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=170x135;onfunction=closeAllMenus();");
aI("text=2000;onfunction=closeAllMenus();");
aI("text=&euro; 5550,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 002.jpg")) {
document.getElementById("title").innerHTML = unescape("Struiken");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=135x140;onfunction=closeAllMenus();");
aI("text=2000;onfunction=closeAllMenus();");
aI("text=Verkocht;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 003.jpg")) {
document.getElementById("title").innerHTML = unescape("Prikkeldraad");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=135x135;onfunction=closeAllMenus();");
aI("text=2000;onfunction=closeAllMenus();");
aI("text=&euro; 4200,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 004.jpg")) {
document.getElementById("title").innerHTML = unescape("Poort / Moeder of Vrouw");
aI("text=Ol.o.d.;onfunction=closeAllMenus();");
aI("text=178x193x193;onfunction=closeAllMenus();");
aI("text=1989;onfunction=closeAllMenus();");
aI("text=&euro; 3800,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 005.jpg")) {
document.getElementById("title").innerHTML = unescape("Sneeuwvlekken in kleur");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=170x135;onfunction=closeAllMenus();");
aI("text=2000;onfunction=closeAllMenus();");
aI("text=&euro; 5200,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 006.jpg")) {
document.getElementById("title").innerHTML = unescape("Glas-in-loodraam");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=180x135;onfunction=closeAllMenus();");
aI("text=2000;onfunction=closeAllMenus();");
aI("text=&euro; 5800,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 007.jpg")) {
document.getElementById("title").innerHTML = unescape("Tripitaka");
aI("text=Gemengde techniek / collage;onfunction=closeAllMenus();");
aI("text=130x150;onfunction=closeAllMenus();");
aI("text=1988;onfunction=closeAllMenus();");
aI("text=&euro; 3600,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 012.jpg")) {
document.getElementById("title").innerHTML = unescape("Zonder titel");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=135x145;onfunction=closeAllMenus();");
aI("text=2000;onfunction=closeAllMenus();");
aI("text=&euro; 4400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 014.jpg")) {
document.getElementById("title").innerHTML = unescape("Mens en nood");
aI("text=Ol.o.hout;onfunction=closeAllMenus();");
aI("text=81x122;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 2400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 015.jpg")) {
document.getElementById("title").innerHTML = unescape("Nacht in de singel");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=55x65 (tweeluik);onfunction=closeAllMenus();");
aI("text=2001;onfunction=closeAllMenus();");
aI("text=&euro; 2400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 126.jpg")) {
document.getElementById("title").innerHTML = unescape("Stadsuitzicht");
aI("text=Ol.o.papier;onfunction=closeAllMenus();");
aI("text=65x74;onfunction=closeAllMenus();");
aI("text=1990;onfunction=closeAllMenus();");
aI("text=&euro; 900,-;onfunction=closeAllMenus();");
} else
   
//schilderijen 03 darius 133.jpg -> landschappen

if (filename == escape("schilderijen 04 en schilderijen amsterdam 007.jpg")) {
document.getElementById("title").innerHTML = unescape("Vrouw (deel 1 van drieluik)");
aI("text=Ol.o.bord;onfunction=closeAllMenus();");
aI("text=21x29;onfunction=closeAllMenus();");
aI("text=1989;onfunction=closeAllMenus();");
aI("text=&euro; 1800,- (prijs van drieluik);onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 04 en schilderijen amsterdam 008.jpg")) {
document.getElementById("title").innerHTML = unescape("Vrouw-Droom-Stad (drieluik)");
aI("text=Ol.o.bord;onfunction=closeAllMenus();");
aI("text=21x29 21x29 29x42;onfunction=closeAllMenus();");
aI("text=1989;onfunction=closeAllMenus();");
aI("text=&euro; 1800,- (prijs van drieluik);onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 04 en schilderijen amsterdam 009.jpg")) {
document.getElementById("title").innerHTML = unescape("Droom (deel 2 van drieluik)");
aI("text=Ol.o.bord;onfunction=closeAllMenus();");
aI("text=21x29;onfunction=closeAllMenus();");
aI("text=1989;onfunction=closeAllMenus();");
aI("text=&euro; 1800,- (prijs van drieluik);onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 04 en schilderijen amsterdam 010.jpg")) {
document.getElementById("title").innerHTML = unescape("Stad (deel 3 van drieluik)");
aI("text=Ol.o.bord;onfunction=closeAllMenus();");
aI("text=29x42;onfunction=closeAllMenus();");
aI("text=1989;onfunction=closeAllMenus();");
aI("text=&euro; 1800,- (prijs van drieluik);onfunction=closeAllMenus();");
} else 
if (filename == escape("schilderijen 04 en schilderijen amsterdam 011.jpg")) {
document.getElementById("title").innerHTML = unescape("Bomenlandschap in maanlicht");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=55x65;onfunction=closeAllMenus();");
aI("text=2000;onfunction=closeAllMenus();");
aI("text=&euro; 1200,-;onfunction=closeAllMenus();");
} else 
  
//schilderijen 04 en schilderijen amsterdam 013.jpg -> weg

if (filename == escape("schilderijen 04 en schilderijen amsterdam 014.jpg")) {
document.getElementById("title").innerHTML = unescape("Zenderstoornissen");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=65x85;onfunction=closeAllMenus();");
aI("text=2000;onfunction=closeAllMenus();");
aI("text=&euro; 1300,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 04 en schilderijen amsterdam 016.jpg")) {
document.getElementById("title").innerHTML = unescape("Zenderstoornissen II");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=60x85;onfunction=closeAllMenus();");
aI("text=2000;onfunction=closeAllMenus();");
aI("text=&euro; 1200,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 04 en schilderijen amsterdam 017.jpg")) {
document.getElementById("title").innerHTML = unescape("Graanveld / Zeelandschap");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=85x100;onfunction=closeAllMenus();");
aI("text=2000;onfunction=closeAllMenus();");
aI("text=&euro; 1500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 04 en schilderijen amsterdam 020.jpg")) {
document.getElementById("title").innerHTML = unescape("Prikkeldraad II");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=135x145;onfunction=closeAllMenus();");
aI("text=2000;onfunction=closeAllMenus();");
aI("text=&euro; 4200,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 04 en schilderijen amsterdam 021.jpg")) {
document.getElementById("title").innerHTML = unescape("Regendruppels op ruit");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=135x140;onfunction=closeAllMenus();");
aI("text=2000;onfunction=closeAllMenus();");
aI("text=&euro; 4200,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 04 en schilderijen amsterdam 022.jpg")) {
document.getElementById("title").innerHTML = unescape("Slingers");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=135x150;onfunction=closeAllMenus();");
aI("text=2000;onfunction=closeAllMenus();");
aI("text=&euro; 4800,-;onfunction=closeAllMenus();");
} else 
if (filename == escape("schilderijen 04 en schilderijen amsterdam 023.jpg")) {
document.getElementById("title").innerHTML = unescape("Steden / Sterren");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=135x170;onfunction=closeAllMenus();");
aI("text=2000;onfunction=closeAllMenus();");
aI("text=&euro; 5700,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 04 en schilderijen amsterdam 025.jpg")) {
document.getElementById("title").innerHTML = unescape("Cultuurschappen / Amsterdam");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=105x125;onfunction=closeAllMenus();");
aI("text=2001-2004;onfunction=closeAllMenus();");
aI("text=&euro; 4100,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 04 en schilderijen amsterdam 026.jpg")) {
document.getElementById("title").innerHTML = unescape("Amsterdam in de nacht");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=125x105;onfunction=closeAllMenus();");
aI("text=2000-2004;onfunction=closeAllMenus();");
aI("text=&euro; 3900,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 04 en schilderijen amsterdam 027.jpg")) {
document.getElementById("title").innerHTML = unescape("Amsterdam in de nacht II");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=125x105;onfunction=closeAllMenus();");
aI("text=2000-2004;onfunction=closeAllMenus();");
aI("text=&euro; 4100,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 04 en schilderijen amsterdam 028.jpg")) {
document.getElementById("title").innerHTML = unescape("Amsterdams cultuurschap");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=105x125;onfunction=closeAllMenus();");
aI("text=2000-2004;onfunction=closeAllMenus();");
aI("text=&euro; 3900,-;onfunction=closeAllMenus();");
} else   


// Landschappen
if (filename == escape("01.jpg")) {
document.getElementById("title").innerHTML = unescape("Berglandschap Zwitserland");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=25x29;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 700,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("107.jpg")) {
document.getElementById("title").innerHTML = unescape("Zeelandschap");
aI("text=Ol.o.bord;onfunction=closeAllMenus();");
aI("text=14x20;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 350,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("108.jpg")) {
document.getElementById("title").innerHTML = unescape("Stadsdroom");
aI("text=Ol.o.bord;onfunction=closeAllMenus();");
aI("text=34x38;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("129.jpg")) {
document.getElementById("title").innerHTML = unescape("Odysseus’ land");
aI("text=Ol.o.bord;onfunction=closeAllMenus();");
aI("text=14,5x14,5;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=Verkocht;onfunction=closeAllMenus();");
} else   
if (filename == escape("2.jpg")) {
document.getElementById("title").innerHTML = unescape("Ottomaanse grafstenen");
aI("text=Ol. en Past. o.doek;onfunction=closeAllMenus();");
aI("text=111x154;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 4600,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("213 a.jpg")) {
document.getElementById("title").innerHTML = unescape("Golgotha 3-luik (deel 1)");
aI("text=Ol.o.papier;onfunction=closeAllMenus();");
aI("text=26x35;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 1200,- (prijs van 3-luik);onfunction=closeAllMenus();");
} else
if (filename == escape("213 b.jpg")) {
document.getElementById("title").innerHTML = unescape("Golgotha 3-luik (deel 2)");
aI("text=Ol.o.papier;onfunction=closeAllMenus();");
aI("text=21x29,5;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 1200,- (prijs van 3-luik);onfunction=closeAllMenus();");
} else
if (filename == escape("213.jpg")) {
document.getElementById("title").innerHTML = unescape("Golgotha 3-luik");
aI("text=26x35 21x29,5 26x35;onfunction=closeAllMenus();");
aI("text=Ol.o.papier;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 1200,- (prijs van 3-luik);onfunction=closeAllMenus();");
} else   
if (filename == escape("252.jpg")) {
document.getElementById("title").innerHTML = unescape("Eenzame accaciaboom in landschap");
aI("text=Aq.;onfunction=closeAllMenus();");
aI("text=36x51;onfunction=closeAllMenus();");
aI("text=2000;onfunction=closeAllMenus();");
aI("text=&euro; 550,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("253.jpg")) {
document.getElementById("title").innerHTML = unescape("Ruig landschap met bomen");
aI("text=Aq.;onfunction=closeAllMenus();");
aI("text=51x36;onfunction=closeAllMenus();");
aI("text=2000;onfunction=closeAllMenus();");
aI("text=&euro; 600,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("267.jpg")) {
document.getElementById("title").innerHTML = unescape("Boomgaardenlandschap");
aI("text=Aq.;onfunction=closeAllMenus();");
aI("text=51x36;onfunction=closeAllMenus();");
aI("text=2000;onfunction=closeAllMenus();");
aI("text=&euro; 800,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("273.jpg")) {
document.getElementById("title").innerHTML = unescape("Landschap");
aI("text=Acryl o.pap.;onfunction=closeAllMenus();");
aI("text=35x50;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 450,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("279.jpg")) {
document.getElementById("title").innerHTML = unescape("Cypressenlandschap");
aI("text=Aq.;onfunction=closeAllMenus();");
aI("text=35x50;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 450,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("30.jpg")) {
document.getElementById("title").innerHTML = unescape("Jonge kersenbomen in bloesemtijd");
aI("text=Aq.o.p;onfunction=closeAllMenus();");
aI("text=36x51;onfunction=closeAllMenus();");
aI("text=2000;onfunction=closeAllMenus();");
aI("text=&euro; 800,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("308.jpg")) {
document.getElementById("title").innerHTML = unescape("Berglandschap met rivier");
aI("text=Aq.;onfunction=closeAllMenus();");
aI("text=35x50;onfunction=closeAllMenus();");
aI("text=2000;onfunction=closeAllMenus();");
aI("text=&euro; 850,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("314.jpg")) {
document.getElementById("title").innerHTML = unescape("Impressielandschap langs de IJssel");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=68x49,5;onfunction=closeAllMenus();");
aI("text=1999;onfunction=closeAllMenus();");
aI("text=&euro; 900,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("324.jpg")) {
document.getElementById("title").innerHTML = unescape("Bomenlandschap in de wind");
aI("text=Aq.;onfunction=closeAllMenus();");
aI("text=35x50;onfunction=closeAllMenus();");
aI("text=1999;onfunction=closeAllMenus();");
aI("text=&euro; 600,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("326.jpg")) {
document.getElementById("title").innerHTML = unescape("Landschap");
aI("text=Ol.o.pap.;onfunction=closeAllMenus();");
aI("text=55x70;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 900,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("49 I.jpg")) {
document.getElementById("title").innerHTML = unescape("Berglandschap");
aI("text=Eigen bloed op p.;onfunction=closeAllMenus();");
aI("text=25x34;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("50.jpg")) {
document.getElementById("title").innerHTML = unescape("Man&Zoon landschap met bergen");
aI("text=Eigen bloed o.p.;onfunction=closeAllMenus();");
aI("text=25x34;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 450,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("53 I.jpg")) { //->180 grd draaien
document.getElementById("title").innerHTML = unescape("Churwalden landschap (Zwitserland)");
aI("text=Bruin krijt o.p.;onfunction=closeAllMenus();");
aI("text=2-luik 32x24;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 450,- (tweeluik);onfunction=closeAllMenus();");
} else   	
if (filename == escape("53 II.jpg")) {
document.getElementById("title").innerHTML = unescape("Churwalden landschap (Zwitserland)");
aI("text=Bruin krijt o.p.;onfunction=closeAllMenus();");
aI("text=2-luik 32x24;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 450,- (tweeluik);onfunction=closeAllMenus();");
} else
if (filename == escape("54 10.jpg")) {
document.getElementById("title").innerHTML = unescape("Zwitserse landschappen (diverse stukken)");
aI("text=Aq.o.p.;onfunction=closeAllMenus();");
aI("text=30x24;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 350,-;onfunction=closeAllMenus();");
} else	
if (filename == escape("54 6.jpg")) {
document.getElementById("title").innerHTML = unescape("Zwitserse landschappen (diverse stukken)");
aI("text=Aq.o.p.;onfunction=closeAllMenus();");
aI("text=30x24;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 350,-;onfunction=closeAllMenus();");
} else
if (filename == escape("54 7.jpg")) {
document.getElementById("title").innerHTML = unescape("Zwitserse landschappen (diverse stukken)");
aI("text=Aq.o.p.;onfunction=closeAllMenus();");
aI("text=30x24;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 350,-;onfunction=closeAllMenus();");
} else
if (filename == escape("54 8.jpg")) {
document.getElementById("title").innerHTML = unescape("Zwitserse landschappen (diverse stukken)");
aI("text=Aq.o.p.;onfunction=closeAllMenus();");
aI("text=30x24;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 350,-;onfunction=closeAllMenus();");
} else
if (filename == escape("54 9.jpg")) {
document.getElementById("title").innerHTML = unescape("Zwitserse landschappen (diverse stukken)");
aI("text=Aq.o.p.;onfunction=closeAllMenus();");
aI("text=30x24;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 350,-;onfunction=closeAllMenus();");
} else
if (filename == escape("54 B.jpg")) {
document.getElementById("title").innerHTML = unescape("Zwitserse landschappen (diverse stukken)");
aI("text=Aq.o.p.;onfunction=closeAllMenus();");
aI("text=24x30;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 350,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("54 C 2.jpg")) {
document.getElementById("title").innerHTML = unescape("Vadus Mittagsspitze");
aI("text=Aq.o.p.;onfunction=closeAllMenus();");
aI("text=30x24;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 350,-;onfunction=closeAllMenus();");
} else
if (filename == escape("54 C 3.jpg")) {
document.getElementById("title").innerHTML = unescape("Vadus Mittagsspitze");
aI("text=Aq.o.p.;onfunction=closeAllMenus();");
aI("text=30x24;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 350,-;onfunction=closeAllMenus();");
} else
if (filename == escape("54 C.jpg")) {
document.getElementById("title").innerHTML = unescape("Vadus Mittagsspitze");
aI("text=Aq.o.p.;onfunction=closeAllMenus();");
aI("text=24x30;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 350,-;onfunction=closeAllMenus();");
} else
if (filename == escape("54 C4.jpg")) {
document.getElementById("title").innerHTML = unescape("Vadus Mittagsspitze");
aI("text=Aq.o.p.;onfunction=closeAllMenus();");
aI("text=30x24;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 350,-;onfunction=closeAllMenus();");
} else
if (filename == escape("54 I.jpg")) {
document.getElementById("title").innerHTML = unescape("Churwalden landschap (Zwitserland)");
aI("text=Aq.o.p.;onfunction=closeAllMenus();");
aI("text=30x24;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 350,-;onfunction=closeAllMenus();");
} else
if (filename == escape("54 II.jpg")) {
document.getElementById("title").innerHTML = unescape("Churwalden landschap (Zwitserland)");
aI("text=Aq.o.p.;onfunction=closeAllMenus();");
aI("text=30x24;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 350,-;onfunction=closeAllMenus();");
} else
if (filename == escape("54 III.jpg")) {
document.getElementById("title").innerHTML = unescape("Churwalden landschap (Zwitserland)");
aI("text=Aq.o.p.;onfunction=closeAllMenus();");
aI("text=30x24;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 350,-;onfunction=closeAllMenus();");
} else
if (filename == escape("54 IIII.jpg")) {
document.getElementById("title").innerHTML = unescape("Churwalden landschap (Zwitserland)");
aI("text=Aq.o.p.;onfunction=closeAllMenus();");
aI("text=30x24;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 350,-;onfunction=closeAllMenus();");
} else
if (filename == escape("54 IIIII.jpg")) {
document.getElementById("title").innerHTML = unescape("Churwalden landschap (Zwitserland)");
aI("text=Aq.o.p.;onfunction=closeAllMenus();");
aI("text=30x24;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 350,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("7.jpg")) {
document.getElementById("title").innerHTML = unescape("Het droomhuis");
aI("text=Ol. Op linnen;onfunction=closeAllMenus();");
aI("text=43,5x43,5;onfunction=closeAllMenus();");
aI("text=1996;onfunction=closeAllMenus();");
aI("text=&euro; 1400,-;onfunction=closeAllMenus();");
} else 
if (filename == escape("schilderijen 01 008.jpg")) {
document.getElementById("title").innerHTML = unescape("Vuile was");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=130x170;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 4700,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 030.jpg")) {
document.getElementById("title").innerHTML = unescape("Ooijs landschap");
aI("text=Ol.o.pap.;onfunction=closeAllMenus();");
aI("text=54x67;onfunction=closeAllMenus();");
aI("text=1999;onfunction=closeAllMenus();");
aI("text=&euro; 1600,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 106.jpg")) {
document.getElementById("title").innerHTML = unescape("Onheilspellend luchtlandschap");
aI("text=Aq.;onfunction=closeAllMenus();");
aI("text=23x29;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 350,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 125.jpg")) {
document.getElementById("title").innerHTML = unescape("Landhuis");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=21x29;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 450,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 02 039.jpg")) {
document.getElementById("title").innerHTML = unescape("Eikenboom in de nacht");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=30x40;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 900,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 02 045.jpg")) {
document.getElementById("title").innerHTML = unescape("Aan de IJssel");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=64x75;onfunction=closeAllMenus();");
aI("text=1999;onfunction=closeAllMenus();");
aI("text=&euro; 900,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 02 058.jpg")) {
document.getElementById("title").innerHTML = unescape("Paranoialandschap / Man en zoon");
aI("text=Ol.o.doek;onfunction=closeAllMenus();");
aI("text=80x100;onfunction=closeAllMenus();");
aI("text=1987;onfunction=closeAllMenus();");
aI("text=&euro; 1800,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 02 085.jpg")) {
document.getElementById("title").innerHTML = unescape("Bomen in  de najaarsnacht");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=45x45;onfunction=closeAllMenus();");
aI("text=1996;onfunction=closeAllMenus();");
aI("text=&euro; 1400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 047.jpg")) {
document.getElementById("title").innerHTML = unescape("Sneeuwlandschap met warme lucht");
aI("text=Aq.;onfunction=closeAllMenus();");
aI("text=24x15,5;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=Verkocht;onfunction=closeAllMenus();");
} else


//Zelfportretten
if (filename == escape("10.jpg")) {
document.getElementById("title").innerHTML = unescape("Portret (Jezus)");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=30x45;onfunction=closeAllMenus();");
aI("text=2001;onfunction=closeAllMenus();");
aI("text=&euro; 550,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("104.jpg")) {
document.getElementById("title").innerHTML = unescape("Zelfportret");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=19,5x24;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 450,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("105.jpg")) {
document.getElementById("title").innerHTML = unescape("Portret als zelfportret");
aI("text=Ol.o.bord;onfunction=closeAllMenus();");
aI("text=17x21;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("106.jpg")) {
document.getElementById("title").innerHTML = unescape("Zelfportret als Michelangelo");
aI("text=Ol.o.bord;onfunction=closeAllMenus();");
aI("text=14x24;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("122.jpg")) {
document.getElementById("title").innerHTML = unescape("Zelfportret (als gek)");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=14x15;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 300,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("127.jpg")) {
document.getElementById("title").innerHTML = unescape("Zelfportret à la Goya");
aI("text=Ol.o.pap.;onfunction=closeAllMenus();");
aI("text=22x28;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 700,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("130.jpg")) {
document.getElementById("title").innerHTML = unescape("Zelfportret met rode achtergrond");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=14x16;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=Verkocht;onfunction=closeAllMenus();");
} else   
if (filename == escape("136.jpg")) {
document.getElementById("title").innerHTML = unescape("Zelfportret met 1 arm");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=45x55;onfunction=closeAllMenus();");
aI("text=1996;onfunction=closeAllMenus();");
aI("text=&euro; 900,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("144.jpg")) {
document.getElementById("title").innerHTML = unescape("Zelfportret met hoed en ster");
aI("text=Ol.o.doek;onfunction=closeAllMenus();");
aI("text=40x50;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 1200,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("16.jpg")) {
document.getElementById("title").innerHTML = unescape("Zelfportret met de \"wond\" / Kijk, kijk, ongelovige");
aI("text=Olieverf op papier;onfunction=closeAllMenus();");
aI("text=30,5x50;onfunction=closeAllMenus();");
aI("text=1999;onfunction=closeAllMenus();");
aI("text=&euro; 900,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("166.jpg")) {
document.getElementById("title").innerHTML = unescape("Zelfportret als gestenigde monnik");
aI("text=Ol.o.lin;onfunction=closeAllMenus();");
aI("text=30x32;onfunction=closeAllMenus();");
aI("text=1996;onfunction=closeAllMenus();");
aI("text=&euro; 700,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("167.jpg")) {
document.getElementById("title").innerHTML = unescape("Zelfportret in winterweer");
aI("text=Ol.o.doek;onfunction=closeAllMenus();");
aI("text=19x23,5;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 450,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("172.jpg")) {
document.getElementById("title").innerHTML = unescape("Zelfportret zonder voortanden");
aI("text=Ol.o.doek;onfunction=closeAllMenus();");
aI("text=30x38;onfunction=closeAllMenus();");
aI("text=1988;onfunction=closeAllMenus();");
aI("text=&euro; 800,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("255.jpg")) {
document.getElementById("title").innerHTML = unescape("Zelfportret");
aI("text=Heliografie;onfunction=closeAllMenus();");
aI("text=27,5x28,5;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 350,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("35.jpg")) {
document.getElementById("title").innerHTML = unescape("Zelfportret");
aI("text=Ol.o.bord;onfunction=closeAllMenus();");
aI("text=25x30,5;onfunction=closeAllMenus();");
aI("text=1998;onfunction=closeAllMenus();");
aI("text=&euro; 550,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("61.jpg")) {
document.getElementById("title").innerHTML = unescape("Zelfportret als monnik");
aI("text=Ol.o.p;onfunction=closeAllMenus();");
aI("text=24x32;onfunction=closeAllMenus();");
aI("text=1996;onfunction=closeAllMenus();");
aI("text=Verkocht;onfunction=closeAllMenus();");
} else 
if (filename == escape("64 a.jpg")) {
document.getElementById("title").innerHTML = unescape("Zelfportret (onverzorgd haar)");
aI("text=Potl.o.p.;onfunction=closeAllMenus();");
aI("text=1xA4;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 200,-;onfunction=closeAllMenus();");
} else	 
if (filename == escape("64 b.jpg")) {
document.getElementById("title").innerHTML = unescape("Zelfportret (onverzorgd haar)");
aI("text=Potl.o.p.;onfunction=closeAllMenus();");
aI("text=1xA4;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 200,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("65.jpg")) {
document.getElementById("title").innerHTML = unescape("Zelfportret (barok)");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=25x29;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 750,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("66.jpg")) {
document.getElementById("title").innerHTML = unescape("Zelfportret (blauw hemd)");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=40x50;onfunction=closeAllMenus();");
aI("text=1988;onfunction=closeAllMenus();");
aI("text=&euro; 900,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("70.jpg")) {
document.getElementById("title").innerHTML = unescape("Zelfportret");
aI("text=Indische inkt o.p.;onfunction=closeAllMenus();");
aI("text=23x17;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 250,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("71 II.jpg")) {
document.getElementById("title").innerHTML = unescape("Zelfportret met sik");
aI("text=Potlood o.p.;onfunction=closeAllMenus();");
aI("text=23x28;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 200,-;onfunction=closeAllMenus();");
} else	
if (filename == escape("71 III.jpg")) {
document.getElementById("title").innerHTML = unescape("Zelfportret met sik");
aI("text=Potlood o.p.;onfunction=closeAllMenus();");
aI("text=23x28;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 200,-;onfunction=closeAllMenus();");
} else
if (filename == escape("71.jpg")) {
document.getElementById("title").innerHTML = unescape("Zelfportret met sik");
aI("text=Potlood o.p.;onfunction=closeAllMenus();");
aI("text=2x23x28;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 200,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("84.jpg")) {
document.getElementById("title").innerHTML = unescape("Zelfportret (aan het schilderen)");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=45x45;onfunction=closeAllMenus();");
aI("text=2001;onfunction=closeAllMenus();");
aI("text=&euro; 1000,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("85 II.jpg")) {
document.getElementById("title").innerHTML = unescape("Zelfportret");
aI("text=Ets;onfunction=closeAllMenus();");
aI("text=16x24;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 200,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("85.jpg")) { 
document.getElementById("title").innerHTML = unescape("Zelfportret");
aI("text=Ets (ingekleurd);onfunction=closeAllMenus();");
aI("text=16x24;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 275,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("96.jpg")) {
document.getElementById("title").innerHTML = unescape("Zelfportret als stier of satan");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=26x33;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 600,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 126.jpg")) {
document.getElementById("title").innerHTML = unescape("Zelfportret");
aI("text=Ol.o.pap.;onfunction=closeAllMenus();");
aI("text=21x29;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 450,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 02 060.jpg")) {
document.getElementById("title").innerHTML = unescape("Derwisch");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=15x20;onfunction=closeAllMenus();");
aI("text=1989;onfunction=closeAllMenus();");
aI("text=&euro; 350,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 128.jpg")) {
document.getElementById("title").innerHTML = unescape("Zelfportret met rode baard");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=38x45;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 800,-;onfunction=closeAllMenus();");
} else
  
//schilderijen 03 darius 136.jpg ->weg

if (filename == escape("schilderijen 03 darius 188.jpg")) {
document.getElementById("title").innerHTML = unescape("Zelfportret (onverzorgd haar)");
aI("text=Potlood.o.p.;onfunction=closeAllMenus();");
aI("text=Envelop 15,5x22;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 200,-;onfunction=closeAllMenus();");
} else
if (filename == escape("schilderijen 03 darius 191.jpg")) {
document.getElementById("title").innerHTML = unescape("Zelfportret");
aI("text=Aq.;onfunction=closeAllMenus();");
aI("text=21x29;onfunction=closeAllMenus();");
aI("text=1996;onfunction=closeAllMenus();");
aI("text=&euro; 245,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("168.jpg")) {
document.getElementById("title").innerHTML = unescape("Zelfportret zittend op stoel");
aI("text=Ol.o.bord;onfunction=closeAllMenus();");
aI("text=26x34;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 900,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 187.jpg")) {
document.getElementById("title").innerHTML = unescape("Kaal zelfportret als oude man");
aI("text=Houtskool o.p.;onfunction=closeAllMenus();");
aI("text=21x29;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 250,-;onfunction=closeAllMenus();");
} else


//Portretten
if (filename == escape("103.jpg")) {
document.getElementById("title").innerHTML = unescape("Portret (Jezus)");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=30x35;onfunction=closeAllMenus();");
aI("text=2001;onfunction=closeAllMenus();");
aI("text=&euro; 800,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("109.jpg")) {
document.getElementById("title").innerHTML = unescape("Russisch meisje");
aI("text=Ol.o.bord;onfunction=closeAllMenus();");
aI("text=22x26;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 500,-;onfunction=closeAllMenus();");
} else   
//if (filename == escape("113.jpg")) {

if (filename == escape("116.jpg")) {
document.getElementById("title").innerHTML = unescape("Intellectueel");
aI("text=Ol.o.bord;onfunction=closeAllMenus();");
aI("text=25x30;onfunction=closeAllMenus();");
aI("text=2001;onfunction=closeAllMenus();");
aI("text=&euro; 800,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("117.jpg")) {
document.getElementById("title").innerHTML = unescape("Vrouw");
aI("text=Ol.o.doek;onfunction=closeAllMenus();");
aI("text=17,5x35,5;onfunction=closeAllMenus();");
aI("text=2000;onfunction=closeAllMenus();");
aI("text=&euro; 600,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("118.jpg")) {
document.getElementById("title").innerHTML = unescape("Geopereerde");
aI("text=Ol.o.doek;onfunction=closeAllMenus();");
aI("text=24x30;onfunction=closeAllMenus();");
aI("text=2000;onfunction=closeAllMenus();");
aI("text=&euro; 550,-;onfunction=closeAllMenus();");
} else   
//if (filename == escape("119.jpg")) {

if (filename == escape("128.jpg")) {
document.getElementById("title").innerHTML = unescape("Jongensportret");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=17,5x20;onfunction=closeAllMenus();");
aI("text=2000;onfunction=closeAllMenus();");
aI("text=&euro; 450,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("132.jpg")) {
document.getElementById("title").innerHTML = unescape("Kaal mannenportret");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=20x35;onfunction=closeAllMenus();");
aI("text=2001;onfunction=closeAllMenus();");
aI("text=&euro; 600,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("134.jpg")) {
document.getElementById("title").innerHTML = unescape("de Man / de Ambtenaar");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=30x35;onfunction=closeAllMenus();");
aI("text=2000;onfunction=closeAllMenus();");
aI("text=&euro; 550,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("135.jpg")) {
document.getElementById("title").innerHTML = unescape("de Iman / de Rabijn");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=30x35;onfunction=closeAllMenus();");
aI("text=2001;onfunction=closeAllMenus();");
aI("text=&euro; 550,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("151.jpg")) {
document.getElementById("title").innerHTML = unescape("Portret (boers portret)");
aI("text=Ol.o.doek;onfunction=closeAllMenus();");
aI("text=30x40;onfunction=closeAllMenus();");
aI("text=2000;onfunction=closeAllMenus();");
aI("text=&euro; 600,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("153.jpg")) {
document.getElementById("title").innerHTML = unescape("Psycho portret");
aI("text=Ol.o. vloerdelen;onfunction=closeAllMenus();");
aI("text=40x40;onfunction=closeAllMenus();");
aI("text=1999;onfunction=closeAllMenus();");
aI("text=&euro; 500,-;onfunction=closeAllMenus();");
} else   
//if (filename == escape("55.jpg")) {

if (filename == escape("156.jpg")) {
document.getElementById("title").innerHTML = unescape("Jongemannenportret met platte neus");
aI("text=Ol.o.lin;onfunction=closeAllMenus();");
aI("text=30x40;onfunction=closeAllMenus();");
aI("text=2001;onfunction=closeAllMenus();");
aI("text=&euro; 700,-;onfunction=closeAllMenus();");
} else   
//if (filename == escape("235 a.jpg")) {
//if (filename == escape("235 b.jpg")) {
//if (filename == escape("235 c.jpg")) {

if (filename == escape("258.jpg")) {
document.getElementById("title").innerHTML = unescape("Casje");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=21x26;onfunction=closeAllMenus();");
aI("text=2001;onfunction=closeAllMenus();");
aI("text=Verkocht;onfunction=closeAllMenus();");
} else   
if (filename == escape("270.jpg")) {
document.getElementById("title").innerHTML = unescape("Jongens portret (puber)");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=26x35;onfunction=closeAllMenus();");
aI("text=1997;onfunction=closeAllMenus();");
aI("text=&euro; 550,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("34.jpg")) {
document.getElementById("title").innerHTML = unescape("Dubbelportret-traanogen");
aI("text=Ol.o.bord;onfunction=closeAllMenus();");
aI("text=Elk 16,5x17,5;onfunction=closeAllMenus();");
aI("text=1998;onfunction=closeAllMenus();");
aI("text=&euro; 650,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("55.jpg")) {
document.getElementById("title").innerHTML = unescape("Meisjesportret met hand naar schouder");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=30x35;onfunction=closeAllMenus();");
aI("text=2000;onfunction=closeAllMenus();");
aI("text=&euro; 650,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("56.jpg")) {
document.getElementById("title").innerHTML = unescape("Vrouw / meisje");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=32x35;onfunction=closeAllMenus();");
aI("text=2000;onfunction=closeAllMenus();");
aI("text=&euro; 600,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("57.jpg")) {
document.getElementById("title").innerHTML = unescape("Oude man met stok (portret)");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=42x30;onfunction=closeAllMenus();");
aI("text=2000;onfunction=closeAllMenus();");
aI("text=&euro; 650,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("58.jpg")) {
document.getElementById("title").innerHTML = unescape("Boerin");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=21x25;onfunction=closeAllMenus();");
aI("text=2000;onfunction=closeAllMenus();");
aI("text=&euro; 500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("59.jpg")) {
document.getElementById("title").innerHTML = unescape("Bruidegom");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=22x26;onfunction=closeAllMenus();");
aI("text=2000;onfunction=closeAllMenus();");
aI("text=&euro; 500,-;onfunction=closeAllMenus();");
} else   
//if (filename == escape("60.jpg")) {

if (filename == escape("62.jpg")) {
document.getElementById("title").innerHTML = unescape("Jongensportret (melancholische ogen)");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=25x34;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 800,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("63.jpg")) {
document.getElementById("title").innerHTML = unescape("Kidnapper");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=25x34;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 800,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("73.jpg")) {
document.getElementById("title").innerHTML = unescape("Portret verwonde jongen");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=21,5x30,5;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 800,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("74.jpg")) {
document.getElementById("title").innerHTML = unescape("Travestiet");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=23x37;onfunction=closeAllMenus();");
aI("text=1997;onfunction=closeAllMenus();");
aI("text=&euro; 650,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("76.jpg")) {
document.getElementById("title").innerHTML = unescape("Portret van oosterling");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=25x32,5;onfunction=closeAllMenus();");
aI("text=1999;onfunction=closeAllMenus();");
aI("text=&euro; 550,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("77.jpg")) {
document.getElementById("title").innerHTML = unescape("Vrouwenportret met hand voor gezicht");
aI("text=Ol.o.p;onfunction=closeAllMenus();");
aI("text=25x32,5;onfunction=closeAllMenus();");
aI("text=1999;onfunction=closeAllMenus();");
aI("text=&euro; 500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("78.jpg")) {
document.getElementById("title").innerHTML = unescape("Portret van schele man");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=25x32,5;onfunction=closeAllMenus();");
aI("text=1999;onfunction=closeAllMenus();");
aI("text=&euro; 600,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("79.jpg")) {
document.getElementById("title").innerHTML = unescape("Meisjesportret met 2 staartjes");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=25x32,5;onfunction=closeAllMenus();");
aI("text=1999;onfunction=closeAllMenus();");
aI("text=&euro; 650,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("80.jpg")) {
document.getElementById("title").innerHTML = unescape("Meisjesportret");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=25x25;onfunction=closeAllMenus();");
aI("text=1999;onfunction=closeAllMenus();");
aI("text=&euro; 450,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("92.jpg")) {
document.getElementById("title").innerHTML = unescape("Passolini jongen");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=30x35;onfunction=closeAllMenus();");
aI("text=2001;onfunction=closeAllMenus();");
aI("text=&euro; 850,-;onfunction=closeAllMenus();");
} else   
//if (filename == escape("schilderijen 01 085.jpg")) {

//if (filename == escape("schilderijen 02 015.jpg")) {

if (filename == escape("schilderijen 02 016.jpg")) {
document.getElementById("title").innerHTML = unescape("Portretten landschap");
aI("text=Ol.o.bord;onfunction=closeAllMenus();");
aI("text=17x21,5;onfunction=closeAllMenus();");
aI("text=1987;onfunction=closeAllMenus();");
aI("text=Verkocht;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 02 037.jpg")) {
document.getElementById("title").innerHTML = unescape("Jongen met scheve hals");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=16x21;onfunction=closeAllMenus();");
aI("text=1999;onfunction=closeAllMenus();");
aI("text=&euro; 400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 02 062.jpg")) {
document.getElementById("title").innerHTML = unescape("de Bokser");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=28x29;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 450,-;onfunction=closeAllMenus();");
} else   
//if (filename == escape("schilderijen 02 071.jpg")) {
if (filename == escape("schilderijen 02 083.jpg")) {
document.getElementById("title").innerHTML = unescape("Meisjesportret met hoofd naar links leunend");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=38x45;onfunction=closeAllMenus();");
aI("text=1990;onfunction=closeAllMenus();");
aI("text=&euro; 700,-;onfunction=closeAllMenus();");
} else


// Intermenselijke relaties / Verhoudingen
if (filename == escape("138.jpg")) {
document.getElementById("title").innerHTML = unescape("Bevruchtingsspel (zwangerschap/spiegelbeeld)");
aI("text=Ol.o.doek;onfunction=closeAllMenus();");
aI("text=45x55;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 900,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("139.jpg")) {
document.getElementById("title").innerHTML = unescape("Spel voor schuine horizon (evenwichtsspel)");
aI("text=Ol.o.doek;onfunction=closeAllMenus();");
aI("text=38,5x45;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 1000,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("141.jpg")) {
document.getElementById("title").innerHTML = unescape("Vrouw met paard in bed / paard als man");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=40x40;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 900,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("142.jpg")) {
document.getElementById("title").innerHTML = unescape("Met rug gekeerd in bed");
aI("text=Ol.o.doek;onfunction=closeAllMenus();");
aI("text=38x37;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 1000,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("190.jpg")) {
document.getElementById("title").innerHTML = unescape("Liefdesspel (wanhoop)");
aI("text=Kleurenpotlood.o.p.;onfunction=closeAllMenus();");
aI("text=13,5x16 (driehoek);onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 300,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("191 B.jpg")) {
document.getElementById("title").innerHTML = unescape("Liefdesspel (de val)");
aI("text=Kleurenpotlood.o.p.;onfunction=closeAllMenus();");
aI("text=13,5x16 (driehoek);onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 300,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("191.jpg")) {
document.getElementById("title").innerHTML = unescape("Liefdesspel (dood)");
aI("text=Kleurenpotlood.o.p.;onfunction=closeAllMenus();");
aI("text=13,5x16 (driehoek);onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 300,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("192.jpg")) {
document.getElementById("title").innerHTML = unescape("Bokje springen I 3 pers.");
aI("text=Kl.potl.pastel.o.p.;onfunction=closeAllMenus();");
aI("text=14x12;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 245,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("193.jpg")) {
document.getElementById("title").innerHTML = unescape("Bokje springen II 2 pers.");
aI("text=Kl.potl.(pastel) o.p.;onfunction=closeAllMenus();");
aI("text=12x10;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 245,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("194.jpg")) {
document.getElementById("title").innerHTML = unescape("Voor het doel");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=18x12;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 300,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("195.jpg")) {
document.getElementById("title").innerHTML = unescape("Liefdesspel");
aI("text=Kl.potl pastel o.p.;onfunction=closeAllMenus();");
aI("text=12x9;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 245,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("196.jpg")) {
document.getElementById("title").innerHTML = unescape("Bokje springen III 2 pers.");
aI("text=Pastel o.p. kl potl.;onfunction=closeAllMenus();");
aI("text=18x11;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 270,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("197.jpg")) {
document.getElementById("title").innerHTML = unescape("Bokje springen IIII 5 pers.");
aI("text=Pastel o.p. kl.potl.;onfunction=closeAllMenus();");
aI("text=17x11;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 270,-;onfunction=closeAllMenus();");
} else   
//204.jpg -> weg

if (filename == escape("206.jpg")) {
document.getElementById("title").innerHTML = unescape("Drie gratiën");
aI("text=Houtskool.o.p.;onfunction=closeAllMenus();");
aI("text=21x29,5;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 250,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("214 b.jpg")) {
document.getElementById("title").innerHTML = unescape("de Nacht");
aI("text=Ets (ingekleurd);onfunction=closeAllMenus();");
aI("text=16x24,5;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 350,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("214.jpg")) {
document.getElementById("title").innerHTML = unescape("de Nacht");
aI("text=Ets;onfunction=closeAllMenus();");
aI("text=16x24,5;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 250,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("216.jpg")) {
document.getElementById("title").innerHTML = unescape("de Nachtmerrie");
aI("text=Ets (ingekleurd);onfunction=closeAllMenus();");
aI("text=19,5x24,5;onfunction=closeAllMenus();");
aI("text=1990;onfunction=closeAllMenus();");
aI("text=&euro; 350,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("234 A.jpg")) {
document.getElementById("title").innerHTML = unescape("Vrouw");
aI("text=Olieverf / Gem.tech.o.p.;onfunction=closeAllMenus();");
aI("text=57x42;onfunction=closeAllMenus();");
aI("text=1989;onfunction=closeAllMenus();");
aI("text=&euro; 900,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("234 B.jpg")) {
document.getElementById("title").innerHTML = unescape("Man");
aI("text=Olieverf / Gem.tech.o.p.;onfunction=closeAllMenus();");
aI("text=42x57;onfunction=closeAllMenus();");
aI("text=1989;onfunction=closeAllMenus();");
aI("text=&euro; 900,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("24.jpg")) {
document.getElementById("title").innerHTML = unescape("Schreeuw (2-luik)");
aI("text=Gem. techniek ol.o.p.;onfunction=closeAllMenus();");
aI("text=2x42x59,5;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 1600,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("26.jpg")) {
document.getElementById("title").innerHTML = unescape("Zondaars / zondigen");
aI("text=Litho / steendruk 4 kleurgangen;onfunction=closeAllMenus();");
aI("text=53x43;onfunction=closeAllMenus();");
aI("text=1996;onfunction=closeAllMenus();");
aI("text=&euro; 600,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("271.jpg")) {
document.getElementById("title").innerHTML = unescape("Naar andere richtingen");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=40x62;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 600,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("28.jpg")) {
document.getElementById("title").innerHTML = unescape("Op de rug dragend (2-luik)");
aI("text=Gem. techniek ol.o.p.;onfunction=closeAllMenus();");
aI("text=2x42x59,5;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 1600,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("283.jpg")) {
document.getElementById("title").innerHTML = unescape("Omhelzende mannen / trots");
aI("text=Aq.;onfunction=closeAllMenus();");
aI("text=50x110;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 1110,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("285.jpg")) {
document.getElementById("title").innerHTML = unescape("Zwevende twee");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=100,5x65;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 1400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("29.jpg")) {
document.getElementById("title").innerHTML = unescape("Zwevenden III (tweeluik)");
aI("text=Gem.tech.;onfunction=closeAllMenus();");
aI("text=40x62;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 1200,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("291.jpg")) {
document.getElementById("title").innerHTML = unescape("Trappen af");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=36x59;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 650,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("3.jpg")) {
document.getElementById("title").innerHTML = unescape("Het evenwicht in de relatie");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=67x37;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 850,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("309.jpg")) {
document.getElementById("title").innerHTML = unescape("Tweelingen / Tweeën");
aI("text=Aq. Kl.potl. acryl o.p.;onfunction=closeAllMenus();");
aI("text=2-luik 2x 75x55;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 1600,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("315.jpg")) {
document.getElementById("title").innerHTML = unescape("Muze / Waternimpf / Marloes");
aI("text=Aq.;onfunction=closeAllMenus();");
aI("text=75x55;onfunction=closeAllMenus();");
aI("text=2001;onfunction=closeAllMenus();");
aI("text=&euro; 1200,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("317 II.jpg")) {
document.getElementById("title").innerHTML = unescape("Melaatse");
aI("text=Ol. Gem.techn.o.p.;onfunction=closeAllMenus();");
aI("text=65x100;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 900,-;onfunction=closeAllMenus();");
} else   
//317.jpg -> weg

if (filename == escape("32.jpg")) {
document.getElementById("title").innerHTML = unescape("De vallenden");
aI("text=Gem.tech.;onfunction=closeAllMenus();");
aI("text=40x62;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 1200,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("323.jpg")) {
document.getElementById("title").innerHTML = unescape("Solidair zijn / steun");
aI("text=Oliekr.tek.;onfunction=closeAllMenus();");
aI("text=65x100;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 800,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 091.jpg")) {
document.getElementById("title").innerHTML = unescape("Droom in bed");
aI("text=Ol.o.doek;onfunction=closeAllMenus();");
aI("text=31x31;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 900,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 044.jpg")) {
document.getElementById("title").innerHTML = unescape("Zwevenden (tweeluik)");
aI("text=Gem.tech.;onfunction=closeAllMenus();");
aI("text=40x62;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 1300,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 060.jpg")) {
document.getElementById("title").innerHTML = unescape("Fantasievrouwen");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=70x100;onfunction=closeAllMenus();");
aI("text=1990;onfunction=closeAllMenus();");
aI("text=&euro; 900,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 065.jpg") ||
filename == escape("schilderijen 01 066.jpg") ||
filename == escape("schilderijen 01 068.jpg") || 
filename == escape("schilderijen 01 070.jpg") ||
filename == escape("schilderijen 01 071.jpg") ||
filename == escape("schilderijen 01 075.jpg") ||
filename == escape("schilderijen 01 078.jpg") ||
filename == escape("schilderijen 01 086.jpg") ||
filename == escape("schilderijen 01 089.jpg") ||
filename == escape("schilderijen 01 111.jpg") ||
filename == escape("schilderijen 01 117.jpg") ||
filename == escape("schilderijen 01 118.jpg") ||
filename == escape("schilderijen 01 120.jpg") ||
filename == escape("schilderijen 01 122.jpg") ||
filename == escape("schilderijen 01 129.jpg") ||
filename == escape("schilderijen 01 130.jpg")) {
document.getElementById("title").innerHTML = unescape("Paradoxale relaties");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=30x21 / 21x30;onfunction=closeAllMenus();");
aI("text=1991 / 1992;onfunction=closeAllMenus();");
aI("text=&euro; 450,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 080.jpg")) {
document.getElementById("title").innerHTML = unescape("Aan ziektebed");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=24,5x35;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 550,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 104.jpg")) {
document.getElementById("title").innerHTML = unescape("Drie gezusters");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=27,5x37,5;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 650,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 115.jpg")) {
document.getElementById("title").innerHTML = unescape("Meisje met hond");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=21x30;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 450,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 127.jpg")) {
document.getElementById("title").innerHTML = unescape("Hond als wachter");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=21x30;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 450,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 128.jpg")) {
document.getElementById("title").innerHTML = unescape("Verlokking");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=21x30;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 450,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 02 066.jpg")) {
document.getElementById("title").innerHTML = unescape("Droom (met paarden)");
aI("text=Ol.o.doek;onfunction=closeAllMenus();");
aI("text=40x50;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 900,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 02 079.jpg")) {
document.getElementById("title").innerHTML = unescape("Bokje springen");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=45x60;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 900,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 02 103.jpg")) {
document.getElementById("title").innerHTML = unescape("Gesprek in het nachtlandschap");
aI("text=Ol.o.bord;onfunction=closeAllMenus();");
aI("text=20,5x26;onfunction=closeAllMenus();");
aI("text=1988;onfunction=closeAllMenus();");
aI("text=&euro; 550,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 063.jpg")) {
document.getElementById("title").innerHTML = unescape("Schepping van Venus");
aI("text=Ets (ingekleurd);onfunction=closeAllMenus();");
aI("text=24,5x29;onfunction=closeAllMenus();");
aI("text=1990;onfunction=closeAllMenus();");
aI("text=&euro; 400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 095.jpg") ||
filename == escape("schilderijen 03 darius 096.jpg") ||
filename == escape("schilderijen 03 darius 103.jpg")) {
document.getElementById("title").innerHTML = unescape("Drie figuren");
aI("text=Pentekening zwarte inkt;onfunction=closeAllMenus();");
aI("text=24x33;onfunction=closeAllMenus();");
aI("text=1989;onfunction=closeAllMenus();");
aI("text=&euro; 275,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 118.jpg")) {
document.getElementById("title").innerHTML = unescape("Groen Café");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=34x25;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=Verkocht;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 125.jpg")) {
document.getElementById("title").innerHTML = unescape("Naamlozen / de etalages (2-luik)");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=elk 56x76;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 1700,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 132.jpg")) {
document.getElementById("title").innerHTML = unescape("Wanhopigen");
aI("text=Ol.o.bord;onfunction=closeAllMenus();");
aI("text=45x60;onfunction=closeAllMenus();");
aI("text=1990;onfunction=closeAllMenus();");
aI("text=&euro; 1110,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 134.jpg")) {
document.getElementById("title").innerHTML = unescape("Melancholische vrouw");
aI("text=Ol.o.doek;onfunction=closeAllMenus();");
aI("text=40x50;onfunction=closeAllMenus();");
aI("text=1989;onfunction=closeAllMenus();");
aI("text=&euro; 900,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 135.jpg")) {
document.getElementById("title").innerHTML = unescape("Verhouding / Twee vrouwen");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=40x50;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 1000,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 137.jpg")) {
document.getElementById("title").innerHTML = unescape("De eerste dagen van het paradijs");
aI("text=Ol.o.bord;onfunction=closeAllMenus();");
aI("text=61x82;onfunction=closeAllMenus();");
aI("text=1988;onfunction=closeAllMenus();");
aI("text=&euro; 5500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 138.jpg")) {
document.getElementById("title").innerHTML = unescape("God");
aI("text=Ol.o.bord;onfunction=closeAllMenus();");
aI("text=61x82;onfunction=closeAllMenus();");
aI("text=1988;onfunction=closeAllMenus();");
aI("text=&euro; 2400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 194.jpg")) {
document.getElementById("title").innerHTML = unescape("De vallenden (tweeluik)");
aI("text=Gem.tech.;onfunction=closeAllMenus();");
aI("text=40x62;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 1200,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 04 en schilderijen amsterdam 018.jpg")) {
document.getElementById("title").innerHTML = unescape("de Liefde / de Mythe / Opportuun");
aI("text=Ol.o.doek;onfunction=closeAllMenus();");
aI("text=95x110;onfunction=closeAllMenus();");
aI("text=1988;onfunction=closeAllMenus();");
aI("text=&euro; 2800,-;onfunction=closeAllMenus();");
} else   
//schilderijen 04 en schilderijen amsterdam 019.jpg -> weg

if (filename == escape("schilderijen 04 en schilderijen amsterdam 051.jpg")) {
document.getElementById("title").innerHTML = unescape("Gezelschap (hond met vrouw in bed)");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=30x21;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 500,-;onfunction=closeAllMenus();");   
} else  


// Studies / Tekeningen
if (filename == escape("01 b.jpg")) {
document.getElementById("title").innerHTML = unescape("de Nachtmerrie");
aI("text=Ets;onfunction=closeAllMenus();");
aI("text=19,5x24,5;onfunction=closeAllMenus();");
aI("text=1990;onfunction=closeAllMenus();");
aI("text=&euro; 250,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("150.jpg")) {
document.getElementById("title").innerHTML = unescape("Compositie met schelpen");
aI("text=Ets;onfunction=closeAllMenus();");
aI("text=19,5x14,5;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 225,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("169.jpg")) {
document.getElementById("title").innerHTML = unescape("Poppetje");
aI("text=Ol.o.bord;onfunction=closeAllMenus();");
aI("text=24,5x30,5;onfunction=closeAllMenus();");
aI("text=1988;onfunction=closeAllMenus();");
aI("text=&euro; 450,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("205.jpg")) {
document.getElementById("title").innerHTML = unescape("Monique");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=75x55;onfunction=closeAllMenus();");
aI("text=1996;onfunction=closeAllMenus();");
aI("text=&euro; 1100,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("224.jpg")) {
document.getElementById("title").innerHTML = unescape("Monique in antiek landschap");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=70x55;onfunction=closeAllMenus();");
aI("text=1996;onfunction=closeAllMenus();");
aI("text=&euro; 1400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("229.jpg")) {
document.getElementById("title").innerHTML = unescape("Collage");
aI("text=Acrylverf o.p.;onfunction=closeAllMenus();");
aI("text=69x97;onfunction=closeAllMenus();");
aI("text=1986;onfunction=closeAllMenus();");
aI("text=Verkocht;onfunction=closeAllMenus();");
} else   
if (filename == escape("230 A.jpg")) {
document.getElementById("title").innerHTML = unescape("Futuristische natuurmoord");
aI("text=Aq. / Gem.tech.;onfunction=closeAllMenus();");
aI("text=66x48;onfunction=closeAllMenus();");
aI("text=1986;onfunction=closeAllMenus();");
aI("text=&euro; 900,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("230 B.jpg")) {
document.getElementById("title").innerHTML = unescape("Futuristische natuurmoord II");
aI("text=Aq. / Gem.tech.;onfunction=closeAllMenus();");
aI("text=66x48;onfunction=closeAllMenus();");
aI("text=1986;onfunction=closeAllMenus();");
aI("text=&euro; 900,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("230 C.jpg")) {
document.getElementById("title").innerHTML = unescape("Dambordcompositie met geel groen zwart");
aI("text=Aq. / Gem.tech.;onfunction=closeAllMenus();");
aI("text=66x48;onfunction=closeAllMenus();");
aI("text=1986;onfunction=closeAllMenus();");
aI("text=&euro; 900,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("231 B.jpg")) {
document.getElementById("title").innerHTML = unescape("Stilleven met schedel van ram");
aI("text=Potl.o.p.;onfunction=closeAllMenus();");
aI("text=51,5x69,5;onfunction=closeAllMenus();");
aI("text=1986;onfunction=closeAllMenus();");
aI("text=&euro; 800,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("231.jpg")) {
document.getElementById("title").innerHTML = unescape("Stilleven met schedel van ram II");
aI("text=Potl.o.p.;onfunction=closeAllMenus();");
aI("text=51,5x69,5;onfunction=closeAllMenus();");
aI("text=1986;onfunction=closeAllMenus();");
aI("text=&euro; 750,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("232 A.jpg")) {
document.getElementById("title").innerHTML = unescape("Stilleven met glazen");
aI("text=Aq. / Gem.tech.;onfunction=closeAllMenus();");
aI("text=66x48;onfunction=closeAllMenus();");
aI("text=1986;onfunction=closeAllMenus();");
aI("text=&euro; 1000,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("232 B.jpg")) {
document.getElementById("title").innerHTML = unescape("Stilleven");
aI("text=Aq.;onfunction=closeAllMenus();");
aI("text=66x48;onfunction=closeAllMenus();");
aI("text=1986;onfunction=closeAllMenus();");
aI("text=&euro; 700,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("232 C.jpg")) {
document.getElementById("title").innerHTML = unescape("Stilleven II");
aI("text=Aq.;onfunction=closeAllMenus();");
aI("text=66x48;onfunction=closeAllMenus();");
aI("text=1986;onfunction=closeAllMenus();");
aI("text=&euro; 700,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("232 D.jpg")) {
document.getElementById("title").innerHTML = unescape("Stilleven III");
aI("text=Aq.;onfunction=closeAllMenus();");
aI("text=66x48;onfunction=closeAllMenus();");
aI("text=1986;onfunction=closeAllMenus();");
aI("text=&euro; 700,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("232 E.jpg")) {
document.getElementById("title").innerHTML = unescape("Stilleven IV");
aI("text=Aq.;onfunction=closeAllMenus();");
aI("text=66x48;onfunction=closeAllMenus();");
aI("text=1986;onfunction=closeAllMenus();");
aI("text=&euro; 700,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("232 F.jpg")) {
document.getElementById("title").innerHTML = unescape("Stilleven V");
aI("text=Aq.;onfunction=closeAllMenus();");
aI("text=66x48;onfunction=closeAllMenus();");
aI("text=1986;onfunction=closeAllMenus();");
aI("text=&euro; 700,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("232 G.jpg")) {
document.getElementById("title").innerHTML = unescape("Stilleven I");
aI("text=Krijt o.p.;onfunction=closeAllMenus();");
aI("text=66x48;onfunction=closeAllMenus();");
aI("text=1986;onfunction=closeAllMenus();");
aI("text=&euro; 550,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("232 H.jpg")) {
document.getElementById("title").innerHTML = unescape("Stilleven II");
aI("text=Krijt o.p.;onfunction=closeAllMenus();");
aI("text=66x48;onfunction=closeAllMenus();");
aI("text=1986;onfunction=closeAllMenus();");
aI("text=&euro; 550,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("232 I.jpg")) {
document.getElementById("title").innerHTML = unescape("Stilleven III");
aI("text=Krijt o.p.;onfunction=closeAllMenus();");
aI("text=66x48;onfunction=closeAllMenus();");
aI("text=1986;onfunction=closeAllMenus();");
aI("text=&euro; 550,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("232 J.jpg")) {
document.getElementById("title").innerHTML = unescape("Stilleven IV");
aI("text=Krijt o.p.;onfunction=closeAllMenus();");
aI("text=66x48;onfunction=closeAllMenus();");
aI("text=1986;onfunction=closeAllMenus();");
aI("text=&euro; 550,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("232.jpg")) { // -> 180 draaien
document.getElementById("title").innerHTML = unescape("Analytisch-kubistisch stilleven");
aI("text=Gem.tech.;onfunction=closeAllMenus();");
aI("text=66x48;onfunction=closeAllMenus();");
aI("text=1986;onfunction=closeAllMenus();");
aI("text=&euro; 1110,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("239.jpg")) {
document.getElementById("title").innerHTML = unescape("Model");
aI("text=Aq.o.p.;onfunction=closeAllMenus();");
aI("text=25x25;onfunction=closeAllMenus();");
aI("text=1985;onfunction=closeAllMenus();");
aI("text=&euro; 350,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("240.jpg")) {
document.getElementById("title").innerHTML = unescape("Model");
aI("text=Aq.o.p.;onfunction=closeAllMenus();");
aI("text=25x25;onfunction=closeAllMenus();");
aI("text=1985;onfunction=closeAllMenus();");
aI("text=&euro; 350,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("242.jpg")) {
document.getElementById("title").innerHTML = unescape("Potloodstudie aubergine/paprika");
aI("text=Potlood .o.p.;onfunction=closeAllMenus();");
aI("text=35x50;onfunction=closeAllMenus();");
aI("text=1984;onfunction=closeAllMenus();");
aI("text=&euro; 450,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("244.jpg")) {
document.getElementById("title").innerHTML = unescape("Man op stoel");
aI("text=Oliekr.o.p.;onfunction=closeAllMenus();");
aI("text=21x29;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 250,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("250.jpg")) {
document.getElementById("title").innerHTML = unescape("Stilleven glas met krant");
aI("text=Aq.;onfunction=closeAllMenus();");
aI("text=51x36;onfunction=closeAllMenus();");
aI("text=1996;onfunction=closeAllMenus();");
aI("text=&euro; 1200,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("251.jpg")) {
document.getElementById("title").innerHTML = unescape("Stilleven versie 2 George Cross");
aI("text=Aq.;onfunction=closeAllMenus();");
aI("text=51x36;onfunction=closeAllMenus();");
aI("text=1996;onfunction=closeAllMenus();");
aI("text=&euro; 1200,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("254.jpg")) { // -> 180 draaien
document.getElementById("title").innerHTML = unescape("Studie met paardenkastanje en bramen");
aI("text=Ind.inkt;onfunction=closeAllMenus();");
aI("text=35x50;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 700,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("256.jpg")) {
document.getElementById("title").innerHTML = unescape("Witte bloem met rode achtergrond");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=37x52;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 600,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("259.jpg")) {
document.getElementById("title").innerHTML = unescape("Meisje met lingerie");
aI("text=Br. / zw. inkt;onfunction=closeAllMenus();");
aI("text=38x50;onfunction=closeAllMenus();");
aI("text=1997;onfunction=closeAllMenus();");
aI("text=&euro; 500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("260 A.jpg")) {
document.getElementById("title").innerHTML = unescape("Dierenstudie");
aI("text=Aq.;onfunction=closeAllMenus();");
aI("text=36,5x51;onfunction=closeAllMenus();");
aI("text=1985;onfunction=closeAllMenus();");
aI("text=&euro; 500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("260B.jpg")) {
document.getElementById("title").innerHTML = unescape("Dierenstudie");
aI("text=Aq.;onfunction=closeAllMenus();");
aI("text=36,5x51;onfunction=closeAllMenus();");
aI("text=1985;onfunction=closeAllMenus();");
aI("text=&euro; 600,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("262 b.jpg")) {
document.getElementById("title").innerHTML = unescape("Model étude");
aI("text=Aq.;onfunction=closeAllMenus();");
aI("text=36x51;onfunction=closeAllMenus();");
aI("text=1986;onfunction=closeAllMenus();");
aI("text=&euro; 550,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("262.jpg")) {
document.getElementById("title").innerHTML = unescape("Model étude II");
aI("text=Aq.;onfunction=closeAllMenus();");
aI("text=36x51;onfunction=closeAllMenus();");
aI("text=1986;onfunction=closeAllMenus();");
aI("text=&euro; 500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("268.jpg")) {
document.getElementById("title").innerHTML = unescape("Afro man met rode achtergrond");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=50,5x65;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 700,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("310.jpg")) {
document.getElementById("title").innerHTML = unescape("Marloes op stoel");
aI("text=Aq.;onfunction=closeAllMenus();");
aI("text=55x75;onfunction=closeAllMenus();");
aI("text=2001;onfunction=closeAllMenus();");
aI("text=&euro; 900,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("316.jpg")) {
document.getElementById("title").innerHTML = unescape("Marloes");
aI("text=Aq.;onfunction=closeAllMenus();");
aI("text=51x65;onfunction=closeAllMenus();");
aI("text=2001;onfunction=closeAllMenus();");
aI("text=&euro; 800,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("318.jpg")) {
document.getElementById("title").innerHTML = unescape("Treurnis");
aI("text=Gem. tech. o.p.;onfunction=closeAllMenus();");
aI("text=65x100;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 750,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("322.jpg")) {
document.getElementById("title").innerHTML = unescape("Studie met bewegende armen");
aI("text=Krijt o.p.;onfunction=closeAllMenus();");
aI("text=65x100;onfunction=closeAllMenus();");
aI("text=1996;onfunction=closeAllMenus();");
aI("text=&euro; 750,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("40.jpg")) {
document.getElementById("title").innerHTML = unescape("Dode merel");
aI("text=Aq.;onfunction=closeAllMenus();");
aI("text=29x21;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 450,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("81.jpg")) {
document.getElementById("title").innerHTML = unescape("Vrouw met rood haar");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=33x26;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("82.jpg")) {
document.getElementById("title").innerHTML = unescape("Vrouw met linkerarm op heup");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=33x26;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=Verkocht;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 006.jpg")) {
document.getElementById("title").innerHTML = unescape("Hond in de wind");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=21x29,5;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 087.jpg")) {
document.getElementById("title").innerHTML = unescape("Vechtende stieren");
aI("text=Ol.o.doek;onfunction=closeAllMenus();");
aI("text=30x44;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 089.jpg")) {
document.getElementById("title").innerHTML = unescape("Man&stier");
aI("text=Ol.o.doek;onfunction=closeAllMenus();");
aI("text=50x65;onfunction=closeAllMenus();");
aI("text=1989;onfunction=closeAllMenus();");
aI("text=&euro; 900,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 104.jpg")) {
document.getElementById("title").innerHTML = unescape("Honden en buit");
aI("text=Ol.o.doek;onfunction=closeAllMenus();");
aI("text=40x50;onfunction=closeAllMenus();");
aI("text=1988;onfunction=closeAllMenus();");
aI("text=&euro; 700,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 105.jpg")) {
document.getElementById("title").innerHTML = unescape("Vrouw met stier");
aI("text=Ol.o.doek;onfunction=closeAllMenus();");
aI("text=40x50;onfunction=closeAllMenus();");
aI("text=1988;onfunction=closeAllMenus();");
aI("text=&euro; 900,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 026.jpg")) {
document.getElementById("title").innerHTML = unescape("Gauguinesque vrouw");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=42x60;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 800,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 036.jpg")) {
document.getElementById("title").innerHTML = unescape("Slapende vrouw met mozaïkdekbed");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=76,5x56;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 1100,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 037.jpg")) {
document.getElementById("title").innerHTML = unescape("Liggende vrouw met appel");
aI("text=Acryl o.p.;onfunction=closeAllMenus();");
aI("text=55x85;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 800,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 038.jpg")) {
document.getElementById("title").innerHTML = unescape("Liggende vrouw met rood kapje");
aI("text=Acryl o.p.;onfunction=closeAllMenus();");
aI("text=55x85;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 850,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 062.jpg")) { // -> 90 naar rechts
document.getElementById("title").innerHTML = unescape("Aalscholverkopstudie");
aI("text=Gouache;onfunction=closeAllMenus();");
aI("text=35x50;onfunction=closeAllMenus();");
aI("text=1985;onfunction=closeAllMenus();");
aI("text=Verkocht;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 063.jpg")) {
document.getElementById("title").innerHTML = unescape("Meisje in bed boek lezend");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=30x21;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 069.jpg")) {
document.getElementById("title").innerHTML = unescape("Liggende Afro-dite");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=34x25;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 072.jpg")) {
document.getElementById("title").innerHTML = unescape("Drinkend wachtend");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=34x25;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 550,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 073.jpg")) {
document.getElementById("title").innerHTML = unescape("Model kijkend naar links");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=34x25;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 550,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 074.jpg")) {
document.getElementById("title").innerHTML = unescape("Hond zich verschonend");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=21x29,5;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 076.jpg")) {
document.getElementById("title").innerHTML = unescape("Schaduwen");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=34x25;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 600,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 079.jpg")) {
document.getElementById("title").innerHTML = unescape("In bed voor 't raam");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=34x25;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 084.jpg")) {
document.getElementById("title").innerHTML = unescape("Zittend op kruk");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=31x24;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 090.jpg")) {
document.getElementById("title").innerHTML = unescape("Masturberende");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=35x26;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 450,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 091.jpg")) {
document.getElementById("title").innerHTML = unescape("Vrouw starend naar buiten naar Postweg");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=35x26;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 550,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 092.jpg")) {
document.getElementById("title").innerHTML = unescape("Oude man (rood)");
aI("text=Aq.;onfunction=closeAllMenus();");
aI("text=13x24;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 225,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 093.jpg")) {
document.getElementById("title").innerHTML = unescape("Negroide schoonheid");
aI("text=Aq.;onfunction=closeAllMenus();");
aI("text=21x29;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 300,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 095.jpg")) {
document.getElementById("title").innerHTML = unescape("Blondine");
aI("text=Aq.;onfunction=closeAllMenus();");
aI("text=21x30;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 300,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 098.jpg")) {
document.getElementById("title").innerHTML = unescape("Model armen op hoofd");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=21,5x30,5;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 099.jpg")) {
document.getElementById("title").innerHTML = unescape("Ongestelde");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=21,5x30,5;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 100.jpg")) {
document.getElementById("title").innerHTML = unescape("Monumentaal model");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=32x40;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 550,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 102.jpg")) {
document.getElementById("title").innerHTML = unescape("Model op stoel");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=34x25;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 550,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 107.jpg")) {
document.getElementById("title").innerHTML = unescape("Theo naast Vincents bed");
aI("text=Bruine inkt o.p.;onfunction=closeAllMenus();");
aI("text=30x22;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 250,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 113.jpg")) {
document.getElementById("title").innerHTML = unescape("Liggend zwanger");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=30x21;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 275,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 114.jpg")) {
document.getElementById("title").innerHTML = unescape("Vrouw in angst en twijfel");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=32x40;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 550,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 119.jpg")) {
document.getElementById("title").innerHTML = unescape("Hond in sneeuw");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=30x21;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 450,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 123.jpg")) {
document.getElementById("title").innerHTML = unescape("Twee honden");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=30x21;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 350,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 124.jpg")) {
document.getElementById("title").innerHTML = unescape("Model met rood haar");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=21,5x30,5;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 300,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 02 043.jpg")) {
document.getElementById("title").innerHTML = unescape("Roodharig model");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=54x64;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 650,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 02 065.jpg")) {
document.getElementById("title").innerHTML = unescape("Dode merel");
aI("text=Ol.o.doek;onfunction=closeAllMenus();");
aI("text=40,5x31;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 1400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 02 066.jpg")) {
document.getElementById("title").innerHTML = unescape("Droom (met paarden)");
aI("text=Ol.o.doek;onfunction=closeAllMenus();");
aI("text=40x50;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 900,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 02 070.jpg")) {
document.getElementById("title").innerHTML = unescape("Zwanger in landschap");
aI("text=Ol.o.doek;onfunction=closeAllMenus();");
aI("text=40x50;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 900,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 02 077.jpg")) {
document.getElementById("title").innerHTML = unescape("Pubermodel");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=40x50;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 900,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 02 078.jpg")) {
document.getElementById("title").innerHTML = unescape("Melancholisch landschap met paardenstandbeeld");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=50x40;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 1800,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 02 098.jpg")) {
document.getElementById("title").innerHTML = unescape("Vrouw met paarsdonkere achtergrond");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=32x24;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 900,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 02 120.jpg")) {
document.getElementById("title").innerHTML = unescape("Zonnende");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=34x25;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 450,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 02 124.jpg")) {
document.getElementById("title").innerHTML = unescape("Liggende eenzame");
aI("text=Potl.o.p.;onfunction=closeAllMenus();");
aI("text=14x20;onfunction=closeAllMenus();");
aI("text=1989;onfunction=closeAllMenus();");
aI("text=&euro; 200,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 02 130.jpg")) {
document.getElementById("title").innerHTML = unescape("Model in perspectief");
aI("text=Potl.o.p.;onfunction=closeAllMenus();");
aI("text=14x20;onfunction=closeAllMenus();");
aI("text=1989;onfunction=closeAllMenus();");
aI("text=&euro; 200,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 02 134.jpg")) {
document.getElementById("title").innerHTML = unescape("Sorrow");
aI("text=Bruin kr.o.p.;onfunction=closeAllMenus();");
aI("text=29x21;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 250,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 02 135.jpg")) {
document.getElementById("title").innerHTML = unescape("In elkaar gezakte");
aI("text=Aq.;onfunction=closeAllMenus();");
aI("text=24x18;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 250,-;onfunction=closeAllMenus();");
} else   
//schilderijen 02 169.jpg -> weg

if (filename == escape("schilderijen 03 darius 005.jpg")) {
document.getElementById("title").innerHTML = unescape("Modelstudie van achter gezien");
aI("text=Potl.o.p.;onfunction=closeAllMenus();");
aI("text=50x70;onfunction=closeAllMenus();");
aI("text=1987;onfunction=closeAllMenus();");
aI("text=&euro; 400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 006.jpg")) {
document.getElementById("title").innerHTML = unescape("Modelstudie");
aI("text=Potl.o.p.;onfunction=closeAllMenus();");
aI("text=50x70;onfunction=closeAllMenus();");
aI("text=1987;onfunction=closeAllMenus();");
aI("text=&euro; 400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 014.jpg")) {
document.getElementById("title").innerHTML = unescape("Model étude");
aI("text=Donkerblauwe inkt;onfunction=closeAllMenus();");
aI("text=70x50;onfunction=closeAllMenus();");
aI("text=1987;onfunction=closeAllMenus();");
aI("text=&euro; 400,-;onfunction=closeAllMenus();");
} else   
//schilderijen 03 darius 019.jpg -> weg

if (filename == escape("schilderijen 03 darius 020.jpg")) {
document.getElementById("title").innerHTML = unescape("Vrouwelijk torsostudie");
aI("text=Potl.o.p.;onfunction=closeAllMenus();");
aI("text=50x70;onfunction=closeAllMenus();");
aI("text=1987;onfunction=closeAllMenus();");
aI("text=&euro; 400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 022.jpg")) {
document.getElementById("title").innerHTML = unescape("Vrouwelijk naakt");
aI("text=Oliekrijt o.p.;onfunction=closeAllMenus();");
aI("text=50x70;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 023.jpg")) {
document.getElementById("title").innerHTML = unescape("Vrouwelijk naakt II");
aI("text=Oliekrijt o.p.;onfunction=closeAllMenus();");
aI("text=50x70;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 024.jpg")) {
document.getElementById("title").innerHTML = unescape("Anna");
aI("text=Oliekrijt o.p.;onfunction=closeAllMenus();");
aI("text=50x70;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 025.jpg")) {
document.getElementById("title").innerHTML = unescape("Mollig model");
aI("text=Oliekrijt o.p.;onfunction=closeAllMenus();");
aI("text=50x70;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 450,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 026.jpg")) {
document.getElementById("title").innerHTML = unescape("Zwanger modelstudie");
aI("text=Oliekrijt o.p.;onfunction=closeAllMenus();");
aI("text=50x70;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 028.jpg")) {
document.getElementById("title").innerHTML = unescape("Liggende veteraan");
aI("text=Potl.o.p.;onfunction=closeAllMenus();");
aI("text=70x50;onfunction=closeAllMenus();");
aI("text=1987;onfunction=closeAllMenus();");
aI("text=&euro; 400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 042.jpg")) {
document.getElementById("title").innerHTML = unescape("Compositie met verftubes");
aI("text=Ol.o.bord;onfunction=closeAllMenus();");
aI("text=40x50;onfunction=closeAllMenus();");
aI("text=1988;onfunction=closeAllMenus();");
aI("text=&euro; 650,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 046.jpg")) {
document.getElementById("title").innerHTML = unescape("Aan het strand liggende");
aI("text=Oliepastel o.plastic;onfunction=closeAllMenus();");
aI("text=29x21;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 350,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 048.jpg")) {
document.getElementById("title").innerHTML = unescape("Roze man (van voren gezien)");
aI("text=Oliekrijt tek.o.p.;onfunction=closeAllMenus();");
aI("text=18,5x28;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=Verkocht;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 049.jpg")) {
document.getElementById("title").innerHTML = unescape("Roze man (van achter gezien)");
aI("text=Oliekrijt tek.o.p.;onfunction=closeAllMenus();");
aI("text=18,5x28;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 300,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 051.jpg")) {
document.getElementById("title").innerHTML = unescape("Collage / compositie");
aI("text=Gem. tech.;onfunction=closeAllMenus();");
aI("text=32x32;onfunction=closeAllMenus();");
aI("text=1985;onfunction=closeAllMenus();");
aI("text=Verkocht;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 057.jpg")) {
document.getElementById("title").innerHTML = unescape("Compositie met schelpen");
aI("text=Ets (ingekleurd);onfunction=closeAllMenus();");
aI("text=19,5x14,5;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 300,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 088.jpg")) {
document.getElementById("title").innerHTML = unescape("Liggende vrouw met armen naar achter steunend");
aI("text=Bruine oliepastel;onfunction=closeAllMenus();");
aI("text=28,5x20,5;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 300,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 090.jpg")) {
document.getElementById("title").innerHTML = unescape("Anthonius");
aI("text=Oliepastel o.p.;onfunction=closeAllMenus();");
aI("text=28,5x20,5;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 300,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 091.jpg")) {
document.getElementById("title").innerHTML = unescape("Vrouw liggend, van achter gezien");
aI("text=Bruine oliepastel;onfunction=closeAllMenus();");
aI("text=28,5x20,5;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 300,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 092.jpg")) {
document.getElementById("title").innerHTML = unescape("Klassiek mannelijk model");
aI("text=Bruine oliepastel;onfunction=closeAllMenus();");
aI("text=28,5x20,5;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 300,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 094.jpg")) {
document.getElementById("title").innerHTML = unescape("Naamloos (vrouw)");
aI("text=Potl.o.p.;onfunction=closeAllMenus();");
aI("text=21x29;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 250,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 097.jpg")) {
document.getElementById("title").innerHTML = unescape("Man met geamputeerd been");
aI("text=Potlood.o.p.;onfunction=closeAllMenus();");
aI("text=21x29;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 225,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 099.jpg")) { // -> 90 grad. naar rechts
document.getElementById("title").innerHTML = unescape("Naamloos (man)");
aI("text=Potl.o.p.;onfunction=closeAllMenus();");
aI("text=21x29;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 250,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 100.jpg")) {
document.getElementById("title").innerHTML = unescape("Shaman");
aI("text=Potl.o.p.;onfunction=closeAllMenus();");
aI("text=18x14;onfunction=closeAllMenus();");
aI("text=1989;onfunction=closeAllMenus();");
aI("text=&euro; 200,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 101.jpg")) {
document.getElementById("title").innerHTML = unescape("Modeltekening");
aI("text=Zwarte inkt;onfunction=closeAllMenus();");
aI("text=16x24;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 250,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 102.jpg")) {
document.getElementById("title").innerHTML = unescape("Dubbelportret");
aI("text=Oliekrijt o.p.;onfunction=closeAllMenus();");
aI("text=31x21,5;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 275,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 104.jpg")) {
document.getElementById("title").innerHTML = unescape("Zelfbeeld als gevangene");
aI("text=Oliekrijt o.p.;onfunction=closeAllMenus();");
aI("text=21x29;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 250,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 105.jpg")) {
document.getElementById("title").innerHTML = unescape("Model");
aI("text=Pastel o. zwart plastic;onfunction=closeAllMenus();");
aI("text=21x29;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 300,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 107.jpg")) {
document.getElementById("title").innerHTML = unescape("Model in studio");
aI("text=Potlood .o.p.;onfunction=closeAllMenus();");
aI("text=27x36;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 250,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 109.jpg")) {
document.getElementById("title").innerHTML = unescape("Klassiek model met armen naar rechts wijzend");
aI("text=Potlood.o.p.;onfunction=closeAllMenus();");
aI("text=20x15;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 275,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 110.jpg")) {
document.getElementById("title").innerHTML = unescape("Minotaurus");
aI("text=Oliekrijt o.p.;onfunction=closeAllMenus();");
aI("text=21x30;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 275,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 111.jpg")) {
document.getElementById("title").innerHTML = unescape("Zittende man");
aI("text=Oliekrijt o.p.;onfunction=closeAllMenus();");
aI("text=34x26;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 250,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 112.jpg")) {
document.getElementById("title").innerHTML = unescape("Verschonen");
aI("text=Oliekrijt o.p.;onfunction=closeAllMenus();");
aI("text=21x29;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 250,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 113.jpg")) {
document.getElementById("title").innerHTML = unescape("Staande man");
aI("text=Eigen bloed.o.p.;onfunction=closeAllMenus();");
aI("text=23,5x32,5;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 250,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 114.jpg")) { // -> 90 naar rechts
document.getElementById("title").innerHTML = unescape("Model / vrouw");
aI("text=Eigen bloed.o.p.;onfunction=closeAllMenus();");
aI("text=21x29;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 250,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 116.jpg")) {
document.getElementById("title").innerHTML = unescape("Stilleven met krant, glazen en boomwortels");
aI("text=Aq.;onfunction=closeAllMenus();");
aI("text=34x25;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 117.jpg")) {
document.getElementById("title").innerHTML = unescape("Zwanger model (met blauwe achtergrond)");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=21x30,5;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 175.jpg")) {
document.getElementById("title").innerHTML = unescape("Schaamte");
aI("text=Oliekrijt o.p.;onfunction=closeAllMenus();");
aI("text=21x29;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 250,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 176.jpg")) { // -> 180 draaien
document.getElementById("title").innerHTML = unescape("Wanhoop-gevallen");
aI("text=Oliekr.o.p.;onfunction=closeAllMenus();");
aI("text=29x21;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 225,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 177.jpg")) {
document.getElementById("title").innerHTML = unescape("Naar de verte starende");
aI("text=Oliekr.o.p.;onfunction=closeAllMenus();");
aI("text=29x21;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 225,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 181.jpg")) {
document.getElementById("title").innerHTML = unescape("Hülya");
aI("text=Aq.;onfunction=closeAllMenus();");
aI("text=18x30;onfunction=closeAllMenus();");
aI("text=1985;onfunction=closeAllMenus();");
aI("text=&euro; 350,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 182.jpg")) {
document.getElementById("title").innerHTML = unescape("Feith");
aI("text=Aq.;onfunction=closeAllMenus();");
aI("text=18x30;onfunction=closeAllMenus();");
aI("text=1985;onfunction=closeAllMenus();");
aI("text=&euro; 325,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 183.jpg")) {
document.getElementById("title").innerHTML = unescape("&Ouml;zden");
aI("text=Aq.;onfunction=closeAllMenus();");
aI("text=30x30;onfunction=closeAllMenus();");
aI("text=1985;onfunction=closeAllMenus();");
aI("text=&euro; 325,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 184.jpg")) {
document.getElementById("title").innerHTML = unescape("Model met een been op stoel");
aI("text=Aq.;onfunction=closeAllMenus();");
aI("text=25x35;onfunction=closeAllMenus();");
aI("text=1985;onfunction=closeAllMenus();");
aI("text=&euro; 275,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 04 en schilderijen amsterdam 001.jpg")) {
document.getElementById("title").innerHTML = unescape("2x2=5 / Studie naar Leonardo");
aI("text=Olieverf o.bord en doek;onfunction=closeAllMenus();");
aI("text=80x80;onfunction=closeAllMenus();");
aI("text=1988;onfunction=closeAllMenus();");
aI("text=&euro; 1200,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 04 en schilderijen amsterdam 005.jpg")) {
document.getElementById("title").innerHTML = unescape("Laatste avondmaal / verfmaal");
aI("text=Olie o.bord;onfunction=closeAllMenus();");
aI("text=65x80;onfunction=closeAllMenus();");
aI("text=1988;onfunction=closeAllMenus();");
aI("text=&euro; 1600,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 04 en schilderijen amsterdam 006.jpg")) {
document.getElementById("title").innerHTML = unescape("Bevruchte koningin");
aI("text=Olie o.bord;onfunction=closeAllMenus();");
aI("text=65x80;onfunction=closeAllMenus();");
aI("text=1988;onfunction=closeAllMenus();");
aI("text=&euro; 1600,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 04 en schilderijen amsterdam 015.jpg")) {
document.getElementById("title").innerHTML = unescape("Stilleven met ramskop");
aI("text=Ol.o.doek;onfunction=closeAllMenus();");
aI("text=50x70;onfunction=closeAllMenus();");
aI("text=1987;onfunction=closeAllMenus();");
aI("text=&euro; 1200,-;onfunction=closeAllMenus();");
} else   


// Wachtenden / Naamlozen
if (filename == escape("1.jpg")) {
document.getElementById("title").innerHTML = unescape("Een-zaam-heid");
aI("text=Oliepastel o.bord;onfunction=closeAllMenus();");
aI("text=72x90;onfunction=closeAllMenus();");
aI("text=1990;onfunction=closeAllMenus();");
aI("text=&euro; 1800,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("111.jpg")) {
document.getElementById("title").innerHTML = unescape("Serie van wachtenden (vrouwen)");
aI("text=Ol.o.bord;onfunction=closeAllMenus();");
aI("text=29x22;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 1100,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("112.jpg")) {
document.getElementById("title").innerHTML = unescape("Wachtenden in de rij (vijf figuren)");
aI("text=Olie o.p.;onfunction=closeAllMenus();");
aI("text=25x25,5;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 900,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("14.jpg")) {
document.getElementById("title").innerHTML = unescape("Etalage (tweeluik)");
aI("text=Gem. tech. o.p.;onfunction=closeAllMenus();");
aI("text=14x22 / 22x14;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 550,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("160 a.jpg")) {
document.getElementById("title").innerHTML = unescape("Wachtenden (vijf mannen)");
aI("text=Ol.o.bord;onfunction=closeAllMenus();");
aI("text=82x61;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 1600,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("160 b.jpg")) {
document.getElementById("title").innerHTML = unescape("Wachtenden (zes mannen)");
aI("text=Ol.o.bord;onfunction=closeAllMenus();");
aI("text=82x61;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 1600,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("160 c.jpg")) {
document.getElementById("title").innerHTML = unescape("Wachtenden (zeven mannen)");
aI("text=Ol.o.bord;onfunction=closeAllMenus();");
aI("text=82x61;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 1700,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("18.jpg")) {
document.getElementById("title").innerHTML = unescape("Wachtenden");
aI("text=Acryl/aquarel op papier;onfunction=closeAllMenus();");
aI("text=55,5x76;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 1200,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("184.jpg")) {
document.getElementById("title").innerHTML = unescape("Serie Wachtenden visite/gesprek");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=30,5x43,5;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 900,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("220.jpg")) {
document.getElementById("title").innerHTML = unescape("Serie van Wachtenden");
aI("text=Ets (ingekleurd);onfunction=closeAllMenus();");
aI("text=19,5x29;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 350,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("264.jpg")) {
document.getElementById("title").innerHTML = unescape("Serie van Wachtenden (vijf mannen)");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=37,5x26,5;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 950,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("294.jpg")) {
document.getElementById("title").innerHTML = unescape("Serie Wachtenden (rondom cirkel)");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=75x55;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 1250,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("31.jpg")) {
document.getElementById("title").innerHTML = unescape("Torso’s  Naamlozen-etalage");
aI("text=Gem.techniek/ol.o.p;onfunction=closeAllMenus();");
aI("text=2-luik 42x59,5;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 1350,-;onfunction=closeAllMenus();");
} else   
//315.jpg -> weg

if (filename == escape("schilderijen 01 009.jpg")) {
document.getElementById("title").innerHTML = unescape("Wachtenden VII (vijf mannen en een vrouw)");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=150x110;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 4800,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 010.jpg")) {
document.getElementById("title").innerHTML = unescape("Wachtenden (met zelfbeeld)");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=150x110;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 4800,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 034.jpg")) { // -> naar Landschappen
document.getElementById("title").innerHTML = unescape("Vadus Mittagsspitze");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=50x65;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 1100,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 081.jpg")) {
document.getElementById("title").innerHTML = unescape("Serie Wachtenden (rondom cirkel)");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=32x21;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 450,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 082.jpg")) {
document.getElementById("title").innerHTML = unescape("Wachtenden zwangeren");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=32x21;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 450,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 094.jpg")) {
document.getElementById("title").innerHTML = unescape("Sterke kerel");
aI("text=Aq.o.p.;onfunction=closeAllMenus();");
aI("text=22x30;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 350,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 097.jpg")) {
document.getElementById("title").innerHTML = unescape("Versieren");
aI("text=Potlood / Aq. o.p.;onfunction=closeAllMenus();");
aI("text=22x30;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 350,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 02 059.jpg")) {
document.getElementById("title").innerHTML = unescape("Troostend gesprek");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=76x56;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 1200,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 02 091.jpg")) {
document.getElementById("title").innerHTML = unescape("Wachtenden (vijf mannen)");
aI("text=Ol.o.bord;onfunction=closeAllMenus();");
aI("text=31x31;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 1050,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 02 116.jpg")) { // -> Studies
document.getElementById("title").innerHTML = unescape("Olympia in drie gedaantes");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=28x42;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 650,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 02 118.jpg")) {
document.getElementById("title").innerHTML = unescape("Wachtenden (vijf mannen)");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=37,5x26,5;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 950,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 02 156.jpg")) {
document.getElementById("title").innerHTML = unescape("Wachtenden (zeven mannen)");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=37,5x26,5;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 950,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 055.jpg")) {
document.getElementById("title").innerHTML = unescape("Solidariteit");
aI("text=Ets op loodplaat;onfunction=closeAllMenus();");
aI("text=30x39;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 325,-;onfunction=closeAllMenus();");
} else   
//schilderijen 03 darius 087.jpg -> weg

if (filename == escape("schilderijen 03 darius 093.jpg")) {
document.getElementById("title").innerHTML = unescape("Parade");
aI("text=Oliepastel o.p.;onfunction=closeAllMenus();");
aI("text=25x34,5;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 425,-;onfunction=closeAllMenus();");
} else   
//schilderijen 04 en schilderijen amsterdam 045.jpg -> weg

if (filename == escape("schilderijen 04 en schilderijen amsterdam 046.jpg")) {
document.getElementById("title").innerHTML = unescape("De grote étalage");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=200x160;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 6500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 04 en schilderijen amsterdam 047.jpg")) {
document.getElementById("title").innerHTML = unescape("Drie gratiën");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=32x41;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 950,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 04 en schilderijen amsterdam 048.jpg")) {
document.getElementById("title").innerHTML = unescape("Wachtenden in de rij (vier figuren)");
aI("text=Olie o.p.;onfunction=closeAllMenus();");
aI("text=25x25,5;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 600,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 04 en schilderijen amsterdam 049.jpg")) {
document.getElementById("title").innerHTML = unescape("Wachtenden in de rij (vijf figuren)");
aI("text=Olie o.p.;onfunction=closeAllMenus();");
aI("text=25x25,5;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 650,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 04 en schilderijen amsterdam 052.jpg")) {
document.getElementById("title").innerHTML = unescape("Wachtenden in binnenplaats");
aI("text=Olie o.p.;onfunction=closeAllMenus();");
aI("text=25x25,5;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 600,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 04 en schilderijen amsterdam 053.jpg")) {
document.getElementById("title").innerHTML = unescape("Wachtenden / XN");
aI("text=Potlood / Aq. o.p.;onfunction=closeAllMenus();");
aI("text=22x30;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 350,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 04 en schilderijen amsterdam 054.jpg")) {
document.getElementById("title").innerHTML = unescape("Versiering");
aI("text=Aq.;onfunction=closeAllMenus();");
aI("text=21x30;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 350,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 04 en schilderijen amsterdam 056.jpg")) {
document.getElementById("title").innerHTML = unescape("Vier kleurige figuren op een rij");
aI("text=Aq.;onfunction=closeAllMenus();");
aI("text=21x30;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 350,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 04 en schilderijen amsterdam 059.jpg")) {
document.getElementById("title").innerHTML = unescape("Wachtenden in binnenplaats (zeven figuren)");
aI("text=Olie o.p.;onfunction=closeAllMenus();");
aI("text=32x41;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 800,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 04 en schilderijen amsterdam 061.jpg")) {
document.getElementById("title").innerHTML = unescape("Parade / drie knapen");
aI("text=Aq. / zwarte inkt;onfunction=closeAllMenus();");
aI("text=22x30;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 350,-;onfunction=closeAllMenus();");
} else  


 

// Individuen
if (filename == escape("101.jpg")) {
document.getElementById("title").innerHTML = unescape("Playboy-boy");
aI("text=Ol.o.bord;onfunction=closeAllMenus();");
aI("text=20x26;onfunction=closeAllMenus();");
aI("text=1988;onfunction=closeAllMenus();");
aI("text=&euro; 550,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("121.jpg")) {
document.getElementById("title").innerHTML = unescape("Werkend meisje");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=22x30;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 650,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("123.jpg")) {
document.getElementById("title").innerHTML = unescape("Wanhoop");
aI("text=Ol.o.bord;onfunction=closeAllMenus();");
aI("text=14,5x15,5;onfunction=closeAllMenus();");
aI("text=1989;onfunction=closeAllMenus();");
aI("text=Verkocht;onfunction=closeAllMenus();");
} else   
if (filename == escape("124.jpg")) {
document.getElementById("title").innerHTML = unescape("Torso");
aI("text=Ol.o.bord;onfunction=closeAllMenus();");
aI("text=22x19;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("125.jpg")) {
document.getElementById("title").innerHTML = unescape("Man in embryohouding");
aI("text=Ol.o.bord;onfunction=closeAllMenus();");
aI("text=22x19;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 550,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("126.jpg")) {
document.getElementById("title").innerHTML = unescape("Heilige Moeder&Zoon");
aI("text=Ol.o.bord;onfunction=closeAllMenus();");
aI("text=19,5x22,5;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 550,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("137.jpg")) {
document.getElementById("title").innerHTML = unescape("Portret (Solzjenitsyn)");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=45x55;onfunction=closeAllMenus();");
aI("text=1996;onfunction=closeAllMenus();");
aI("text=&euro; 850,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("146.jpg")) {
document.getElementById("title").innerHTML = unescape("Slaapwandelaar");
aI("text=Ol.o.doek;onfunction=closeAllMenus();");
aI("text=40x50;onfunction=closeAllMenus();");
aI("text=1990;onfunction=closeAllMenus();");
aI("text=&euro; 850,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("148 A.jpg")) {
document.getElementById("title").innerHTML = unescape("De Val");
aI("text=Ets;onfunction=closeAllMenus();");
aI("text=24,5x16;onfunction=closeAllMenus();");
aI("text=1990;onfunction=closeAllMenus();");
aI("text=&euro; 225,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("148 B.jpg")) {
document.getElementById("title").innerHTML = unescape("De Val");
aI("text=Ets (ingekleurd);onfunction=closeAllMenus();");
aI("text=24,5x16;onfunction=closeAllMenus();");
aI("text=1990;onfunction=closeAllMenus();");
aI("text=&euro; 300,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("157.jpg")) {
document.getElementById("title").innerHTML = unescape("Man schilderij ophangend");
aI("text=Ol.o.bord;onfunction=closeAllMenus();");
aI("text=70x85;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 1100,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("159.jpg")) {
document.getElementById("title").innerHTML = unescape("Stad&Vrouw");
aI("text=Ol.o.bord;onfunction=closeAllMenus();");
aI("text=61x76;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 2400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("171.jpg")) {
document.getElementById("title").innerHTML = unescape("Liggende eenzame");
aI("text=Ol.o.bord;onfunction=closeAllMenus();");
aI("text=20,5x26,5;onfunction=closeAllMenus();");
aI("text=1989;onfunction=closeAllMenus();");
aI("text=Verkocht;onfunction=closeAllMenus();");
} else   
if (filename == escape("174.jpg")) {
document.getElementById("title").innerHTML = unescape("Meisje met dubbelportret");
aI("text=Ol.o.bord;onfunction=closeAllMenus();");
aI("text=30x39;onfunction=closeAllMenus();");
aI("text=1989;onfunction=closeAllMenus();");
aI("text=&euro; 950,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("19.jpg")) {
document.getElementById("title").innerHTML = unescape("Liggende man");
aI("text=Acryl o.p.;onfunction=closeAllMenus();");
aI("text=60x73,5;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 1050,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("202.jpg")) {
document.getElementById("title").innerHTML = unescape("Schreeuw");
aI("text=Pastel/kl.potl.o.p.;onfunction=closeAllMenus();");
aI("text=13x9;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 225,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("237.jpg")) {
document.getElementById("title").innerHTML = unescape("Meisje in het water");
aI("text=Bruin/zwarte inkt tek.;onfunction=closeAllMenus();");
aI("text=37x55;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("241.jpg")) {
document.getElementById("title").innerHTML = unescape("Gebogen vrouw");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=45x56;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 650,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("246.jpg")) {
document.getElementById("title").innerHTML = unescape("Pasgeborene");
aI("text=Acryl o.p.;onfunction=closeAllMenus();");
aI("text=36,5x49,5;onfunction=closeAllMenus();");
aI("text=1996;onfunction=closeAllMenus();");
aI("text=&euro; 375,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("248.jpg")) {
document.getElementById("title").innerHTML = unescape("Angstig gehurkte man op stoel");
aI("text=Acryl o.p.;onfunction=closeAllMenus();");
aI("text=36,5x49,5;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 550,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("249.jpg")) {
document.getElementById("title").innerHTML = unescape("Kruipende vrouw");
aI("text=Acryl o.p.;onfunction=closeAllMenus();");
aI("text=49,5x36,5;onfunction=closeAllMenus();");
aI("text=1996;onfunction=closeAllMenus();");
aI("text=&euro; 550,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("265.jpg")) {
document.getElementById("title").innerHTML = unescape("Man portret");
aI("text=Houtskool;onfunction=closeAllMenus();");
aI("text=21x29;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 250,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("27 a.jpg")) {
document.getElementById("title").innerHTML = unescape("Een-Zaamheid (Eenheid Eenzaamheid)");
aI("text=Ets;onfunction=closeAllMenus();");
aI("text=2-luik 59,5x39;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 650,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("274.jpg")) {
document.getElementById("title").innerHTML = unescape("Leunende blauwe man");
aI("text=Acryl o.p.;onfunction=closeAllMenus();");
aI("text=36,5x49,5;onfunction=closeAllMenus();");
aI("text=1996;onfunction=closeAllMenus();");
aI("text=&euro; 475,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("275.jpg")) {
document.getElementById("title").innerHTML = unescape("Model met nachtblauwe achtergrond");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=46x57;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 950,-;onfunction=closeAllMenus();");
} else   
//290 b.jpg -> weg

if (filename == escape("290.jpg")) {
document.getElementById("title").innerHTML = unescape("Man in embryohouding");
aI("text=Gem. tech. o.p.;onfunction=closeAllMenus();");
aI("text=42x59,5;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 1000,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("319.jpg")) {
document.getElementById("title").innerHTML = unescape("De vallende / in zijn droom");
aI("text=Gem. tech. o.p.;onfunction=closeAllMenus();");
aI("text=100,5x65;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 1250,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("320.jpg")) {
document.getElementById("title").innerHTML = unescape("Speelse jongen");
aI("text=Gem. tech. o.p.;onfunction=closeAllMenus();");
aI("text=65x100,5;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 1150,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("321.jpg")) {
document.getElementById("title").innerHTML = unescape("Andersgeborene");
aI("text=Gem. tech.;onfunction=closeAllMenus();");
aI("text=65x100,5;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 1250,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("86.jpg")) {
document.getElementById("title").innerHTML = unescape("Schreeuw");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=140x85;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 3800,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("88.jpg")) {
document.getElementById("title").innerHTML = unescape("Diagonale horizon");
aI("text=Ol.o.bord;onfunction=closeAllMenus();");
aI("text=38x45;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 850,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("97.jpg")) {
document.getElementById("title").innerHTML = unescape("Maanlicht kapsel");
aI("text=Ol.o.bord;onfunction=closeAllMenus();");
aI("text=20,5x32;onfunction=closeAllMenus();");
aI("text=1988;onfunction=closeAllMenus();");
aI("text=&euro; 550,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 091.jpg")) {
document.getElementById("title").innerHTML = unescape("In bed als paard");
aI("text=Ol.o.doek;onfunction=closeAllMenus();");
aI("text=35x38;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 1050,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 011.jpg")) {
document.getElementById("title").innerHTML = unescape("Loser / zonder toeschouwer");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=140x120;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 4500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 020.jpg")) {
document.getElementById("title").innerHTML = unescape("Allegorie van het geloof");
aI("text=Ol.o.bord;onfunction=closeAllMenus();");
aI("text=82x122;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 4500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 021.jpg")) {
document.getElementById("title").innerHTML = unescape("Man met hond");
aI("text=Gem.tech.;onfunction=closeAllMenus();");
aI("text=50x70;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 850,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 022.jpg")) {
document.getElementById("title").innerHTML = unescape("Vrouw met hond");
aI("text=Gem.tech.;onfunction=closeAllMenus();");
aI("text=50x70;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 950,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 023.jpg")) {
document.getElementById("title").innerHTML = unescape("Oude vrouw in kou");
aI("text=Olieverf/oliepastel o.p.;onfunction=closeAllMenus();");
aI("text=50x65;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 950,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 024.jpg")) {
document.getElementById("title").innerHTML = unescape("Hondse man");
aI("text=Acryl o.p.;onfunction=closeAllMenus();");
aI("text=76x56;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 925,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 025.jpg")) {
document.getElementById("title").innerHTML = unescape("Hondse vrouw");
aI("text=Acryl o.p.;onfunction=closeAllMenus();");
aI("text=76x56;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 925,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 027.jpg")) { // -> 180 draaien
document.getElementById("title").innerHTML = unescape("Hangende man");
aI("text=Gem.tech.o.p.;onfunction=closeAllMenus();");
aI("text=42x60;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 850,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 028.jpg")) { // -> 90 naar rechts
document.getElementById("title").innerHTML = unescape("Val in droom");
aI("text=Gem.tech.o.p.;onfunction=closeAllMenus();");
aI("text=60x42;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 850,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 031.jpg")) {
document.getElementById("title").innerHTML = unescape("Angela / Sorrow");
aI("text=Gem. tech.;onfunction=closeAllMenus();");
aI("text=65x100,5;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=Verkocht;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 032.jpg")) {
document.getElementById("title").innerHTML = unescape("Nabucco II / Zelfportret");
aI("text=Gemengde techniek o.p.;onfunction=closeAllMenus();");
aI("text=100,5x70;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 1050,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 035.jpg")) {
document.getElementById("title").innerHTML = unescape("Verlegen model");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=46x57;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 850,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 039.jpg")) {
document.getElementById("title").innerHTML = unescape("Liggende");
aI("text=Gem.techniek op papier(kleurpotlood/pastel/acryl/aquarel);onfunction=closeAllMenus();");
aI("text=51x56,5;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 950,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 040.jpg")) {
document.getElementById("title").innerHTML = unescape("Hondse vermoeidheid");
aI("text=Acryl o.p.;onfunction=closeAllMenus();");
aI("text=95x52;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 950,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 041.jpg")) {
document.getElementById("title").innerHTML = unescape("Man in gekruiste vorm");
aI("text=Gem.tech.o.p.;onfunction=closeAllMenus();");
aI("text=42x60;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 850,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 042.jpg")) {
document.getElementById("title").innerHTML = unescape("Zittende man met licht van rechts");
aI("text=Gem.tech.o.p.;onfunction=closeAllMenus();");
aI("text=42x60;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 850,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 045.jpg")) {
document.getElementById("title").innerHTML = unescape("Zittende (handen vast)");
aI("text=Aq./acryl o.p.;onfunction=closeAllMenus();");
aI("text=50x85;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 900,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 046.jpg")) {
document.getElementById("title").innerHTML = unescape("Zittende in gedachten");
aI("text=Aq./acryl o.p.;onfunction=closeAllMenus();");
aI("text=50x58;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 750,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 047.jpg")) {
document.getElementById("title").innerHTML = unescape("Afro-schoonheid");
aI("text=Acryl o.p.;onfunction=closeAllMenus();");
aI("text=75x55;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 1150,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 048.jpg")) {
document.getElementById("title").innerHTML = unescape("Afro-schoonheid");
aI("text=Acryl o.p.;onfunction=closeAllMenus();");
aI("text=75x55;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 1150,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 049.jpg")) { // -> 180 draaien
document.getElementById("title").innerHTML = unescape("Opstaan");
aI("text=Oliekrijt/Indische inkt o.p.;onfunction=closeAllMenus();");
aI("text=100,5x65;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 800,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 050.jpg")) {
document.getElementById("title").innerHTML = unescape("Liefdespaar");
aI("text=Gem.tech.;onfunction=closeAllMenus();");
aI("text=50x70;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 950,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 051.jpg")) {
document.getElementById("title").innerHTML = unescape("Opstaande man");
aI("text=Gem. tech.;onfunction=closeAllMenus();");
aI("text=100,5x65;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 850,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 052.jpg")) {
document.getElementById("title").innerHTML = unescape("Man met slang");
aI("text=Kleurenpotlood o.p.;onfunction=closeAllMenus();");
aI("text=65x100,5;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 950,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 059.jpg")) {
document.getElementById("title").innerHTML = unescape("Gebogen man");
aI("text=Gem. tech.;onfunction=closeAllMenus();");
aI("text=75x95;onfunction=closeAllMenus();");
aI("text=1990;onfunction=closeAllMenus();");
aI("text=&euro; 850,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 064.jpg")) {
document.getElementById("title").innerHTML = unescape("Zwanger in zorgen");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=18x26;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 067.jpg")) {
document.getElementById("title").innerHTML = unescape("Plassen aan hek / grens");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=34x25;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 550,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 077.jpg")) {
document.getElementById("title").innerHTML = unescape("Beeld aan water");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=35x26;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 083.jpg")) {
document.getElementById("title").innerHTML = unescape("Plassende");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=26x37,5;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 087.jpg")) {
document.getElementById("title").innerHTML = unescape("Schoonspringer");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=21x29;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 300,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 088.jpg")) {
document.getElementById("title").innerHTML = unescape("Bidder");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=32x21;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 450,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 096.jpg")) {
document.getElementById("title").innerHTML = unescape("Wanhopige");
aI("text=Aq.;onfunction=closeAllMenus();");
aI("text=35x28;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 350,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 101.jpg")) {
document.getElementById("title").innerHTML = unescape("Zwarte figuur op stoel");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=27x34;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 450,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 105.jpg")) {
document.getElementById("title").innerHTML = unescape("Anthonius");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=28x36;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 450,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 108.jpg")) {
document.getElementById("title").innerHTML = unescape("Laatste ridder met zijn zwaard");
aI("text=Aq.;onfunction=closeAllMenus();");
aI("text=32x24;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 300,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 109.jpg")) {
document.getElementById("title").innerHTML = unescape("Op z'n kop (man)");
aI("text=Aq.;onfunction=closeAllMenus();");
aI("text=22x31;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 250,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 110.jpg")) {
document.getElementById("title").innerHTML = unescape("Op z'n kop (vouw)");
aI("text=Aq.;onfunction=closeAllMenus();");
aI("text=22x31;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 250,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 116.jpg")) {
document.getElementById("title").innerHTML = unescape("Trots (blauwzwanger)");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=30x21;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=Verkocht;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 121.jpg")) {
document.getElementById("title").innerHTML = unescape("In zichzelf gezonken");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=31x22;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 300,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 02 029.jpg")) {
document.getElementById("title").innerHTML = unescape("Schoonspringer in daling");
aI("text=Ol.o.bord;onfunction=closeAllMenus();");
aI("text=24x32;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 02 044.jpg")) {
document.getElementById("title").innerHTML = unescape("Model voor schildersezel");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=57x46;onfunction=closeAllMenus();");
aI("text=1990;onfunction=closeAllMenus();");
aI("text=&euro; 650,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 02 048.jpg")) {
document.getElementById("title").innerHTML = unescape("Wanhopigen (blauw figuur)");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=64,5x50;onfunction=closeAllMenus();");
aI("text=2001;onfunction=closeAllMenus();");
aI("text=&euro; 900,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 02 067.jpg")) {
document.getElementById("title").innerHTML = unescape("Verdwaald op snelweg");
aI("text=Olieverf en oliepastel o.doek;onfunction=closeAllMenus();");
aI("text=50x40;onfunction=closeAllMenus();");
aI("text=1990;onfunction=closeAllMenus();");
aI("text=&euro; 1100,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 02 075.jpg")) {
document.getElementById("title").innerHTML = unescape("Magische krachten of regenboog");
aI("text=Ol.o.doek;onfunction=closeAllMenus();");
aI("text=55x65;onfunction=closeAllMenus();");
aI("text=1989;onfunction=closeAllMenus();");
aI("text=&euro; 1100,-;onfunction=closeAllMenus();");
} else   
//schilderijen 02 081.jpg -> weg

if (filename == escape("schilderijen 02 089.jpg")) {
document.getElementById("title").innerHTML = unescape("Vuur en vlam van zee");
aI("text=Ol.o.bord;onfunction=closeAllMenus();");
aI("text=45x35;onfunction=closeAllMenus();");
aI("text=1990;onfunction=closeAllMenus();");
aI("text=&euro; 950,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 02 092.jpg")) {
document.getElementById("title").innerHTML = unescape("Kosmosfiguur");
aI("text=Ol.o.bord;onfunction=closeAllMenus();");
aI("text=34x45;onfunction=closeAllMenus();");
aI("text=1989;onfunction=closeAllMenus();");
aI("text=&euro; 950,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 02 105.jpg")) {
document.getElementById("title").innerHTML = unescape("Compositie met vier figuren");
aI("text=Ol.o.bord;onfunction=closeAllMenus();");
aI("text=31x31;onfunction=closeAllMenus();");
aI("text=1990;onfunction=closeAllMenus();");
aI("text=&euro; 850,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 02 106.jpg")) {
document.getElementById("title").innerHTML = unescape("Vrouw / Man / Slang");
aI("text=Ol.o.doek;onfunction=closeAllMenus();");
aI("text=28x20;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 450,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 02 119.jpg")) {
document.getElementById("title").innerHTML = unescape("Naar buiten starende");
aI("text=Ol.o.p;onfunction=closeAllMenus();");
aI("text=34x25;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 02 131.jpg")) { // -> 90 links
document.getElementById("title").innerHTML = unescape("De val");
aI("text=Indische inkt o.p.;onfunction=closeAllMenus();");
aI("text=30x21;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 250,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 02 132.jpg")) {
document.getElementById("title").innerHTML = unescape("Liggend / slapend naakt");
aI("text=Ind.inkt o.p.;onfunction=closeAllMenus();");
aI("text=24x17;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 250,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 02 133.jpg")) {
document.getElementById("title").innerHTML = unescape("Betreurende liggende");
aI("text=Potlood;onfunction=closeAllMenus();");
aI("text=31x22;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 225,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 033.jpg")) {
document.getElementById("title").innerHTML = unescape("Pan met geit in landschap");
aI("text=Ol.o.doek;onfunction=closeAllMenus();");
aI("text=40x50;onfunction=closeAllMenus();");
aI("text=1988;onfunction=closeAllMenus();");
aI("text=&euro; 1000,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 034.jpg")) {
document.getElementById("title").innerHTML = unescape("Liefdesspel op wiel");
aI("text=Ol.o.doek;onfunction=closeAllMenus();");
aI("text=60x50;onfunction=closeAllMenus();");
aI("text=1989;onfunction=closeAllMenus();");
aI("text=&euro; 1250,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 036.jpg")) {
document.getElementById("title").innerHTML = unescape("Eenzame");
aI("text=Ol.o.bord;onfunction=closeAllMenus();");
aI("text=72x90;onfunction=closeAllMenus();");
aI("text=1989;onfunction=closeAllMenus();");
aI("text=&euro; 1880,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 040.jpg")) {
document.getElementById("title").innerHTML = unescape("Verloren koninkrijk");
aI("text=Ol.o.bord;onfunction=closeAllMenus();");
aI("text=60x46;onfunction=closeAllMenus();");
aI("text=1996;onfunction=closeAllMenus();");
aI("text=&euro; 1500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 041.jpg")) {
document.getElementById("title").innerHTML = unescape("De schilder en de dynamiek");
aI("text=Ol.o.bord;onfunction=closeAllMenus();");
aI("text=50x65;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 1200,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 050.jpg")) {
document.getElementById("title").innerHTML = unescape("Wanhoop");
aI("text=Ets (ingekleurd);onfunction=closeAllMenus();");
aI("text=24x18;onfunction=closeAllMenus();");
aI("text=1989;onfunction=closeAllMenus();");
aI("text=&euro; 325,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 053.jpg")) {
document.getElementById("title").innerHTML = unescape("de Melancholie of de Wandeling");
aI("text=Ets;onfunction=closeAllMenus();");
aI("text=9x23;onfunction=closeAllMenus();");
aI("text=1989;onfunction=closeAllMenus();");
aI("text=&euro; 150,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 098.jpg")) {
document.getElementById("title").innerHTML = unescape("het Slachthuis");
aI("text=Oliekrijt;onfunction=closeAllMenus();");
aI("text=18x25;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 200,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 108.jpg")) {
document.getElementById("title").innerHTML = unescape("Vliegende Hollander");
aI("text=Houtskool;onfunction=closeAllMenus();");
aI("text=31x22;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 250,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 119.jpg")) {
document.getElementById("title").innerHTML = unescape("Naamloos");
aI("text=Ets;onfunction=closeAllMenus();");
aI("text=2-luik 59,5x39;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 650,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 140.jpg")) {
document.getElementById("title").innerHTML = unescape("Naamloos");
aI("text=Potlood;onfunction=closeAllMenus();");
aI("text=31x22;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 225,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 141.jpg")) {
document.getElementById("title").innerHTML = unescape("Op het einde");
aI("text=Potlood;onfunction=closeAllMenus();");
aI("text=31x22;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 225,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 142.jpg")) {
document.getElementById("title").innerHTML = unescape("Verzet tegen val");
aI("text=Potlood;onfunction=closeAllMenus();");
aI("text=22x31;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 225,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 143.jpg")) {
document.getElementById("title").innerHTML = unescape("Archaïsche figuur");
aI("text=Potlood;onfunction=closeAllMenus();");
aI("text=22x31;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 225,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 144.jpg")) {
document.getElementById("title").innerHTML = unescape("Met zichzelf bezig");
aI("text=Houtskool;onfunction=closeAllMenus();");
aI("text=31x22;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 225,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 145.jpg")) {
document.getElementById("title").innerHTML = unescape("Badende");
aI("text=Potlood;onfunction=closeAllMenus();");
aI("text=22x31;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 225,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 146.jpg")) {
document.getElementById("title").innerHTML = unescape("Slapende schoonheid");
aI("text=Potlood;onfunction=closeAllMenus();");
aI("text=31x22;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 225,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 147.jpg")) {
document.getElementById("title").innerHTML = unescape("Ingreske figuur");
aI("text=Potlood;onfunction=closeAllMenus();");
aI("text=22x31;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 225,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 148.jpg")) {
document.getElementById("title").innerHTML = unescape("Verdrietig");
aI("text=Potlood;onfunction=closeAllMenus();");
aI("text=22x31;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 225,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 149.jpg")) {
document.getElementById("title").innerHTML = unescape("Man met sik");
aI("text=Potlood;onfunction=closeAllMenus();");
aI("text=22x31;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 225,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 150.jpg")) {
document.getElementById("title").innerHTML = unescape("Kadaverfiguur");
aI("text=Potlood;onfunction=closeAllMenus();");
aI("text=31x22;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 225,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 151.jpg")) {
document.getElementById("title").innerHTML = unescape("Slachthuis");
aI("text=Potlood;onfunction=closeAllMenus();");
aI("text=31x22;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 250,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 152.jpg")) {
document.getElementById("title").innerHTML = unescape("Hangende");
aI("text=Potlood;onfunction=closeAllMenus();");
aI("text=31x22;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 225,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 153.jpg")) {
document.getElementById("title").innerHTML = unescape("Torso's");
aI("text=Potlood;onfunction=closeAllMenus();");
aI("text=31x22;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 225,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 154.jpg")) {
document.getElementById("title").innerHTML = unescape("de Helft");
aI("text=Potlood;onfunction=closeAllMenus();");
aI("text=22x31;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 200,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 155.jpg")) {
document.getElementById("title").innerHTML = unescape("Sirene");
aI("text=Potlood;onfunction=closeAllMenus();");
aI("text=22x31;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 225,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 156.jpg")) {
document.getElementById("title").innerHTML = unescape("Sirene II");
aI("text=Potlood;onfunction=closeAllMenus();");
aI("text=22x31;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 225,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 04 en schilderijen amsterdam 024.jpg")) {
document.getElementById("title").innerHTML = unescape("Achterbuurtkinderen");
aI("text=Ol.o.doek;onfunction=closeAllMenus();");
aI("text=110x130;onfunction=closeAllMenus();");
aI("text=1988;onfunction=closeAllMenus();");
aI("text=&euro; 5100,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 04 en schilderijen amsterdam 043.jpg")) {
document.getElementById("title").innerHTML = unescape("de Droom en de val");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=125x110;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 2400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 04 en schilderijen amsterdam 050.jpg")) {
document.getElementById("title").innerHTML = unescape("Vrouw in het donker");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=34x42;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 550,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 04 en schilderijen amsterdam 057.jpg")) {
document.getElementById("title").innerHTML = unescape("Model met twee handen op hoofd");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=24x35;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 450,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 04 en schilderijen amsterdam 058.jpg")) {
document.getElementById("title").innerHTML = unescape("Blauwzwangere");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=31x22;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 450,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 04 en schilderijen amsterdam 060.jpg")) {
document.getElementById("title").innerHTML = unescape("Armen op 't hoofd");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=24x35;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 450,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 04 en schilderijen amsterdam 062.jpg")) {
document.getElementById("title").innerHTML = unescape("Man met rechterarm leunend");
aI("text=Oliekrijt;onfunction=closeAllMenus();");
aI("text=46x57;onfunction=closeAllMenus();");
aI("text=1996;onfunction=closeAllMenus();");
aI("text=&euro; 550,-;onfunction=closeAllMenus();");
} else   


// Paardenschilderijen
if (filename == escape("114.jpg")) {
document.getElementById("title").innerHTML = unescape("Paarden met rood paard op de achtergrond");
aI("text=Ol.o.bord;onfunction=closeAllMenus();");
aI("text=25x30,5;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 850,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("115.jpg")) {
document.getElementById("title").innerHTML = unescape("Naar Foto Finish");
aI("text=Ol.o.bord;onfunction=closeAllMenus();");
aI("text=25x30,5;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 850,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("167_2.jpg")) {
document.getElementById("title").innerHTML = unescape("Paard / Vrouw / Business (compositie)");
aI("text=Ol.o.krantenpapier;onfunction=closeAllMenus();");
aI("text=83x57;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 1150,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("20.jpg")) {
document.getElementById("title").innerHTML = unescape("Vechtende paarden");
aI("text=Olieverf op papier;onfunction=closeAllMenus();");
aI("text=65x50;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 1200,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("21.jpg")) {
document.getElementById("title").innerHTML = unescape("Rode droom van blauw paard II");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=76x56;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 1300,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("217.jpg")) {
document.getElementById("title").innerHTML = unescape("Fotofinish");
aI("text=Ets;onfunction=closeAllMenus();");
aI("text=16x24,5;onfunction=closeAllMenus();");
aI("text=1989;onfunction=closeAllMenus();");
aI("text=&euro; 300,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("263.jpg")) {
document.getElementById("title").innerHTML = unescape("Werkpaarden");
aI("text=Aq.;onfunction=closeAllMenus();");
aI("text=43x30;onfunction=closeAllMenus();");
aI("text=1999;onfunction=closeAllMenus();");
aI("text=&euro; 450,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("266.jpg")) {
document.getElementById("title").innerHTML = unescape("Dalend paard");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=32x24;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 550,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("269.jpg")) {
document.getElementById("title").innerHTML = unescape("Hoef krabbend paard");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=76x56;onfunction=closeAllMenus();");
aI("text=1998;onfunction=closeAllMenus();");
aI("text=&euro; 1400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("274_2.jpg")) {
document.getElementById("title").innerHTML = unescape("Struikelend paard");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=40x38;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 550,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("276.jpg")) {
document.getElementById("title").innerHTML = unescape("Paarden in perspectief (met parende paardenachtergrond)");
aI("text=Olieverf op papier;onfunction=closeAllMenus();");
aI("text=65,5x48;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 1200,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("278.jpg")) {
document.getElementById("title").innerHTML = unescape("Hinnikende");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=56x76;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 1350,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("282.jpg")) {
document.getElementById("title").innerHTML = unescape("Leed / Wil (paard met rode manen en staart)");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=102,5x75;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 1700,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("284.jpg")) {
document.getElementById("title").innerHTML = unescape("de Hinnikende");
aI("text=Gem.techn. ol.o.p.;onfunction=closeAllMenus();");
aI("text=65x100;onfunction=closeAllMenus();");
aI("text=1990;onfunction=closeAllMenus();");
aI("text=Verkocht;onfunction=closeAllMenus();");
} else   
if (filename == escape("287.jpg")) {
document.getElementById("title").innerHTML = unescape("Knielend rood paard met witte bles");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=102,5x75;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 1600,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("288.jpg")) {
document.getElementById("title").innerHTML = unescape("Beenkrabbend rood paard");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=102,5x75;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 1700,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("289.jpg")) {
document.getElementById("title").innerHTML = unescape("Blauw paard met linkerbeen omhoog");
aI("text=Olieverf op papier;onfunction=closeAllMenus();");
aI("text=65,5x48;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 1100,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("292.jpg")) {
document.getElementById("title").innerHTML = unescape("Eenzaam paard");
aI("text=Olieverf op papier;onfunction=closeAllMenus();");
aI("text=65,5x48;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 1100,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("293.jpg")) {
document.getElementById("title").innerHTML = unescape("Rood paard boven Nijmeegs landschap zwevend");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=65,5x48;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 1200,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("295.jpg")) {
document.getElementById("title").innerHTML = unescape("Springerig groen paard");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=68x50;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 1300,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("297.jpg")) {
document.getElementById("title").innerHTML = unescape("Strijdenden");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=65x48;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 1300,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("298.jpg")) {
document.getElementById("title").innerHTML = unescape("Vermoeid paard");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=65x48;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 1200,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("299.jpg")) {
document.getElementById("title").innerHTML = unescape("Circuspaard");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=65x48;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 1200,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("300.jpg")) {
document.getElementById("title").innerHTML = unescape("Paarden in de nacht");
aI("text=Ol.o.pap;onfunction=closeAllMenus();");
aI("text=65,5x48;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 1250,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("301 II.jpg")) {
document.getElementById("title").innerHTML = unescape("Dansende");
aI("text=Ol.o.pap;onfunction=closeAllMenus();");
aI("text=65,5x48;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 1250,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("301.jpg")) {
document.getElementById("title").innerHTML = unescape("Buigend paard");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=65x48;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 1300,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("302.jpg")) {
document.getElementById("title").innerHTML = unescape("Paardenkudde");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=65x50;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 1350,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("303.jpg")) {
document.getElementById("title").innerHTML = unescape("Los uit de sokkel");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=65,5x48;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 1150,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("304.jpg")) {
document.getElementById("title").innerHTML = unescape("Studie naar schrikkend paard");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=56,5x48;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 1200,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("312.jpg")) {
document.getElementById("title").innerHTML = unescape("Ontdekking geel paard in de nacht");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=68x50;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 1200,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("39.jpg")) {
document.getElementById("title").innerHTML = unescape("Sombere terugblik");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=68x50;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 1200,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("42.jpg")) {
document.getElementById("title").innerHTML = unescape("Ritmisch paard");
aI("text=Ol.o.p;onfunction=closeAllMenus();");
aI("text=76x56;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 1450,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("43.jpg")) {
document.getElementById("title").innerHTML = unescape("Trotse hengst");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=65,5x48;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 1300,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("44.jpg")) {
document.getElementById("title").innerHTML = unescape("Schoppend paard");
aI("text=Oliekrijt op papier;onfunction=closeAllMenus();");
aI("text=36x27;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=Verkocht;onfunction=closeAllMenus();");
} else   
if (filename == escape("52.jpg")) {
document.getElementById("title").innerHTML = unescape("Groen paard");
aI("text=Aq.o.p.;onfunction=closeAllMenus();");
aI("text=29x21;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 275,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("87.jpg")) {
document.getElementById("title").innerHTML = unescape("Paard op zichzelf");
aI("text=Ol.o.p.bev.o.lin;onfunction=closeAllMenus();");
aI("text=39,5x39,5;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 1000,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("91.jpg")) {
document.getElementById("title").innerHTML = unescape("Hinnikende zwarte hengst op gele achtergrond");
aI("text=Ol.o.doek;onfunction=closeAllMenus();");
aI("text=40x30;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 850,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("93.jpg")) {
document.getElementById("title").innerHTML = unescape("Paarse paarden");
aI("text=Ol.o.bord;onfunction=closeAllMenus();");
aI("text=31x29,5;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 950,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("94.jpg")) {
document.getElementById("title").innerHTML = unescape("Paard in stal");
aI("text=Ol.o.doek;onfunction=closeAllMenus();");
aI("text=31x28;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 750,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("99.jpg")) {
document.getElementById("title").innerHTML = unescape("Paard met slang");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=22,5x18,5;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 750,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 004.jpg")) {
document.getElementById("title").innerHTML = unescape("Vallend paard");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=76x56;onfunction=closeAllMenus();");
aI("text=1996;onfunction=closeAllMenus();");
aI("text=&euro; 1300,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 005.jpg")) {
document.getElementById("title").innerHTML = unescape("Buigend paard (roodgele achtergrond)");
aI("text=Olieverf/kleurenpotlood o.p.;onfunction=closeAllMenus();");
aI("text=100,5x65;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 1450,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 007.jpg")) {
document.getElementById("title").innerHTML = unescape("De galloperende blauwe (paarden serie)");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=32x24;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 450,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 008.jpg")) {
document.getElementById("title").innerHTML = unescape("Liefdesgevecht (paarden serie)");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=32x24;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 550,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 009.jpg")) {
document.getElementById("title").innerHTML = unescape("Galop (paarden serie)");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=32x24;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=Verkocht;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 010.jpg")) {
document.getElementById("title").innerHTML = unescape("Veulen (paarden serie)");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=32x24;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 450,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 011.jpg")) {
document.getElementById("title").innerHTML = unescape("De kreupele");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=42x34;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 800,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 012.jpg")) {
document.getElementById("title").innerHTML = unescape("Paard en gevallen ruiter (paarden serie)");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=32x24;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 013.jpg")) {
document.getElementById("title").innerHTML = unescape("Zelfportret als Oosterse ruiter voor Nijmegen / de zuchtende Moor");
aI("text=Aq.;onfunction=closeAllMenus();");
aI("text=32x24;onfunction=closeAllMenus();");
aI("text=1990;onfunction=closeAllMenus();");
aI("text=&euro; 550,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 016.jpg")) {
document.getElementById("title").innerHTML = unescape("Onwillige merrie (paarden serie)");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=32x24;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 017.jpg")) {
document.getElementById("title").innerHTML = unescape("Rennend paard (paarden serie)");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=32x24;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 450,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 018.jpg")) {
document.getElementById("title").innerHTML = unescape("Contrastpaarden (paarden serie)");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=32x24;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=Verkocht;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 020.jpg")) {
document.getElementById("title").innerHTML = unescape("Paard voor zee (paarden serie)");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=32x24;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 021.jpg")) {
document.getElementById("title").innerHTML = unescape("Groene galloperende (paarden serie)");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=32x24;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 450,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 022.jpg")) {
document.getElementById("title").innerHTML = unescape("Been krabbende (paarden serie)");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=32x24;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 023.jpg")) {
document.getElementById("title").innerHTML = unescape("Stijgende (paarden serie)");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=32x24;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 024.jpg")) {
document.getElementById("title").innerHTML = unescape("Steigerende (paarden serie)");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=32x24;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 025.jpg")) {
document.getElementById("title").innerHTML = unescape("Grond rakende (paarden serie)");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=32x24;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 026.jpg")) {
document.getElementById("title").innerHTML = unescape("Rechterbeen omhoog (paarden serie)");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=32x24;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 450,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 027.jpg")) {
document.getElementById("title").innerHTML = unescape("Rood galloperende in de nacht (paarden serie)");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=32x24;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 028.jpg")) {
document.getElementById("title").innerHTML = unescape("Angstig geel paard (paarden serie)");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=32x24;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 450,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 029.jpg")) {
document.getElementById("title").innerHTML = unescape("Trots lopende (paarden serie)");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=36x27;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 030.jpg")) {
document.getElementById("title").innerHTML = unescape("Paarden aan zee (paarden serie)");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=32x24;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 031.jpg")) {
document.getElementById("title").innerHTML = unescape("Paard van Don Quichotte (paarden serie)");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=32x24;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 450,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 032.jpg")) {
document.getElementById("title").innerHTML = unescape("Slapend paard (paarden serie)");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=32x24;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 450,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 033.jpg")) {
document.getElementById("title").innerHTML = unescape("Opstaande (paarden serie)");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=32x24;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 450,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 034.jpg")) {
document.getElementById("title").innerHTML = unescape("Schrobbende (paarden serie)");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=32x24;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 450,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 035.jpg")) {
document.getElementById("title").innerHTML = unescape("Grijs paard (paarden serie)");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=32x24;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 036.jpg")) {
document.getElementById("title").innerHTML = unescape("Springpaard (paarden serie)");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=32x24;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 450,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 037.jpg")) {
document.getElementById("title").innerHTML = unescape("Aandachtig paard (paarden serie)");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=32x24;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 450,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 038.jpg")) {
document.getElementById("title").innerHTML = unescape("Knielende blauwe (paarden serie)");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=32x24;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 450,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 040.jpg")) {
document.getElementById("title").innerHTML = unescape("Naar het voer toe (paarden serie)");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=32x24;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 450,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 041.jpg")) {
document.getElementById("title").innerHTML = unescape("Likkende (paarden serie)");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=32x24;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 450,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 042.jpg")) {
document.getElementById("title").innerHTML = unescape("Krabbende (paarden serie)");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=32x24;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 043.jpg")) {
document.getElementById("title").innerHTML = unescape("Masturbator (paarden serie)");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=32x24;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 450,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 053.jpg")) {
document.getElementById("title").innerHTML = unescape("Hinnekend paard (boven Nijmegen)");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=65x50;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 1350,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 054.jpg")) {
document.getElementById("title").innerHTML = unescape("Schoppend paard");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=65x48;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=Verkocht;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 059.jpg")) {
document.getElementById("title").innerHTML = unescape("Triest paard");
aI("text=Acryl/olieverf.o.p.;onfunction=closeAllMenus();");
aI("text=65x48;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 1150,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 069.jpg")) {
document.getElementById("title").innerHTML = unescape("Verzorgende paarden");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=65x48;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 1200,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 072.jpg")) {
document.getElementById("title").innerHTML = unescape("Neerzijgende");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=65x50;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 1250,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 073.jpg")) {
document.getElementById("title").innerHTML = unescape("Knielend groenpaars paard");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=65x50;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 1200,-;onfunction=closeAllMenus();");
} else   
//paarden schilderijen 079.jpg -> weg

if (filename == escape("paarden schilderijen 080.jpg")) {
document.getElementById("title").innerHTML = unescape("Ritmisch rood paard");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=50x65;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 1050,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 081.jpg")) {
document.getElementById("title").innerHTML = unescape("Schriksprong");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=50x65;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 1050,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 014.jpg") ||
filename == escape("paarden schilderijen 015.jpg")) {
document.getElementById("title").innerHTML = unescape("Speelse verlegenheid");
aI("text=Bruinkrijt o.p.;onfunction=closeAllMenus();");
aI("text=32x24;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=Verkocht;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 094.jpg")) {
document.getElementById("title").innerHTML = unescape("Enthousiaste hengst");
aI("text=Potloodtekening;onfunction=closeAllMenus();");
aI("text=21x29,5;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 300,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 096.jpg")) {
document.getElementById("title").innerHTML = unescape("Ritmisch paard (tek. naar Leonardo)");
aI("text=Potl.tek.o.p.;onfunction=closeAllMenus();");
aI("text=35x50;onfunction=closeAllMenus();");
aI("text=1986;onfunction=closeAllMenus();");
aI("text=&euro; 350,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 097.jpg")) {
document.getElementById("title").innerHTML = unescape("Dromen");
aI("text=Ets (ingekleurd);onfunction=closeAllMenus();");
aI("text=24,5x16;onfunction=closeAllMenus();");
aI("text=1989;onfunction=closeAllMenus();");
aI("text=&euro; 350,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 098.jpg")) {
document.getElementById("title").innerHTML = unescape("Fotofinish");
aI("text=Ets (ingekleurd);onfunction=closeAllMenus();");
aI("text=16x24,5;onfunction=closeAllMenus();");
aI("text=1989;onfunction=closeAllMenus();");
aI("text=&euro; 350,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 099.jpg")) {
document.getElementById("title").innerHTML = unescape("Paard in stal");
aI("text=Oliekrijt o.p.;onfunction=closeAllMenus();");
aI("text=36x27;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 300,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 109.jpg")) {
document.getElementById("title").innerHTML = unescape("Oud paard");
aI("text=Potloodtekening;onfunction=closeAllMenus();");
aI("text=21x29,5;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 275,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 110.jpg")) {
document.getElementById("title").innerHTML = unescape("Drachtig paard");
aI("text=Potloodtekening;onfunction=closeAllMenus();");
aI("text=29,5x21;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 275,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 111.jpg")) {
document.getElementById("title").innerHTML = unescape("Rustend paard");
aI("text=Potloodtekening;onfunction=closeAllMenus();");
aI("text=29,5x21;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 275,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 01 057.jpg")) { // -> 90 naar rechts
document.getElementById("title").innerHTML = unescape("Ritmische richtingen");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=50x65;onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 1150,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 056.jpg")) {
document.getElementById("title").innerHTML = unescape("Bevel aan paarden");
aI("text=Ets;onfunction=closeAllMenus();");
aI("text=32x24;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 300,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 073.jpg")) {
document.getElementById("title").innerHTML = unescape("Dromen");
aI("text=Ets;onfunction=closeAllMenus();");
aI("text=24,5x16;onfunction=closeAllMenus();");
aI("text=1989;onfunction=closeAllMenus();");
aI("text=&euro; 270,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 03 darius 157.jpg")) {
document.getElementById("title").innerHTML = unescape("Schuine horizon");
aI("text=Potloodtekening;onfunction=closeAllMenus();");
aI("text=29,5x21;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 250,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 04 en schilderijen amsterdam 002.jpg") ||
filename == escape("schilderijen 04 en schilderijen amsterdam 003.jpg") ||
filename == escape("schilderijen 04 en schilderijen amsterdam 004.jpg")) {
document.getElementById("title").innerHTML = unescape("Fotofinish (tweeluik)");
aI("text=Ol.o.bord;onfunction=closeAllMenus();");
aI("text=2x 81x62;onfunction=closeAllMenus();");
aI("text=1996;onfunction=closeAllMenus();");
aI("text=&euro; 2800,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 04 en schilderijen amsterdam 035.jpg")) {
document.getElementById("title").innerHTML = unescape("Dramatisch paard");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=65x50;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 1300,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 04 en schilderijen amsterdam 036.jpg") ||
filename == escape("schilderijen 04 en schilderijen amsterdam 038.jpg") ||
filename == escape("schilderijen 04 en schilderijen amsterdam 039.jpg") ||
filename == escape("schilderijen 04 en schilderijen amsterdam 040.jpg")) {
document.getElementById("title").innerHTML = unescape("Liefde / Macht / Spel / Verraad (vierluik)");
aI("text=Aq.;onfunction=closeAllMenus();");
aI("text=4x 32x24;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 1450,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("143.jpg")) {
document.getElementById("title").innerHTML = unescape("Twee paarden voor het water");
aI("text=Ol.o.doek;onfunction=closeAllMenus();");
aI("text=50x40;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 1400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("23.jpg")) {
document.getElementById("title").innerHTML = unescape("Twee paarden voor een rots");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=65x50;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 1350,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("245.jpg")) {
document.getElementById("title").innerHTML = unescape("Rennende paarden");
aI("text=Ol.o.karton;onfunction=closeAllMenus();");
aI("text=42x59,5;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 1050,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("286.jpg")) {
document.getElementById("title").innerHTML = unescape("Blauw paard met gouden manen");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=102,5x75;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 1600,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("305.jpg")) {
document.getElementById("title").innerHTML = unescape("Vos / Paard in Hollands landschap");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=68x49,5;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 1300,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("306.jpg")) {
document.getElementById("title").innerHTML = unescape("Blauw paard met witte bles");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=65,5x48;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=Verkocht;onfunction=closeAllMenus();");
} else   
if (filename == escape("313.jpg")) {
document.getElementById("title").innerHTML = unescape("Hoestend paard");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=65x50;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 1200,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 001.jpg")) {
document.getElementById("title").innerHTML = unescape("In nachtelijke eenzaamheid");
aI("text=Ol.o.lin.;onfunction=closeAllMenus();");
aI("text=150x130;onfunction=closeAllMenus();");
aI("text=1991;onfunction=closeAllMenus();");
aI("text=&euro; 6500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 002.jpg")) {
document.getElementById("title").innerHTML = unescape("Twee strijdende paarden");
aI("text=Ol.o.doek;onfunction=closeAllMenus();");
aI("text=110x95;onfunction=closeAllMenus();");
aI("text=1993;onfunction=closeAllMenus();");
aI("text=&euro; 3500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paarden schilderijen 107.jpg")) {
document.getElementById("title").innerHTML = unescape("Verwonde ruiter op paard");
aI("text=Potloodtek.;onfunction=closeAllMenus();");
aI("text=29,5x21;onfunction=closeAllMenus();");
aI("text=1992;onfunction=closeAllMenus();");
aI("text=&euro; 300,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("schilderijen 04 en schilderijen amsterdam 034.jpg")) {
document.getElementById("title").innerHTML = unescape("Paard als nacht naar antieke ruïne toe");
aI("text=Ol.o.p.;onfunction=closeAllMenus();");
aI("text=65x50;onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 1500,-;onfunction=closeAllMenus();");
} else  


// Paardenbeelden
if (filename == escape("paardenbeelden 001.jpg") ||
filename == escape("paardenbeelden 003.jpg")) {
document.getElementById("title").innerHTML = unescape("Merrie");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1997;onfunction=closeAllMenus();");
aI("text=&euro; 2400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 004.jpg") ||
filename == escape("paardenbeelden 005.jpg")) {
document.getElementById("title").innerHTML = unescape("Hengst");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1997;onfunction=closeAllMenus();");
aI("text=&euro; 2400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 006.jpg") ||
filename == escape("paardenbeelden 007.jpg")) {
document.getElementById("title").innerHTML = unescape("Robina");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1997;onfunction=closeAllMenus();");
aI("text=&euro; 2200,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 008.jpg") ||
//paardenbeelden 009.jpg -> weg
filename == escape("paardenbeelden 010.jpg") ||
filename == escape("paardenbeelden 011.jpg")) {
document.getElementById("title").innerHTML = unescape("Veulen");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 20x10x28 (HxBxL);onfunction=closeAllMenus();");
aI("text=1998;onfunction=closeAllMenus();");
aI("text=&euro; 1500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 013.jpg") ||
filename == escape("paardenbeelden 014.jpg") ||
filename == escape("paardenbeelden 015.jpg") ||
filename == escape("paardenbeelden 017.jpg")) {
document.getElementById("title").innerHTML = unescape("Raksh");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1999;onfunction=closeAllMenus();");
aI("text=&euro; 2700,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 018.jpg") ||
filename == escape("paardenbeelden 019.jpg")) {
document.getElementById("title").innerHTML = unescape("Merrie");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1997;onfunction=closeAllMenus();");
aI("text=&euro; 2500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 021.jpg") ||
filename == escape("paardenbeelden 022.jpg") ||
filename == escape("paardenbeelden 023.jpg") ||
filename == escape("paardenbeelden 024.jpg")) {
document.getElementById("title").innerHTML = unescape("Hengst");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1999;onfunction=closeAllMenus();");
aI("text=&euro; 2600,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 025.jpg") ||
filename == escape("paardenbeelden 026.jpg") ||
filename == escape("paardenbeelden 027.jpg")) {
document.getElementById("title").innerHTML = unescape("Veulen");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 20x10x28 (HxBxL);onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 1350,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 028.jpg") ||
filename == escape("paardenbeelden 029.jpg")) {
document.getElementById("title").innerHTML = unescape("Veulen");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 20x10x28 (HxBxL);onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 1350,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 030.jpg")) {
document.getElementById("title").innerHTML = unescape("Hengst");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1998;onfunction=closeAllMenus();");
aI("text=&euro; 2600,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 033.jpg")) {
document.getElementById("title").innerHTML = unescape("Merrie");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1997;onfunction=closeAllMenus();");
aI("text=&euro; 2200,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 034.jpg") ||
filename == escape("paardenbeelden 035.jpg") ||
filename == escape("paardenbeelden 036.jpg")) {
document.getElementById("title").innerHTML = unescape("Hengst");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1998;onfunction=closeAllMenus();");
aI("text=&euro; 2400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 037.jpg") ||
filename == escape("paardenbeelden 038.jpg") ||
filename == escape("paardenbeelden 039.jpg")) {
document.getElementById("title").innerHTML = unescape("Merrie");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1997;onfunction=closeAllMenus();");
aI("text=&euro; 2400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 040.jpg") ||
filename == escape("paardenbeelden 041.jpg")) {
document.getElementById("title").innerHTML = unescape("Hengst");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1998;onfunction=closeAllMenus();");
aI("text=&euro; 2400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 042.jpg") ||
filename == escape("paardenbeelden 043.jpg")) {
document.getElementById("title").innerHTML = unescape("Koppel");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=2x ± 30x14x45 (HxBxL) ;onfunction=closeAllMenus();");
aI("text=1997;onfunction=closeAllMenus();");
aI("text=&euro; 4900,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 044.jpg") ||
filename == escape("paardenbeelden 045.jpg")) {
document.getElementById("title").innerHTML = unescape("Merrie");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 2200,-;onfunction=closeAllMenus();");
} else  
if (filename == escape("paardenbeelden 046.jpg") ||
filename == escape("paardenbeelden 047.jpg")) {
document.getElementById("title").innerHTML = unescape("Merrie");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1996;onfunction=closeAllMenus();");
aI("text=&euro; 2300,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 048.jpg") ||
filename == escape("paardenbeelden 049.jpg")) {
document.getElementById("title").innerHTML = unescape("Hengst");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1998;onfunction=closeAllMenus();");
aI("text=&euro; 2400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 050.jpg") ||
filename == escape("paardenbeelden 051.jpg")) {
document.getElementById("title").innerHTML = unescape("Hengst");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1999;onfunction=closeAllMenus();");
aI("text=&euro; 2500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 052.jpg") ||
filename == escape("paardenbeelden 053.jpg")) {
document.getElementById("title").innerHTML = unescape("Sleepner");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1999;onfunction=closeAllMenus();");
aI("text=&euro; 2500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 055.jpg") ||
filename == escape("paardenbeelden 056.jpg")) {
document.getElementById("title").innerHTML = unescape("Hengst");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1999;onfunction=closeAllMenus();");
aI("text=&euro; 2400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 057.jpg") ||
filename == escape("paardenbeelden 058.jpg") ||
filename == escape("paardenbeelden 059.jpg") ||
filename == escape("paardenbeelden 060.jpg")) {
document.getElementById("title").innerHTML = unescape("Hengst");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1999;onfunction=closeAllMenus();");
aI("text=&euro; 2500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 061.jpg") ||
filename == escape("paardenbeelden 062.jpg")) {
document.getElementById("title").innerHTML = unescape("Merrie");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1996;onfunction=closeAllMenus();");
aI("text=&euro; 2200,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 063.jpg")) {
document.getElementById("title").innerHTML = unescape("Merrie");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1996;onfunction=closeAllMenus();");
aI("text=&euro; 2200,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 065.jpg") ||
filename == escape("paardenbeelden 066.jpg")) {
document.getElementById("title").innerHTML = unescape("Merrie");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1997;onfunction=closeAllMenus();");
aI("text=&euro; 2200,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 067.jpg") ||
filename == escape("paardenbeelden 068.jpg")) {
document.getElementById("title").innerHTML = unescape("Hengst");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1999;onfunction=closeAllMenus();");
aI("text=&euro; 2400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 070.jpg")) {
document.getElementById("title").innerHTML = unescape("Merrie");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1996;onfunction=closeAllMenus();");
aI("text=&euro; 2200,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 071.jpg") ||
filename == escape("paardenbeelden 072.jpg")) {
document.getElementById("title").innerHTML = unescape("Merrie");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1996;onfunction=closeAllMenus();");
aI("text=&euro; 2300,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 073.jpg") ||
filename == escape("paardenbeelden 074.jpg")) {
document.getElementById("title").innerHTML = unescape("Merrie");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1996;onfunction=closeAllMenus();");
aI("text=&euro; 2400,-;onfunction=closeAllMenus();");
} else 
if (filename == escape("paardenbeelden 075.jpg") ||
filename == escape("paardenbeelden 076.jpg")) {
document.getElementById("title").innerHTML = unescape("Hengst");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1999;onfunction=closeAllMenus();");
aI("text=&euro; 2500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 077.jpg") ||
filename == escape("paardenbeelden 078.jpg") ||
filename == escape("paardenbeelden 079.jpg")) {
document.getElementById("title").innerHTML = unescape("Hengst");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1999;onfunction=closeAllMenus();");
aI("text=&euro; 2400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 080.jpg") ||
filename == escape("paardenbeelden 081.jpg") ||
filename == escape("paardenbeelden 082.jpg")) {
document.getElementById("title").innerHTML = unescape("Hengst");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1999;onfunction=closeAllMenus();");
aI("text=&euro; 2400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 084.jpg") ||
filename == escape("paardenbeelden 085.jpg")) {
document.getElementById("title").innerHTML = unescape("Branco");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1999;onfunction=closeAllMenus();");
aI("text=&euro; 2500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 087.jpg") ||
filename == escape("paardenbeelden 088.jpg")) {
document.getElementById("title").innerHTML = unescape("Hengst");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1998;onfunction=closeAllMenus();");
aI("text=&euro; 2400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 089.jpg") ||
filename == escape("paardenbeelden 090.jpg") ||
filename == escape("paardenbeelden 091.jpg")) {
document.getElementById("title").innerHTML = unescape("Hengst");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=2000;onfunction=closeAllMenus();");
aI("text=&euro; 2500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 092.jpg") ||
filename == escape("paardenbeelden 093.jpg")) {
document.getElementById("title").innerHTML = unescape("Merrie");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1996;onfunction=closeAllMenus();");
aI("text=&euro; 2200,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 094.jpg") ||
filename == escape("paardenbeelden 095.jpg")) {
document.getElementById("title").innerHTML = unescape("Merrie");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1996;onfunction=closeAllMenus();");
aI("text=&euro; 2300,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 096.jpg") ||
filename == escape("paardenbeelden 097.jpg")) {
document.getElementById("title").innerHTML = unescape("Merrie");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1997;onfunction=closeAllMenus();");
aI("text=&euro; 2500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 098.jpg") ||
filename == escape("paardenbeelden 099.jpg")) {
document.getElementById("title").innerHTML = unescape("Merrie");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1999;onfunction=closeAllMenus();");
aI("text=&euro; 2400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 100.jpg") ||
filename == escape("paardenbeelden 101.jpg")) {
document.getElementById("title").innerHTML = unescape("Merrie");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1996;onfunction=closeAllMenus();");
aI("text=&euro; 2300,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 102.jpg") ||
filename == escape("paardenbeelden 103.jpg")) {
document.getElementById("title").innerHTML = unescape("Merrie");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1996;onfunction=closeAllMenus();");
aI("text=&euro; 2300,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 104.jpg") ||
filename == escape("paardenbeelden 105.jpg")) {
document.getElementById("title").innerHTML = unescape("Merrie");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1996;onfunction=closeAllMenus();");
aI("text=&euro; 2300,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 106.jpg") ||
filename == escape("paardenbeelden 107.jpg")) {
document.getElementById("title").innerHTML = unescape("Hengst");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 2200,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 108.jpg") ||
filename == escape("paardenbeelden 109.jpg")) {
document.getElementById("title").innerHTML = unescape("Hengst");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 2400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 110.jpg")) {
document.getElementById("title").innerHTML = unescape("Merrie");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 2300,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 112.jpg") ||
filename == escape("paardenbeelden 113.jpg") ||
filename == escape("paardenbeelden 114.jpg") ||
filename == escape("paardenbeelden 116.jpg")) {
document.getElementById("title").innerHTML = unescape("Hengst");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1998;onfunction=closeAllMenus();");
aI("text=&euro; 2500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 117.jpg") ||
filename == escape("paardenbeelden 118.jpg")) {
document.getElementById("title").innerHTML = unescape("Hengst");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 2300,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 119.jpg") ||
filename == escape("paardenbeelden 120.jpg")) {
document.getElementById("title").innerHTML = unescape("Merrie");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1996;onfunction=closeAllMenus();");
aI("text=&euro; 2200,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 121.jpg")) {
document.getElementById("title").innerHTML = unescape("Merrie");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1997;onfunction=closeAllMenus();");
aI("text=&euro; 2300,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 123.jpg")) {
document.getElementById("title").innerHTML = unescape("Merrie");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1998;onfunction=closeAllMenus();");
aI("text=&euro; 2200,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 124.jpg") ||
filename == escape("paardenbeelden 125.jpg")) {
document.getElementById("title").innerHTML = unescape("Merrie");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1998;onfunction=closeAllMenus();");
aI("text=&euro; 2200,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 126.jpg") ||
filename == escape("paardenbeelden 127.jpg") ||
filename == escape("paardenbeelden 128.jpg") || // -> 90 naar links
filename == escape("paardenbeelden 260.jpg")) {
document.getElementById("title").innerHTML = unescape("Hengst");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=2000;onfunction=closeAllMenus();");
aI("text=&euro; 2500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 129.jpg") ||
filename == escape("paardenbeelden 130.jpg")) {
document.getElementById("title").innerHTML = unescape("Merrie");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 2100,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 131.jpg") ||
filename == escape("paardenbeelden 132.jpg")) {
document.getElementById("title").innerHTML = unescape("Merrie");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1998;onfunction=closeAllMenus();");
aI("text=&euro; 2200,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 133.jpg") ||
filename == escape("paardenbeelden 134.jpg")) {
document.getElementById("title").innerHTML = unescape("Hengst");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=2000;onfunction=closeAllMenus();");
aI("text=&euro; 2500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 136.jpg") ||
filename == escape("paardenbeelden 137.jpg")) {
document.getElementById("title").innerHTML = unescape("Hengst");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=2000;onfunction=closeAllMenus();");
aI("text=&euro; 2500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 138.jpg") ||
filename == escape("paardenbeelden 139.jpg")) {
document.getElementById("title").innerHTML = unescape("Merrie");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1996;onfunction=closeAllMenus();");
aI("text=&euro; 2200,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 140.jpg") ||
filename == escape("paardenbeelden 141.jpg")) {
document.getElementById("title").innerHTML = unescape("Merrie");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1997;onfunction=closeAllMenus();");
aI("text=&euro; 2200,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 143.jpg") ||
filename == escape("paardenbeelden 144.jpg")) {
document.getElementById("title").innerHTML = unescape("Merrie");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1997;onfunction=closeAllMenus();");
aI("text=&euro; 2200,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 145.jpg") ||
filename == escape("paardenbeelden 146.jpg")) {
document.getElementById("title").innerHTML = unescape("Merrie");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1999;onfunction=closeAllMenus();");
aI("text=&euro; 2300,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 147.jpg") ||
filename == escape("paardenbeelden 148.jpg") ||
filename == escape("paardenbeelden 149.jpg")) {
document.getElementById("title").innerHTML = unescape("Hengst");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1998;onfunction=closeAllMenus();");
aI("text=&euro; 2500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 150.jpg") ||
filename == escape("paardenbeelden 151.jpg") ||
filename == escape("paardenbeelden 152.jpg")) {
document.getElementById("title").innerHTML = unescape("Hengst");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=2000;onfunction=closeAllMenus();");
aI("text=&euro; 2500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 154.jpg") ||
filename == escape("paardenbeelden 155.jpg")) {
document.getElementById("title").innerHTML = unescape("Hengst");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1999;onfunction=closeAllMenus();");
aI("text=&euro; 2500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 156.jpg") ||
filename == escape("paardenbeelden 157.jpg")) {
document.getElementById("title").innerHTML = unescape("Merrie");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1997;onfunction=closeAllMenus();");
aI("text=&euro; 2300,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 158.jpg") ||
filename == escape("paardenbeelden 159.jpg")) {
document.getElementById("title").innerHTML = unescape("Merrie");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1997;onfunction=closeAllMenus();");
aI("text=&euro; 2300,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 160.jpg") ||
filename == escape("paardenbeelden 161.jpg")) {
document.getElementById("title").innerHTML = unescape("Hengst");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1998;onfunction=closeAllMenus();");
aI("text=&euro; 2500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 162.jpg") ||
filename == escape("paardenbeelden 163.jpg")) {
document.getElementById("title").innerHTML = unescape("Merrie");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1998;onfunction=closeAllMenus();");
aI("text=&euro; 2300,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 164.jpg") ||
filename == escape("paardenbeelden 165.jpg") ||
filename == escape("paardenbeelden 166.jpg")) {
document.getElementById("title").innerHTML = unescape("Merrie");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1998;onfunction=closeAllMenus();");
aI("text=&euro; 2500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 167.jpg") ||
filename == escape("paardenbeelden 168.jpg")) {
document.getElementById("title").innerHTML = unescape("Hengst");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1999;onfunction=closeAllMenus();");
aI("text=&euro; 2400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 169.jpg") ||
filename == escape("paardenbeelden 170.jpg")) {
document.getElementById("title").innerHTML = unescape("Merrie");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1999;onfunction=closeAllMenus();");
aI("text=&euro; 2400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 171.jpg") ||
filename == escape("paardenbeelden 172.jpg") ||
filename == escape("paardenbeelden 173.jpg")) {
document.getElementById("title").innerHTML = unescape("Veulen");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 20x10x28 (HxBxL);onfunction=closeAllMenus();");
aI("text=2000;onfunction=closeAllMenus();");
aI("text=&euro; 1500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 174.jpg") ||
filename == escape("paardenbeelden 175.jpg") ||
filename == escape("paardenbeelden 176.jpg")) {
document.getElementById("title").innerHTML = unescape("Veulen");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 20x10x28 (HxBxL);onfunction=closeAllMenus();");
aI("text=2000;onfunction=closeAllMenus();");
aI("text=&euro; 1500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 177.jpg") ||
filename == escape("paardenbeelden 178.jpg") ||
filename == escape("paardenbeelden 179.jpg")) {
document.getElementById("title").innerHTML = unescape("Veulen");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 20x10x28 (HxBxL);onfunction=closeAllMenus();");
aI("text=2000;onfunction=closeAllMenus();");
aI("text=&euro; 1350,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 180.jpg") ||
filename == escape("paardenbeelden 181.jpg")) {
document.getElementById("title").innerHTML = unescape("Veulen");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 20x10x28 (HxBxL);onfunction=closeAllMenus();");
aI("text=2001;onfunction=closeAllMenus();");
aI("text=&euro; 1500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 182.jpg") ||
filename == escape("paardenbeelden 183.jpg")) {
document.getElementById("title").innerHTML = unescape("Veulen");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 20x10x28 (HxBxL);onfunction=closeAllMenus();");
aI("text=1999;onfunction=closeAllMenus();");
aI("text=&euro; 1250,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 184.jpg") ||
filename == escape("paardenbeelden 185.jpg") ||
filename == escape("paardenbeelden 186.jpg")) {
document.getElementById("title").innerHTML = unescape("Veulen");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 20x10x28 (HxBxL);onfunction=closeAllMenus();");
aI("text=2000;onfunction=closeAllMenus();");
aI("text=&euro; 1600,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 187.jpg") ||
filename == escape("paardenbeelden 188.jpg") ||
filename == escape("paardenbeelden 189.jpg")) {
document.getElementById("title").innerHTML = unescape("Veulen");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 20x10x28 (HxBxL);onfunction=closeAllMenus();");
aI("text=2000;onfunction=closeAllMenus();");
aI("text=&euro; 1500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 190.jpg") ||
filename == escape("paardenbeelden 191.jpg") ||
filename == escape("paardenbeelden 192.jpg") ||
filename == escape("paardenbeelden 193.jpg")) {
document.getElementById("title").innerHTML = unescape("Veulen");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 20x10x28 (HxBxL);onfunction=closeAllMenus();");
aI("text=2001;onfunction=closeAllMenus();");
aI("text=&euro; 1600,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 194.jpg") ||
filename == escape("paardenbeelden 195.jpg") ||
filename == escape("paardenbeelden 196.jpg") ||
filename == escape("paardenbeelden 197.jpg")) {
document.getElementById("title").innerHTML = unescape("Veulen");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 20x10x28 (HxBxL);onfunction=closeAllMenus();");
aI("text=2000;onfunction=closeAllMenus();");
aI("text=&euro; 1400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 198.jpg") || // -> 90 naar links
filename == escape("paardenbeelden 199.jpg") ||
filename == escape("paardenbeelden 200.jpg") ||
filename == escape("paardenbeelden 201.jpg")) {
document.getElementById("title").innerHTML = unescape("Veulen");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 20x10x28 (HxBxL);onfunction=closeAllMenus();");
aI("text=1999;onfunction=closeAllMenus();");
aI("text=&euro; 1800,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 202.jpg") ||
filename == escape("paardenbeelden 203.jpg")) {
document.getElementById("title").innerHTML = unescape("Veulen");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 20x10x28 (HxBxL);onfunction=closeAllMenus();");
aI("text=2000;onfunction=closeAllMenus();");
aI("text=&euro; 1500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 204.jpg") ||
filename == escape("paardenbeelden 205.jpg")) {
document.getElementById("title").innerHTML = unescape("Veulen");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 20x10x28 (HxBxL);onfunction=closeAllMenus();");
aI("text=1999;onfunction=closeAllMenus();");
aI("text=&euro; 1400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 207.jpg") ||
filename == escape("paardenbeelden 208.jpg") ||
filename == escape("paardenbeelden 209.jpg")) {
document.getElementById("title").innerHTML = unescape("Hengst");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1999;onfunction=closeAllMenus();");
aI("text=&euro; 2600,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 210.jpg") ||
filename == escape("paardenbeelden 211.jpg") ||
filename == escape("paardenbeelden 212.jpg")) {
document.getElementById("title").innerHTML = unescape("Hengst");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=2000;onfunction=closeAllMenus();");
aI("text=&euro; 2600,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 213.jpg") ||
filename == escape("paardenbeelden 214.jpg") ||
filename == escape("paardenbeelden 215.jpg")) {
document.getElementById("title").innerHTML = unescape("Merrie");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1998;onfunction=closeAllMenus();");
aI("text=&euro; 2500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 216.jpg") ||
filename == escape("paardenbeelden 217.jpg")) {
document.getElementById("title").innerHTML = unescape("Hengst");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1997;onfunction=closeAllMenus();");
aI("text=&euro; 2500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 218.jpg") ||
filename == escape("paardenbeelden 219.jpg")) {
document.getElementById("title").innerHTML = unescape("Hengst");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 2400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 220.jpg") ||
filename == escape("paardenbeelden 221.jpg") ||
filename == escape("paardenbeelden 222.jpg")) {
document.getElementById("title").innerHTML = unescape("Merrie");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=2000;onfunction=closeAllMenus();");
aI("text=&euro; 2500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 224.jpg") ||
filename == escape("paardenbeelden 225.jpg") ||
filename == escape("paardenbeelden 226.jpg") ||
filename == escape("paardenbeelden 227.jpg")) {
document.getElementById("title").innerHTML = unescape("Merrie");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=2000;onfunction=closeAllMenus();");
aI("text=&euro; 2500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 228.jpg") ||
filename == escape("paardenbeelden 229.jpg") ||
filename == escape("paardenbeelden 230.jpg")) {
document.getElementById("title").innerHTML = unescape("Hengst");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 2400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 232.jpg") ||
filename == escape("paardenbeelden 233.jpg")) {
document.getElementById("title").innerHTML = unescape("Merrie");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1994;onfunction=closeAllMenus();");
aI("text=&euro; 2500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 234.jpg") ||
filename == escape("paardenbeelden 235.jpg")) {
document.getElementById("title").innerHTML = unescape("Hengst");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1999;onfunction=closeAllMenus();");
aI("text=&euro; 2400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 236.jpg")) {
document.getElementById("title").innerHTML = unescape("Hengst");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1995;onfunction=closeAllMenus();");
aI("text=&euro; 2400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 238.jpg") ||
filename == escape("paardenbeelden 239.jpg") ||
filename == escape("paardenbeelden 240.jpg")) {
document.getElementById("title").innerHTML = unescape("Hengst");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1998;onfunction=closeAllMenus();");
aI("text=&euro; 2500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 241.jpg") ||
filename == escape("paardenbeelden 242.jpg")) {
document.getElementById("title").innerHTML = unescape("Merrie");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=2000;onfunction=closeAllMenus();");
aI("text=&euro; 2400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 244.jpg")) {
document.getElementById("title").innerHTML = unescape("Hengst");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1996;onfunction=closeAllMenus();");
aI("text=&euro; 2300,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 245.jpg") ||
filename == escape("paardenbeelden 246.jpg")) {
document.getElementById("title").innerHTML = unescape("Merrie");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1999;onfunction=closeAllMenus();");
aI("text=&euro; 2400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 247.jpg") ||
filename == escape("paardenbeelden 248.jpg")) {
document.getElementById("title").innerHTML = unescape("Hengst");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1998;onfunction=closeAllMenus();");
aI("text=&euro; 2500,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 249.jpg") ||
filename == escape("paardenbeelden 250.jpg")) {
document.getElementById("title").innerHTML = unescape("Hengst");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1997;onfunction=closeAllMenus();");
aI("text=&euro; 2400,-;onfunction=closeAllMenus();");
} else   
//paardenbeelden 251.jpg
//paardenbeelden 252.jpg
//paardenbeelden 253.jpg

if (filename == escape("paardenbeelden 254.jpg")) {
document.getElementById("title").innerHTML = unescape("Hengst");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=2000;onfunction=closeAllMenus();");
aI("text=&euro; 2400,-;onfunction=closeAllMenus();");
} else   
if (filename == escape("paardenbeelden 255.jpg") ||
filename == escape("paardenbeelden 256.jpg") ||
filename == escape("paardenbeelden 257.jpg") ||
filename == escape("paardenbeelden 258.jpg") ||
filename == escape("paardenbeelden 259.jpg")) {
document.getElementById("title").innerHTML = unescape("Merrie");
aI("text=Brons;onfunction=closeAllMenus();");
aI("text=± 30x14x45 (HxBxL);onfunction=closeAllMenus();");
aI("text=1999;onfunction=closeAllMenus();");
aI("text=&euro; 2400,-;onfunction=closeAllMenus();");
} else   







// Medietoriet
if (filename == escape("Im001533.jpg")) {
document.getElementById("title").innerHTML = unescape("Mediétoriet");
aI("text=Bronzen paardengroep;onfunction=closeAllMenus();");
//aI("text=;onfunction=closeAllMenus();");
aI("text=1993-1999;onfunction=closeAllMenus();");
//aI("text=;onfunction=closeAllMenus();");   
} else 
	

/*
// Default
{
document.getElementById("title").innerHTML = unescape("Titel");
aI("text=Materiaal;onfunction=closeAllMenus();"); // NOTE: we need ./ in url, but not in pagematch=darius4.html;
aI("text=Afmeting;onfunction=closeAllMenus();");
aI("text=Jaar;onfunction=closeAllMenus();"); // close menu when leavin More button
aI("text=Prijs;onfunction=closeAllMenus();"); // close menu when leavin More button
}
*/


// Test Slideshow
// NOTE: titel, materiaal, etc. are defined in index.php but the static pages do not have these defined
// and then the menu will not show
//if (titel != undefined) // if it is not defined we can't even check...
{
document.getElementById("title").innerHTML = titel; //unescape("Titel");
aI("text=" + materiaal + ";onfunction=closeAllMenus();"); // NOTE: we need ./ in url, but not in pagematch=darius4.html;
aI("text=" + afmeting + ";onfunction=closeAllMenus();");
aI("text=" + prijs + ";onfunction=closeAllMenus();"); // close menu when leavin More button
aI("text=" + jaar + ";onfunction=closeAllMenus();"); // close menu when leavin More button
}

///////////////////////////////////////

	
}




with(milonic=new menuname("Info")){
//top = "offset=" + sub1TopOffset; 
//left = "offset=" + sub1LeftOffset;
itemwidth=140;	
margin=5;
style=submenuStyle;
aI("text=C.V.;url=http://www.milonic.com/login.php;");
aI("text=Cont@ct;url=http://www.milonic.com/mylicenses.php;");
}




drawMenus();





/*
function mm_changeMenuProperty(menuName, propertyRef, newValue) 
{ 
  var menuNum = getMenuByName(menuName); 
  _m[menuNum][propertyRef] = newValue; 
  BDMenu(menuNum); 
}
*/
/*
function mm_changeItemProperty(menuName, itemName, codeRef, newValue, updateDisplay) 
{ 
  menuName = menuName.toLowerCase(); 
  for (i=0; i<_mi.length; i++) 
    if (_mi[i][1].replace(/\&nbsp\;/ig,' ') == itemName && _m[_mi[i][0]][1] == menuName) break; 
  if (i == _mi.length) return; 
  _mi[i][codeRef] = newValue; 
  if (updateDisplay) BDMenu(_mi[i][0]); 
}
*/

function mm_changeItemProperty(itemNum, newValue)
{
	_mi[itemNum][1] = newValue; // e.g.: 2: materiaal, 1: text property
	//BDMenu(_mi[2][1]);
	BDMenu(1); 	
} 

