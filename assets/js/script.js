const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "When was the last time England won a world cup",
        choices: [
            { title: "2002", answer: false },
            { title: "1966", answer: true },
            { title: "1998", answer: false },
            { title: "1986", answer: false },
        ]
    },
    {
        question: "When was the last time England won a world cup",
        choices: [
            { title: "2002", answer: false },
            { title: "1966", answer: true },
            { title: "1998", answer: false },
            { title: "1986", answer: false },
        ]
    },
    {
        question: "When was the last time England won a world cup",
        choices: [
            { title: "2002", answer: false },
            { title: "1966", answer: true },
            { title: "1998", answer: false },
            { title: "1986", answer: false },
        ]
    },
    {
        question: "When was the last time England won a world cup",
        choices: [
            { title: "2002", answer: false },
            { title: "1966", answer: true },
            { title: "1998", answer: false },
            { title: "1986", answer: false },
        ]
    }
];

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItems("mostRecentScore", score)
        
        return window.location.assign("/end.html")
    }

    questionCounter++
    progressText.innerText = `Question ${(questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.getElementsByClassName.width = "${(questionCounter/MAX_QUESTIONS) * 100}%`

    const quesitonIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[]
}

questionCounter++
progressText.innerText = "Question $"