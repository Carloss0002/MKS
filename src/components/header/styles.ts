import styled from 'styled-components'

export const Header = styled.header`
    position: fixed;
    width: 100vw;
    height: 101px;
    background-color: #0F52BA;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.h1`
    font: 600 2.5rem/1.188rem 'Montserrat', sans-serif;
    color: #FFF;
    margin-left: 65px;
    span{
       font: 300 1.25rem/1.188rem 'Montserrat', sans-serif;
    }
`

export const BtnArea = styled.div`
    margin-right: 65px;
    button{
        width: 90px;
        height: 45px;
        background-color: #FFF;
        border-radius: 8px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        span{
            font: normal 700 1.125rem/1.371rem 'Montserrat', sans-serif;
        }
    }
`