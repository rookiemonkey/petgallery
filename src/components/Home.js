import React, { Component } from 'react';
import renderDogs from '../helpers/renderDogs';
import getDogs from '../helpers/getDogs';
import getNames from '../helpers/getNames';
import Nav from './mini/Nav';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: new Array(10),
      names: []
    }
  }

  componentDidMount() {
    Promise.all([getDogs(12), getNames(12)])
      .then(d => { this.setState({ dogs: d[0], names: d[1] }) })
      .catch(e => { console.error(`Something went wrong upon fetching data ${e.message}`) })
  }

  render() {

    const { dogs, names } = this.state

    return (
      <div className="App">
        <Nav />
        <div className="container">
          <div className='row'>

            {renderDogs({ dogs, names })}

          </div>
        </div>
      </div>
    );
  }
}

export default Home;
