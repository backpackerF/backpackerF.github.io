"use strict"
window.onscroll = function() {myFunction()};

let header = document.getElementById("header");
let sticky = header.offsetTop+450;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
    document.getElementById("header_number").style.display="";
  } else {
    header.classList.remove("sticky");
    document.getElementById("header_number").style.display="none";
  }
}

button_next_leader.onclick = function () {
	document.getElementById("table_leader").scrollLeft += 50;
};

button_back_leader.onclick = function () {
	document.getElementById("table_leader").scrollLeft -= 50;
}

button_next_cargo_16.onclick = function () {
	document.getElementById("table_cargo_16").scrollLeft += 50;
};

button_back_cargo_16.onclick = function () {
	document.getElementById("table_leader_cargo_16").scrollLeft -= 50;
}

button_next_cargo_25.onclick = function () {
	document.getElementById("table_cargo_25").scrollLeft += 50;
};

button_back_cargo_25.onclick = function () {
	document.getElementById("table_leader_cargo_25").scrollLeft -= 50;
}