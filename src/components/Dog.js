import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './mini/Nav';

class Dog extends Component {
    render() {

        const Dogs = JSON.parse(sessionStorage.Dogs);
        const ind = this.props.match.params.id;
        const dog = this.props.match.params.dog;

        return (
            <div>
                <Nav />

                <div className="container">
                    <div className='row'>
                        <div className='mx-auto'>
                            <img
                                src={Dogs[ind]}
                                alt={dog}
                                className='img-raw'
                            />
                            <h3>{dog}</h3>
                        </div>
                    </div>
                    <div>
                        <Link to="/" className="btn-custom-back-link">
                            <button
                                type="button"
                                className="btn btn-dark btn-custom-back"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="white"
                                    viewBox="0 0 24 24">
                                    <path d="M3 12l18-12v24z" />
                                </svg>
                                &nbsp;
                                Back
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        )
    }
}

export default Dog;