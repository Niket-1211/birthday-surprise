/* =========================================
   WELCOME / BIRTHDAY SCREEN
========================================= */

function startSurprise() {

    const welcome =
        document.getElementById("welcome");

    const birthday =
        document.getElementById("birthday");

    if (welcome) {
        welcome.classList.add("hidden");
    }

    if (birthday) {
        birthday.classList.remove("hidden");
    }

}


/* =========================================
   SECRET MESSAGE
========================================= */

function showMessage() {

    const message =
        document.getElementById("secretMessage");

    if (message) {
        message.classList.remove("hidden");
    }

}


/* =========================================
   PHOTO FULL-SCREEN VIEWER
========================================= */

function openPhoto(photo) {

    const viewer =
        document.getElementById("photoViewer");

    const largePhoto =
        document.getElementById("largePhoto");

    if (!viewer || !largePhoto || !photo) {
        return;
    }

    largePhoto.src = photo.src;

    viewer.classList.add("show");

}


function closePhoto() {

    const viewer =
        document.getElementById("photoViewer");

    if (viewer) {
        viewer.classList.remove("show");
    }

}


/* =========================================
   CLOSE PHOTO VIEWER WITH ESCAPE KEY
========================================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closePhoto();
    }

});


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


    /* Open gift */

    gift.classList.add("open");


    /* Show final message */

    setTimeout(function () {

        message.classList.add("show");

    }, 700);


    /* Release hearts */

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


        heart.style.position =
            "fixed";


        heart.style.left =
            Math.random() * 100 + "%";


        heart.style.bottom =
            "-30px";


        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";


        heart.style.zIndex =
            "10000";


        heart.style.pointerEvents =
            "none";


        document.body.appendChild(
            heart
        );


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
   OPENING SCREEN
========================================= */

function enterBirthday() {

    const opening =
        document.getElementById("openingScreen");

    const music =
        document.getElementById("birthdayMusic");

    const musicButton =
        document.getElementById("musicButton");


    /* Hide opening screen */

    if (opening) {

        opening.classList.add("hide");

    }


    /* Start music */

    if (music) {

        music.play()

            .then(function () {

                if (musicButton) {

                    musicButton.innerHTML =
                        "🔊 Music On";

                    musicButton.classList.add(
                        "playing"
                    );

                }

            })

            .catch(function (error) {

                console.log(
                    "Music could not start:",
                    error
                );

            });

    }

}


/* =========================================
   BACKGROUND MUSIC
========================================= */

function toggleMusic() {

    const music =
        document.getElementById("birthdayMusic");

    const button =
        document.getElementById("musicButton");


    /* Check audio */

    if (!music) {

        console.error(
            "birthdayMusic audio element was not found."
        );

        return;

    }


    /* Check button */

    if (!button) {

        console.error(
            "musicButton was not found."
        );

        return;

    }


    /* =====================================
       PLAY MUSIC
    ===================================== */

    if (music.paused) {

        music.play()

            .then(function () {

                button.innerHTML =
                    "🔊 Music On";


                button.classList.add(
                    "playing"
                );

            })

            .catch(function (error) {

                console.error(
                    "Music could not play:",
                    error
                );


                button.innerHTML =
                    "❌ Music Error";


                setTimeout(function () {

                    button.innerHTML =
                        "🎵 Play Music";

                }, 2000);

            });

    }


    /* =====================================
       PAUSE MUSIC
    ===================================== */

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
   MUSIC EVENT
========================================= */

const birthdayMusic =
    document.getElementById("birthdayMusic");


if (birthdayMusic) {

    birthdayMusic.addEventListener(
        "play",
        function () {

            const button =
                document.getElementById("musicButton");

            if (button) {

                button.innerHTML =
                    "🔊 Music On";

                button.classList.add(
                    "playing"
                );

            }

        }
    );


    birthdayMusic.addEventListener(
        "pause",
        function () {

            const button =
                document.getElementById("musicButton");

            if (button) {

                button.innerHTML =
                    "🎵 Play Music";

                button.classList.remove(
                    "playing"
                );

            }

        }
    );

}


/* =========================================
   FLOATING HEARTS & PETALS
========================================= */

function createFloatingParticle() {

    const container =
        document.getElementById(
            "floatingParticles"
        );


    if (!container) {
        return;
    }


    /* Different particles */

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


    /* Create particle */

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


    /* Random horizontal position */

    particle.style.left =
        Math.random() * 100 + "%";


    /* Random size */

    const size =
        12 + Math.random() * 22;


    particle.style.fontSize =
        size + "px";


    /* Random animation duration */

    const duration =
        5 + Math.random() * 6;


    particle.style.animationDuration =
        duration + "s";


    /* Random delay */

    particle.style.animationDelay =
        Math.random() * 2 + "s";


    /* Add particle */

    container.appendChild(
        particle
    );


    /* Remove particle */

    setTimeout(function () {

        particle.remove();

    }, (duration + 2) * 1000);

}


/* =========================================
   CREATE FLOATING PARTICLES
========================================= */

setInterval(
    createFloatingParticle,
    700
);


/* =========================================
   START WITH A FEW PARTICLES
========================================= */

for (let i = 0; i < 5; i++) {

    setTimeout(
        createFloatingParticle,
        i * 400
    );

}