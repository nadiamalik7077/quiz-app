const startBtn = document.querySelector('.start-btn');
const popupinfo = document.querySelector('.popup-info');
const exitbtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continuebtn = document.querySelector('.continue-btn');
const quizsection = document.querySelector('.quiz-section');
const quizbox = document.querySelector('.quiz-box');
const resultbox = document.querySelector('.result-box');
const tryagainbtn = document.querySelector('.tryagain-btn');
const goHomenbtn = document.querySelector('.goHome-btn');

startBtn.onclick = () => {
    popupinfo.classList.add('active');
    main.classList.add('active');
};

exitbtn.onclick = () => {
    popupinfo.classList.remove('active');
    main.classList.remove('active');
};

continuebtn.onclick = () => {
    quizsection.classList.add('active');
    popupinfo.classList.remove('active');
    main.classList.remove('active');
    quizbox.classList.add('active');

  

    showQuestions(0);
    questionCounter(1);
    headerscore();
};
tryagainbtn.onclick = () => {
    quizbox.classList.add('active');
    nextbtn.classList.remove('active');

     resultbox.classList.remove('active');

     
    
questionCount = 0;
questionnum = 1;
userScore = 0;

showQuestions(questionCount);
questionCounter(questionnum);
headerscore();

 };
goHomenbtn.onclick = () => {
  quizsection.classList.remove('active');
    nextbtn.classList.remove('active');

     resultbox.classList.remove('active');

     
    
questionCount = 0;
questionnum = 1;
userScore = 0;

showQuestions(questionCount);
questionCounter(questionnum);


 }
 



let questionCount = 0;
let questionnum = 1;
let userScore = 0;

const nextbtn = document.querySelector('.next-btn');

nextbtn.onclick = () => {
    if (questionCount < questions.length - 1) {

        questionCount++;
        showQuestions(questionCount);

        questionnum++;
        questionCounter(questionnum);


        nextbtn.classList.remove('active');
    }
    else {
        showResultBox();
    }

}


const optionList = document.querySelector('.option-list');

// getting question and options from array
function showQuestions(index) {
    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${questions[index].num}. ${questions[index].question}`;

    let optiontag = `
        <div class="option"><span>${questions[index].options[0]}</span></div>
        <div class="option"><span>${questions[index].options[1]}</span></div>
        <div class="option"><span>${questions[index].options[2]}</span></div>
        <div class="option"><span>${questions[index].options[3]}</span></div>
    `;

    optionList.innerHTML = optiontag;

    const options = document.querySelectorAll('.option');
    for (let i = 0; i < options.length; i++) {
        options[i].setAttribute('onclick', 'optionSelected(this)');
    }
}
function optionSelected(answer) {
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer;
    let allOptions = optionList.children.length;
    if (userAnswer == correctAnswer) {
        answer.classList.add('correct');
        userScore += 1;
        headerscore();


    }
    else {
        answer.classList.add('incorrect');
        // of answer is in correct, auto selected correct answer
        // if user has selected, disabled all options
        for (let i = 0; i < allOptions; i++) {
            if (optionList.children[i].textContent == correctAnswer) {
                optionList.children[i].setAttribute('class', 'option correct');
            }
        }

    }
    // if user has selected, disabled all options
    for (let i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add('disabled');
    }

    nextbtn.classList.add('active');
}



function questionCounter(index) {
    const questionTotal = document.querySelector('.question-total1');
    questionTotal.textContent = `${index} of ${questions.length} Questions`;
}


function headerscore() {
    const headerscoreText = document.querySelector('.header-score');
    headerscoreText.textContent = `Score: ${userScore} / ${questions.length}`;
}

function showResultBox(){
    quizbox.classList.remove('active');
    resultbox.classList.add('active');
    const scoreText = document.querySelector('.score-text');
    scoreText.textContent=`Your Score ${userScore} out of ${questions.length} `;

    const circularprogress = document.querySelector('.circulular-progress');
    const progressvalue = document.querySelector('.progress-value');

    let progressStartValue = -1;
    let progressEndValue = (userScore / questions.length) * 100;
    let speed = 20;
     
    let progress = setInterval (() => {
        progressStartValue++;
      
        progressvalue.textContent = `${progressStartValue}%`;


        circularprogress.style.background = `conic-gradient(#c40094 ${progressStartValue * 3.6}deg, rgba(255, 255, 255, .1) 0deg)`;

        if(progressStartValue == progressEndValue){
            clearInterval(progress);
        }
    }, speed);
}

const questions = [
    {
        num: 1,
        question: "What does HTML stand for?",
        answer: "C. Hyper Text Markup Language",
        options: [
            "A. Hyper Type Multi Language",
            "B. Hyper Text Multiple Language",
            "C. Hyper Text Markup Language",
            "D. Home Text Multi Language"
        ]
    },
    {
        num: 2,
        question: "What does CSS stand for?",
        answer: "A. Cascading Style Sheet",
        options: [
            "A. Cascading Style Sheet",
            "B. Cute Style Sheet",
            "C. Computer Style Sheet",
            "D. Common Style Sheet"
        ]
    },
    {
        num: 3,
        question: "What does PHP stand for?",
        answer: "A. Hypertext Preprocessor",
        options: [
            "A. Hypertext Preprocessor",
            "B. Hometext Programming",
            "C. Hypertext Preprogramming",
            "D. Programming Hypertext Preprocessor"
        ]
    },
    {
        num: 4,
        question: "What does SQL stand for?",
        answer: "D. Structured Query Language",
        options: [
            "A. Strength Query Language",
            "B. Science Query Language",
            "C. Short Query Language",
            "D. Structured Query Language"
        ]
    },
    {
        num: 5,
        question: "What does XML stand for?",
        answer: "D. Extensible Markup Language",
        options: [
            "A. Excellent Multiple Language",
            "B. Explore Multiple Language",
            "C. Extra Markup Language",
            "D. Extensible Markup Language"
        ]
    }
];
