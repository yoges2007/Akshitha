// ===============================
// Welcome Baby Website Script
// ===============================

const surpriseBtn = document.getElementById("surpriseBtn");
const wish = document.getElementById("wish");
const song = document.getElementById("song");

// Baby Slideshow
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
let babyStarted = false;

// Couple Slideshow
const coupleSlides = document.querySelectorAll(".couple-slide");
let coupleIndex = 0;
let coupleStarted = false;

// ------------------------------
// Baby Slide
// ------------------------------

function showSlide(){

    slides.forEach(slide=>{
        slide.classList.remove("active");
    });

    slides[currentSlide].classList.add("active");

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

}

// ------------------------------
// Couple Slide
// ------------------------------

function changeCoupleSlide(){

    coupleSlides.forEach(slide=>{
        slide.classList.remove("active-couple");
    });

    coupleSlides[coupleIndex].classList.add("active-couple");

    coupleIndex++;

    if(coupleIndex >= coupleSlides.length){
        coupleIndex = 0;
    }

}

// ------------------------------
// Surprise Button
// ------------------------------

surpriseBtn.addEventListener("click",()=>{

    // Music
    song.play();

    // Message
    wish.innerHTML=`
    🎉 <b>Welcome to the World, Little Angel 👶❤️</b><br><br>
    Wishing you a lifetime filled with happiness,
    love and blessings.
    `;

    // Confetti
    confetti({
        particleCount:250,
        spread:180,
        origin:{y:0.6}
    });

    // Button
    surpriseBtn.innerHTML="🎊 Congratulations!";
    surpriseBtn.style.background="#28a745";

    // Baby Slideshow
    if(!babyStarted){

        babyStarted=true;

        showSlide();

        setInterval(showSlide,3000);

    }

    // Couple Slideshow
    if(!coupleStarted){

        coupleStarted=true;

        changeCoupleSlide();

        setInterval(changeCoupleSlide,3000);

    }

});

// ------------------------------
// Floating Hearts
// ------------------------------

setInterval(()=>{

    let heart=document.createElement("span");

    heart.innerHTML="💖";

    heart.style.position="fixed";
    heart.style.left=Math.random()*100+"vw";
    heart.style.bottom="-30px";
    heart.style.fontSize=(20+Math.random()*20)+"px";
    heart.style.animation="floatHeart 6s linear";
    heart.style.zIndex="9999";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },6000);

},1000);

// ------------------------------
// Scroll Animation
// ------------------------------

const sections=document.querySelectorAll("section");

sections.forEach(section=>{

    section.style.opacity="0";
    section.style.transform="translateY(50px)";
    section.style.transition="1s";

});

function revealSections(){

    sections.forEach(section=>{

        const top=section.getBoundingClientRect().top;

        if(top<window.innerHeight-100){

            section.style.opacity="1";
            section.style.transform="translateY(0)";

        }

    });

}

window.addEventListener("scroll",revealSections);
window.addEventListener("load",revealSections);

console.log("👶 Baby Website Loaded");
