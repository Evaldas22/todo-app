import React, {Component} from 'react';
import SignUpForm from './SignUpForm';
import Toobar from '../../common/Toolbar/Toolbar';
import './SignUp.css';


export const SignUp = props => (
    <div>
        <Toobar />
        <div className="row justify-content-center">
            <div className="col-md-4">
                <SignUpForm />
            </div>
        </div>
    </div>
);