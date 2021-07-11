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
        question: "Lionel Messi won his 147th Argentina cap this week at the Copa América, equalling whose all-time record?",
        choices: [
            { title: "Diego Maradona", answer: false },
            { title: "Javier Mascherano", answer: true },
            { title: "Gabriel Batistuta", answer: false },
            { title: "Sergio Romero", answer: false },
        ]
    },
    {
        question: "Staying with the Copa América, Ben Brereton started his first game for Chile at the tournament and ended up scoring the winner against Bolivia. Where was Brereton born??",
        choices: [
            { title: "Santiago, Chile", answer: false },
            { title: "Stranraer, Scotland", answer: false },
            { title: "Stoke-on-Trent, England", answer: true },
            { title: "St Asaph, Wales", answer: false },
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
        question: "Jon Rahm won the first major of his career at the US Open on Sunday. What had happened to Rahm in his previous competition before the US Open?",
        choices: [
            { title: "He was 10-over par after two rounds and missed the cut", answer: false },
            { title: "He smashed his putter in frustration midway through his final round and had to use a driver on the green in the remaining holes", answer: false },
            { title: "He beat Louis Oosthuizen by a single shot on the final day – just like he did at the US Open a week later", answer: false },
            { title: "He had to pull out before the last day of the tournament after testing positive for Covid-19", answer: true },
        ]
    },
    {
        question: "Which team won their group at Euro 2020 even though just one of their players scored in their three matches?",
        choices: [
            { title: "Sweden", answer: false },
            { title: "Portugal", answer: false },
            { title: "England", answer: true },
            { title: "Ukraine", answer: false },
        ]
    },
    {
        question: "Complete this sequence: McStay, McClair, McAllister, McCoist …",
        choices: [
            { title: "Mctominay", answer: false },
            { title: "McGinn", answer: false },
            { title: "McKenna", answer: false },
            { title: "McGregor", answer: true },
        ]
    },
    {
        question: "Shafali Verma hit two half-centuries for India in their Test match against England. Why was that remarkable?",
        choices: [
            { title: "She is only 17 years old", answer: true },
            { title: "She was their No 11", answer: false },
            { title: "She has also represented India in badminton and table tennis at the Olympics", answer: false },
            { title: "She is the team's coach but stepped in to play in the Test due to a Covid outbreak in the squad", answer: false },
        ]
    },
    {
        question: "What was unusual about Karim Benzema’s goals for France in their 2-2 draw with Portugal?",
        choices: [
            { title: "They were both penalties – as were the two goals scored by Portugal", answer: false },
            { title: "They were both scored while the clock read: 46 minutes and 44 seconds", answer: true },
            { title: "They were his first goals for France even though he has scored more than 250 for Real Madrid", answer: false },
            { title: "He scored them both with his left foot – including a penalty – even though he is right-footed", answer: false },
        ]
    },
    {
        question: "Mark Cavendish has been given a late call-up to the Tour de France. This will be his 14th time competing in the race. Cavendish has won 30 stages at the Tour. Who is the only rider in history to have won more?",
        choices: [
            { title: "Eddy Merckx", answer: true },
            { title: "Bernard Hinault", answer: false },
            { title: "Greg LeMond", answer: false },
            { title: "Alberto Contador", answer: false },
        ]
    },
    {
        question: "Joe Marler played a starring role for Harlequins as they came from 28-0 down to beat Bristol Bears 43-36 and book their place in the Premiership final. What was unusual about Marler’s preparations for the game?",
        choices: [
            { title: "He was at Wembley on the afternoon of the game to watch England v Croatia", answer: false },
            { title: "He spent the 10 days before the match in quarantine", answer: false },
            { title: "Unlike the rest of his teammates, he travelled to the match by helicopter", answer: true },
            { title: "Marler, a former choirboy, was picked to sing the national anthem before the game (as Katherine Jenkins was busy)", answer: false },
        ]
    },
    {
        question: "The England rugby league team are playing a friendly on Friday night in Warrington. When did the team last play a match?",
        choices: [
            { title: "2016", answer: false },
            { title: "2018", answer: true },
            { title: "2019", answer: false },
            { title: "They have already played six times this year – including twice this week", answer: false },
        ]
    },
    // Science questions
    {
        question: "What does DNA stand for?",
        choices: [
            { title: "Do Not Abbreviate", answer: false },
            { title: "Do Not Adopt", answer: false },
            { title: "Dark Native Apostle", answer: false },
            { title: "Deoxyribonucleic acid", answer: true },
        ]
    },
    {
        question: "How many bones are in the human body?",
        choices: [
            { title: "205", answer: false },
            { title: "206", answer: true },
            { title: "435", answer: false },
            { title: "178", answer: false },
        ]
    },
    {
        question: "The concept of gravity was discovered by which famous physicist?",
        choices: [
            { title: "Sir Bobby Charlton", answer: false },
            { title: "Sir Alex Ferguson", answer: false },
            { title: "Sir Isaac Newton", answer: true },
            { title: "Riccardo Giacconi", answer: false },
        ]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        choices: [
            { title: "Diamond", answer: true },
            { title: "Gold", answer: false },
            { title: "Copper", answer: false },
            { title: "Lead", answer: false },
        ]
    },
    {
        question: "Which is the main gas that makes up the Earth’s atmosphere?",
        choices: [
            { title: "Carbon dioxide", answer: false },
            { title: "Oxygen", answer: false },
            { title: "Hydrogen", answer: false },
            { title: "Nitrogen", answer: true },
        ]
    },
    {
        question: "Humans and chimpanzees share roughly how much DNA?",
        choices: [
            { title: "80%", answer: false },
            { title: "16%", answer: false },
            { title: "98%", answer: true },
            { title: "33%", answer: false },
        ]
    },
    {
        question: "What is the most abundant gas in the Earth’s atmosphere?",
        choices: [
            { title: "CFC", answer: false },
            { title: "Ozone", answer: false },
            { title: "Nitrogen", answer: true },
            { title: "CO2", answer: false },
        ]
    },
    {
        question: "Roughly how long does it take for the sun’s light to reach Earth – 8 minutes, 8 hours or 8 days?",
        choices: [
            { title: "14 seconds", answer: false },
            { title: "10 seconds", answer: false },
            { title: "1 hour", answer: false },
            { title: "8 minutes", answer: true },
        ]
    },
    {
        question: "Which famous British physicist wrote A Brief History of Time?",
        choices: [
            { title: "Amanda Gorman", answer: false },
            { title: "Stephen Hawking", answer: true },
            { title: "David Beckham", answer: false },
            { title: "Catherine Cho", answer: false },
        ]
    },
    {
        question: "At what temperature are Celsius and Fahrenheit equal?",
        choices: [
            { title: "100", answer: false },
            { title: "86", answer: false },
            { title: "-40", answer: true },
            { title: "0", answer: false },
        ]
    },
    {
        question: "What modern-day country was Marie Curie born in?",
        choices: [
            { title: "Poland", answer: true },
            { title: "France", answer: false },
            { title: "Switzerland", answer: false },
            { title: "Germany", answer: false },
        ]
    },
    {
        question: "What is the biggest planet in our solar system?",
        choices: [
            { title: "Neptune", answer: false },
            { title: "Mars", answer: false },
            { title: "Jupiter", answer: true },
            { title: "Venus", answer: false },
        ]
    },
    {
        question: "What name is given for the number of protons found in the nucleus of an atom?",
        choices: [
            { title: "Prime number", answer: false },
            { title: "Integer", answer: false },
            { title: "Pi", answer: false },
            { title: "Atomic number", answer: true },
        ]
    },
    {
        question: "How many vertebrae does the average human possess?",
        choices: [
            { title: "44", answer: false },
            { title: "33", answer: true },
            { title: "55", answer: false },
            { title: "66", answer: false },
        ]
    },
    {
        question: "What was the name of the first man-made satellite launched by the Soviet Union in 1957?",
        choices: [
            { title: "Apollo 13", answer: false },
            { title: "Sputnik 1", answer: true },
            { title: "Apollo 11", answer: false },
            { title: "Apollo 15", answer: false },
        ]
    },
    {
        question: "Which oath of ethics taken by doctors is named after an Ancient Greek physician?",
        choices: [
            { title: "Promissory Oath", answer: false },
            { title: "Hippocratic Oath", answer: true },
            { title: "Crown Court Witness Oath", answer: false },
            { title: "Witness Affirmation", answer: false },
        ]
    },
    {
        question: "What is a material that will not carry an electrical charge called?",
        choices: [
            { title: "Cellulose", answer: false },
            { title: "Vinyl", answer: false },
            { title: "Insulator", answer: true },
            { title: "Polyurethane Foam", answer: false },
        ]
    },
    {
        question: "Which Apollo moon mission was the first to carry a lunar rover?",
        choices: [
            { title: "Apollo 15", answer: true },
            { title: "Apollo 13", answer: false },
            { title: "Apollo 8", answer: false },
            { title: "Apollo 11", answer: false },
        ]
    },
    {
        question: "How many teeth does an adult human have?",
        choices: [
            { title: "22", answer: false },
            { title: "32", answer: true },
            { title: "36", answer: false },
            { title: "18", answer: false },
        ]
    },
    {
        question: "What is the study of mushrooms called?",
        choices: [
            { title: "Mycology", answer: true },
            { title: "Fungi", answer: false },
            { title: "Biology", answer: false },
            { title: "Endocrology", answer: false },
        ]
    },
    // Questions on current affairs
    {
        question: "The first known LBGTQ rights organization in America was called what?",
        choices: [
            { title: "Human Rights Society", answer: true },
            { title: "Amnesty International", answer: false },
            { title: "UN", answer: false },
            { title: "CDC", answer: false },
        ]
    },
    {
        question: "When was the first protest for gay and lesbian rights in Washington, D.C.?",
        choices: [
            { title: "July 4, 1975", answer: false },
            { title: "July 4, 1965", answer: true },
            { title: "August 8, 1988", answer: false },
            { title: "February 7, 1978", answer: false },
        ]
    },
    {
        question: "What was the first European country to legalize same-sex marriage?",
        choices: [
            { title: "Portugal", answer: false },
            { title: "Italy", answer: false },
            { title: "The Netherlands", answer: true },
            { title: "France", answer: false },
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

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 10;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score)
        
        return window.location.assign("/end.html")
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice, index)  => {
        const c = currentQuestion.choices[index];
        choice.innerText = c.title;
        choice.dataset.answer = c.answer; 
    });

    // Remove the question from the array based on the index
    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) {
            return;
        }

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset.answer;

        let classToApply = selectedAnswer === "true" ? 'correct' : 'incorrect';
        
        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        // set timeout to indicate whether the user answer is right or wrong 
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();

        }, 1000);
    })
})

// incremement score
incrementScore = (num) => {
    score += num;
    // additional code 
    scoreText.innerText = score;
}

startGame()