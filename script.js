const questions = [
    {
        question: "Which operator is used to assign a value to a variable in JavaScript?",
        options: ["=", "==", "===", "+="],
        answer: 0
    },
    {
        question: "How do you declare a variable in JavaScript?",
        options: ["var myVar;", "variable myVar;", "myVar :=;", "declare myVar;"],
        answer: 0
    },
    {
        question: "What is the output of `console.log(typeof null)`?",
        options: ["object", "null", "undefined", "string"],
        answer: 0
    },
    {
        question: "Which of the following is a valid way to create an array in JavaScript?",
        options: ["let arr = [];", "let arr = ();", "let arr = {};"],
        answer: 0
    },
    {
        question: "What is the result of `5 + '5'` in JavaScript?",
        options: ["55", "10", "NaN", "15"],
        answer: 0
    },
    {
        question: "How do you define a function in JavaScript?",
        options: ["function myFunction() {}", "function: myFunction() {}", "def myFunction() {}", "myFunction() = function() {}"],
        answer: 0
    },
    {
        question: "Which method is used to add an element to the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        answer: 0
    },
    {
        question: "How do you check if a variable is an array in JavaScript?",
        options: ["Array.isArray()", "isArray()", "arrayCheck()", "typeof []"],
        answer: 0
    },
    {
        question: "What is the purpose of the `parseInt()` function?",
        options: ["To convert a string to an integer", "To parse HTML content", "To format a date", "To convert a number to a string"],
        answer: 0
    },
    {
        question: "How do you handle errors in JavaScript?",
        options: ["try...catch", "error...handle", "catch...try", "handle...error"],
        answer: 0
    }
];

const optionLabels = ["A)", "B)", "C)", "D)"];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-btn');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-btn');

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerHTML = `<span class="option-label">${optionLabels[index]}</span> ${option}`;
        button.classList.add('option');
        button.addEventListener('click', () => checkAnswer(index));
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === questions[currentQuestionIndex].answer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.classList.add('hidden');
    optionsElement.classList.add('hidden');
    nextButton.classList.add('hidden');
    resultElement.classList.remove('hidden');
    scoreElement.textContent = `Your score is ${score} out of ${questions.length}`;
}

function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    questionElement.classList.remove('hidden');
    optionsElement.classList.remove('hidden');
    nextButton.classList.remove('hidden');
    resultElement.classList.add('hidden');
    loadQuestion();
}

nextButton.addEventListener('click', () => loadQuestion());
restartButton.addEventListener('click', () => restartQuiz());

// Initial load
loadQuestion();
