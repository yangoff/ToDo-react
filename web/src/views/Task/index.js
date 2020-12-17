import React, {useState, useEffect} from 'react';
import * as S from './style';
import {format} from 'date-fns';

//Api
import api from '../../services/api';


//Start Components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TypeIcons from '../../utils/typeIcons'
//End Components

// import iconCalendar from '../../assets/calendar.png'
// import iconClock from '../../assets/clock.png'


function Task({match}) {

    const [lateCount, setlateCount] = useState([]);
    const [type,setType]= useState([]);
    const [id, setId] = useState([]);
    const [done, setDone] = useState(false);
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
    const [date, setDate] = useState([]);
    const [hour, setHour] = useState([]);
    const [macaddress, setMacaddress] = useState('25:c1:75:e3:d3:1d');
  
  async function lateVerify(){
    await api.get(`/task/filter/late/25:c1:75:e3:d3:1d`)
    .then( response =>{
      setlateCount(response.data.length);
      console.log(response.data.length);
      
    })
  }

  async function LoadTaskDetails(){
    await api.get(`/task/${match.params.id}`)
    .then(response=>{
      setType(response.data.type)
      setTitle(response.data.title)
      setDescription(response.data.description)
      setDate(format(new Date(response.data.when),'yyyy-MM-dd'))
      setHour(format(new Date(response.data.when),'HH:mm'))
    })
  }

  async function Save(){
      await api.post('/task',{
        macaddress,
        type,
        title,
        description,
        when:`${date}T${hour}:00.000`
      }).then(()=>alert('Tarefa cadastrada com sucesso!'));
  }

  useEffect(()=>{
    lateVerify();
    LoadTaskDetails();
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
                <input type="text" placeholder="Titulo da tarefa" onChange={e=> setTitle(e.target.value)} value={title}></input>
            </S.Input>

            <S.Input>
                <span>Detalhes</span>
                <textarea rows={5} placeholder="  Detalhes da tarefa" onChange={e=> setDescription(e.target.value)} value={description}></textarea>
            </S.Input>

            <S.Input>
                <span>Data</span>
                <input type="date" placeholder="Titulo da tarefa" onChange={e=> setDate(e.target.value)} value={date}></input>
                
            </S.Input>

            <S.Input>
                <span>Hora</span>
                <input type="time" placeholder="Titulo da tarefa" onChange={e=> setHour(e.target.value)} value={hour}></input>
                
            </S.Input>

            <S.Options>
                <div>
                    <input type="checkbox" checked={done} onChange={()=> setDone(!done)}></input>
                    <span>CONCLUIDO</span>
                </div>

                <button type="button" >Excluir</button>
            </S.Options>

            <S.Input>
                <button type="button" onClick={Save}>SALVAR</button>
            </S.Input>

        </S.Form>

        <Footer/>
      </S.Container>
      
    )
  }
  
  export default Task;
  