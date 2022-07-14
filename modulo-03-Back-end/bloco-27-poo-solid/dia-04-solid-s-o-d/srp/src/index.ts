type Discipline = {
  name: string;
  grade: number;
  letterGrade?: string;
};

type Student = {
  name: string;
  disciplines: Discipline[];
};

const GRADE_DICT = {
  numbers: [0.9, 0.8, 0.7, 0.6, 0.1],
  letters: ['A', 'B', 'C', 'D', 'E'],
};

function getGradeLetter(gradeNumber: number): string {
  const gradeNumbers: Array<number> = GRADE_DICT.numbers;
  const gradeLetters: Array<string> = GRADE_DICT.letters;

  for (let index = 0; index < gradeNumbers.length; index += 1) {
    if (gradeNumber >= gradeNumbers[index]) return gradeLetters[index];
  }

  return 'F';
}

function getLetterGrades(discipline: Discipline): Discipline {
  return {
    ...discipline,
    letterGrade: getGradeLetter(discipline.grade),
  };
}

function percentageGradesIntoLetters(student: Student): Student {
  return {
    ...student,
    disciplines: student.disciplines.map(getLetterGrades),
  };
}

function approvedStudents({ disciplines }: Student): boolean {
  return disciplines.every(({ grade }) => grade > 0.7);
}

function updateApprovalData({ name: studentName, disciplines }: Student): void {
  console.log(`A pessoa com nome ${studentName} foi aprovada!`);

  disciplines.map(({ name, letterGrade }) => console.log(`${name}: ${letterGrade}`));
}

function setApproved(students: Array<Student>): void {
  students
    .map(percentageGradesIntoLetters)
    .filter(approvedStudents)
    .map(updateApprovalData);
}

const students = [
  {
    name: 'Lee',
    disciplines: [
      { name: 'matemática', grade: 1.0 },
      { name: 'história', grade: 0.9 },
    ],
  },
  {
    name: 'Clementine',
    disciplines: [
      { name: 'matemática', grade: 0.8 },
      { name: 'história', grade: 0.9 },
    ],
  },
];

setApproved(students);

export {
  percentageGradesIntoLetters,
  approvedStudents,
  updateApprovalData,
  getLetterGrades,
  setApproved,
};
