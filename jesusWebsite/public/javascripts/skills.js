var okay = document.getElementById("skill-level");

var header = document.getElementById("skills");
var btns = document.getElementsByClassName("skill");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

function javascript(){
    okay.src = "/images/javaScript.png";
}

function python(){
    okay.src = "/images/python.png";
}

function Cmas(){
    okay.src = "/images/C++.png";
}

function C(){
    okay.src = "/images/C++.png";
}

function java(){
    okay.src = "/images/java.png";
}

function sql(){
    okay.src = "/images/sql.png";
}

function css(){
    okay.src = "/images/css.png";
}

function html(){
    okay.src = "/images/HTML.png";
}

function node(){
    okay.src = "/images/nodejs.png";
}


function normal () {
    okay.src = "/images/inst.png";
}