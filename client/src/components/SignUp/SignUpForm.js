import React, {Component} from 'react';
import './SignUpForm.css';

class SignUpForm extends Component {
    constructor(props){
        super(props);
        this.state={
            username: ''
        }
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
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
            </form>
        );
    }
};

export default SignUpForm;