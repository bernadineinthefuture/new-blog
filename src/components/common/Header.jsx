import React from 'react';
import { useTheme } from '../ThemeContext.jsx';
import { Link } from 'react-router'; 
import { useAuth, useUserName } from '../authWrapper/AuthContext.js';



function Header(){
    const username = useUserName();
    const {logout} = useAuth();

    return(
        <div>
            <h1>Welcome to my page!</h1>
        <nav className='header-links'>
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
                <li>
                    {/*<Link to="/login">Login</Link>*/}
                    {username ? (
                        <p onClick={logout}> Hi {username}, Logout</p> 
                    ):(
                        <Link to="/login">Login</Link>)}
                </li>
            </ul>
        </nav>
        </div>
    );
}

export default Header;