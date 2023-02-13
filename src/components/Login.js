import React from "react";

export default function Login(props) {
    return (
        <form className="auth__form">
            <h2 className="auth__title">Вход</h2>
            <input 
            type="email" 
            className="auth__input"
            placeholder="Email"/>
            <input 
            type="password" 
            className="auth__input"
            placeholder="Пароль"
            />
            <button 
            type="submit"
            className="auth__submit-btn"
            >Войти</button>
        </form>
    );
}
