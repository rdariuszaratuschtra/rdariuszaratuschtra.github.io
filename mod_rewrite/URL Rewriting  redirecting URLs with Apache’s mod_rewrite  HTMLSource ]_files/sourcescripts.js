function checkSearch() {
  if (document.getElementById && document.getElementById('mainsearch').value=="") {
    alert("First enter some words to search for, yo.");
    document.getElementById('mainsearch').focus();
    return false;
  } else {
    return true;
  }
}

function faves() {
  if (document.all && navigator.userAgent.indexOf("Opera")==-1) {
  document.write("<a href=\"javascript:window.external.addfavorite('http://www.yourhtmlsource.com','HTMLSource: HTML Tutorials');\" class=\"nav\">Add HTMLSource to your favorites!</a><br />");
  } else {
  document.write("Press Ctrl+D to add HTMLSource to your bookmarks!");
  }
}

function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

window.onload = function() {
  window.defaultStatus="HTMLSource: HTML Tutorials, just for you.";
}
