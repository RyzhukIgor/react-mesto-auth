import React, { useCallback, useState} from "react";

export default function Login(props) {
    const {onSubmit} = props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        const authForm = {
            email,password
        }
        onSubmit(authForm)
    }, [email,password,onSubmit])
    return (
        <form className="auth__form" onSubmit={handleSubmit}>
            <h2 className="auth__title">Вход</h2>
            <input 
            type="email" 
            className="auth__input"
            placeholder="Email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <input 
            type="password" 
            className="auth__input"
            placeholder="Пароль"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button 
            type="submit"
            className="auth__submit-btn"
            >Войти</button>
        </form>
    );
}
