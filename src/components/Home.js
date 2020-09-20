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

    this.loadMore = this.loadMore.bind(this);
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

  loadMore() {
    Promise.all([getDogs(6), getNames(6)])
      .then(data => {
        this.setState({
          dogs: [...this.state.dogs, ...data[0]],
          names: [...this.state.names, ...data[1]]
        })
      })
      .catch(error => {
        console.error(`Something went wrong upon fetching data ${error.message}`)
      })
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

          <div className="row d-flex justify-content-center">
            <button
              onClick={this.loadMore}
              type="button"
              className="btn btn-dark btn-custom"
            >
              Load More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M12 21l-12-18h24z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
