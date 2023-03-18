import { useState } from 'react';

import UserForm from './UserForm';

function Register() {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Registering with email: ${email} and password: ${password}`);
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <UserForm
            type="register"
            handleSubmit={handleSubmit}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
        />
    );
}

export default Register;