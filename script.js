/* =========================================
   BIRTHDAY WEBSITE JAVASCRIPT
========================================= */


/* =========================================
   OPEN MY SURPRISE
========================================= */

function enterBirthday() {

    const opening = document.getElementById("openingScreen");
    const welcome = document.getElementById("welcome");
    const music = document.getElementById("birthdayMusic");
    const musicButton = document.getElementById("musicButton");

    /* Hide opening screen */
    if (opening) {
        opening.classList.add("hide");
    }

    /* Show welcome screen */
    if (welcome) {
        welcome.classList.remove("hidden");
    }

    /* Start music */
    if (music) {

        music.play()
            .then(function () {

                if (musicButton) {
                    musicButton.innerHTML = "🔊 Music On";
                    musicButton.classList.add("playing");
                }

            })
            .catch(function (error) {

                console.log("Music error:", error);

            });
    }
}


/* =========================================
   OPEN BIRTHDAY SURPRISE
========================================= */

function startSurprise() {

    const welcome = document.getElementById("welcome");
    const birthday = document.getElementById("birthday");

    if (welcome) {
        welcome.classList.add("hidden");
    }

    if (birthday) {
        birthday.classList.remove("hidden");
    }

    /* Scroll to birthday section */
    if (birthday) {
        setTimeout(function () {
            birthday.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }, 100);
    }
}


/* =========================================
   SECRET MESSAGE
========================================= */

function showMessage() {

    const message = document.getElementById("secretMessage");

    if (message) {
        message.classList.remove("hidden");
    }
}


/* =========================================
   PHOTO VIEWER
========================================= */

let galleryPhotos = [];
let currentPhotoIndex = 0;


/* Get all gallery photos */

function updateGalleryPhotos() {

    galleryPhotos = Array.from(
        document.querySelectorAll(".photo-gallery img")
    );

}


/* Open photo */

function openPhoto(photo) {

    const viewer = document.getElementById("photoViewer");
    const largePhoto = document.getElementById("largePhoto");

    if (!viewer || !largePhoto || !photo) {
        return;
    }

    updateGalleryPhotos();

    currentPhotoIndex = galleryPhotos.indexOf(photo);

    if (currentPhotoIndex < 0) {
        currentPhotoIndex = 0;
    }

    showCurrentPhoto();

    /* IMPORTANT:
       HTML uses .active */
    viewer.classList.add("active");

    document.body.style.overflow = "hidden";
}


/* Show current photo */

function showCurrentPhoto() {

    const largePhoto = document.getElementById("largePhoto");
    const counter = document.getElementById("photoCounter");

    if (!largePhoto || galleryPhotos.length === 0) {
        return;
    }

    const photo = galleryPhotos[currentPhotoIndex];

    if (!photo) {
        return;
    }

    largePhoto.src = photo.src;
    largePhoto.alt = photo.alt || "Birthday Photo";

    if (counter) {
        counter.textContent =
            (currentPhotoIndex + 1) +
            " / " +
            galleryPhotos.length;
    }
}


/* =========================================
   NEXT PHOTO
========================================= */

function nextPhoto() {

    if (galleryPhotos.length === 0) {
        updateGalleryPhotos();
    }

    if (galleryPhotos.length === 0) {
        return;
    }

    currentPhotoIndex++;

    if (currentPhotoIndex >= galleryPhotos.length) {
        currentPhotoIndex = 0;
    }

    showCurrentPhoto();
}


/* =========================================
   PREVIOUS PHOTO
========================================= */

function previousPhoto() {

    if (galleryPhotos.length === 0) {
        updateGalleryPhotos();
    }

    if (galleryPhotos.length === 0) {
        return;
    }

    currentPhotoIndex--;

    if (currentPhotoIndex < 0) {
        currentPhotoIndex = galleryPhotos.length - 1;
    }

    showCurrentPhoto();
}


/* =========================================
   CLOSE PHOTO VIEWER
========================================= */

function closePhoto() {

    const viewer = document.getElementById("photoViewer");

    if (viewer) {
        viewer.classList.remove("active");
    }

    document.body.style.overflow = "";
}


/* =========================================
   PHOTO BUTTONS
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const closeButton =
        document.getElementById("closePhotoButton");

    const previousButton =
        document.getElementById("photoPrev");

    const nextButton =
        document.getElementById("photoNext");

    const viewer =
        document.getElementById("photoViewer");


    /* Close */

    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closePhoto
        );

    }


    /* Previous */

    if (previousButton) {

        previousButton.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                previousPhoto();

            }
        );

    }


    /* Next */

    if (nextButton) {

        nextButton.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                nextPhoto();

            }
        );

    }


    /* Close when clicking dark background */

    if (viewer) {

        viewer.addEventListener(
            "click",
            function (event) {

                if (event.target === viewer) {
                    closePhoto();
                }

            }
        );

    }

});


/* =========================================
   KEYBOARD CONTROLS
========================================= */

document.addEventListener(
    "keydown",
    function (event) {

        const viewer =
            document.getElementById("photoViewer");

        if (!viewer ||
            !viewer.classList.contains("active")) {
            return;
        }


        /* Escape */

        if (event.key === "Escape") {
            closePhoto();
        }


        /* Right arrow */

        if (event.key === "ArrowRight") {
            nextPhoto();
        }


        /* Left arrow */

        if (event.key === "ArrowLeft") {
            previousPhoto();
        }

    }
);


/* =========================================
   MOBILE SWIPE
========================================= */

let touchStartX = 0;
let touchEndX = 0;


document.addEventListener(
    "touchstart",
    function (event) {

        const viewer =
            document.getElementById("photoViewer");

        if (!viewer ||
            !viewer.classList.contains("active")) {
            return;
        }

        touchStartX =
            event.changedTouches[0].screenX;

    },
    { passive: true }
);


document.addEventListener(
    "touchend",
    function (event) {

        const viewer =
            document.getElementById("photoViewer");

        if (!viewer ||
            !viewer.classList.contains("active")) {
            return;
        }

        touchEndX =
            event.changedTouches[0].screenX;

        const difference =
            touchEndX - touchStartX;


        if (Math.abs(difference) < 50) {
            return;
        }


        if (difference < 0) {
            nextPhoto();
        } else {
            previousPhoto();
        }

    },
    { passive: true }
);


/* =========================================
   LOVE LETTER
========================================= */

const letterText = `Dear Rashii ❤️,

I don't know if words will ever be enough to explain how special you are to me.

But today, on your birthday, I just want you to know that you bring a kind of happiness into my life that I never want to lose.

Your smile, your presence, and even the little things about you mean more to me than you probably realize.

I hope this birthday brings you everything your heart wishes for.

Keep smiling, keep being the beautiful person you are, and always remember that you are incredibly special to me. ❤️

Happy Birthday, Rashii. 🎂

With all my heart,
❤️`;


let letterStarted = false;


function startLetter() {

    if (letterStarted) {
        return;
    }

    const letterElement =
        document.getElementById("typedLetter");

    if (!letterElement) {
        return;
    }

    letterStarted = true;

    let index = 0;


    function typeLetter() {

        if (index < letterText.length) {

            letterElement.textContent +=
                letterText.charAt(index);

            index++;

            setTimeout(
                typeLetter,
                35
            );

        }

    }


    typeLetter();
}


/* =========================================
   GIFT BOX
========================================= */

function openGift() {

    const gift =
        document.querySelector(".gift-box");

    const message =
        document.getElementById("finalMessage");

    if (!gift || !message) {
        return;
    }


    gift.classList.add("open");


    setTimeout(function () {

        message.classList.add("show");

    }, 700);


    createHearts();
}


/* =========================================
   HEARTS FROM GIFT
========================================= */

function createHearts() {

    for (let i = 0; i < 25; i++) {

        const heart =
            document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.bottom = "-30px";

        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";

        heart.style.zIndex = "10000";

        heart.style.pointerEvents = "none";

        document.body.appendChild(heart);


        const duration =
            3 + Math.random() * 3;


        heart.animate(

            [
                {
                    transform:
                        "translateY(0) scale(1)",
                    opacity: 1
                },

                {
                    transform:
                        "translateY(-100vh) scale(1.5)",
                    opacity: 0
                }
            ],

            {
                duration:
                    duration * 1000,

                easing:
                    "ease-out",

                fill:
                    "forwards"
            }

        );


        setTimeout(function () {

            heart.remove();

        }, duration * 1000);

    }
}


/* =========================================
   MUSIC
========================================= */

function toggleMusic() {

    const music =
        document.getElementById("birthdayMusic");

    const button =
        document.getElementById("musicButton");

    if (!music || !button) {
        return;
    }


    if (music.paused) {

        music.play()
            .then(function () {

                button.innerHTML =
                    "🔊 Music On";

                button.classList.add(
                    "playing"
                );

            });

    }

    else {

        music.pause();

        button.innerHTML =
            "🎵 Play Music";

        button.classList.remove(
            "playing"
        );

    }
}


/* =========================================
   FLOATING PARTICLES
========================================= */

function createFloatingParticle() {

    const container =
        document.getElementById(
            "floatingParticles"
        );

    if (!container) {
        return;
    }


    const particles = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💓",
        "🌸",
        "🌷",
        "✨"
    ];


    const particle =
        document.createElement("div");


    particle.innerHTML =
        particles[
            Math.floor(
                Math.random() *
                particles.length
            )
        ];


    particle.classList.add(
        "floating-particle"
    );


    particle.style.left =
        Math.random() * 100 + "%";


    particle.style.fontSize =
        (12 + Math.random() * 22) + "px";


    const duration =
        5 + Math.random() * 6;


    particle.style.animationDuration =
        duration + "s";


    particle.style.animationDelay =
        Math.random() * 2 + "s";


    container.appendChild(
        particle
    );


    setTimeout(function () {

        particle.remove();

    }, (duration + 2) * 1000);
}


/* Start particles */

setInterval(
    createFloatingParticle,
    700
);


for (let i = 0; i < 5; i++) {

    setTimeout(
        createFloatingParticle,
        i * 400
    );

}
