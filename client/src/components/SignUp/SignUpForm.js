import React, {Component} from 'react';
import './SignUpForm.css';

class SignUpForm extends Component {
    constructor(props){
        super(props);
        this.state={
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    onChange = e => {
        console.log(e.target.name);
        
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.registerUser(this.state);
    }

    render(){
        return (
            <form>
                <h2 className="header">Sign up form!</h2>
                <div className="form-group">
                    <label className="control-label">Username</label>
                    <input 
                        value={this.state.username}
                        type="text"
                        name="username"
                        className="form-control"
                        onChange={this.onChange}
                    />
                </div>
                <div className="form-group">
                    <label className="control-label">Email</label>
                    <input 
                        value={this.state.emaila}
                        type="text"
                        name="email"
                        className="form-control"
                        onChange={this.onChange}
                    />
                </div>
                <div className="form-group">
                    <label className="control-label">Password</label>
                    <input 
                        value={this.state.password}
                        type="password"
                        name="password"
                        className="form-control"
                        onChange={this.onChange}
                    />
                </div>
                <div className="form-group">
                    <label className="control-label">Confirm password</label>
                    <input 
                        value={this.state.confirmPassword}
                        type="password"
                        name="confirmPassword"
                        className="form-control"
                        onChange={this.onChange}
                    />
                </div>
                <div className="form-group"
                    onClick={this.onSubmit}>
                    <button className="btn btn-primary btn-lg">
                        Sign up
                    </button>
                </div>
            </form>
        );
    }
};

export default SignUpForm;