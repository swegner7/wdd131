const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

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
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    answers: {
      a: "<script src='xxx.js'>",
      b: "<script href='xxx.js'>",
      c: "<script link='xxx.js'>",
    },
    correctAnswer: "a",
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    answers: { a: "onmouseclick", b: "onchange", c: "onclick" },
    correctAnswer: "c",
  },
  {
    question: "How do you declare a JavaScript variable?",
    answers: { a: "var carName;", b: "variable carName;", c: "v carName;" },
    correctAnswer: "a",
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    answers: { a: "*", b: "-", c: "=" },
    correctAnswer: "c",
  },
  {
    question: "What will the following code return: Boolean(10 > 9)",
    answers: { a: "true", b: "false", c: "NaN" },
    correctAnswer: "a",
  },
  {
    question: "Is JavaScript case-sensitive?",
    answers: { a: "Yes", b: "No", c: "Sometimes" },
    correctAnswer: "a",
  },
  {
    question:
      "Which keyword is used to declare variables that are block-scoped, a block is a chunk of code bounded by {}?",
    answers: { a: "var", b: "let", c: "const" },
    correctAnswer: "b",
  },
];

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
