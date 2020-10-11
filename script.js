const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
var timer = document.querySelector("#time");
var scoredoc = document.querySelector("#score")


var score = 0;

var secondsLeft = 60;

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})


function setTime() {
  var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = secondsLeft;

      if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
      }

  }, 1000);
  }

function sendMessage() {
  timer.textContent = "End of Quiz";
  timer.style.color = "red";
  setInterval(function() {
  }, 500);
}

function setscore() {

  scoredoc.textContent = score;

  console.log(scoredoc)


}


setTime();


function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }

    if (answer.correct) {

      scoredoc = score + 100;


    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What is 5 + 5?',
    answers: [
      { text: '10', correct: true },
      { text: '55', correct: false }
    ]
  },
  {
    question: 'Who is the best instructor?',
    answers: [
      { text: 'Chad', correct: true },
      { text: 'Lee', correct: true },
      { text: 'Alexis', correct: true },
      { text: 'Substitute Guy', correct: true }
    ]
  },
  {
    question: 'What does JSON stand for?',
    answers: [
      { text: 'Jerry Springer Online Network', correct: false },
      { text: 'Javascript Object Notation', correct: true },
      { text: 'Joomla Standard Object Notation', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'What is 4 * 2?',
    answers: [
      { text: '6', correct: false },
      { text: '8', correct: true }
    ]
  }
]