import React, {useState, useEffect} from 'react';
import * as S from './style';
import {format, set} from 'date-fns';
import {Redirect} from 'react-router-dom';

//Api
import api from '../../services/api';
import isConnected from '../../utils/isConnected';


//Start Components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TypeIcons from '../../utils/typeIcons'
//End Components

// import iconCalendar from '../../assets/calendar.png'
// import iconClock from '../../assets/clock.png'


function Task({match}) {

    const [redirect,setRedirect] = useState(false);
    const [type,setType]= useState([]);
    const [id, setId] = useState([]);
    const [done, setDone] = useState(false);
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
    const [date, setDate] = useState([]);
    const [hour, setHour] = useState([]);
    
  
  

  async function Remove(){

    const res = window.confirm('Deseja realmente remover a tarefa?');
    if(res === true){
      api.delete(`/task/${match.params.id}`)
      .then(()=>{
        alert("Removido com sucesso");
        setRedirect(true);
      });
      
    }else{
      alert("Operação cancelada")
    }


  }

  async function LoadTaskDetails(){
    await api.get(`/task/${match.params.id}`)
    .then(response=>{
      setType(response.data.type)
      setTitle(response.data.title)
      setDone(response.data.done);
      setDescription(response.data.description)
      setDate(format(new Date(response.data.when),'yyyy-MM-dd'))
      setHour(format(new Date(response.data.when),'HH:mm'))
    })
  }

  async function Save(){
      if(title.length <=0)
        return alert("Você precisa informar o título da tarefa")
      else if(description.length <=0)
        return alert("Você precisa informar o descrição da tarefa")
      else if(type.length <=0)
        return alert("Você precisa informar o tipo da tarefa")
      else if(date.length <= 0)
        return alert("Você precisa informar a data da tarefa")
        
      else if(hour.length <=0)
        return alert("Você precisa informar a hora da tarefa")

      
      if(match.params.id){
        await api.put(`/task/${match.params.id}`,{
          macaddress: isConnected,
          done,
          type,
          title,
          description,
          when:`${date}T${hour}:00.000`
        }).then(()=>setRedirect(true));
      }else{
        await api.post('/task',{
          macaddress: isConnected,
          type,
          title,
          description,
          when:`${date}T${hour}:00.000`
        }).then(()=>setRedirect(true));
      }
      
  }

  useEffect(()=>{
    if(!isConnected){
      setRedirect(true);
    }
    LoadTaskDetails();
  },[]);

    return (
      <S.Container>
        {redirect && <Redirect to="/"/>}
        <Header />
          
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

                { match.params.id && <button type="button" onClick={Remove}>Excluir</button>}
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
  