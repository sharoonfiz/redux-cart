import React from 'react';
import './Header.css';
import { BiSolidCartAlt } from 'react-icons/bi'

const Header = () => {
    return (
        <header>
            <div className="container">
                <h1>Redux Kit </h1>
                <BiSolidCartAlt className='logo' />

            </div>
        </header>
    )
}

export default Header