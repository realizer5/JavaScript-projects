const choices = document.querySelectorAll(".icon-img");
const playerScore = document.getElementById("playerScore");
const pcScore = document.getElementById("pcScore");
const result = document.getElementById("result");
const gameCount = document.getElementById("count");
const playerChoice = document.getElementById("playerChoice");
const pcChoice = document.getElementById("pcChoice");
const reset = document.getElementById("reset");
const rockSound = new Audio("rocksound.wav");
const paperSound = new Audio("papersound.mp3");
const scissorsSound = new Audio("scissorssound.mp3");
let pScore = 0;
let cScore = 0;
let count = 0;

choices[0].addEventListener("mouseover", e => {
    rockSound.play();
})
choices[1].addEventListener("mouseover", e => {
    paperSound.play();
})
choices[2].addEventListener("mouseover", e => {
    scissorsSound.play()
})

reset.addEventListener("click", e => {
    pScore = 0;
    cScore = 0;
    count = 0;
    playerScore.innerText = `${pScore}`;
    pcScore.innerText = `${cScore}`;
    gameCount.innerText = `Game Count: ${count}`;
    result.innerText = `Start Game`;
    result.style.color = "rgb(57, 56, 56)";
    pcChoice.hidden = true;
    playerChoice.hidden = true;
})

choices.forEach(item => {
    item.addEventListener('click', e => {
        let pc = ["Rock", "Paper", "Scissors"];
        let n = Math.floor(Math.random() * 3)
        pc = pc[n];
        count++;
        pcChoice.hidden = false;
        playerChoice.hidden = false;
        pcChoice.innerText = `${pc}`;
        playerChoice.innerText = `${e.target.id}`;
        gameCount.innerText = `Game Count: ${count}`;
        if (pc === "Rock" && e.target.matches("#Paper") || pc === "Paper" && e.target.matches("#Scissors") || pc === "Scissors" && e.target.matches("#Rock")) {
            pScore++;
            playerScore.innerText = `${pScore}`;
            result.innerText = `You won`;
            result.style.color = " rgb(63, 110, 254)";
        }
        else if (pc === "Rock" && e.target.matches("#Rock") || pc === "Paper" && e.target.matches("#Paper") || pc === "Scissors" && e.target.matches("#Scissors")) {
            result.innerText = `Draw`;
            result.style.color = " rgb(120, 110, 254)";
        }
        else {
            pcScore.innerText = `${cScore}`;
            cScore++;
            result.innerText = `You Lose`;
            result.style.color = " rgb(255, 118, 118)";
        }
    })
})