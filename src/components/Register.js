import React from "react";
import { Link } from "react-router-dom";

export default function Register(props) {
    return (
        <form className="auth__form">
            <h2 className="auth__title">Регистрация</h2>
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
            >Зарегистрироваться</button>
            <p className="auth__question">
            Уже зарегистрированы?
            <Link to="/sign-in" className="auth__link"> Войти</Link>
            </p>
        </form>
    );
}
