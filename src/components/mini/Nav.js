import React from 'react'
import { NavLink } from 'react-router-dom';

const Nav = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark mb-5">
        <div className="d-flex align-items-center">
            <svg
                id="icon"
                width="24"
                height="24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
            >
                <path d="M9 23h-6v-10l8.991-8.005 9.009 8.005v10h-6v-3c0-1.654-1.355-3.021-3.009-3.021-1.655 0-2.991 1.367-2.991 3.021v3zm2.252-11.015c.094-.002 1.385-.002 1.477 0 1.17.016 1.264-.998 2.259-.998.643 0 .995.524.999.999.005.474-.28.825-.622.995.327.177.619.527.622 1.002.003.475-.347.999-.999.999-.995 0-1.089-1.015-2.259-.998h-1.477c-1.17-.017-1.264.998-2.259.998-.652 0-1.002-.524-.999-.999.003-.475.295-.825.622-1.002-.342-.17-.627-.521-.622-.995.004-.475.356-.999.999-.999.995 0 1.089 1.014 2.259.998zm.748-10.985l12 10.632-1.328 1.493-10.672-9.481-10.672 9.481-1.328-1.481 12-10.644z" />
            </svg>
            <a className="navbar-brand color_white" href="/">
                Dogs
            </a>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <NavLink to='/' className='nav-item nav-link color_white'>Home</NavLink>
            </div>
        </div>
    </nav>
)

export default Nav;