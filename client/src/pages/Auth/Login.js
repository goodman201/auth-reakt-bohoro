import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {auth, loginGoogle, loginEmail} from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "../../assets/styles/App.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) navigate("/profile");
    }, [user]);

    return (
            <div className="container">
                <div className="dws-input">
                    <input
                        type="text"
                        className="login-text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Введіть e-mail"
                    />
                </div>
                <div className="dws-input">
                    <input
                        type="password"
                        className="login-text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Введіть пароль"
                    />
                </div>
                <button
                    className="dws-button"
                    onClick={() => loginEmail(email, password)}
                >
                    Увійти
                </button>
                <button className="dws-button dws-google" onClick={loginGoogle}>
                    Увійти через Google
                </button>
                <div>
                    <Link to="/resetPassword">Забули пароль?</Link>
                </div>
                <div>
                    Немає акаунта?<Link to="/registration">Зареєструватись</Link> зараз.
                </div>
            </div>
    );
}

export default Login;
