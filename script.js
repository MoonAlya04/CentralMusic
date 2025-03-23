document.addEventListener("DOMContentLoaded", () => {
    let burgerBtn = document.getElementById("burgerBtn");
    let mobileMenu = document.getElementById("mobileMenu");
    let menuOverlay = document.getElementById("menuOverlay");
    let closeBtn = document.getElementById("closeBtn");

    burgerBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("visible");
        menuOverlay.classList.toggle("visible");
    });

    menuOverlay.addEventListener("click", () => {
        mobileMenu.classList.remove("visible");
        menuOverlay.classList.remove("visible");
    });

    closeBtn.addEventListener("click", () => {
        mobileMenu.classList.remove("visible");
        menuOverlay.classList.remove("visible");
    });
});