import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    
`

export const FilterArea = styled.div`
    width:100%;
    display:flex;
    justify-content: space-around;
    margin-top:20px;
    flex-wrap:wrap;

    button{
        background: none;
        border: none;
        
    }
    button:focus { outline:0 !important; }
`

export const Content = styled.div`
    width:100%;
    display:flex;
    flex-wrap: wrap;
    justify-content:center;

    a{
        text-decoration:none;
        color:#000;
    }
    margin-bottom: 70px;
`

export const Title = styled.div`
width:100%;
border-bottom:1px solid #20295F;
display:flex;
justify-content:center;
margin-bottom:20px;
margin-top:-20px;

h3{
    color:#20295F;
    position:relative;
    top:30px;
    background: #fff;
    padding: 0px 20px;
    
}
`
