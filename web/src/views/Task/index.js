import React, {useState, useEffect} from 'react';
import * as S from './style';

//Api
import api from '../../services/api';


//Start Components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TypeIcons from '../../utils/typeIcons'
//End Components

// import iconCalendar from '../../assets/calendar.png'
// import iconClock from '../../assets/clock.png'


function Task() {

    const [lateCount, setlateCount] = useState([]);
    const [type,setType]= useState([]);
  
  async function lateVerify(){
    await api.get(`/task/filter/late/25:c1:75:e3:d3:1d`)
    .then( response =>{
      setlateCount(response.data.length);
      console.log(response.data.length);
      
    })
  }

  useEffect(()=>{
    lateVerify();
  },[]);

    return (
      <S.Container>
        <Header lateCount={lateCount}/>
          
        <S.Form>
            
            <S.TypeIcons>
                {
                    TypeIcons.map((icon, index) =>(
                        index > 0 && 
                        <button type="button" onClick={() => setType(index)} >
                            <img src={icon} atl="Tipo da tarefa" 
                                className={type && type != index && 'inactive'}
                            ></img>
                        </button>
                        
                    ))
                }
            </S.TypeIcons>

            <S.Input>
                <span>Titulo</span>
                <input type="text" placeholder="Titulo da tarefa"></input>
            </S.Input>

            <S.Input>
                <span>Detalhes</span>
                <textarea rows={5} placeholder="  Detalhes da tarefa"></textarea>
            </S.Input>

            <S.Input>
                <span>Data</span>
                <input type="date" placeholder="Titulo da tarefa"></input>
                
            </S.Input>

            <S.Input>
                <span>Hora</span>
                <input type="time" placeholder="Titulo da tarefa"></input>
                
            </S.Input>

            <S.Options>
                <div>
                    <input type="checkbox"></input>
                    <span>CONCLUIDO</span>
                </div>

                <button type="button" >Excluir</button>
            </S.Options>

            <S.Input>
                <button type="button">SALVAR</button>
            </S.Input>

        </S.Form>

        <Footer/>
      </S.Container>
      
    )
  }
  
  export default Task;
  