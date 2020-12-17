import React from 'react';
import * as S from './style';
import logo from "../../assets/logo.png";
import bell from "../../assets/bell.png";
import {Link} from 'react-router-dom';



function Header({lateCount, clickNotification}) {
    return (
        <S.Container>

            <S.LeftSide>
               <img src={logo} alt="Logo"></img>
            </S.LeftSide>

            <S.RigthSide>
              <Link to="/">INICIO</Link>
              <span className="dividir"></span>
              <Link to="/task">NOVA TAREFA</Link>
              <span className="dividir"></span>
              <a href="#" >SINCRONIZAR CELULAR</a>
              <span className="dividir"></span>
              <button href="#" id="notification" onClick={clickNotification}>
                  <img src={bell} alt="Notificacao"></img>
                  <span>{lateCount}</span>
              </button>
            </S.RigthSide>

        </S.Container>
      )
  }
  
  export default Header;
  