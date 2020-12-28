import React, {useState} from 'react';
import * as S from './style';
import {Redirect} from 'react-router-dom';
import Qr from 'qrcode.react';

//Components

import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Qrcode() {

    const [mac,setMac] = useState([]);
    const [ redirect, setRedirect] = useState(false);

    async function SaveMac() {
        if(!mac)
            alert('Você precisa informar o numero do qrcode!');
        else
        await localStorage.setItem('@todo/macaddress', mac);
        setRedirect(true);
        window.location.reload();
    }

    return (
            <S.Container>
                {redirect && <Redirect to ="/"/>}
                <Header/>

                    <S.Content>
                        <h1>
                            Capture o QrCode pelo App
                        </h1>
                    <S.QrCodeArea>
                        <Qr value='getmacaddress' size={350}/>
                    </S.QrCodeArea>

                    <S.ValidationCode>
                        <span>Digite a numeração que apareceu no celular</span>
                        <input type="text" onChange={e => setMac(e.target.value)} value={mac}/>
                        <button type="button" onClick={SaveMac}>{`Sincronizar`}</button>
                    </S.ValidationCode>
                        <p> Suas atividades serão sincronizadas com a do seu aplicativo!</p>
                    </S.Content>

                <Footer/>
            </S.Container>
        )
}


export default Qrcode;