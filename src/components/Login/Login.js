import { useState } from 'react';


import UserForm from './UserForm';

function Login() {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Logging in with email: ${email} and password: ${password}`);
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <UserForm
            type="login"
            handleSubmit={handleSubmit}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
        />
    );
}

export default Login;