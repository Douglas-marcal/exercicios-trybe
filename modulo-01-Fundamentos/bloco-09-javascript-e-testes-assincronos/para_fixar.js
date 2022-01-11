// 1
const getUser = (callback) => callback(
  {
    firstName: 'Ivan',
    lastName: 'Ivanovich',
    nationality: 'Russian'
  }
);

console.log(getUser(({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`)); 
console.log(getUser(({ firstName, nationality }) => `${firstName} is ${nationality}`)); 
