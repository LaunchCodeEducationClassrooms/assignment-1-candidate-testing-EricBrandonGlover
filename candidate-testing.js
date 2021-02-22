const input = require('readline-sync');



let candidateName = '';
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometers = 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = ['', '', '', '', ''];
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = '';


function askForName() {
  candidateName = input.question("Please enter your name: ");
}


function askQuestion() {

  for (i = 0; i <= 4; i++) {
    candidateAnswers[i] = input.question(questions[i]);
  }
}


function gradeQuiz(candidateAnswers) {

  for(i = 0; i <= 4; i++) {
    console.log("Q"+[i+1]+": " + questions[i]);
    console.log("A: " + candidateAnswers[i]);
    if(candidateAnswers[i] === correctAnswers[i]) {
      console.log("That is the correct answer");
    } else {
      console.log("This answer is incorrect");
    }
  }


  let answersCorrect = 0;

  for(i = 0; i <= 4; i++) {
    if(candidateAnswers[i].toUpperCase() === correctAnswers[i].toUpperCase()) {
      answersCorrect++;
    }
  }
  

  let grade = answersCorrect / questions.length * 100;
  // This variable holds, as an integer, the grade percentage

  return grade;
}


function runProgram() {
  askForName();
  console.log("Hello, " + candidateName + ".");
  
  askQuestion();
  let overallGrade = gradeQuiz(this.candidateAnswers);


  console.log("Overall Grade: " + overallGrade + "%");
  if(overallGrade >= 80) {
    console.log("Status: SUCCESS");
  } else {
    console.log("Status: FAILED");
  }
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};