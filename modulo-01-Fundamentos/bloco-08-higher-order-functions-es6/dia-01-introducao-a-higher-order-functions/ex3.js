const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkCorrectAnswers = (arrayCorrect, studentAnswer) => {
  let counter = 0;
  studentAnswer.forEach((element, index) => {
    if (element === 'N.A') return;

    if (element === arrayCorrect[index]) {
      counter += 1;
    } else {
      counter -= 0.5;
    };
  });
  return counter;
};

const countCorrectAnswer = (correctAnswers, checkAnswers, matchAnswers) => matchAnswers(correctAnswers, checkAnswers);

console.log(countCorrectAnswer(RIGHT_ANSWERS, STUDENT_ANSWERS, checkCorrectAnswers));
