import React from 'react';
import data from './pokemon/data'
import Pokedex from './components/Pokedex';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Pokedex</h1>
        <section className='pokemon-container'>
         <Pokedex data={data}/>
        </section>
      </div>
    )
  }
}

export default App;
