import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ModalComponent from "../components/Modal/Modal";
import LoggedAccount from "../components/LoggedAcount/LoggedAccount";

import eye from "../Assets/eye.png";
import slashedEye from "../Assets/slashedEye.png";

import './Account.css'
import { Box } from "@mui/system";
import styleForm from "../components/Login&Register/BoxStyle";
import { Alert, Snackbar } from "@mui/material";

export default function Account() {

    const locale = useLocation()
    const props = locale.state.data;


    const [valorDeposito, setDeposito] = useState();

    const [transferenciaInfos, setTransferenciaInfos] = useState();

    const [verSaldo, setSaldo] = useState(false);


    //States dos alertas de depósito
    const [depositAlert, depositAlertMessage] = useState(false);
    const [deposited, setDepositado] = useState(false);

    //States dos alertas de transferência
    const [transferenciaAlert, transferenciaAlertMessage] = useState(false);

    // Função de depósito no banco
    const handleDepositar = async (event) => {
        event.preventDefault();

        const requestOptions = {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "cpf": props.cpf,
                "valor": valorDeposito
            })
        }

        const response = await fetch('http://localhost:3001/depositar', requestOptions);
        const data = await response.json();
        if (data.message) {
            depositAlertMessage("error");
            return;
        }
        props.saldo = parseInt(props.saldo) + parseInt(valorDeposito);
        setDepositado(true);
        depositAlertMessage(true);
    }

    // Função de transferência no banco
    const handleTransferencia = async (event) => {
        event.preventDefault();

        const requestOptions = {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "cpfTransferidor": props.cpf,
                "cpfTransferido": transferenciaInfos.cpfTransferido,
                "valor": transferenciaInfos.valorDeposito,
                "password": transferenciaInfos.password,
            })
        }

        const response = await fetch('http://localhost:3001/transferencia', requestOptions);
        const data = await response.json();
        if (data.message) {
            transferenciaAlertMessage('error');
            return;
        }
        props.saldo = parseInt(props.saldo) - parseInt(transferenciaInfos.valorDeposito);
        transferenciaAlertMessage(true);
    }

    //Funções de verificação
    const verificaValor = () => {
        if (parseInt(valorDeposito) > 2000 || parseInt(valorDeposito) <= 0) return true;
        return false;
    }

    //Funções de mensagem
    const snackbarAlert = (text, warning) => {
        return <Snackbar open={deposited} autoHideDuration={4000} onClose={() => setDepositado(false)} anchorOrigin={{ vertical: 'center', horizontal: 'center' }}>
            <Alert severity={warning}>{text}</Alert>
        </Snackbar>
    }

    const snackbarAlertTransf = (text, warning) => {
        return <Snackbar open={transferenciaAlert} autoHideDuration={4000} onClose={() => transferenciaAlertMessage(false)} anchorOrigin={{ vertical: 'center', horizontal: 'center' }}>
            <Alert severity={warning}>{text}</Alert>
        </Snackbar>
    }

    return (
        <div>
            <Header buttons={<LoggedAccount />}></Header>
            <div id="accountBody" className="flexCenter">
                <h1>Olá {props.name}</h1>
                <h2>Informações da conta: </h2>
                <div id="saldoGroup" className="flexCenter">
                    <h4 id="saldo"> Saldo: {verSaldo ? props.saldo : '*****'} </h4>
                    <img id="eyeImage" src={verSaldo ? slashedEye : eye} alt="Olho Saldo" onClick={() => setSaldo(!verSaldo)} />
                </div>

                <div id="operacoes">

                    {/* Funcionamento do depósito */}
                    <div id="depositar">
                        <ModalComponent box={
                            <Box sx={styleForm}>
                                <h1>O valor para depósito deve ser de no máximo R$2000</h1>
                                <form onSubmit={event => handleDepositar(event)}>
                                    <label htmlFor="">Valor</label>
                                    <input type="text" onChange={event => setDeposito(event.target.value)} />
                                    <input type="submit" className="submitButton defaultButton" disabled={verificaValor()}/>
                                    {
                                        verificaValor() ?
                                            <Snackbar open={true} autoHideDuration={4000} anchorOrigin={{ vertical: 'center', horizontal: 'center' }}>
                                                <Alert severity="warning">O valor do depósito não pode ser maior que 2000 e não pode ser menor que 0!</Alert>
                                            </Snackbar> : null
                                    }
                                </form>
                            </Box>
                        }
                            text={"Depositar"}>
                        </ModalComponent>
                        {depositAlert != "error"? snackbarAlert("Depósito efetuado com sucesso!", "success") : snackbarAlert("Houve um problema com o seu deoósito , tente novamente em alguns minutos", "error")}
                    </div>

                    {/* Funcionamento da transferência */}
                    <div id="transferencia">
                        <ModalComponent box={
                            <Box sx={styleForm}>
                                <form onSubmit={event => handleTransferencia(event)}>
                                    <label htmlFor="">CPF</label>
                                    <input required type="text" onChange={event => setTransferenciaInfos({ ...transferenciaInfos, cpfTransferido: event.target.value })} />
                                    <label htmlFor="">Valor</label>
                                    <input required type="text" onChange={event => setTransferenciaInfos({ ...transferenciaInfos, valorDeposito: event.target.value })} />
                                    <label htmlFor="">Senha</label>
                                    <input required type="text" onChange={event => setTransferenciaInfos({ ...transferenciaInfos, password: event.target.value })} />
                                    <input type="submit" className="submitButton defaultButton"/>
                                </form>
                            </Box>
                        }
                            text={"Transferir"}>
                        </ModalComponent>
                        {transferenciaAlert != "error" ? snackbarAlertTransf("Transferência efetuada com sucesso!", "success") : snackbarAlertTransf("Houve um problema com a sua transferência , tente novamente em alguns minutos.", "error")}
                    </div>
                </div>

            </div>
            <Footer link={"https://github.com/victormdsp/DigitalRepublic"}></Footer>
        </div>
    )
}