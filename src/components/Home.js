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
    if (!sessionStorage.Dogs && !sessionStorage.Names) {
      const numberOfDogs = 12;
      const numberOfNames = 12;
      Promise.all([getDogs(numberOfDogs), getNames(numberOfNames)])
        .then(data => {
          this.setState({ dogs: data[0], names: data[1] })
        })
        .catch(error => {
          console.error(`Something went wrong upon fetching data ${error.message}`)
        })
    } else {
      this.setState({
        dogs: JSON.parse(sessionStorage.Dogs),
        names: JSON.parse(sessionStorage.Names)
      })
    }
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
