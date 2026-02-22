let square = document.getElementById("square");
let score = document.getElementById("score");
let highScoreDisplay = document.getElementById("highScore");
let clickSound = document.getElementById("click");

let points = 0;

// pega recorde salvo (ou 0 se não existir)
let highScore = localStorage.getItem("highScore") || 0;
highScoreDisplay.textContent = highScore;

function moveSquare() {
    let x = Math.random() * 350;
    let y = Math.random() * 350;
    square.style.left = x + "px";
    square.style.top = y + "px";
}

square.addEventListener("click", function() {
    points++;
    score.textContent = points;

    clickSound.currentTime = 0;
    clickSound.play();

    // verifica se bateu recorde
    if (points > highScore) {
        highScore = points;
        localStorage.setItem("highScore", highScore);
        highScoreDisplay.textContent = highScore;
    }

    square.classList.add("vanish");

    setTimeout(() => {
        moveSquare();
    }, 200);

    setTimeout(() => {
        square.classList.remove("vanish");
    }, 400);
});

moveSquare();