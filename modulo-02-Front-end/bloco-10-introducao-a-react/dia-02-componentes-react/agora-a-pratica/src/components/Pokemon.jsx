import React from "react";

class Pokemon extends React.Component {
  render() {
    return (
        <div className="card-pokemon" key={this.props.data.id}>
          <h3>name: {this.props.data.name}</h3>
          <h4>type: {this.props.data.type}</h4>
          <h5>average weight: {this.props.data.averageWeight.value} {this.props.data.averageWeight.measurementUnit}</h5>
          <img src={this.props.data.image} alt={this.props.data.name}/>
        </div>
      )
  }
}

export default Pokemon;
