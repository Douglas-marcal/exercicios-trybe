import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    return (
      this.props.data.map((pokemon) => (
        <Pokemon data={pokemon} key={pokemon.id}/>
      ))
    )
  }
}

export default Pokedex;
