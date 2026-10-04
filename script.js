// گرفتن دکمه منو و خود منو
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

// با کلیک روی دکمه، منو باز یا بسته شود
menuToggle.addEventListener("click", function () {
nav.classList.toggle("open");
});

// با کلیک روی هر لینک، منو در موبایل بسته شود
nav.querySelectorAll("a").forEach(function (link) {
link.addEventListener("click", function () {
nav.classList.remove("open");
});
});