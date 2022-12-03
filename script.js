var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function openTab(tabname) {
	for (link of tablinks) {
		link.classList.remove("active-link");
	}
	for (content of tabcontents) {
		content.classList.remove("active-tab");
	}
	event.currentTarget.classList.add("active-link");
	document.getElementById(tabname).classList.add("active-tab");
}

window.addEventListener("scroll", () => {
	let header = document.querySelector(".container");
	header.classList.toggle("sticky", window.scrollY > 0);
});

let popup = document.getElementById("popup");

function openPopup() {
	popup.classList.add("open-popUp");
}

function closePopup() {
	popup.classList.remove("open-popUp");
}

function checkValid() {
	var inputs = document.getElementById("inputs");
	if (!inputs.value.length) {
		return;
	} else {
		openPopup();
	}
}
