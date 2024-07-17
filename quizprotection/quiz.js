const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

// Quiz questions to be added
const questions = [
  {
    question: "What is JavaScript?",
    answers: {
      a: "A programming language",
      b: "A markup language",
      c: "A stylesheet language",
    },
    correctAnswer: "a",
  },
  {
    question: "What is a variable in JavaScript?",
    answers: { a: "A storage location", b: "A data type", c: "A function" },
    correctAnswer: "a",
  },
  {
    question: "What does DOM stand for?",
    answers: {
      a: "Document Object Model",
      b: "Data Object Model",
      c: "Digital Ordinance Model",
    },
    correctAnswer: "a",
  },
];

// Display quiz questions
function showQuiz(questions, quizContainer) {
  let output = [];
  let answers;

  for (let i = 0; i < questions.length; i++) {
    answers = [];
    for (letter in questions[i].answers) {
      answers.push(
        "<label>" +
          '<input type="radio" name="question' +
          i +
          '" value="' +
          letter +
          '">' +
          letter +
          ": " +
          questions[i].answers[letter] +
          "</label>"
      );
    }
    output.push(
      '<div class="question">' +
        questions[i].question +
        "</div>" +
        '<div class="answers">' +
        answers.join("") +
        "</div>"
    );
  }
  quizContainer.innerHTML = output.join("");
}

function showResults(questions, quizContainer, resultsContainer) {
  let answerContainers = quizContainer.querySelectorAll(".answers");
  let userAnswer = "";
  let numCorrect = 0;

  for (let i = 0; i < questions.length; i++) {
    userAnswer = (
      answerContainers[i].querySelector(
        "input[name=question" + i + "]:checked"
      ) || {}
    ).value;
    if (userAnswer === questions[i].correctAnswer) {
      numCorrect++;
      answerContainers[i].style.color = "lightgreen";
    } else {
      answerContainers[i].style.color = "red";
    }
  }
  resultsContainer.innerHTML = numCorrect + " out of " + questions.length;
}

showQuiz(questions, quizContainer);
submitButton.onclick = function () {
  showResults(questions, quizContainer, resultsContainer);
};

document.oncopy = function (event) {
  event.preventDefault();
  alert("Copying is not allowed on this webpage");
};
