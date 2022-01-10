let localP = document.getElementById("local");
let localS = document.getElementById("session");


function setInitialData() {

    if (!localStorage.getItem("localCounter")) {
        localP.innerHTML = ": " + 0;
        localS.innerHTML = ": " + 0;
    }
    else {
        localP.innerHTML = ": " + localStorage.getItem("localCounter");
        localS.innerHTML = ": " + 0;
    }
}
function local() {

    if (localStorage.getItem("localCounter")) {

        localP.innerHTML = ": " + (parseInt(localStorage.getItem("localCounter")) + 1)
        localStorage.setItem("localCounter", parseInt(localStorage.getItem("localCounter")) + 1);
    }
    else {
        localP.innerHTML = ": " + 1;
        localStorage.setItem("localCounter", 1);
    }
}

function session() {

    if (sessionStorage.getItem("sessionCounter")) {

        localS.innerHTML = ": " + (parseInt(sessionStorage.getItem("sessionCounter")) + 1)
        sessionStorage.setItem("sessionCounter", parseInt(sessionStorage.getItem("sessionCounter")) + 1);
    }
    else {
        localS.innerHTML = ": " + 1;
        sessionStorage.setItem("sessionCounter", 1);
    }
}