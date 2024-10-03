_menuCloseDelay=500;
_menuOpenDelay=150;
_subOffsetTop=2;
_subOffsetLeft=-2;




with(submenuStyle=new mm_style()){
bordercolor="#ACABAB";
borderstyle="solid";
borderwidth=1;
fontfamily="Verdana, Tahoma, Arial";
fontsize="8pt";
fontstyle="normal";
fontweight="normal";
headercolor="#000000";
offbgcolor="#ffffff";
offcolor="#ACABAB";
onbgcolor="#ffffff";
oncolor="#7B7B7A";
outfilter="Blinds( Bands=1,direction=down, duration=0.5)";
overfilter="Blinds( Bands=1,direction=up, duration=0.3)";
padding=3;
pagecolor="black";
separatorcolor="#ffffff";
separatorsize=1;
subimagepadding=8;
}

with(menuStyle=new mm_style()){
styleid=1;
bordercolor="#ACABAB";
borderstyle="solid";
borderwidth=1;
fontfamily="Verdana, Tahoma, Arial";
fontsize="10pt";
fontstyle="normal";
fontweight="normal";
headerbgcolor="#ffffff";
headercolor="#000000";
image="square_dust.gif";
imagepadding=6;
offbgcolor="#ffffff";
offcolor="#ACABAB";
onbgcolor="#ffffff";
oncolor="#7B7B7A";
outfilter="Fade(Overlap=1.00)";
overimage="square_blue.gif";
padding=5;
pagecolor="black";
separatorcolor="#ffffff";
separatorsize=1;
subimagepadding=8;
}

with(milonic=new menuname("Main Menu")){
alwaysvisible=1;
left=10;
openstyle="up";
orientation="horizontal";
style=menuStyle;
top=10;
aI("status=Back To Home Page;text=Home;url=http://www.milonic.com/;");
aI("showmenu=Milonic;text=Milonic;");
aI("showmenu=Partners;text=Partners;");
aI("showmenu=Links;text=Links;");
aI("showmenu=MyMilonic;text=My Milonic;");
}

with(milonic=new menuname("Milonic")){
openstyle="up";
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
openstyle="up";
style=submenuStyle;
aI("status=(aq) Web Server Hosting & Services;text=(aq) Web Hosting;url=http://www.a-q.co.uk/;");
aI("text=SMS 2 Email;url=http://www.sms2email.com/;");
aI("text=WebSmith;url=http://www.softidiom.com/?milonicmenu;");
}

with(milonic=new menuname("Links")){
openstyle="up";
style=submenuStyle;
aI("status=Apache Web Server, the basis of Milonic's Web Site;text=Apache Web Server;url=http://www.apache.org/;");
aI("status=MySQL, Milonic's Prefered Choice of Database Server;text=MySQL Database Server;url=http://ww.mysql.com/;");
aI("status=PHP - Web Server Scripting as used by Milonic;text=PHP - Development;url=http://www.php.net/;");
aI("status=PHP Based Web Forum, Milonic's Recommended Forum Software;text=phpBB Web Forum System;url=http://www.phpbb.net/;");
aI("showmenu=Anti Spam;status=Anti Spam Solutions, as used by Milonic;text=Anti Spam Tools;");
}

with(milonic=new menuname("MyMilonic")){
openstyle="up";
style=submenuStyle;
aI("text=Login Here;url=http://www.milonic.com/login.php;");
aI("text=License Details;url=http://www.milonic.com/mylicenses.php;");
aI("text=Milonic Invoices;url=http://www.milonic.com/myinvoices.php;");
aI("text=Your Details;url=http://www.milonic.com/mydetails.php;");
}

drawMenus();

