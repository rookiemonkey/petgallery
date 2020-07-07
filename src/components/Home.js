import React, { Component } from 'react';
import renderDogs from '../helpers/renderDogs';
import Nav from './mini/Nav';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: new Array(10)
    }
  }

  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/image/random/10')
      .then(r => { return r.json() })
      .then(d => { this.setState({ dogs: d.message }) })
      .catch(e => { console.error('Something went upon fetching the dogs:', e.message) })
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <div className="container">
          <div className='row'>

            {renderDogs(this.state.dogs)}

          </div>
        </div>
      </div>
    );
  }
}

export default Home;
