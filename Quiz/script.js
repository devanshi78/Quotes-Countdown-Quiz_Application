let questions = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Chennai", "Delhi", "Kolkata"],
    answer: 2
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: 1
  },
  {
    question: "How many days are there in a leap year?",
    options: ["365", "366", "364", "367"],
    answer: 1
  }
];

let current = 0;
let score = 0;

function load() {
  document.getElementById("question").innerText = questions[current].question;
  document.getElementById("btn0").innerText = questions[current].options[0];
  document.getElementById("btn1").innerText = questions[current].options[1];
  document.getElementById("btn2").innerText = questions[current].options[2];
  document.getElementById("btn3").innerText = questions[current].options[3];
  document.getElementById("result").innerText = "";
}

function check(option) {
  if (option === questions[current].answer) {
    score++;
    document.getElementById("result").innerText = "Correct!";
  } else {
    document.getElementById("result").innerText = "Wrong!";
  }

  setTimeout(() => {
    current++;
    if (current < questions.length) {
      load();
    } else {
      showScore();
    }
  }, 1000);
}

function showScore() {
  document.querySelector(".card").innerHTML =
    "<h2>Quiz Over</h2><p>Score: " + score + " / " + questions.length + "</p>";
}

load();