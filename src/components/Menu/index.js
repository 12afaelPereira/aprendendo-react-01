import React from 'react';
import './Menu.css'

function Menu() {
    return (
        <div className='menu'>
            <h1 className='Logo'>travel</h1>

            <div className='MainLinks'>
                <ul>
                    <li><a href="/#">About</a></li>
                    <li><a href="/#">Destinations</a></li>
                </ul>
            </div>

            <div className='Autentication'>

                <span>
                    <a href="/#">Sign in</a>
                </span>

                <button>Login</button>
            </div>
        </div>
    );
}

export default Menu;