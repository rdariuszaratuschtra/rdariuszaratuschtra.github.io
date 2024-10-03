if(typeof(loc)=="undefined"||loc==""){var loc="";if(document.body&&document.body.innerHTML){var tt=document.body.innerHTML.toLowerCase();var last=tt.indexOf("mw.js\"");if(last>0){var first=tt.lastIndexOf("\"",last);if(first>0&&first<last)loc=document.body.innerHTML.substr(first+1,last-first-1);}}}

var bd=1
document.write("<style type=\"text/css\">");
document.write("\n<!--\n");
var tr="filter:alpha(opacity=85);-moz-opacity:0.85;";if(IE5) tr="";
document.write(".mw_menu {"+tr+"z-index:999;border-color:#000000;border-style:solid;border-width:"+bd+"px 0px "+bd+"px 0px;background-color:#5a7593;position:absolute;left:0px;top:0px;visibility:hidden;}");
document.write(".mw_plain, a.mw_plain:link, a.mw_plain:visited{text-align:left;background-color:#5a7593;color:#ffffff;text-decoration:none;border-color:#000000;border-style:solid;border-width:0px "+bd+"px 0px "+bd+"px;padding:1px 0px 1px 0px;cursor:hand;display:block;font-size:8pt;font-family:Verdana, Arial, Helvetica, sans-serif;}");
document.write("a.mw_plain:hover, a.mw_plain:active{background-color:#bbcad6;color:#000000;text-decoration:none;border-color:#000000;border-style:solid;border-width:0px "+bd+"px 0px "+bd+"px;padding:1px 0px 1px 0px;cursor:hand;display:block;font-size:8pt;font-family:Verdana, Arial, Helvetica, sans-serif;}");
document.write("\n-->\n");
document.write("</style>");

var fc=0x000000;
var bc=0xbbcad6;
if(typeof(frames)=="undefined"){var frames=4;if(frames>0)animate();}

startMainMenu("mw_left.gif",27,38,2,0,0)
mainMenuItem("mw_b1",".gif",27,81,loc+"index.php","","Home",2,2,"mw_plain");
mainMenuItem("mw_b2",".gif",27,81,"javascript:;","","About",2,2,"mw_plain");
mainMenuItem("mw_b3",".gif",27,81,loc+"clients_page.html","","Clients",2,2,"mw_plain");
mainMenuItem("mw_b4",".gif",27,81,"javascript:;","","Services",2,2,"mw_plain");
mainMenuItem("mw_b5",".gif",27,81,"javascript:;","","Tutorials",2,2,"mw_plain");
mainMenuItem("mw_b6",".gif",27,81,"javascript:;","","Resources",2,2,"mw_plain");
mainMenuItem("mw_b7",".gif",27,81,loc+"links_page.html","","Links",2,2,"mw_plain");
endMainMenu("mw_right.gif",27,38)

startSubmenu("mw_b6","mw_menu",81);
submenuItem("PHP",loc+"php_page.html","","mw_plain");
submenuItem("Javascript",loc+"js_page.html","","mw_plain");
submenuItem("XML",loc+"xml_page.html","","mw_plain");
endSubmenu("mw_b6");

startSubmenu("mw_b5","mw_menu",165);
submenuItem("Website Ownership Basics",loc+"owner_page.html","","mw_plain");
submenuItem("HTML Basics",loc+"html_page.html","","mw_plain");
submenuItem("Using FTP",loc+"ftp_page.html","","mw_plain");
submenuItem("Site Accessibility",loc+"access_page.html","","mw_plain");
submenuItem("Using .htaccess",loc+"htaccess_page.html","","mw_plain");
submenuItem("Ajax Tutorial",loc+"ajax_page.html","","mw_plain");
endSubmenu("mw_b5");

startSubmenu("mw_b4","mw_menu",141);
submenuItem("Website Design",loc+"design_page.html","","mw_plain");
submenuItem("Hosting",loc+"hosting_page.html","","mw_plain");
submenuItem("Site Maintenance",loc+"maintenance_page.html","","mw_plain");
submenuItem("Domain Names",loc+"domains.php","","mw_plain");
submenuItem("Recruitment Solutions",loc+"recruitment_page.html","","mw_plain");
endSubmenu("mw_b4");

startSubmenu("mw_b2","mw_menu",81);
submenuItem("Contact",loc+"about_page.html","","mw_plain");
submenuItem("Sitemap",loc+"sitemap_page.html","","mw_plain");
submenuItem("Conditions",loc+"conditions_page.html","","mw_plain");
submenuItem("Guestbook",loc+"gbook/index.htm","","mw_plain");
endSubmenu("mw_b2");

loc="";
