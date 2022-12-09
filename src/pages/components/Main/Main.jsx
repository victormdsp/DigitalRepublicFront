import React from "react";
import './Main.css'

export default function Main() {
    return (
        <div id="mainBody">
            <div id="bannerPrincipal" className="banner">
                <img className="bannerImage" src="https://img.freepik.com/fotos-gratis/homem-afro-americano-compartilhando-uma-historia-de-vicio-com-um-grupo-de-pessoas-em-uma-reuniao-de-terapia-adulto-conversando-com-psicologo-e-pacientes-em-circulo-na-sessao-de-reabilitacao_482257-30588.jpg?w=2000" alt="Foto Representativa" />
                <h1>Fazendo parte do banco Digital Republic você terá acesso aos melhores benefícios e cuidado com o seu dinheiro!</h1>
            </div>

            <div id="bannerSecundario" className="banner">
                <h1>Fazer transferências com o banco Digital Republic é fácil e seguro!</h1>
                <img className="bannerImage" src="https://static.vecteezy.com/ti/fotos-gratis/p2/1226850-duas-pessoas-estao-trocando-dinheiro-gratis-foto.jpg" alt="Foto Representativa" />
            </div>
        </div>
    )
}