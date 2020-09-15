import React from 'react';
import './Menu.css'

function Menu() {
    return (
        <div className='menu'>
            <h1 className='Logo'><a href="/#">travel</a></h1>

            <div className='MainLinks'>
                <ul>
                    <li><a href="/#">About</a></li>
                    <li><a href="/#">Destinations</a></li>
                </ul>
            </div>

            <div className='Account'>

                <span>
                    <a href="/#">Sign in</a>
                </span>

                <button>Login</button>
            </div>
        </div>
    );
}

export default Menu;