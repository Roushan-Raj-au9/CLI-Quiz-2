var readlineSync = require("readline-sync");
var score = 0;
var userName = "";

var highScores = [
  {
    name: "Dev",
    score: 4,
  },

  {
    name: "Vicky",
    score: 2,
  },
]

var questions = [{
  question: "Is it bollywood or hollywood movie ?",
  answer: "hollywood"
}, {
  question: "Character name ? ",
  answer: "Tony Stark"
},
{
  question: "IRON MEN 1 was released on which year ? ",
  answer: "2008"
},
{
  question: "IRON MEN 2 was released on which year ? ",
  answer: "2010"
},
{
  question: "IRON MEN 1 was released on which year ? ",
  answer: "2013"
}
];

function welcome() {
  userName = readlineSync.question("What's your name? ");

  console.log("Welcome " + userName + " to DO YOU KNOW about IRON MAN movie ?");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right!");
    score = score + 1;

  } else {
    console.log("wrong!");

  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores: ");

  if (score === 5) {
    highScores.push({ "name": userName, "score": score })
  }

  highScores.map(score => console.log(score.name, " : ", score.score))
}

function showCorrectAnswer() {
  console.log("Check out correct answers: ");
  questions.map(data => console.log(data.question, " : ", data.answer))
}


welcome();
game();
showScores();
showCorrectAnswer();