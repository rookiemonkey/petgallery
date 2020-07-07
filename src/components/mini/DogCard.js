import React from 'react';
import { Link } from 'react-router-dom';

const DogCard = props => (
    < div className='col-3 d-flex flex-column  align-items-center' >
        <Link to="/Zoe">
            <img
                src={props.img}
                className="img-thumbnail"
                alt='Zoe'
            ></img>
        </Link>
        <h3>Zoe</h3>
    </div >
)

export default DogCard;