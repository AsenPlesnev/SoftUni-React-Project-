import React, { Component } from 'react';
import AuthPageWrapper from '../AuthPageWrapper';
import SubmitButton from '../SubmitButton';

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }
    }

    onChange = (event, type) => {
        const newState = {};

        newState[type] = event.target.value;

        this.setState(newState);
    }

    render() {
        const {
            email,
            password
        } = this.state;

        return (
            <AuthPageWrapper>
                <div className="input-field col s12 m6">
                    <label htmlFor="email" className="font-weight-bold">Емейл</label>
                    <input id="email" type="email" name="email" value={email} onChange={(e) => this.onChange(e, 'email')} />
                </div>
                <div className="input-field col s12 m6">
                    <label htmlFor="password" className="font-weight-bold">Парола</label>
                    <input id="password" type="password" name="password" value={password} onChange={(e) => this.onChange(e, 'password')} />
                </div>
                <SubmitButton text="Вход" />
            </AuthPageWrapper>
        )
    }
}

export default Login;