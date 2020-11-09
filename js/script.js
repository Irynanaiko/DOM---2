window.addEventListener("DOMContentLoaded", () => {
    const btnOpen = document.querySelector(".open"),
        modal = document.querySelector(".modal"),
        btnClose = document.querySelector(".close");

    btnOpen.addEventListener("click", () => {
        modal.classList.add("show");
        modal.classList.remove("hide");
    });

    btnClose.addEventListener("click", () => {
        modal.classList.add("hide");
        modal.classList.remove("show");
    });
});