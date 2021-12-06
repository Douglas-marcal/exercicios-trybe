const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const nightShift = (object, key, value) => {
  object[key] = value;
}

nightShift(lesson2, 'turno', 'noite');

// console.log(lesson2);

const showKeysObjects = (object) => console.log(Object.keys(object))

// showKeysObjects(lesson1);

const objectLength = (object) => console.log(Object.keys(object).length)

// objectLength(lesson2);

const showValuesObject = (object) => {
  console.log(Object.values(object))
}

// showValuesObject(lesson1);
const allLessons = {}
Object.assign(allLessons, {lesson1}, {lesson2}, {lesson3});

// console.log(allLessons);

const allStudents = () => {
  const lessons = Object.values(allLessons);
  let counter = 0;
  for (let index = 0; index < lessons.length; index += 1) {
    counter += lessons[index].numeroEstudantes;
  }
  console.log(counter);
  return counter;
}

allStudents();