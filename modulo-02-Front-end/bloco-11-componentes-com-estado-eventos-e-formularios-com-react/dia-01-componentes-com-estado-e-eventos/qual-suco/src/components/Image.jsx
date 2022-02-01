import React, { Component } from 'react';

class Image extends Component {
  render() {
    const { source, colors, value } = this.props;
    const test = colors.find((color) => {
      if (!value) return color;
      if (color.name.includes(value)) return color
      return;
    })
    let result = test;
    let text = test;
    if (test) {
      result = test.hex
    } else {
      result = 'white';
    }
    if (result === 'white') {
      text = 'Sem suco pra você 😘';
    } else {
      text = test.suco
    }
    return (
      <div>
      <img src={source} alt="copo-de-cor" style={{backgroundColor: result}} />
      <p className="juice-text">{text}</p>
      </div>
    );
  }
}

export default Image;
