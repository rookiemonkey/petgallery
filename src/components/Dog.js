import React, { Component } from 'react';
import Nav from './mini/Nav';

class Dog extends Component {
    render() {
        return (
            <div>
                <Nav />
                <h1>Dog Route</h1>
                <img src={sessionStorage.ChosenDog} alt="Zoe"></img>
            </div>
        )
    }
}

export default Dog;