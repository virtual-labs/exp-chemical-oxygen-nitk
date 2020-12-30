
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

  const myQuestions = [
    {
      question: "Excess dichromate is titrated by using ____________ as an indicator.",
      answers: {
        a: "Silver sulfate",
        b: "Mercuric sulfate ",
        c: "Ferrous ammonium sulfate ",
        d: "Ortho phenanthroline ferrous complex"
      },
      correctAnswer: "d"
    },

    {
      question: "Empirically, municipal waste water has a 5 day BOD of ",
      answers: {
        a: "0.4 - 0.6 COD",
        b: "0.1 - 0.4 COD",
        c: "0.2 - 0.4 COD",
        d: "0.1 - 0.6 COD"
      },
      correctAnswer: "a"
    },

    {
      question: "The COD value will always be _____________ than the value of BOD for waste water.",
      answers: {
        a: "Higher",
        b: "Lower",
        c: "Equal",
        d: "None of the above"
      },
      correctAnswer: "a"
    },
    {
      question: "4. For untreated wate water BOD/COD ratio is ",
      answers: {
        a: "&le; 0.5",
        b: "0.5",
        c: "&ge; 0.5",
        d: "None of the above"
      },
      correctAnswer: "c"
    },
    {
      question: "In which region chromic ion absorbs the light efficiently? ",
      answers: {
        a: "200nm region",
        b: "400nm region",
        c: "700nm region",
        d: "600nm region"
      },
      correctAnswer: "d"
    }
  ];

// ---------------------------- End -------------------------------

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
