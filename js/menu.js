function openMenu() {
  var MenuOpener = document.getElementById("nav").querySelector("li.open-menu");
  MenuOpener.style.display = "none";

  var MenuBG = document.getElementsByTagName("nav");
  MenuBG[0].style = "overflow: scroll; height: 100vh; background-color : rgba(23,31,53,0.9)";

  var Menu = document.getElementById("nav").querySelectorAll("li");
  Menu[1].style.display = "block";
  for (var i = 3; i <= Menu.length; i++) {
    Menu[i].style.display = "block";
  }
}

function closeMenu() {
  var MenuBG = document.getElementsByTagName("nav");
  MenuBG[0].removeAttribute("style");

  var Menu = document.getElementById("nav").querySelectorAll("li");
  for (var i = 0; i <= Menu.length; i++) {
    Menu[i].removeAttribute("style");
  }
}
