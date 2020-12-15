import styled from 'styled-components';

export const Container = styled.div`
    width:200px;
    height:45px;
    background:${props => props.actived ?'#ee6b26' : '#20295F' };
    border-radius: 5px;
    display:flex;
    
    flex-direction:column;
    justify-content:space-around;
    padding: 10px;
    cursor: pointer;

    img{
        width: 30px;
        height: 30px;
        
    }
    span{
        color: white;
        font-weight: bold;
        align-self:flex-end;
        font-size: 18px;
    }

    &:hover{
        background: #ee6b26;
    }
    
`