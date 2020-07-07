import React from 'react';
import { Link } from 'react-router-dom';

const DogCard = props => (
    <div className='col-sm-12 col-md-4 col-lg-3 d-flex flex-column align-items-center' >
        <Link to={`/${props.name}/${props.ind}`} >
            <img
                src={props.img}
                className="img-thumbnail"
                alt={props.name}
            ></img>
        </Link>
        <h3>{props.name}</h3>
    </div >
)

export default DogCard;