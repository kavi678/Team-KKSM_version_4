function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
function openmyr() {
  document.getElementById("o1").style.display = "block";
  document.getElementById("o2").style.display = "none";
}
function openmyf() {
  document.getElementById("o2").style.display = "block";
  document.getElementById("o1").style.display = "none";
}

var Day2Array = [];
// following init fuction will always run when the windw is open. it will take all the items from the local storage and give value to post on a page
function init() {
  if (localStorage.Add9) {
      Day2Array = JSON.parse(localStorage.Add9);
      for (var i = 0; i < Day2Array.length; i++) {
          prepareTableCell(Day2Array[i].exer2, Day2Array[i].mus2, Day2Array[i].se2, Day2Array[i].re2)




      }
  }

}
// add function will take the item from the text input and stores that values in a specific key named as Day1Array.

function add2() {
    var ex2 = document.getElementById("excersise1").value;
    var mu2 = document.getElementById("muscle1").value;
    var s2 = document.getElementById("set1").value;
    var r2 = document.getElementById("rep1").value;
    var stuObj = {exer2: ex2, mus2: mu2, se2: s2, re2: r2};
    Day2Array.push(stuObj);
    localStorage.Add9 = JSON.stringify(Day2Array);

    prepareTableCell(ex2, mu2, s2, r2);


}
// following function will make a table and show all the value from the local storage in the rows.
function prepareTableCell(ex2, mu2, s2, r2) {
    var ddd = document.createElement("B");
    var uuuu = document.createElement("U")
    var nodee = document.createElement("p");
    var noder = document.createElement("p");
    var nodet = document.createElement("p");
    var nodey = document.createElement("p");
    var ea = document.createElement("p");
    var node = document.createElement("br");
    var nodehr = document.createElement("hr");
    var textnode = document.createTextNode("");
    var textnodehr = document.createTextNode("");
    var easy = document.createElement("a");
    var easy1 = document.createElement("a");
    var easy2 = document.createElement("a");
    var easy3 = document.createElement("a");
    var easy4 = document.createElement("a");
    var buu = document.createElement("button");


    nodee.appendChild(easy);
    noder.appendChild(easy1);
    nodet.appendChild(easy2);
    nodey.appendChild(easy3);
    ea.appendChild(easy4);
    ddd.appendChild(uuuu);
    uuuu.appendChild(nodee);
    easy4.appendChild(buu)
    var textnode1 = ex2;
    var textnode2 = ex2 + " Ingredients: " + mu2;
    var textnode3 = ex2 + " Steps: " + s2;
    var textnode4 = ex2 + " calories:" +  r2;
    var ertyu = ex2 + " " + "360* Image";
    easy.append(textnode1);
    easy1.append(textnode2);
    easy2.append(textnode3);
    easy3.append(textnode4);
    node.append(textnode);
    nodehr.append(textnodehr);
    buu.append(ertyu);
    /*document.getElementById("output1").appendChild(nodee);*/
    document.getElementById("output1").appendChild(ddd);
    document.getElementById("output1").appendChild(noder);
    document.getElementById("output1").appendChild(nodet);
    document.getElementById("output1").appendChild(nodey);
    document.getElementById("output1").appendChild(node);
    document.getElementById("output1").appendChild(ea);

    /*document.getElementById("output1").appendChild(nodehr);*/







}

// dell function will delete that key from the local storage. Day1Array will be removes from it. when you add again any item it will create a new Day1Array list.
function del2() {

    localStorage.removeItem("Add9");

}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function yFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("output1");
    li = ul.getElementsByTagName("p");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
function goBack() {
    window.history.back();
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
function yyFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInp");
    filter = input.value.toUpperCase();
    ul = document.getElementById("ott1");
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
