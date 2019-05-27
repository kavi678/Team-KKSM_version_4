function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

var Day1Array = [];

// following init fuction will always run when the windw is open. it will take all the items from the local storage and give value to post on a page
function init() {
  if (localStorage.Add1) {
      Day1Array = JSON.parse(localStorage.Add1);
      for (var i = 0; i < Day1Array.length; i++) {
          prepareTableCell(Day1Array[i].exer1, Day1Array[i].mus1, Day1Array[i].se, Day1Array[i].re)




      }
  }


}
// add function will take the item from the text input and stores that values in a specific key named as Day1Array.

function add1() {
    var ex1 = document.getElementById("excersise1").value;
    var mu1 = document.getElementById("muscle1").value;
    var s1 = document.getElementById("set1").value;
    var r1 = document.getElementById("rep1").value;
    var stuObj = {exer1: ex1, mus1: mu1, se: s1, re: r1};
    Day1Array.push(stuObj);
    localStorage.Add1 = JSON.stringify(Day1Array);

    prepareTableCell(ex1, mu1, s1, r1);


}
// following function will make a table and show all the value from the local storage in the rows.
function prepareTableCell(ex1, mu1, s1, r1) {
    var table = document.getElementById("output1");
    var row = table.insertRow();
    var ex1Cell = row.insertCell(0);
    var mu1Cell = row.insertCell(1);
    var s1Cell = row.insertCell(2);
    var r1Cell = row.insertCell(3);
    ex1Cell.innerHTML = ex1;
    mu1Cell.innerHTML = mu1;
    //firstNameCell.colSpan = 2;
    s1Cell.innerHTML = s1;
    r1Cell.innerHTML = r1;



}

// dell function will delete that key from the local storage. Day1Array will be removes from it. when you add again any item it will create a new Day1Array list.
function del1() {

    localStorage.removeItem("Add1");

}
function goBack() {
    window.history.back();
}
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
function openForm1() {
  document.getElementById("cc11").style.display = "none";
  document.getElementById("hideing").style.display="block";
  document.getElementById("hidesen").style.display="none";
}
function closeForm1() {
  document.getElementById("cc11").style.display = "none";
  document.getElementById("hideing").style.display="block";
  document.getElementById("hidesen").style.display="none";
}

// following init fuction will always run when the windw is open. it will take all the items from the local storage and give value to post on a page

// add function will take the item from the text input and stores that values in a specific key named as Day1Array.
