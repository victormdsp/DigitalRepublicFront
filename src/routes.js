import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Account from './pages/Account/Account';
import DigitalOne from './pages/DigitalOne/DigitalOne';
import DigitalTwo from './pages/DigitalTwo/DigitalTwo';
import Home from './pages/Home/Home';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home/>} path="/" exact />
                <Route element={<DigitalOne />} path="/DigitalOne" exact/>
                <Route element={<DigitalTwo />} path="/DigitalTwo" exact/>
                <Route element={<Account />} path="/Account" exact/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;