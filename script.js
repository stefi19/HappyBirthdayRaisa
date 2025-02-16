let currentSection = 0;
const sections = document.querySelectorAll(".section");

function showSection(index) {
    sections.forEach(section => section.classList.remove("active"));
    sections[index].classList.add("active");
}

function startCelebration() {
    showSection(1);
    document.getElementById("taylorMusic").play();
}

function showGame() {
    showSection(2);
    startDiscoGame();
}

function showCake() {
    showSection(3);
}

let score = 0;
let discoInterval;

// 🎮 START THE DISCO BALL GAME
function startDiscoGame() {
    let gameArea = document.querySelector('.game-area');
    score = 0;
    document.getElementById("score").innerText = score;

    function spawnDiscoBall() {
        let discoBall = document.createElement('div');
        discoBall.classList.add('disco-ball-fall');
        discoBall.style.left = `${Math.random() * 90}%`;
        discoBall.style.top = "-50px";
        gameArea.appendChild(discoBall);

        let moveDown = setInterval(() => {
            if (parseInt(discoBall.style.top) < 250) {
                discoBall.style.top = `${parseInt(discoBall.style.top) + 5}px`;
            } else {
                clearInterval(moveDown);
                discoBall.remove();
            }
        }, 50);

        // Click to Catch the Disco Ball
        discoBall.addEventListener('click', () => {
            score++;
            document.getElementById("score").innerText = score;
            discoBall.remove();
        });

        // Stop Game at 10 points
        if (score >= 10) {
            clearInterval(discoInterval);
            setTimeout(() => {
                alert("🎉 You caught all the disco balls! 🪩 Time for cake!");
                showCake();
            }, 1000);
        }
    }

    // Generate disco balls every second
    discoInterval = setInterval(spawnDiscoBall, 1000);
}

function blowCandles() {
    let cake = document.getElementById("cake");
    let confetti = document.getElementById("confetti");
    let smoke = document.getElementById("smoke");

    // First, show the smoke
    smoke.style.display = "block";
    setTimeout(() => {
        smoke.style.display = "none";

        // Then, show the confetti
        confetti.style.display = "block";
        setTimeout(() => {
            confetti.style.display = "none";

            // Finally, show the final love page ❤️
            showSection(4);
        }, 3000);
    }, 3000);
}

