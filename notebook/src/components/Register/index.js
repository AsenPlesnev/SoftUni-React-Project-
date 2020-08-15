import React, { Component } from 'react';
import AuthPageWrapper from '../AuthPageWrapper';
import SubmitButton from '../SubmitButton';

class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            confirmPassword: "",
            code: ""
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
            password,
            confirmPassword,
            code
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
                <div className="input-field col s12 m6">
                    <label htmlFor="confirmPassword" className="font-weight-bold">Потвърждаване на паролата</label>
                    <input id="confirmPassword" type="password" name="confirmPassword" value={confirmPassword} onChange={(e) => this.onChange(e, 'confirmPassword')} />
                </div>
                <div className="input-field col s12 m6">
                    <label htmlFor="code" className="font-weight-bold">Код за регистрация</label>
                    <input id="code" type="text" name="code" value={code} onChange={(e) => this.onChange(e, 'code')} />
                </div>
                <SubmitButton text="Регистрация" />
            </AuthPageWrapper>
        )
    }
}

export default Register;