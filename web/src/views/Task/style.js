import styled from 'styled-components';
export const Container = styled.div`
    width: 100%;
    display:flex;
    align-items:center;
    flex-direction:column;
`

export const Form = styled.div`
width: 50%;

`

export const TypeIcons = styled.div`
    width:100%;
    display: flex;
    justify-content:center;
    
    .inactive{
        opacity:0.5;
    }
    button{
        border:none;
        background:none;
        outline:none;
    }

    img{
        width:30px;
        height:30px;
        margin: 10px;
        cursor: pointer;
        &:hover{
            opacity:0.7;
        }
    }

`

export const Input = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    margin: 20px 0px;
   

    span{
        color:#707070;
        margin-bottom:5px;
    }

    input{
        font-size:16px;
        padding:15px;
        border:none;
        border-bottom: 1px solid #ee6b26;
        outline:none;
    }

    textarea{
        font-size: 16px;
        border: 1px solid #ee6b26;
        outline:none;
        border-radius: 5px;

    }

    button{
        width:100%;
        background:#ee6b26;
        border:none;
        font-size:20px;
        color:white;
        font-weight:bold;
        padding:7px;
        border-radius: 30px;
        outline:none;
        &:hover{
        opacity: 0.9;
    }
    }

    
`

export const Options = styled.div`
display:flex;
justify-content:space-between;

button{
    border:none;
    background:none;
    font-weight:bold;
    color: #20295f;
    font-size: 16px;
    cursor: pointer;
    outline:none;
    &:hover{
        opacity: 0.5;
    }
}
div{
    display:flex;
    align-items:center;
    color:#ee6b26;
    font-weight:bold;
    font-size: 14px;
}
`