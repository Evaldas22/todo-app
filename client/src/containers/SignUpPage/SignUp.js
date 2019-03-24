import React from 'react';
import { connect } from 'react-redux';
import SignUpForm from '../../components/SignUp/SignUpForm';
import Toobar from '../../common/Toolbar/Toolbar';
import './SignUp.css';
import { registerUser } from '../../actions/userActions'


const SignUp = props => (
    <div>
        <Toobar />
        <div className="row justify-content-center">
            <div className="col-md-4">
                <SignUpForm registerUser={props.registerUser}/>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = dispatch => (
    { registerUser: (user) => dispatch(registerUser(user))}
);

export default connect(null, mapDispatchToProps)(SignUp);