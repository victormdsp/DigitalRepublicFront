import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div id='homeBody'>
            <h1>Front-End do desafio proposte pela empresa Digital Republic</h1>
            <div>
                <Link className="rota" to="/DigitalOne">Primeira Versão</Link>
                <Link className="rota" to="/DigitalTwo">Segunda Versão</Link>
            </div>
        </div>
    )
}

export default Home;