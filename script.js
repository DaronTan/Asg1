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

button.addEventListener('click', () => {
    // 👇️ hide button
    button.style.display = 'none';
  });