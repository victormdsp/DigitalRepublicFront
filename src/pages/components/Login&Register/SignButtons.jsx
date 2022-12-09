
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import ModalComponent from "../Modal/Modal";
import styleForm from './BoxStyle';
import { Box } from "@mui/system";
import { Snackbar, Alert } from "@mui/material";

import './SignButtons.css'


export default function SignButtons() {

    const navigate = useNavigate(); //Navegação

    //Variáveis de login
    const [login, setLogin] = useState() //Setando variável
    const [loginInfos, setLoginInfos] = useState(); //Seta as informações de login

    //Variáveis de registro
    const [register, setRegister] = useState(false);
    const [registerInfos, setRegisterInfos] = useState();

    //Funções

    //Registro de um usuário
    const handleRegister = async (event) => {
        event.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "cpf": registerInfos.cpf,
                "name": registerInfos.name,
                "midName": registerInfos.midName,
                "lastName": registerInfos.lastName,
                "password": registerInfos.password,
            })
        }

        const response = await fetch('http://localhost:3001/criarConta', requestOptions);
        const data = await response.json();
        if (data.message) {
            setRegister(true);
            return;
        }

        console.log(data);
        navigate('/Account', { state: { data: data } });

    }

    //Login de um usuário
    const handleLogin = async (event) => {
        event.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "cpf": loginInfos.cpf,
                "password": loginInfos.password
            })
        }

        const response = await fetch('http://localhost:3001/login', requestOptions)
            .catch(() => {
                setLogin('error')
            });

        const data = await response.json();
        if (data.message) {
            setLogin(true);
            return;
        }
        else {
            navigate('/account', { state: { data: data } });
        }
    }

    //Verifica as informações de login
    const verifyInfosLogin = () => {
        if (!loginInfos || !loginInfos.cpf || !loginInfos.password) return true;
        return false;
    }

    const submitError = (text) => {
        return <Snackbar open={true} anchorOrigin={{ vertical: 'center', horizontal: 'center' }}>
            <Alert severity="warning">{text}</Alert>
        </Snackbar>
    }

    return (
        <div id="accountButtons">
            {/* Registro */}
            <ModalComponent id="teste" box={
                <Box sx={styleForm}>
                    <h1>Bem-vindo/a, faça seu cadastro para criar uma conta em nosso banco!</h1>
                    <form onSubmit={event => handleRegister(event)}>
                        <label htmlFor="">Nome</label>
                        <input required type="text" onChange={event => setRegisterInfos({ ...registerInfos, name: event.target.value })} />
                        <label htmlFor="">Sobrenome</label>
                        <input type="text" onChange={event => setRegisterInfos({ ...registerInfos, lasName: event.target.value })} />
                        <label htmlFor="">Sobrenome do Meio</label>
                        <input required type="text" onChange={event => setRegisterInfos({ ...registerInfos, midName: event.target.value })} />
                        <label htmlFor="">CPF</label>
                        <input required type="text" onChange={event => setRegisterInfos({ ...registerInfos, cpf: event.target.value })} />
                        <label htmlFor="">Senha</label>
                        <input required type="text" onChange={event => setRegisterInfos({ ...registerInfos, password: event.target.value })} />
                        <input type="submit" className="submitButton defaultButton" />
                        {register ? submitError('Algo deu errado , verifique as informações inseridas!') : null}
                    </form>
                </Box>}
                text={"Registre-se"}>

            </ModalComponent>

            {/* Login */}
            <ModalComponent box={
                <Box sx={styleForm}>
                    <h1>Bem-vindo/a, faça login para acessar sua conta!</h1>
                    <form onSubmit={event => handleLogin(event)}>
                        <label htmlFor="">CPF</label>
                        <input required type="text" onChange={event => setLoginInfos({ ...loginInfos, cpf: event.target.value })} />
                        <label htmlFor="">Senha</label>
                        <input required type="text" onChange={event => setLoginInfos({ ...loginInfos, password: event.target.value })} />
                        <input disabled={verifyInfosLogin()} type="submit" className="submitButton defaultButton" />
                        {login == true ? submitError('CPF ou Senha incorreta!')
                            : login == "error" ? submitError('Houve um erro ao tentar logar, tente novamente mais tarde.') : null}
                    </form>
                </Box>}
                text={"Login"}>

            </ModalComponent>

        </div>
    )
}