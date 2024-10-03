var wwmExternalLinkTracker = {
	init : function() {
		var linkEls = document.getElementsByTagName('a');
		
		if (0 == linkEls.length) {
			return;
		}
		
		for (var x=0; x<linkEls.length; x++) {
			var href = linkEls[x].href;
			
			if ('/' != href.substring(0, 1) && !href.match(/http:\/\/(www\.)?workingwith\.me\.uk/)) {
				addEvent(linkEls[x], 'click', "urchinTracker('/outgoing/'+href)");
			}
		}
	}
};

function wwmExternalLinkTrackerInitializer() {
	wwmExternalLinkTracker.init();
}
addEvent(window,'load',wwmExternalLinkTrackerInitializer);