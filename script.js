const quizData = [{
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlinks Text Mark Language",
            "None of these"
        ],
        answer: 0
    },
    {
        question: "Which language is used for styling web pages?",
        options: ["HTML", "CSS", "Java", "Python"],
        answer: 1
    },
    {
        question: "Which is used for web page logic?",
        options: ["CSS", "HTML", "JavaScript", "SQL"],
        answer: 2
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "<!-- -->", "#", "**"],
        answer: 0
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option");
const progressEl = document.getElementById("progress");
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const scoreEl = document.getElementById("score");

function loadQuestion() {
    let q = quizData[currentQuestion];
    questionEl.innerText = q.question;

    optionButtons.forEach((btn, index) => {
        btn.innerText = q.options[index];
    });

    progressEl.innerText =
        `Question ${currentQuestion + 1} of ${quizData.length}`;
}

function checkAnswer(selected) {
    if (selected === quizData[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizBox.classList.add("hide");
    resultBox.classList.remove("hide");
    scoreEl.innerText = `${score} / ${quizData.length}`;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    resultBox.classList.add("hide");
    quizBox.classList.remove("hide");
    loadQuestion();
}

loadQuestion();