// Initialize AOS
AOS.init({
    duration: 1000, // Animation duration
    once: true, // Whether animation should happen only once
  });

  //lottie.loadAnimation({
    //container: document.getElementById('lottie-background'),
   // renderer: 'svg',
   // loop: true,
   // autoplay: true,
   // path: 'img/prof.json' // Your local Lottie JSON file
//});

var typed = new Typed('.typing', {
    strings: ["A Full Stack  Developer", "Java Developer","Python Coder", "A Problem Solver"],
    typeSpeed: 60,     // Base typing speed
    backSpeed: 50,     // Base backspacing speed
    loop: true,
    preStringTyped: (arrayPos, self) => {
        let speeds = [80, 60, 100, 70, 90]; // Different speeds to create wave effect
        let randomSpeed = speeds[Math.floor(Math.random() * speeds.length)];
        self.typeSpeed = randomSpeed;
        self.backSpeed = randomSpeed / 1.5; // Slower backspacing for smoother effect
    }
});
gsap.to(".typing", {
    y: 5, 
    duration: 1, 
    repeat: -1, 
    yoyo: true,
    ease: "sine.inOut"
});

window.addEventListener("load", () => {
    document.querySelectorAll(".styled-list li").forEach(li => {
        li.style.opacity = "1";
        li.style.transform = "translateX(0)";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".project-tab-item");
    const projects = document.querySelectorAll(".project-card");

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            tabs.forEach(t => t.classList.remove("project-tab-active"));
            this.classList.add("project-tab-active");

            let filter = this.getAttribute("data-filter");
            projects.forEach(project => {
                if (project.classList.contains(filter)) {
                    project.style.display = "block";
                } else {
                    project.style.display = "none";
                }
            });
        });
    });
});


/*=========================================
        PROJECT FILTER
=========================================*/
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        /* Active Button */

        filterButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        /* Selected Category */

        const filter = button.getAttribute("data-filter");

        projectCards.forEach((card) => {

            card.style.opacity = "0";
            card.style.transform = "translateY(30px)";

            setTimeout(() => {

                if (
                    filter === "all" ||
                    card.classList.contains(filter)
                ) {

                    card.style.display = "flex";

                    setTimeout(() => {

                        card.style.opacity = "1";
                        card.style.transform = "translateY(0)";

                    }, 50);

                } else {

                    card.style.display = "none";

                }

            }, 200);

        });

    });

});


/*=========================================
        CARD HOVER ANIMATION
=========================================*/

projectCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transition = ".35s";

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});

 


/*=========================================
        SCROLL REVEAL
=========================================*/

const revealCards = document.querySelectorAll(".project-card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

revealCards.forEach((card) => {

    observer.observe(card);

});



   const themeBtn = document.getElementById("theme-btn");

const currentTheme = localStorage.getItem("theme");

if(currentTheme === "light"){
    document.body.classList.add("light-mode");
    themeBtn.innerHTML = "🌙";
}else{
    themeBtn.innerHTML = "☀️";
}

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        localStorage.setItem("theme","light");
        themeBtn.innerHTML="🌙";

    }else{

        localStorage.setItem("theme","dark");
        themeBtn.innerHTML="☀️";
    }

});