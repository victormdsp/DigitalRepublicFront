import React from 'react';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';
import SignButtons from '../components/Login&Register/SignButtons';


export default function DigitalOne() {

    return (
        <div>
            <Header buttons={<SignButtons/>}></Header>
            <Main></Main>
            <Footer link={"https://github.com/victormdsp/DigitalRepublic"}></Footer>
        </div>
    )

}