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
                        <Link to="/">
                            Back to Lists
                        </Link>
                    </div>
                </div>

            </div>
        )
    }
}

export default Dog;