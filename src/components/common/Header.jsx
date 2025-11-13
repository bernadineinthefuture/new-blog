import React from 'react';
import { useTheme } from '../ThemeContext.jsx';
import { Link } from 'react-router'; 


function Header(){
    const { toggleTheme } = useTheme(); 
    return(
        <div>
            <h1>All About My Blog</h1>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                    </li>
                <li>
                    <Link to="/posts"> Blog posts </Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                    </li>
                <button onClick={toggleTheme}>Toggle Theme</button>
            </ul>
        </nav>
        </div>
    );
}

export default Header;