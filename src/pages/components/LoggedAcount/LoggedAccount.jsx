import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import userPhoto from '../../Assets/userPhoto.png'
import './LoggedAccount.css'

export default function LoggedAccount() {
    const navigate = useNavigate();

    return (
        <div id="loggedBody">
            <Button id="logoutButton" onClick={() => navigate(-1)}>Logout</Button>
            <img id="userImage" src={userPhoto} alt="Foto do usuário" />
        </div>
    )
}