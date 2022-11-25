function startButton() {
    var x = document.getElementById("hidden");
    var y = document.getElementById("start");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
    }

    else {
        x.style.display = "none"; 
    }
}

const button = document.getElementById('start');


var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function openTab(tabname) {
    for(link of tablinks) {
        link.classList.remove("active-link");
    }
    for(content of tabcontents) {
        content.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}