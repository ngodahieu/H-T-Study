// Slider
let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");

    index++;
    if(index >= slides.length) {
        index = 0;
    }
}

setInterval(showSlide, 3000);

// Sidebar toggle
const toggleBtn = document.getElementById("toggleBtn");
const sidebar = document.getElementById("sidebar");

toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
});
