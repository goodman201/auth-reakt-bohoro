import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "../assets/styles/App.css";
import { auth, db, logout } from "../services/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

function Profile() {
    const [user] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const fetchUserName = async () => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();

            setName(data.name);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        if (!user) return navigate("/");

        fetchUserName();
    }, [user]);

    return (
        <div className="profile">
            <div className="container">
                Ви увійшли як
                <div>{name}</div>
                <div>{user?.email}</div>
                <button className="dws-button" onClick={logout}>
                    Вийти
                </button>
            </div>
        </div>
    );
}

export default Profile;
