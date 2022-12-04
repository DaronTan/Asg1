// js for tab links under About section

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

// js for game slideshows under Games section

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
	showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides((slideIndex = n));
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("slides");
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex - 1].style.display = "block";
}

//js for popup under Contact section
let popup = document.getElementById("popup");
let hide = document.getElementById("content-whole");

function openPopup() {
	popup.classList.add("open-popUp");
	hide.classList.add("hidden");
}

function closePopup() {
	popup.classList.remove("open-popUp");
	hide.classList.remove("hidden");
}

function checkValid() {
	var inputname = document.getElementById("input-name");
	var inputemail = document.getElementById("input-email");
	var inputphone = document.getElementById("input-phone");
	var inputtext = document.getElementById("input-text");
	if (
		!inputname.value.length &&
		!inputemail.value.length &&
		!inputphone.value.length &&
		!inputtext.value.length
	) {
		return;
	} else {
		openPopup();
	}
}

//js for mobile view navigation bar
var sidebar = document.getElementById("sidebar");

function openBar() {
	sidebar.style.right = "0";
}

function closeBar() {
	sidebar.style.right = "-200px";
}
