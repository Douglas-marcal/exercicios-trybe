import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { value, updateInput } = this.props;
    return (
      <input onChange={(event) => updateInput(event)} value={value} className="juice-input" type="text"/>
    );
  }
}

export default Input;
