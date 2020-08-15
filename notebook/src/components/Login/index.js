import React, { Component } from 'react';
import AuthPageWrapper from '../AuthPageWrapper';
import SubmitButton from '../SubmitButton';
import { Link } from 'react-router-dom';
import authService from '../../services/authService';

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            loginError: ''
        }
    }

    onChange = (event, type) => {
        const newState = {};

        newState[type] = event.target.value;

        this.setState(newState);
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const {
            email,
            password
        } = this.state;

        const result = await authService.loginUser(email, password);

        if (result) {
            this.props.history.push('/subjects');
        } else {
            this.setState({
                loginError: 'Невалиден имейл или парола'
            });
        }
    }

    render() {
        const {
            email,
            password,
            loginError
        } = this.state;

        return (
            <AuthPageWrapper>
                {loginError ? <div className="red-text">{loginError}</div> : ''}
                <form onSubmit={this.handleSubmit}>
                    <p className="center">
                        <Link className="flow-text indigo-text text-lighten-3" to="/">
                            <span className="red-text text-lighten-3">Net</span>Book
                        </Link>
                    </p>
                    <div className="form-group mx-auto">
                        <div className="row">
                            <div className="input-field col s12 m6">
                                <label htmlFor="email" className="font-weight-bold">Емейл</label>
                                <input id="email" type="email" name="email" required value={email} onChange={(e) => this.onChange(e, 'email')} />
                            </div>
                            <div className="input-field col s12 m6">
                                <label htmlFor="password" className="font-weight-bold">Парола</label>
                                <input id="password" type="password" name="password" minLength="6" maxLength="50" required value={password} onChange={(e) => this.onChange(e, 'password')} />
                            </div>
                            <SubmitButton text="Вход" />
                        </div>
                    </div>
                </form>
            </AuthPageWrapper>
        )
    }
}

export default Login;