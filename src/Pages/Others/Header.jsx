import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <nav >
                <ul className='nav'>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/checkout'><li>checkout</li></Link>
                    
                    
                    
                </ul>
            </nav>
        </div>
    );
};

export default Header;