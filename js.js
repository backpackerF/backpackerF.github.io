function mainClick() {
var log = document.getElementById("email").value,
    pas = document.getElementById("password").value,
    el = document.getElementById("info");
    el1 = document.getElementById("email");
    el2 = document.getElementById("password");
    if ((log == "user@example.com" || "User@example.com") && (pas == "mercdev")) {window.location.href = "test2.html"}
	else  if (log == "user@example.com") {document.getElementById("info").innerHTML = "E-Mail or password is incorrect", el.classList.add("email"), el2.style.border = "1px solid red", el1.style.border = "0px solid red", el1.style.color = "black"}
			else {document.getElementById("info").innerHTML = "E-Mail or password is incorrect", el.classList.add("email"), el1.style.color = "red", el1.style.border = "1px solid red", el2.style.border = "0px solid red"};
}

function mainClick2() {
window.location.href = "index.html"
}

var user = document.forms.form;
var json = JSON.stringify(user);
var request = new XMLHttpRequest();
request.open("POST", "https://us-central1-mercdev-academy.cloudfunctions.net/login");
request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200)
            document.getElementById("output").innerHTML=request.responseText;
}
request.send(json);



