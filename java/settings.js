function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
window.onscroll = function() {myFunction()};

var lnav = document.getElementById("lnav");
var sticky = lnav.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    lnav.classList.add("sticky")
  } else {
    lnav.classList.remove("sticky");
  }
}
function openForm1() {
  document.getElementById("cc11").style.display = "block";
}
function closeForm1() {
  document.getElementById("cc11").style.display = "none";
}
function openForm2() {
  document.getElementById("cc12").style.display = "block";
}
function closeForm2() {
  document.getElementById("cc12").style.display = "none";
}
function goBack() {
    window.history.back();
}
