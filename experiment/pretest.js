
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
      question: "Organic and oxidizable inorganic substances in the sample are oxidized by ",
      answers: {
        a: "Potassium chromate ",
        b: "Potassium dichromate",
        c: "Potassium permanganate",
        d: "Potassium nitrate"
      },
      correctAnswer: "b"
    },

    {
      question: "What is the catalyst used?",
      answers: {
        a: "Silver sulfate ",
        b: "Mercuric sulfate ",
        c: "Ferrous ammonium sulfate ",
        d: " Ortho phenanthroline ferrous complex"
      },
      correctAnswer: "a"
    },

    {
      question: "The amount of oxygen consumed by sewage from an oxidising agent like potassium dichromate is termed as",
      answers: {
        a: "Biochemical Oxygen Demand (BOD)",
        b: "Chemical Oxygen Demand (COD)",
        c: "Organic Oxygen Demand",
        d: "None of these"
      },
      correctAnswer: "b"
    },
    {
        question: "Reflux temperature is the temperature ",
        answers: {
          a: "At which the reaction is heated depends on the boiling points of the solvents",
          b: "At which the reaction is heated depends on the boiling points of the solute",
          c: "At which the reaction is heated depends on the boiling points of the solution",
          d: "At which the reaction is heated depends on the boiling points of the mixture"
        },
        correctAnswer: "a"
      },
    {
        question: "Chemical Oxygen demand (COD) measures the ",
    answers: {
          a: "Amount of oxygen required for growth of microorganisms in water",
          b: "Amount of oxygen required to oxidize the calcium present in waste water",
          c: " Amount of oxygen that would be removed from the water in order to oxidize pollution ",
          d: "All of the above"
        },
        correctAnswer: "c"
      }
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
