function google_get_filename() {
  var validLangs = Array("da", "de", "en_US", "en_GB", "es", "fi",
                         "fr", "it", "ja", "ko", "nl", "no", "pt_BR", "sv",
                         "zh_CN", "zh_TW");
  var lang = window.google_conversion_language;
  if (lang) {
    for (var i=0; i < validLangs.length; i++) {
      if (validLangs[i] == lang) return lang + ".html";
    }
  }
  return "en_US.html";
}

function google_language_code() {
  var lang = window.google_conversion_language;
  if (!lang) return "";
  if (2 == lang.length) return "&hl=" + escape(lang);
  if (5 == lang.length) {
    return ("&hl=" + escape(lang.substring(0,2)) +
      "&gl=" + escape(lang.substring(3,5)));
  }
  return "";
}

function google_handle_conversion() {
  var w = window;

  if (w.google_conversion_snippets) {
    w.google_conversion_snippets = w.google_conversion_snippets + 1;
  } else {
    w.google_conversion_snippets = 1;
  }

  if (w.google_conversion_id) {
    var proto = w.location.protocol.toLowerCase();
    if ('http:' != proto && 'https:' != proto) {
      proto = 'http:';
    }
    var path = "/?";
    if (w.google_conversion_type == 'landing') {
      path = "/extclk?";
    }
    var url = proto +
              "//www.googleadservices.com/pagead/conversion/" + 
              escape(w.google_conversion_id) + path +
              "random=" + (new Date()).getTime();
    if (w.google_conversion_value) {
      url = url + "&value=" + escape(w.google_conversion_value);
    }
    if (w.google_conversion_label) {
      url = url + "&label=" + escape(w.google_conversion_label);
    }
    if (w.google_conversion_ad) {
      url = url + "&gad=" + w.google_conversion_ad;
    }
    if (w.google_conversion_key) {
      url = url + "&gkw=" + w.google_conversion_key;
    }
    if (w.google_conversion_mtc) {
      url = url + "&gmtc=" + w.google_conversion_mtc;
    }
    if (w.google_conversion_raw) {
      url = url + "&graw=" + w.google_conversion_raw;
    }
    if (w.google_conversion_domain) {
      url = url + "&dom=" + w.google_conversion_domain;
    }
    url = url + google_language_code();
    var link = proto + "//services.google.com/sitestats/" +
               google_get_filename() + "?cid=" + escape(w.google_conversion_id);   
    
    if (w.google_conversion_format == 0) {
      document.write('<a href="' + link + '" target="_blank">' +
                     ' <img border=0 height=27 width=135 src="'
                     + url + '"></a>');
    } else if (w.google_conversion_snippets > 1) {
      url = url + '&num=' + w.google_conversion_snippets;
      document.write('<i' + 'mg height="1" width="1" border="0" ' + 
                     'src="' + url + '" />');
    } else {
      url = url + '&fmt=' + w.google_conversion_format;
      if (w.google_conversion_color) {
	url = url + '&bg=' + w.google_conversion_color;
      }
      var width = 300;
      var height = 13;
      if (w.google_conversion_format == 2) {
	width = 200;
	height = 26;
      }
      document.write('<ifr' + 'ame' +
                     ' name="google_conversion_frame"' +
		     ' width="' + width + '"' +
		     ' height="' + height + '"' +
		     ' src="' + url + '"' +
		     ' frameborder="0"' +
                     ' marginwidth="0"' +
                     ' marginheight="0"' +
                     ' vspace="0"' +
                     ' hspace="0"' +
                     ' allowtransparency="true"' +
                     ' scrolling="no">');
      document.write('<i' + 'mg height="1" width="1" border="0" ' + 
                     'src="' + url + '&ifr' + 'ame=0"' +
                     ' />');
      document.write('</ifr' + 'ame>');
    }
  }

  w.google_conversion_id = null;
  w.google_conversion_value = null;
  w.google_conversion_label = null;
  w.google_conversion_language = null;
  w.google_conversion_format = null;
  w.google_conversion_color = null;
}

if (window.google_conversion_format == null) {
  google_conversion_format = 0;
} else if (window.google_conversion_format > 2 ||
           window.google_conversion_format < 0 ) {
  google_conversion_format = 1;
}


function google_get_param(url, param) {
  var i;
  var val;
  if ((i = url.indexOf("?" + param + "=")) > -1 ||
      (i = url.indexOf("?" + param.toUpperCase() + "=")) > -1 ||
      (i = url.indexOf("&" + param + "=")) > -1 ||
      (i = url.indexOf("&" + param.toUpperCase() + "=")) > -1) {
    val = url.substring(i + param.length + 2, url.length);
    if ((i = val.indexOf("&")) > -1) {
      val = val.substring(0, i);
    }
  }
  return val;
}

function google_get_domain(url) {
   if (url) {
     domain = url.match(".?://(www\.)?([^/:]+)");
     if (domain && domain.length >= 3) {
       return domain[2] ? domain[2] : '';
     }
   }
   return "";
}

if (window.google_conversion_type == 'landing') {
  var url = document.location + "";
  google_conversion_domain = document.domain + "";
  var ref = google_get_domain(document.referrer);
  if (ref && (ref.indexOf(google_conversion_domain) > -1 || 
              google_conversion_domain.indexOf(ref) > -1)) {
    url = "";
  }
  google_conversion_ad = google_get_param(url, "gad");
  if (window.google_conversion_ad) {
    (google_conversion_key = google_get_param(url, "gkw")) ||
    (google_conversion_key = google_get_param(url, "ovkey"));
    google_conversion_mtc = google_get_param(url, "ovmtc");
    google_conversion_raw = google_get_param(url, "ovraw");
  }
}

google_handle_conversion();
