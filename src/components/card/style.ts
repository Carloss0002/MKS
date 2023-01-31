import styled from "styled-components";

export const Card = styled.div`
    width: 217.56px;
    height: 285px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    background-color: #FFF;
    margin-right: 22.44px;
    margin-bottom: 16px;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    button{
        border-radius: 0;
        border: none;
        height: 31.91px;
        background-color: #0F52BA;
        color: #FFF;
        font: normal 600 0.875rem/1.125rem 'Montserrat', sans-serif;
    }
`

export const CardImg = styled.div`
     width: 100%;
     display: flex;
     justify-content: center;
     margin-top: 18px;
     img{
        object-fit: contain;
     }
`

export const CardTitle = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 0 14px;
    p{
        font: normal 400 1rem/1.188rem 'Montserrat', sans-serif;
    }
    button{
        height: 26px;
        border-radius: 5px;
        background-color: #373737;
        margin:0 9px;
        font: normal 700 0.938rem/0.938rem 'Montserrat', sans-serif;
        padding: 0 5px 0 5px;
    }
`

export const CardText = styled.div`
    font: normal 300 0.625rem/0.75rem 'Montserrat', sans-serif;
    color: #2C2C2C;
    margin: 0 14px;
`