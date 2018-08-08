function changeZindex() {
  document.getElementById("featuredVideo").style.zIndex = "2";
  document.getElementById("logo").style.top = "100%";

  var iframe = document.querySelector('iframe');
  var player = new Vimeo.Player(iframe);
  player.play();
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}