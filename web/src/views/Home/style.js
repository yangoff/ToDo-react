import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    
    font-family:cursive;
`

export const FilterArea = styled.div`
    width:100%;
    display:flex;
    justify-content: space-around;
    margin-top:30px;
    flex-wrap:wrap;

    button{
        background: none;
        border: none;
        
    }
    button:focus { outline:0 !important; }
`