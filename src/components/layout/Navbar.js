import React from 'react';
import {Link} from 'react-router-dom'; //This is used to create a link to go to other pages

function Navbar(){
    return ( 
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">Todo</Link>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                </ul>
            </div>            
        </nav>
     );
}



 



  
export default Navbar;