import React, { Component } from 'react';
import Nav from './mini/Nav';

class Dog extends Component {
    render() {

        const Dogs = JSON.parse(sessionStorage.Dogs);
        const ind = this.props.match.params.id;
        const dog = this.props.match.params.dog;

        return (
            <div>
                <Nav />
                <img src={Dogs[ind]} alt={dog} />
                <h3>{dog}</h3>
            </div>
        )
    }
}

export default Dog;