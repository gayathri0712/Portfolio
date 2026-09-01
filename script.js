// =======================================
// PAGE LOADER
// =======================================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1000);

});


// =======================================
// MOBILE MENU
// =======================================

const menuIcon =
    document.getElementById("menu-icon");

const navbar =
    document.getElementById("navbar");


menuIcon.addEventListener("click", () => {

    navbar.classList.toggle("show");

    const icon =
        menuIcon.querySelector("i");


    if (navbar.classList.contains("show")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


document.querySelectorAll(".navbar a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navbar.classList.remove("show");

            const icon =
                menuIcon.querySelector("i");

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        });

    });


// =======================================
// TYPING EFFECT
// =======================================

const words = [

    "Java Developer",
    "Web Developer",
    "Full Stack Developer",
    "Problem Solver",
    "CSE Student"

];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

const typing =
    document.querySelector(".typing");


function typeEffect() {

    const word =
        words[wordIndex];


    if (!deleting) {

        typing.textContent =
            word.substring(0, charIndex + 1);

        charIndex++;


        if (charIndex === word.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typing.textContent =
            word.substring(0, charIndex - 1);

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            wordIndex++;


            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }


    setTimeout(

        typeEffect,

        deleting ? 60 : 100

    );

}


typeEffect();


// =======================================
// SCROLL REVEAL
// =======================================

const revealElements =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    const windowHeight =
        window.innerHeight;


    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;


        if (elementTop <
            windowHeight - 100) {

            element.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);


revealOnScroll();


// =======================================
// ACTIVE NAVIGATION
// =======================================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".navbar a");


window.addEventListener("scroll", () => {

    let current = "";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;


        if (window.scrollY >= sectionTop) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");


        if (
            link.getAttribute("href")
            === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


// =======================================
// BACK TO TOP
// =======================================

const topButton =
    document.getElementById("top-btn");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});


topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});