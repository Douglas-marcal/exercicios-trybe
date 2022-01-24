import React from "react";

class Image extends React.Component {
  render() {
    return (
      <img key={Math.random()} src={this.props.url} alt={this.props.alternative}/>
    )
  }
}

export default Image;
