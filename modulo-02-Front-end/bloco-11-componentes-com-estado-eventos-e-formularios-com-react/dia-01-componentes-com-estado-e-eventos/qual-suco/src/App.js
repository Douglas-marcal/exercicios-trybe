import React, { Component } from 'react';
import Header from './components/Header';
import Input from './components/Input';
import Colors from './components/Colors';
import Image from './components/Image'
import colors from './data/colorsData.js';
import cupImage from './image/copo.png';

class App extends Component {
  constructor() {
    super()
    this.state = { value: ''};
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput({ target: { value }}) {
    this.setState(() => ({ value: value }))
  }

  render() {
    return (
      <main>
        <Header />
        <Input value={this.state.value} updateInput={this.updateInput}/>
        <hr />
        <div className="cup-colors-container">
          <Colors colors={colors} value={this.state.value} teste={this.updateListItem}/>
          <Image source={cupImage} colors={colors} value={this.state.value}/>
        </div>
      </main>
    );
  }
}

export default App;
