const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");
const msgfinal = document.querySelector(".finish p");

import questions from "./questions.js";

let currentIndex = 0;
let questionsCorrect = 0;

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

btnRestart.onclick = () => {
  content.style.display = "flex";
  contentFinish.style.display = "none";

  currentIndex = 0;
  questionsCorrect = 0;
  loadQuestion();
};


function nextQuestion(e) {
  sleep(400)
  if (e.target.getAttribute("data-correct") === "true") {
    questionsCorrect++;
  }

  if (currentIndex < questions.length - 1) {
    currentIndex++;
    loadQuestion();
  } else {
    finish();
  }
}

// card de finalização
function finish() {
    console.log(questionsCorrect)
    textFinish.innerHTML = `VOCÊ CONCLUIU O QUIZ COM ${questionsCorrect} ACERTOS DE ${questions.length} QUESTÕES!`;
    msgfinal.innerHTML = `VOCÊ TERMINOU O QUIZ!`
    content.style.display = "none";
    contentFinish.style.display = "flex";
    if(questionsCorrect == 5){
      console.log("acertou tudo!")
      textFinish.innerHTML = `PARABENS!!<br> VOCÊ ACERTOU TODO O QUIZ!!`;
      msgfinal.innerHTML = `VOCÊ ACERTOU TODO O QUIZ!`
    }
}

// carregar as perguntas e respostas
function loadQuestion() {
  spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
  const item = questions[currentIndex];
  answers.innerHTML = "";
  question.innerHTML = item.question;

  item.answers.forEach((answer) => {
    const div = document.createElement("div");

    div.innerHTML = `
    <button class="answer" data-correct="${answer.correct}">
      ${answer.option}
    </button>
    `;

    answers.appendChild(div);
  });

  document.querySelectorAll(".answer").forEach((item) => {
    item.addEventListener("click", nextQuestion);
  });
}

loadQuestion();