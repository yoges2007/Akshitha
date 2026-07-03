
// ==========================
// Sequential Slideshows
// ==========================

const babySlides = document.querySelectorAll(".slide");
const coupleSlides = document.querySelectorAll(".couple-slide");

const surpriseBtn = document.getElementById("surpriseBtn");
const song = document.getElementById("song");
const wish = document.getElementById("wish");

let babyIndex = 0;
let coupleIndex = 0;

let babyInterval = null;
let coupleInterval = null;

let started = false;

// Hide Couple Gallery Initially
document.querySelector(".couple-gallery").style.display = "none";

// --------------------
// Baby Slideshow
// --------------------

function showBabySlide() {

    babySlides.forEach(slide => slide.classList.remove("active"));

    babySlides[babyIndex].classList.add("active");

    babyIndex++;

    // Baby slideshow completed
    if (babyIndex >= babySlides.length) {

        clearInterval(babyInterval);

        setTimeout(() => {

            document.querySelector(".gallery").style.display = "none";
            document.querySelector(".couple-gallery").style.display = "block";

            coupleIndex = 0;

            // First Couple Image
            showCoupleSlide();

            coupleInterval = setInterval(showCoupleSlide, 3000);

        }, 3000);

    }

}

// --------------------
// Couple Slideshow
// --------------------

function showCoupleSlide() {

    coupleSlides.forEach(slide => slide.classList.remove("active-couple"));

    coupleSlides[coupleIndex].classList.add("active-couple");

    coupleIndex++;

    // Couple slideshow completed
    if (coupleIndex >= coupleSlides.length) {

        clearInterval(coupleInterval);

        setTimeout(() => {

            document.querySelector(".couple-gallery").style.display = "none";
            document.querySelector(".gallery").style.display = "block";

            babyIndex = 0;

            showBabySlide();

            babyInterval = setInterval(showBabySlide, 3000);

        }, 3000);

    }

}

// --------------------
// Surprise Button
// --------------------

surpriseBtn.addEventListener("click", () => {

    if (started) return;

    started = true;

    song.play();

    wish.innerHTML = "🎉 <b>Welcome to the World, Little Angel 👶❤️</b>";

    confetti({
        particleCount: 250,
        spread: 180,
        origin: { y: 0.6 }
    });

    surpriseBtn.innerHTML = "🎊 Congratulations!";

    babyIndex = 0;

    showBabySlide();

    babyInterval = setInterval(showBabySlide, 3000);

});
