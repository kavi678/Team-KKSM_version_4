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
function yFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("output1");
    li = ul.getElementsByClassName("x1");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("B")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }

}
function openForm1() {
  document.getElementById("z1").style.display = "block";
}

function closeForm1() {
  document.getElementById("z1").style.display = "none";
}
function openForm2() {
  document.getElementById("z2").style.display = "block";
}

function closeForm2() {
  document.getElementById("z2").style.display = "none";
}
function openForm3() {
  document.getElementById("z3").style.display = "block";
}

function closeForm3() {
  document.getElementById("z3").style.display = "none";
}
function openForm4() {
  document.getElementById("z4").style.display = "block";
}

function closeForm4() {
  document.getElementById("z4").style.display = "none";
}
function openForm5() {
  document.getElementById("z5").style.display = "block";
}

function closeForm5() {
  document.getElementById("z5").style.display = "none";
}
function openForm6() {
  document.getElementById("z6").style.display = "block";
}

function closeForm6() {
  document.getElementById("z6").style.display = "none";
}
function openForm7() {
  document.getElementById("z7").style.display = "block";
}

function closeForm7() {
  document.getElementById("z7").style.display = "none";
}
function openForm8() {
  document.getElementById("z8").style.display = "block";
}

function closeForm8() {
  document.getElementById("z8").style.display = "none";
}
function openForm9() {
  document.getElementById("z9").style.display = "block";
}

function closeForm9() {
  document.getElementById("z9").style.display = "none";
}
function openForm10() {
  document.getElementById("z10").style.display = "block";
}

function closeForm10() {
  document.getElementById("z10").style.display = "none";
}
function goBack() {
    window.history.back();
}
function oForm() {
  document.getElementById("myForm").style.display = "block";
}

function cForm() {
  document.getElementById("myForm").style.display = "none";
}
