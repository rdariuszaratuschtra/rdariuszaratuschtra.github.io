/* generated javascript */var skin = 'monobook';
var stylepath = '/skins-1.5';/* MediaWiki:Monobook */
/*
<pre>
*/
/* tooltips and access keys */
ta = new Object();
ta['pt-userpage'] = new Array('.','My user page'); 
ta['pt-anonuserpage'] = new Array('.','The user page for the ip you\'re editing as'); 
ta['pt-mytalk'] = new Array('n','My talk page'); 
ta['pt-anontalk'] = new Array('n','Discussion about edits from this ip address'); 
ta['pt-preferences'] = new Array('','My preferences'); 
ta['pt-watchlist'] = new Array('l','The list of pages you\'re monitoring for changes.'); 
ta['pt-mycontris'] = new Array('y','List of my contributions'); 
ta['pt-login'] = new Array('o','Logging in is not required, but brings many benefits.'); 
ta['pt-anonlogin'] = new Array('o','Logging in is not required, but brings many benefits.'); 
ta['pt-logout'] = new Array('o','Log out'); 
ta['ca-talk'] = new Array('t','Discussion about the content page'); 
ta['ca-edit'] = new Array('e','You can edit this page. Please use the preview button before saving.'); 
ta['ca-addsection'] = new Array('+','Start a new discussion'); 
ta['ca-viewsource'] = new Array('e','This page is protected. You can view its source.'); 
ta['ca-history'] = new Array('h','Past versions of this page.'); 
ta['ca-protect'] = new Array('=','Protect this page'); 
ta['ca-unprotect'] = new Array('','Unprotect this page');
ta['ca-delete'] = new Array('d','Delete this page'); 
ta['ca-undelete'] = new Array('d','Restore the edits done to this page before it was deleted'); 
ta['ca-move'] = new Array('m','Move this page'); 
ta['ca-nomove'] = new Array('','You don\'t have the permissions to move this page'); 
ta['ca-watch'] = new Array('w','Add this page to your watchlist'); 
ta['ca-unwatch'] = new Array('w','Remove this page from your watchlist'); 
ta['search'] = new Array('f','Search Wikipedia'); 
ta['p-logo'] = new Array('','Main Page'); 
ta['n-mainpage'] = new Array('z','Visit the Main Page'); 
ta['n-portal'] = new Array('','About the project, what you can do, where to find things');
ta['n-Featured-articles'] = new Array('','Featured articles - the best of Wikipedia'); 
ta['n-currentevents'] = new Array('','Find background information on current events'); 
ta['n-recentchanges'] = new Array('r','List of recent changes in Wikipedia'); 
ta['n-randompage'] = new Array('x','Load a random page'); 
ta['n-help'] = new Array('','The place to find out about Wikipedia'); 
ta['n-contact'] = new Array('','How to contact Wikipedia');
ta['n-sitesupport'] = new Array('','Support us'); 
ta['t-whatlinkshere'] = new Array('j','List of all wiki pages that link here'); 
ta['t-recentchangeslinked'] = new Array('k','Recent changes in pages linked from this page'); 
ta['feed-rss'] = new Array('','RSS feed for this page'); 
ta['feed-atom'] = new Array('','Atom feed for this page'); 
ta['t-contributions'] = new Array('','View the list of contributions of this user'); 
ta['t-emailuser'] = new Array('','Send a mail to this user'); 
ta['t-upload'] = new Array('u','Upload images or media files'); 
ta['t-specialpages'] = new Array('q','List of all special pages');
ta['t-print'] = new Array('','Printable version of this page');
ta['t-permalink'] = new Array('','Permanent link to this version of the page');
ta['t-cite'] = new Array('','Cite this Wikipedia article');
ta['ca-nstab-main'] = new Array('c','View the content page'); 
ta['ca-nstab-user'] = new Array('c','View the user page'); 
ta['ca-nstab-media'] = new Array('c','View the media page'); 
ta['ca-nstab-special'] = new Array('','This is a special page; you can\'t edit the page itself.'); 
ta['ca-nstab-wp'] = new Array('c','View the project page'); 
ta['ca-nstab-image'] = new Array('c','View the image page'); 
ta['ca-nstab-mediawiki'] = new Array('c','View the system message'); 
ta['ca-nstab-template'] = new Array('c','View the template'); 
ta['ca-nstab-help'] = new Array('c','View the help page'); 
ta['ca-nstab-category'] = new Array('c','View the category page');

if (window.showModalDialog && document.compatMode && document.compatMode == "CSS1Compat")
{
  var oldWidth;
  var docEl = document.documentElement;

  function fixIEScroll()
  {
    if (!oldWidth || docEl.clientWidth > oldWidth)
      doFixIEScroll();
    else
      setTimeout(doFixIEScroll, 1);
  
    oldWidth = docEl.clientWidth;
  }

  function doFixIEScroll() {
    docEl.style.overflowX = (docEl.scrollWidth - docEl.clientWidth < 4) ? "hidden" : "";
  }

  document.attachEvent("onreadystatechange", fixIEScroll);
  attachEvent("onresize", fixIEScroll);
}

function addLoadEvent(func) 
{
  if (window.addEventListener) 
    window.addEventListener("load", func, false);
  else if (window.attachEvent) 
    window.attachEvent("onload", func);
}

function LinkFA() 
{
   // iterate over all <span>-elements
   for(var i=0; a = document.getElementsByTagName("span")[i]; i++) {
      // if found a FA span
      if(a.className == "FA") {
         // iterate over all <li>-elements
         for(var j=0; b = document.getElementsByTagName("li")[j]; j++) {
            // if found a FA link
            if(b.className == "interwiki-" + a.id) {
               b.style.padding = "0 0 0 16px";
               b.style.backgroundImage = "url('http://upload.wikimedia.org/wikipedia/en/6/60/LinkFA-star.png')";
               b.style.backgroundRepeat = "no-repeat";
               b.title = "This article has gained featured status";
            }
         }
      }
   }
}

addLoadEvent(LinkFA);

 // ============================================================
 // BEGIN Dynamic Navigation Bars (experimantal)
 
 // set up the words in your language
 var NavigationBarHide = '[ Hide ]';
 var NavigationBarShow = '[ Show ]';
 
 // set up max count of Navigation Bars on page,
 // if there are more, all will be hidden
 // NavigationBarShowDefault = 0; // all bars will be hidden
 // NavigationBarShowDefault = 1; // on pages with more than 1 bar all bars will be hidden
 var NavigationBarShowDefault = 1;
 
 
 // shows and hides content and picture (if available) of navigation bars
 // Parameters:
 //     indexNavigationBar: the index of navigation bar to be toggled
 function toggleNavigationBar(indexNavigationBar)
 {
    var NavToggle = document.getElementById("NavToggle" + indexNavigationBar);
    var NavFrame = document.getElementById("NavFrame" + indexNavigationBar);
 
    if (!NavFrame || !NavToggle) {
        return false;
    }
 
    // if shown now
    if (NavToggle.firstChild.data == NavigationBarHide) {
        for (
                var NavChild = NavFrame.firstChild;
                NavChild != null;
                NavChild = NavChild.nextSibling
            ) {
            if (NavChild.className == 'NavPic') {
                NavChild.style.display = 'none';
            }
            if (NavChild.className == 'NavContent') {
                NavChild.style.display = 'none';
            }
        }
    NavToggle.firstChild.data = NavigationBarShow;
 
    // if hidden now
    } else if (NavToggle.firstChild.data == NavigationBarShow) {
        for (
                var NavChild = NavFrame.firstChild;
                NavChild != null;
                NavChild = NavChild.nextSibling
            ) {
            if (NavChild.className == 'NavPic') {
                NavChild.style.display = 'block';
            }
            if (NavChild.className == 'NavContent') {
                NavChild.style.display = 'block';
            }
        }
    NavToggle.firstChild.data = NavigationBarHide;
    }
 }
 
 // adds show/hide-button to navigation bars
 function createNavigationBarToggleButton()
 {
    var indexNavigationBar = 0;
    // iterate over all < div >-elements
    for(
            var i=0; 
            NavFrame = document.getElementsByTagName("div")[i]; 
            i++
        ) {
        // if found a navigation bar
        if (NavFrame.className == "NavFrame") {
 
            indexNavigationBar++;
            var NavToggle = document.createElement("a");
            NavToggle.className = 'NavToggle';
            NavToggle.setAttribute('id', 'NavToggle' + indexNavigationBar);
            NavToggle.setAttribute('href', 'javascript:toggleNavigationBar(' + indexNavigationBar + ');');
            
            var NavToggleText = document.createTextNode(NavigationBarHide);
            NavToggle.appendChild(NavToggleText);
            // Find the NavHead and attach the toggle link (Must be this complicated because Moz's firstChild handling is borked)
            for(
              var j=0; 
              j < NavFrame.childNodes.length; 
              j++
            ) {
              if (NavFrame.childNodes[j].className == "NavHead") {
                NavFrame.childNodes[j].appendChild(NavToggle);
              }
            }
            NavFrame.setAttribute('id', 'NavFrame' + indexNavigationBar);
        }
    }
    // if more Navigation Bars found than Default: hide all
    if (NavigationBarShowDefault < indexNavigationBar) {
        for(
                var i=1; 
                i<=indexNavigationBar; 
                i++
        ) {
            toggleNavigationBar(i);
        }
    }
 
 }
 
 addLoadEvent(createNavigationBarToggleButton);
 
 // END Dynamic Navigation Bars
 // ============================================================




var mpTitle = "Main Page";
var isMainPage = (document.title.substr(0, document.title.lastIndexOf(" - ")) == mpTitle);
var isDiff = (document.location.search && (document.location.search.indexOf("diff=") != -1 || document.location.search.indexOf("oldid=") != -1));

if (isMainPage && !isDiff) 
{
document.write('<style type="text/css">/*<![CDATA[*/ #siteSub, #contentSub, h1.firstHeading { display: none !important; } /*]]>*/</style>');

var mpSmallEnabled;
var mpMinWidth = 700;

function mainPageTransform()
{
	var mpContentEl = document.getElementById("bodyContent");
	var mpBrowseEl = document.getElementById("EnWpMpBrowse");
	var mpContainEl = document.getElementById("EnWpMpBrowseContainer");
	var mpMarginEl = document.getElementById("EnWpMpMargin");
	var mpEl = document.getElementById("EnWpMainPage");

	if (!mpContentEl || !mpBrowseEl || !mpContainEl || !mpMarginEl || !mpEl)
		return;

	if (!mpSmallEnabled && mpContentEl.offsetWidth < mpMinWidth)
	{
		mpContainEl.insertBefore(mpBrowseEl, mpContainEl.firstChild);
		mpBrowseEl.className = "EnWpMpBrowseBottom";
		mpMarginEl.style.marginRight = 0;
		mpSmallEnabled = true;
	}
	else if (mpSmallEnabled && mpContentEl.offsetWidth > mpMinWidth)
	{
		mpEl.insertBefore(mpBrowseEl, mpEl.firstChild);
		mpBrowseEl.className = "EnWpMpBrowseRight";
		mpMarginEl.style.marginRight = "13.8em";
		mpSmallEnabled = false;
	}
}

var onloadFuncts = [ mainPageTransform ];

if (window.addEventListener) 
  window.addEventListener("resize", mainPageTransform, false);
else if (window.attachEvent) 
  window.attachEvent("onresize", mainPageTransform);

}

//Main page tab no longer says article
function mainpg() {
      if ((isMainPage || /[\/=:]Main_Page/.test(document.location)) && document.getElementById('ca-nstab-main')) {
            document.getElementById('ca-nstab-main').firstChild.innerHTML = 'Main Page';
      }   
}
addOnloadHook(mainpg);

/* add a redirect button to the edit page toolbar */
if (mwCustomEditButtons) {
  mwCustomEditButtons[mwCustomEditButtons.length] = {
    "imageFile": "http://upload.wikimedia.org/wikipedia/en/c/c8/Button_redirect.png",
    "speedTip": "Redirect",
    "tagOpen": "#REDIRECT [[",
    "tagClose": "]]",
    "sampleText": "Insert text"};
};




/*
</pre>
*/