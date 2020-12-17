import styled from 'styled-components';

export const Container = styled.div`
    width:225px;
    height:160px;
    display:flex;
    justify-content: center;
    align-items:center;
    border-radius: 5px;
    flex-direction:column;
    box-shadow: -3px 1px 13px 2px rgba(0,0,0,0.73);
    margin:20px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover{
        opacity:0.7;
    }
` 

export const TopCard = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    flex-direction:column;
    img{
        width:60px;
    }

`
export const BottonCard = styled.div`
width:100%;
display:flex;
justify-content:space-around;

strong{
    color:#EE6B26;
    font-weight:bold;
}

span{
    color:#707070;
}
`