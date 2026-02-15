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
// Notification toggle
const notifyBtn = document.getElementById("notifyBtn");
const notifyMenu = document.getElementById("notifyMenu");

notifyBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    notifyMenu.classList.toggle("show");
    avatarMenu.classList.remove("show");
});

// Avatar toggle
const avatarBtn = document.getElementById("avatarBtn");
const avatarMenu = document.getElementById("avatarMenu");

avatarBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    avatarMenu.classList.toggle("show");
    notifyMenu.classList.remove("show");
});

// Click ngoài để đóng
document.addEventListener("click", () => {
    notifyMenu.classList.remove("show");
    avatarMenu.classList.remove("show");
});
