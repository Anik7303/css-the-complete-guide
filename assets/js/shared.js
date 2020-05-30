var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var choosePlanButtonList = document.querySelectorAll(".plan button");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
var modalCancelButton = document.querySelector(".modal__action--negative");

for (var i = 0; i < choosePlanButtonList.length; i++) {
    choosePlanButtonList[i].addEventListener("click", function () {
        backdrop.classList.add("open");
        modal.classList.add("open");
    });
}

function closeModal() {
    if (modal) {
        modal.classList.remove("open");
    }
    backdrop.classList.remove("open");
}

backdrop.addEventListener("click", function () {
    closeModal();
    mobileNav.classList.remove("open");
});

toggleButton.addEventListener("click", function () {
    mobileNav.classList.add("open");
    backdrop.classList.add("open");
});

if (modalCancelButton) {
    modalCancelButton.addEventListener("click", function () {
        closeModal();
    });
}
