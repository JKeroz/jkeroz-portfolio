import React from 'react';
import './Navigation.css';

const navigation = (props) => {
   return (
        <header className="navigation">
            <nav className="navigation_navbar">
                <div>
                
                </div>
                <div className="navigation_logo">
                    <a href="/">LOGO</a>                
                </div>
                <div className="spacer" />
                <div className="navigation_items">
                    <ul>
                        <li><button className="btn btn-underline">About</button></li>
                        <li><button className="btn btn-underline">Projects</button></li>
                        <li><button className="btn btn-underline">Contact</button></li>
                    </ul>
                </div>
            </nav>
        </header>
   )
}

export default navigation;