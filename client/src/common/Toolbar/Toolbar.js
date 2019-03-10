import React from 'react';

const Toolbar = props => (
    <header>
        <nav>
            <div><a href="#">TODO manager</a></div>
            <div>
                <ul>
                    <li><a href="#">My TODOs</a></li>
                    <li><a href="#">Sign in</a></li>
                    <li><a href="#">Sign up</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Toolbar;