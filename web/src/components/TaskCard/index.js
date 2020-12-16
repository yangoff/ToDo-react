import React, {useMemo} from 'react';
import { format } from 'date-fns';
import * as S from './style';

import typeIcons from '../../utils/typeIcons';



function TaskCard({type, title, when}) {
    const date = useMemo(()=>format( new Date(when), 'dd/MM/yyyy'));
    const hour = useMemo(()=>format( new Date(when), 'HH:mm'));

    return (
        <S.Container>

           <S.TopCard>
               <img src={typeIcons[type]} alt="Icone da Tarefa"></img>
               <h3>{title}</h3>
           </S.TopCard>
           <S.BottonCard>
               <strong>{date}</strong>
               <span>{hour}</span>
           </S.BottonCard>

        </S.Container>
      )
  }
  
  export default TaskCard;
  