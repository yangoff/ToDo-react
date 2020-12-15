import React from 'react';
import * as S from './style';
import logo from "../../assets/logo.png";
import bell from "../../assets/bell.png";



function Header() {
    return (
        <S.Container>

            <S.LeftSide>
               <img src={logo} alt="Logo"></img>
            </S.LeftSide>

            <S.RigthSide>
              <a href="#" >INICIO</a>
              <span className="dividir"></span>
              <a href="#" >NOVA TAREFA</a>
              <span className="dividir"></span>
              <a href="#" >SINCRONIZAR CELULAR</a>
              <span className="dividir"></span>
              <a href="#" id="notification" >
                  <img src={bell} alt="Notificacao"></img>
                  <span>5</span>
              </a>
            </S.RigthSide>

        </S.Container>
      )
  }
  
  export default Header;
  