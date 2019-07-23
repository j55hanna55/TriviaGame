var card = $("#quiz-questions");


var questions = [
  {
    question: "In what year was the specification for the COBOL language created?",
    answers: ["1940", "1959", "1974", "1995"],
    correctAnswer: "1959"
  },
  {
    question: "In 2010, which job did CNN.com rank as the #1 'Best Job in America'?",
    answers: ["Computer and Information Scientist", "Database Administrator", "Programmer Analyst", "Software Architect"],
    correctAnswer: "Software Architect"
  },
  {
    question: "What is the name of the Java mascot?",
    answers: ["Mr. Java", "Duke", "There is no Java mascot.", "Steamy"],
    correctAnswer: "Duke"
  },
  {
    question: "Who founded the 'Free Software Foundation'?",
    answers: ["Bill Gates", "Jon Gosselin", "Richard Stallman", "Steve Jobs"],
    correctAnswer: "Richard Stallman"
  },
  {
    question: "Which of the following JavaScript libraries was originally built as an add-on library extension to the Yahoo! User Interface Libary (YUI)?",
    answers: ["ExtJS", "jQuery", "MooTools", "Prototype"],
    correctAnswer: "ExtJS"
  },
  {
    question: "Who is the creator of the JavaScript scripting language?",
    answers: ["John Ousterhout", "Larry Wall", "John Ousterhout", "Sergey Brin"],
    correctAnswer: "John Ousterhout"
  }, 
  {
    question: "What was the first song ever sung by a computer?",
    answers: ["Daisy Bell", "Happy Birthday", "Mary Had a Little Lamb", "Twinkle Twinkle Little Star"],
    correctAnswer: "Daisy Bell"
  },
  {
    question: "What was Java called before it was Java?",
    answers: ["Maple", "Oak", "Snoo", "C++"],
    correctAnswer: "Oak"
  }
];

$(document).on("click", "#start", function() {
  game.start();
});


var timer;

var game = {
  correct: 0,
  incorrect: 0,
  counter: 150,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      alert("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend(
      "<h2 id='counter-style'>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>"
    );

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      card.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        card.append("<input type='radio' name='question-" + i +
          "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    card.append("<button id='done'>Done</button>");
  },

  done: function() {
    var inputs = card.children("input:checked");
    for (var i = 0; i < inputs.length; i++) {
      if ($(inputs[i]).val() === questions[i].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    }
    this.result();
  },

  result: function() {
    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    card.html("<h2>All Done!</h2>");
    card.append("<h3>Correct Answers: " + this.correct + "</h3>");
    card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
  }
};

$(document).on("click", "#done", function() {
  game.done();
});
