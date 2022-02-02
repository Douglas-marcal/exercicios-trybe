import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      isReady: false,
      url: '',
    };

    this.requestNewDog = this.requestNewDog.bind(this);
  }

  componentDidMount() {
    this.fetchAPI();
  }

  fetchAPI() {
    this.setState({ isReady: false }, () => {
      fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => response.json())
        .then((data) => {
          this.setState(() => ({ url: data.message, isReady: true }));
        });
    });
  }

  requestNewDog() {
    this.fetchAPI();
  }

  render() {
    const { isReady, url } = this.state;
    return (
      <div>
        {
          isReady ? <img src={ url } alt="dog" /> : <h1>Loading</h1>
        }
        <br />
        <button type="button" onClick={ this.requestNewDog }>Click</button>
      </div>
    );
  }
}

export default App;
