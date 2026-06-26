const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", reveal);

function reveal() {

    reveals.forEach((element) => {

        const windowHeight = window.innerHeight;

        const top = element.getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            element.classList.add("active");

        }

    });

}