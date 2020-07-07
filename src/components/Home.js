import React, { Component } from 'react';
import Nav from './mini/Nav';
import DogCard from './mini/DogCard';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: []
    }
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <div className="container">
          <div className='row'>

            <DogCard />

          </div>
        </div>
      </div>
    );
  }
}

export default Home;
