import React from 'react';
import shortid from 'shortid';
import DogCard from '../components/mini/DogCard';

const renderDogs = ({ dogs, names }) => {
    return dogs.map((d, i) => (
        <DogCard
            name={names[i]}
            key={shortid.generate()}
            img={d}
        />
    ))
}

export default renderDogs