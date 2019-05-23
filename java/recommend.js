function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function yyFunction() {
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
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}



function goBack() {
    window.history.back();
}
function ooff1() {
  document.getElementById("k1").innerHTML = "Recipe added to favourites";
}
function ooff2() {
  document.getElementById("k2").innerHTML = "Recipe added to favourites";
}
function ooff3() {
document.getElementById("k3").innerHTML = "Recipe added to favourites";
}
function ooff4() {
  document.getElementById("k4").innerHTML = "Recipe added to favourites";
}
function ooff5() {
  document.getElementById("k5").innerHTML = "Recipe added to favourites";
}
function ooff6() {
  document.getElementById("k6").innerHTML = "Recipe added to favourites";
}
function ooff7() {
  document.getElementById("k7").innerHTML = "Recipe added to favourites";
}
function ooff8() {
  document.getElementById("k8").innerHTML = "Recipe added to favourites";
}
function ooff9() {
  document.getElementById("k9").innerHTML = "Recipe added to favourites";
}
function ooff10() {
  document.getElementById("k10").innerHTML = "Recipe added to favourites";
}

function oo1() {
  document.getElementById("k1").innerHTML = "Recipe removed from favourites";
}
function oo2() {
  document.getElementById("k2").innerHTML = "Recipe removed from favourites";
}
function oo3() {
  document.getElementById("k3").innerHTML = "Recipe removed from favourites";
}
function oo4() {
  document.getElementById("k4").innerHTML = "Recipe removed from favourites";
}
function oo5() {
document.getElementById("k5").innerHTML = "Recipe removed from favourites";
}
function oo6() {
  document.getElementById("k6").innerHTML = "Recipe removed from favourites";
}
function oo7() {
  document.getElementById("k7").innerHTML = "Recipe removed from favourites";
}
function oo8() {
  document.getElementById("k8").innerHTML = "Recipe removed from favourites";
}
function oo9() {
  document.getElementById("k9").innerHTML = "Recipe removed from favourites";
}
function oo10() {
  document.getElementById("k10").innerHTML = "Recipe removed from favourites";
}
function mFunct() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
function mFunct2() {
  var popup2 = document.getElementById("myPopup2");
  popup2.classList.toggle("show2");
}
function mFunct3() {
  var popup3 = document.getElementById("myPopup3");
  popup3.classList.toggle("show3");
}
function mFunct4() {
  var popup4 = document.getElementById("myPopup4");
  popup4.classList.toggle("show4");
}
function mFunct5() {
  var popup5 = document.getElementById("myPopup5");
  popup5.classList.toggle("show5");
}
