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
