_menuCloseDelay=500;
_menuOpenDelay=150;
_subOffsetTop=2;
_subOffsetLeft=-2;




with(menuStyle=new mm_style()){
bgimage="blackforest.gif";
fontfamily="Verdana, Tahoma, Arial";
fontsize="10pt";
fontstyle="normal";
fontweight="normal";
headerbgcolor="#ffffff";
headercolor="#000000";
offcolor="#CAA9B8";
oncolor="#ffffff";
onsubimage="white.gif";
outfilter="fade(duration=0.5)";
overfilter="Fade(duration=0.2);Alpha(opacity=90);Shadow(color=#777777', Direction=135, Strength=5)";
padding=5;
pagecolor="black";
separatorcolor="#ffffff";
separatorimage="whitestripe.gif";
separatorpadding=1;
subimage="grey.gif";
subimagepadding=2;
}

with(submenuStyle=new mm_style()){
styleid=1;
borderstyle="solid";
fontfamily="Verdana, Tahoma, Arial";
fontsize="8pt";
fontstyle="normal";
fontweight="normal";
headercolor="#000000";
offbgcolor="#000000";
offcolor="#AD8DA4";
onborder="1px solid #ffffff";
oncolor="#ffffff";
outfilter="fade(duration=0.5)";
overbgimage="blackforest.gif";
overfilter="Fade(duration=0.2);Alpha(opacity=90);Shadow(color=#777777', Direction=135, Strength=5)";
padding=4;
pagecolor="black";
separatorsize=1;
subimage="purple5x5.gif";
subimagepadding=8;
}

with(milonic=new menuname("Main Menu")){
alwaysvisible=1;
itemheight=20;
itemwidth=94;
left=10;
orientation="horizontal";
style=menuStyle;
top=10;
aI("align=center;status=Back To Home Page;text=Home;url=http://www.milonic.com/;");
aI("align=center;showmenu=Milonic;text=Milonic;");
aI("align=center;showmenu=Partners;text=Partners;");
aI("align=center;showmenu=Links;text=Links;");
aI("align=center;showmenu=MyMilonic;text=My Milonic;");
}

with(milonic=new menuname("Milonic")){
margin=5;
style=submenuStyle;
aI("text=Product Purchasing Page;url=http://www.milonic.com/cbuy.php;");
aI("text=Contact Us;url=http://www.milonic.com/contactus.php;");
aI("text=Newsletter Subscription;url=http://www.milonic.com/newsletter.php;");
aI("text=FAQ;url=http://www.milonic.com/menufaq.php;");
aI("text=Discussion Forum;url=http://www.milonic.com/forum/;");
aI("text=Software License Agreement;url=http://www.milonic.com/license.php;");
aI("text=Privacy Policy;url=http://www.milonic.com/privacy.php;");
}

with(milonic=new menuname("Partners")){
margin=5;
style=submenuStyle;
aI("status=(aq) Web Server Hosting & Services;text=(aq) Web Hosting;url=http://www.a-q.co.uk/;");
aI("text=SMS 2 Email;url=http://www.sms2email.com/;");
aI("text=WebSmith;url=http://www.softidiom.com/?milonicmenu;");
}

with(milonic=new menuname("Links")){
margin=5;
style=submenuStyle;
aI("status=Apache Web Server, the basis of Milonic's Web Site;text=Apache Web Server;url=http://www.apache.org/;");
aI("status=MySQL, Milonic's Prefered Choice of Database Server;text=MySQL Database Server;url=http://ww.mysql.com/;");
aI("status=PHP - Web Server Scripting as used by Milonic;text=PHP - Development;url=http://www.php.net/;");
aI("status=PHP Based Web Forum, Milonic's Recommended Forum Software;text=phpBB Web Forum System;url=http://www.phpbb.net/;");
aI("showmenu=Anti Spam;status=Anti Spam Solutions, as used by Milonic;text=Anti Spam Tools;");
}

with(milonic=new menuname("Anti Spam")){
margin=5;
style=submenuStyle;
aI("text=Spam Cop;url=http://www.spamcop.net/;");
aI("text=Mime Defang;url=http://www.mimedefang.org/;");
aI("text=Spam Assassin;url=http://www.spamassassin.org/;");
}

with(milonic=new menuname("MyMilonic")){
margin=5;
style=submenuStyle;
aI("text=Login;url=http://www.milonic.com/login.php;");
aI("text=Licenses;url=http://www.milonic.com/mylicenses.php;");
aI("text=Invoices;url=http://www.milonic.com/myinvoices.php;");
aI("text=Make Support Request;url=http://www.milonic.com/reqsupport.php;");
aI("text=View Support Requests;url=http://www.milonic.com/mysupport.php;");
aI("text=Your Details;url=http://www.milonic.com/mydetails.php;");
}

drawMenus();

