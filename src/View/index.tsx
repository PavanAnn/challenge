import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Cards, CardsContainer, CardsTitle, MainContainer, MainSearch, NavContainer, NavTitle } from './styles'

export const Main = () => {

    const [isLoading, setLoading] = useState(true);
    const [beers, setBeers] = useState<any>([])
    const [totalBeers, setTotalBeers] = useState<any>([])
    const [page, setPage] = useState(1)
    const [newBeer, setNewBeer] = useState<any>()
    const [place, setPlace] = useState('')
    const url = `https://api.punkapi.com/v2/beers?page=${page}&per_page=5`
    const fullUrl = `https://api.punkapi.com/v2/beers`


    useEffect(() => {
        axios.get(url)
            .then(res => {
                setBeers(res.data)
                setLoading(false)
            })
        setPage(1)
        axios.get(fullUrl)
            .then(resF => {
                setTotalBeers(resF.data)
            })
    }, [])

    const handleNextPage = async (pageCount: any) => {
        axios.get(`https://api.punkapi.com/v2/beers?page=${pageCount}&per_page=5`)
        .then(res => {
            setPage(page + 1)
            setBeers(res.data)
            setLoading(false)
        })
        
    }

    const handlePrevPage = async (pageCount: any) => {
        axios.get(`https://api.punkapi.com/v2/beers?page=${pageCount}&per_page=5`)
            .then(res => {
                setBeers(res.data)
                setLoading(false)
            })
    }

    const handleSearch = async (e: any) => {
        setNewBeer(totalBeers.filter((item: { name: any }) => item.name.includes(e.target.value)))
        setPlace(e.target.value)
    }

    return (
        <MainContainer>
            <NavContainer >
                <NavTitle onClick={() => {console.log(newBeer)}}>
                    Coding Challege - Punk API
                </NavTitle>

            </NavContainer>
            <MainSearch onChange={handleSearch} placeholder='Search a Beer!' />
            <CardsContainer>
            {(newBeer !== undefined && place !== '') ? 
            newBeer.map((item: any, index: any) => (
                <Cards key={index}>
                    <CardsTitle noOfLines={1}>{item.name}</CardsTitle>
                    <div>{item.tagline}</div>
                    <div>{item.description}</div>
                </Cards>))
                : 

            <>
                <IconButton cursor={page <= 1 ? 'not-allowed' : 'pointer'} isDisabled={page <= 1 ? true : false} aria-label='Add to friends' icon={<ArrowLeftIcon  w={32} h={32} />} background={'transparent'} 
                onClick={() => {
                    setPage(page - 1)
                    console.log(page)
                    handlePrevPage(page - 1)
                }}
                />
                {
                isLoading ? <div>Carregando</div> : 
            beers.map((beer: any, index: any) => (
                <Cards key={index}>
                    <CardsTitle noOfLines={1}>{beer.name}</CardsTitle>
                    <div>{beer.tagline}</div>
                    <div>{beer.description}</div>
                </Cards>
            )
            )}
              <IconButton cursor={page > 10 ? 'not-allowed' : 'pointer'} isDisabled={page > 10 ? true : false} aria-label='Add to friends' icon={<ArrowRightIcon w={32} h={32}/>} background={'transparent'}
              onClick={() => {
                handleNextPage(page + 1)
            }}/>
            </> }
            </CardsContainer>
        </MainContainer>
    )
}