import React from 'react';
import './Toolbar.css';
import { Link } from 'react-router-dom';

const Toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar-nav">
            <div className="toolbar-name"><Link to="/" >TODO Manager</Link></div>
            <div className="spacer"></div>
            <div className="toolbar-nav-items">
                <ul>
                    <li><Link to="/" >My TODOs</Link></li>
                    <li>{props.username ? 
                        `Welcome, ${props.username}!` : 
                        (<Link to="/signIn">Sign in</Link>)}</li>
                    {props.username ? null : (<li><Link to="/signUp">Sign up</Link></li>)}
                </ul>
            </div>
        </nav>
    </header>
);

export default Toolbar;