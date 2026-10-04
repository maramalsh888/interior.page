/* =========================================================
   AUREA STUDIO
   INTERACTIONS & ANIMATIONS
========================================================= */


/* =========================================================
   PRELOADER
========================================================= */

window.addEventListener("load", () => {

    const preloader = document.querySelector(".preloader");

    setTimeout(() => {
        preloader.classList.add("hide");
    }, 1900);

});


/* =========================================================
   MOBILE MENU
========================================================= */

const menuBtn = document.querySelector(".menu-btn");
const closeMenu = document.querySelector(".close-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");

if (menuBtn && closeMenu && mobileMenu) {

    menuBtn.addEventListener("click", () => {

        mobileMenu.classList.add("active");
        document.body.classList.add("menu-open");

    });


    closeMenu.addEventListener("click", () => {

        mobileMenu.classList.remove("active");
        document.body.classList.remove("menu-open");

    });


    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");
            document.body.classList.remove("menu-open");

        });

    });

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px"
    }
);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   PROJECT FILTER
========================================================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projects =
    document.querySelectorAll(".project-card");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const filter = button.dataset.filter;


        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        projects.forEach(project => {

            const category =
                project.dataset.category;


            if (
                filter === "all" ||
                category === filter
            ) {

                project.classList.remove("hidden");

                project.style.opacity = "0";
                project.style.transform = "translateY(20px)";


                requestAnimationFrame(() => {

                    project.style.opacity = "1";
                    project.style.transform = "translateY(0)";

                });

            } else {

                project.style.opacity = "0";
                project.style.transform = "translateY(20px)";


                setTimeout(() => {

                    project.classList.add("hidden");

                }, 400);

            }

        });

    });

});


/* =========================================================
   HEADER ON SCROLL
========================================================= */

const header =
    document.querySelector(".header");


let lastScroll = 0;


window.addEventListener(
    "scroll",
    () => {

        const currentScroll =
            window.scrollY;


        if (currentScroll > 60) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }


        lastScroll = currentScroll;

    },
    { passive: true }
);


/* =========================================================
   BACK TO TOP
========================================================= */

const backTop =
    document.querySelector(".back-top");


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 700) {

            backTop.classList.add("show");

        } else {

            backTop.classList.remove("show");

        }

    },
    { passive: true }
);


backTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================================
   CURRENT YEAR
========================================================= */

const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* =========================================================
   HERO PARALLAX
========================================================= */

const heroImage =
    document.querySelector(".hero-image img");


window.addEventListener(
    "scroll",
    () => {

        if (!heroImage) return;

        const scroll =
            window.scrollY;


        if (scroll < window.innerHeight) {

            heroImage.style.transform =
                `translateY(${scroll * 0.08}px) scale(1.02)`;

        }

    },
    { passive: true }
);


/* =========================================================
   STATEMENT IMAGE PARALLAX
========================================================= */

const statementImage =
    document.querySelector(".statement-image img");


window.addEventListener(
    "scroll",
    () => {

        if (!statementImage) return;


        const section =
            document.querySelector(".statement");


        const rect =
            section.getBoundingClientRect();


        const windowHeight =
            window.innerHeight;


        if (
            rect.top < windowHeight &&
            rect.bottom > 0
        ) {

            const progress =
                (windowHeight - rect.top) /
                (windowHeight + rect.height);


            const movement =
                (progress - .5) * 30;


            statementImage.style.transform =
                `scale(1.05) translateY(${movement}px)`;

        }

    },
    { passive: true }
);


/* =========================================================
   MAGNETIC BUTTON
========================================================= */

const magneticButtons =
    document.querySelectorAll(".magnetic-btn");


magneticButtons.forEach(button => {

    button.addEventListener("mousemove", event => {

        if (window.innerWidth < 768) return;


        const rect =
            button.getBoundingClientRect();


        const x =
            event.clientX -
            rect.left -
            rect.width / 2;


        const y =
            event.clientY -
            rect.top -
            rect.height / 2;


        button.style.transform =
            `translate(${x * .08}px, ${y * .08}px)`;

    });


    button.addEventListener("mouseleave", () => {

        button.style.transform =
            "translate(0, 0)";

    });

});


/* =========================================================
   SMOOTH ANCHOR LINKS
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

        const targetId =
            link.getAttribute("href");


        if (
            targetId === "#" ||
            targetId === ""
        ) {
            return;
        }


        const target =
            document.querySelector(targetId);


        if (!target) return;


        event.preventDefault();


        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* =========================================================
   IMAGE LOAD FADE
========================================================= */

const images =
    document.querySelectorAll("img");


images.forEach(image => {

    if (image.complete) {

        image.classList.add("loaded");

    } else {

        image.addEventListener(
            "load",
            () => {

                image.classList.add("loaded");

            }
        );

    }

});


/* =========================================================
   ESCAPE KEY — CLOSE MOBILE MENU
========================================================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        mobileMenu.classList.remove("active");

        document.body.classList.remove("menu-open");

    }

});