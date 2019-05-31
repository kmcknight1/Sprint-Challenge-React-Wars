import React, { Component } from 'react';
import './App.css';
import Dog from './components/Dog';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dogs: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://dog.ceo/api/breed/african/images');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log("DATA: ", data)
        this.setState({ dogs: data.message });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">African Dog Photos</h1>
        <div className='dogs'>
          {this.state.dogs.map(dog => (
            <Dog dog={dog} />
          ))}
        </div>
        <footer>Photos from <a href='https://dog.ceo/dog-api/#all'>https://dog.ceo/dog-api/#all</a></footer>
      </div>
    );
  }
}

export default App;
