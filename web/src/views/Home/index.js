import React, {useState, eseEffect, useEffect} from 'react';
import * as S from './style';

//Api
import api from '../../services/api';


//Start Components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';
//End Components


function Home() {
  const [filterActived,setFilterActived ] = useState('all');
  const [tasks, setTasks] = useState([]);

  async function loadTasks(){
    await api.get(`/task/filter/${filterActived}/25:c1:75:e3:d3:1d`)
    .then( response =>{
      setTasks(response.data);
      console.log(response.data);
    })
  }

  useEffect(()=>{
    loadTasks();
  },[filterActived]);

    return (
      <S.Container>
        <Header/>
          <S.FilterArea>
            <button type="button" onClick={()=> setFilterActived("all")}>
            <FilterCard title="Todos" actived={filterActived == 'all'}  />
            </button>

            <button type="button" onClick={()=> setFilterActived("today")} >  
              <FilterCard title="Hoje" actived={filterActived == 'today'} />
            </button>

            <button type="button" onClick={()=> setFilterActived("week")} >  
              <FilterCard title="Semana" actived={filterActived == 'week'} />
            </button>

            <button type="button" onClick={()=> setFilterActived("month")} >  
              <FilterCard title="Mes" actived={filterActived == 'month'} />
            </button>

            <button type="button" onClick={()=> setFilterActived("year")} > 
              <FilterCard title="Ano" actived={filterActived == 'year'} />
            </button>
          </S.FilterArea>
          
          <S.Title>
            <h3>TAREFAS</h3>
          </S.Title>
          
          <S.Content>
          {
            tasks.map(t =>( 
            <TaskCard
            type={t.type}
            title={t.title}
            when={t.when}
            />))
          }

          </S.Content>
        <Footer/>
      </S.Container>
      
    )
  }
  
  export default Home;
  