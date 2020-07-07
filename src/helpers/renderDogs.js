import React from 'react';
import shortid from 'shortid';
import DogCard from '../components/mini/DogCard';

const renderDogs = props => {
    return props.map((d, i) => (
        <DogCard
            key={shortid.generate()}
            img={d}
        />
    ))
}

export default renderDogs