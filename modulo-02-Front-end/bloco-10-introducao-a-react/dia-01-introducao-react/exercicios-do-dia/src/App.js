import React from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  )
};

const taskList = ['acordar', 'café da manhã', 'arrumar a cama', 'estudar', 'dormir'];

class App extends React.Component {
  render() {
    return (
      <ul>{taskList.map((element) => Task(element))}</ul>
    )
  }
}

export default App;
