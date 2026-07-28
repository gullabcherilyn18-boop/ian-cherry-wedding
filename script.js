const intro = document.getElementById("intro");
const enterBtn = document.getElementById("enterBtn");
const music = document.getElementById("bgMusic");

// Enter button
enterBtn.addEventListener("click", () => {

    intro.style.opacity = "0";

    setTimeout(() => {
        intro.style.display = "none";
    }, 700);

    music.play().catch(() => {
        console.log("Music autoplay was blocked.");
    });

});

// Scroll Reveal
function revealSections() {

    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;
        const elementTop = section.getBoundingClientRect().top;
        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {

            section.classList.add("active");

        } else {

            section.classList.remove("active");

        }

    });

}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);