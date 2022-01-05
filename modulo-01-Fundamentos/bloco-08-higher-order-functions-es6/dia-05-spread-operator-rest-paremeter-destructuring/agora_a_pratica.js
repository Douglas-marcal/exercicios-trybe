// 1
const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  // console.log(rectangleArea(...rectangle))
  // console.log(rectangle[0] * rectangle[1]);
});

// 2

const sum = (...numbers) => numbers.reduce((accumulator, current) => accumulator + current, 0);

// console.log(sum(3, 2, 10));

// 3

const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

const personLikes = ({ name, age, likes }) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;

// console.log(personLikes(alex));
// console.log(personLikes(gunnar));

// 4
const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

const filterPeople = (array) => array.filter(({ bornIn, nationality }) => (
  bornIn < 2001 
  && bornIn > 1900 
  && nationality === 'Australian'
));

// console.log(filterPeople(people));

// 5

const myList = [1, 2, 3];

// const swap = (array) => {
//   [array[0], array[2]] = [array[2], array[0]] 
//   return array
// }

const swap = ([zero, one, two]) => [two, one, zero]

console.log(swap(myList));