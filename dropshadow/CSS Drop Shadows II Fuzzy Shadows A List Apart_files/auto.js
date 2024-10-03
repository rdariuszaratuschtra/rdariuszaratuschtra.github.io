// AutoBlink
// Puts Google's Autolink on the Blink :)
// (c) 2005 Chris Ridings   http://www.searchguild.com
// Redistribute at will but leave this message intact
// -
// 5th March - Implemented speed enhancement suggested by the guy who wrote
// http://www.dougaltoolbar.com/
// -
// 5th March - Added additional elements to reduce machine load
// 5th March - Added option to not remove links but to 
// rewrite ISBN links as amazon affiliate links!
// Fill in the following
// if you wish to do this. e.g.  var amazonaffiliate="goodlookingco-20"
// Leave as is to remove links in the normal way
var amazonaffiliate="";

var linkcount;
function checklinks() {
	if (!(linkcount==document.links.length)) {
		// Something changed the links!
		// Iterate for an id of _goog
		for (i=0; i < document.links.length; i++) {
			if (document.links[i].id.substring(0,5)=="_goog") {
				// if we find an id of _goog then do something
				if (amazonaffiliate=="") { 
					// no affiliate id defined so remove the links
					var tr = document.links[i].parentTextEdit.createTextRange();
					tr.moveToElementText(document.links[i]);
					tr.execCommand("Unlink",false);
					tr.execCommand("Unselect",false);
					i--;
				} else {
					// An affiliate id defined so rewrite ISBN links
					if (document.links[i].href.indexOf("isbn")>0) {
						var isbn=document.links[i].href.substring(document.links[i].href.indexOf("text")+5,document.links[i].href.length);
						document.links[i].href="http://www.amazon.com/exec/obidos/external-search?search-type=ss&tag=" + amazonaffiliate + "&keyword=" + isbn + "&index=books";
					}
				}
			}
		}
	}
		linkcount = document.links.length;
		setTimeout("checklinks()",500);
}
if (document.getElementById && document.createElement) {
	linkcount=document.links.length;
	setTimeout("checklinks()",500);
}
