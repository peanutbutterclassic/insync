const username = document.querySelector("#username");
const saveScoreButton = document.querySelector("#saveScoreButton");
const finalScore = document.querySelector("#finalScore");
const mostRecentScore = document.querySelector("#username");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;
username.addEventListener("keyup", () => {
    saveScoreButton.disabled = !username.nodeValue;
})

saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.nodeValue
    }
}

highScores.push(score)

highScores.sort((a,b) => {
    return b.score - a.score;
})

highScores.splice(5);

localStorage.setItem("highScores", JSON.stringify(highScores));
window.location.assign("/");