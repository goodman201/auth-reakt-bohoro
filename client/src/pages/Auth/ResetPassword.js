import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, resetPassword } from "../../services/firebase";
import "../../assets/styles/App.css";

function ResetPassword() {
    const [email, setEmail] = useState("");
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) navigate('/profile');
    }, [user]);

    return (
        <div className="reset">
            <div className="container">
                <div className="dws-input">
                    <input
                        type="text"
                        className="reset-text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-mail Address"
                    />
                </div>
                <button className="dws-button" onClick={() => resetPassword(email)}>
                    Send password reset email
                </button>

                <div>
                    Don't have an account? <Link to="/registration">Register</Link> now.
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;
