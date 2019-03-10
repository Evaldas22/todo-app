import React from 'react';
import './Toolbar.css';

const Toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar-nav">
            <div className="toolbar-name"><a href="#">TODO manager</a></div>
            <div className="spacer"></div>
            <div className="toolbar-nav-items">
                <ul>
                    <li><a href="#">My TODOs</a></li>
                    <li><a href="#">{props.username ? `Welcome ${props.username}` : "Sign in"}</a></li>
                    {props.username ? null : (<li><a href="#">Sign up</a></li>)}
                </ul>
            </div>
        </nav>
    </header>
);

export default Toolbar;