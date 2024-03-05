import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'username') setUsername(value);
        if (name === 'password') setPassword(value);
    };

    const validateForm = () => {
        let formIsValid = true;
        let errors = {};

        if (!username) {
            formIsValid = false;
            errors['username'] = '*Please enter your username.';
        }

        if (!password) {
            formIsValid = false;
            errors['password'] = '*Please enter your password.';
        }

        setErrors(errors);
        return formIsValid;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            // Perform login operation
            navigate('/dashboard');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div>
                <label>Username:</label>
                <input type="text" name="username" value={username} onChange={handleInputChange} />
                {errors.username && <div>{errors.username}</div>}
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="password" value={password} onChange={handleInputChange} />
                {errors.password && <div>{errors.password}</div>}
            </div>
            <input type="submit" value="Login" />
        </form>
    );
};

export default Login;