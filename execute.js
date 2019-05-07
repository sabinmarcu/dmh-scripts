// Snippet
javascript: void ((function () {
  var url = window.prompt("GIST Url (or anything reachable)");
  if (url && url.length > 0) {
    var r = new XMLHttpRequest();
    r.addEventListener("load", function () {
      eval(this.responseText);
    });
    r.open("GET", url, true);
    r.send();
  }
})());