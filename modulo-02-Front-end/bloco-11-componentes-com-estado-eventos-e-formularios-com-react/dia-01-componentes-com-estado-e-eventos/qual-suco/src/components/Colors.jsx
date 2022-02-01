import React, { Component } from 'react';

class Colors extends Component {
  render() {
    const { colors, value } = this.props;
    return (
      <ul className="colors-container">
        {
          colors.filter((color) => color.name.includes(value))
          
            .map((color) => {
              return (
                <li key={color.hex} className="list-item">
                  <div className="color-individual" style={{backgroundColor: color.hex}}></div>
                  {color.name}
                </li>
                )
            })
        }
      </ul>
    );
  }
}

export default Colors;
