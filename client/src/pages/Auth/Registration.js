import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
    auth,
    registrationEmail,
    loginGoogle,
} from "../../services/firebase";
import "../../assets/styles/App.css";

function Registration() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const register = () => {
        if (!name) alert("Please enter name");
        registrationEmail(name, email, password);
    };

    useEffect(() => {
        if (user) navigate("/profile");
    }, [user]);

    return (
            <div className="container">
                <div className="dws-input">
                    <input
                        type="text"
                        className="registration-text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Введіть ваше ім'я"
                    />
                </div>
                <div className="dws-input">
                    <input
                    type="text"
                    className="registration-text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Введіть e-mail"
                    />
                </div>
                <div className="dws-input">
                    <input
                        type="password"
                        className="registration-text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Введіть пароль"
                    />
                </div>
                <button className="dws-button" onClick={register}>
                    Реєстрація
                </button>
                <button
                    className="dws-button dws-google"
                    onClick={loginGoogle}
                >
                    Реєстрація через Google
                </button>

                <div>
                    Вже є акаунт? <Link to="/">Увійти</Link> зараз.
                </div>
            </div>
    );
}

export default Registration;
