import React, {useMemo} from 'react';
import { format } from 'date-fns';
import * as S from './style';
import limit from "string-limit";
import typeIcons from '../../utils/typeIcons';



function TaskCard({type, title, when, done}) {
    const date = useMemo(()=>format( new Date(when), 'dd/MM/yyyy'));
    const hour = useMemo(()=>format( new Date(when), 'HH:mm'));
    

    return (
        <S.Container done={done}>

           <S.TopCard>
               <img src={typeIcons[type]} alt="Icone da Tarefa"></img>
               <h3>{limit(title,20)}</h3>
           </S.TopCard>
           <S.BottonCard>
               <strong>{date}</strong>
               <span>{hour}</span>
           </S.BottonCard>

        </S.Container>
      )
  }
  
  export default TaskCard;
  