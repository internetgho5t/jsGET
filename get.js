function get(e) {
  var r = window.location.href.replace(new RegExp("\\+", "g"), "%20").split("?");
  if (0 == r.length) return "";
  if (r[1]) {
    var n = r[1].split("&"),
      t = "";
    for (i = 0; i < n.length; i++) {
      var a = n[i].split("=");
      if (a[0] == e) {
        t = a[1];
        break
      }
    }
    return (t = unescape(t)).replace("+", " "), t
  } else return;
}
