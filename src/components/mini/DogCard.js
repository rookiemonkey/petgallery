import React from 'react';
import { Link } from 'react-router-dom';

const DogCard = props => (
    <div className='col d-flex flex-column  align-items-center'>
        <Link to="/Zoe">
            <img
                src="https://images.dog.ceo/breeds/briard/n02105251_8911.jpg"
                className="img-thumbnail"
            ></img>
        </Link>
        <h3>Zoe</h3>
    </div>
)

export default DogCard;