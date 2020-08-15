import React, { Component } from 'react';
import AuthPageWrapper from '../AuthPageWrapper';
import SubmitButton from '../SubmitButton';
import { Link } from 'react-router-dom';
import authService from '../../services/authService';

class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            confirmPassword: "",
            passwordError: "",
            code: "",
            codeError: ""
        }
    }

    onChange = (event, type) => {
        const newState = {};

        newState[type] = event.target.value;

        this.setState(newState);
    }

    handleSubmit = async (event) => {
        const registerCode = 'b88c4d60-1e85-44a3-b377-39745f826a97';
        event.preventDefault();

        const {
            email,
            password,
            confirmPassword,
            code
        } = this.state;

        if (code !== registerCode) {
            this.setState({
                codeError: 'Кодът не е валиден'
            });
        }

        if (password !== confirmPassword) {
            this.setState({
                passwordError: 'Паролите не съвпадат'
            })
        }

        const result = await authService.registerUser(email, password, confirmPassword, code);

        if (result) {
            this.props.history.push('/subjects');
        }
    }

    render() {
        const {
            email,
            password,
            confirmPassword,
            passwordError,
            code,
            codeError
        } = this.state;

        return (
            <AuthPageWrapper>
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
                                <input id="password" type="password" name="password" required minLength="6" maxLength="50" value={password} onChange={(e) => this.onChange(e, 'password')} />
                            </div>
                            <div className="input-field col s12 m6">
                                <label htmlFor="confirmPassword" className="font-weight-bold">Потвърждаване на паролата</label>
                                <input id="confirmPassword" type="password" name="confirmPassword" required minLength="6" maxLength="50" value={confirmPassword} onChange={(e) => this.onChange(e, 'confirmPassword')} />
                                {passwordError ? <span className="red-text">{passwordError}</span> : ''}
                            </div>
                            <div className="input-field col s12 m6">
                                <label htmlFor="code" className="font-weight-bold">Код за регистрация</label>
                                <input id="code" type="text" name="code" required value={code} onChange={(e) => this.onChange(e, 'code')} />
                                {codeError ? <span className="red-text">{codeError}</span> : ''}
                            </div>
                            <SubmitButton text="Регистрация" />
                        </div>
                    </div>
                </form>
            </AuthPageWrapper>
        )
    }
}

export default Register;