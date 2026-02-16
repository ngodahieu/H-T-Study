document.addEventListener("DOMContentLoaded", () => {

    /* =======================
       1️⃣ SLIDER
    ======================== */
    let slides = document.querySelectorAll(".slide");
    let index = 0;

    function showSlide() {
        if (slides.length === 0) return;

        slides.forEach(slide => slide.classList.remove("active"));
        slides[index].classList.add("active");

        index++;
        if (index >= slides.length) {
            index = 0;
        }
    }

    if (slides.length > 0) {
        setInterval(showSlide, 3000);
    }


    /* =======================
       2️⃣ SIDEBAR TOGGLE
    ======================== */
    const toggleBtn = document.getElementById("toggleBtn");
    const sidebar = document.getElementById("sidebar");

    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener("click", () => {
            sidebar.classList.toggle("collapsed");
        });
    }


    /* =======================
       3️⃣ DROPDOWN (NOTIFY + AVATAR)
    ======================== */
    const notifyBtn = document.getElementById("notifyBtn");
    const notifyMenu = document.getElementById("notifyMenu");

    const avatarBtn = document.getElementById("avatarBtn");
    const avatarMenu = document.getElementById("avatarMenu");

    if (notifyBtn && notifyMenu) {
        notifyBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            notifyMenu.classList.toggle("show");
            if (avatarMenu) avatarMenu.classList.remove("show");
        });
    }

    if (avatarBtn && avatarMenu) {
        avatarBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            avatarMenu.classList.toggle("show");
            if (notifyMenu) notifyMenu.classList.remove("show");
        });
    }

    document.addEventListener("click", () => {
        if (notifyMenu) notifyMenu.classList.remove("show");
        if (avatarMenu) avatarMenu.classList.remove("show");
    });

});
