import { Input, Text } from '@chakra-ui/react'
import styled from 'styled-components'

export const MainContainer = styled.div`
`

export const NavContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@1,700&display=swap');

    width: 100%;
    top: 0;
    background-color: #504c7c;
    display: flex;
    font-size: 40px;
    font-family: 'IBM Plex Sans', sans-serif;
    justify-content: space-between;
`

export const NavTitle = styled.div`
    color: white;
    margin-left: 40px;
`

export const Cards = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@1,700&display=swap');
    font-family: 'Arial', sans-serif;
text-align: center;
    height: 400px;
    width: 15%;
    border-radius: 10px;
    border: 1px solid black;
`
export const CardsContainer = styled.div`
    margin-top: 200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
`

export const CardsTitle = styled(Text)`
font-size: 32px;
margin-bottom: 10px;
`

export const MainSearch = styled(Input)`
margin-top: 40px;
display: block;
margin: 40px auto -70px auto;
text-align: center;
height: 100px;
font-size: 60px;
border-radius: 50px;
border: 4px solid #504c7c;
`
