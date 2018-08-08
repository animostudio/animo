function changeZindex() {
  document.getElementById("featuredVideo").style.zIndex = "2";

  var iframe = document.querySelector('iframe');
  var player = new Vimeo.Player(iframe);
  player.play();
}

function showLogo() {
  document.getElementById("logo").style.visibility = "visible";
}