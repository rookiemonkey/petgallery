import React, { Component } from 'react';
import renderDogs from '../helpers/renderDogs';
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
    fetch('https://dog.ceo/api/breeds/image/random/10')
      .then(r => { return r.json() })
      .then(d => {
        this.setState({ ...this.state, dogs: d.message }, () => {
          fetch('https://randomuser.me/api/?results=10')
            .then(r => { return r.json() })
            .then(d => {
              const names = d.results.map(o => { return o.name.first })
              this.setState({ ...this.state, names: names }, () => { console.log(this.state) })
            })
            .catch(e => { console.error('Something went upon fetching the names:', e.message) })
        })
      })
      .catch(e => { console.error('Something went upon fetching the dogs:', e.message) })
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
