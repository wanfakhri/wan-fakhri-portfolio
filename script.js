/* ===================================
   Typing Animation
=================================== */

const typingElement = document.getElementById("typing");

const words = [
    "Helpdesk Engineer",
    "IT Support Specialist",
    "Network Engineer",
    "CCTV & VMS Engineer",
    "Computer Science Student"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 100);

}

typeEffect();


window.addEventListener("scroll",()=>{

const winScroll=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const scrolled=(winScroll/height)*100;

document.getElementById("progress-bar").style.width=scrolled+"%";

});

/* ===================================
   Active Navbar
=================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");
const toggle=document.getElementById("theme-toggle");

toggle.onclick=function(){

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){

toggle.innerHTML='<i class="fa-solid fa-sun"></i>';

}else{

toggle.innerHTML='<i class="fa-solid fa-moon"></i>';

}

}
window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ===================================
   Scroll Reveal Animation
=================================== */

const revealElements = document.querySelectorAll(
".hero-content, .hero-image, .skill-card, .timeline-item, .edu-card, .info-box, .contact-box div"
);

function revealOnScroll() {

    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < triggerBottom) {

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* ===================================
   Navbar Background
=================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.background = "rgba(5,15,30,.95)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";

    } else {

        header.style.background = "rgba(0,0,0,.45)";
        header.style.boxShadow = "none";

    }

});


/* ===================================
   Smooth Scroll
=================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior:"smooth"

        });

    });

});


/* ===================================
   Fade-in Classes
=================================== */

document.querySelectorAll(
".skill-card,.timeline-item,.edu-card,.info-box,.contact-box div,.hero-content,.hero-image"
).forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = ".8s";

});

window.addEventListener("scroll", () => {

    document.querySelectorAll(
    ".skill-card,.timeline-item,.edu-card,.info-box,.contact-box div,.hero-content,.hero-image"
    ).forEach(item => {

        const top = item.getBoundingClientRect().top;

        if(top < window.innerHeight - 80){

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }

    });

});


/* ===================================
   Hero Button Hover Effect
=================================== */

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.05)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });

});

/* ===================================
   Console Message
=================================== */

console.log(
"%cWelcome to Wan Muhammad Fakhri's Portfolio!",
"color:#00c3ff;font-size:18px;font-weight:bold;"
);

console.log(
"%cDesigned with HTML5, CSS3 & JavaScript",
"color:white;font-size:14px;"
);

...
console.log(
"%cDesigned with HTML5, CSS3 & JavaScript",
"color:white;font-size:14px;"
);

/* ===================================
   Contact Form (EmailJS)
=================================== */

const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (e) {

        e.preventDefault();

        emailjs.sendForm(
            "YOUR_SERVICE_ID",
            "...
console.log(
"%cDesigned with HTML5, CSS3 & JavaScript",
"color:white;font-size:14px;"
);

/* ===================================
   Contact Form (EmailJS)
=================================== */

const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (e) {

        e.preventDefault();

        emailjs.sendForm(
            "service_kjyy2t1",
            "template_l3rtker",
            this
        )
        .then(function () {

            alert("✅ Thank you! Your message has been sent.");
            form.reset();

        })
        .catch(function (error) {

            console.error("EmailJS Error:", error);
            alert("❌ Failed to send message.");

        });

    });
}",
            this
        )
        .then(function () {

            alert("✅ Thank you! Your message has been sent.");
            form.reset();

        })
        .catch(function (error) {

            console.error("EmailJS Error:", error);
            alert("❌ Failed to send message.");

        });

    });
}
