const highScoresList = document.querySelector("#highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const renderScores = (scores) => {
    if (scores.length > 0) {
        return scores.map(score => {
            return `<tr class="high-score"><td>${score.name}</td><td>${score.score}</td></tr>`;
        }).join('');
    }
    return `<p class="high-score">No score saved.</p>`;
}

highScoresList.innerHTML = renderScores(highScores);
