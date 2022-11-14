import React from 'react'
import { ChakraProvider } from '@chakra-ui/react';
import Theme from './Theme'
import Nav from './components/Nav'
import Header from './components/Header'

const App = () => {
    const stars = () => {
        const row = []
        for (let i = 0; i < 20; i++) {
            row.push(<i/>)
        }
        return row
    }

    return (
        <ChakraProvider theme={Theme}>
            <div className='context'>
                <div className='area'>
                    <ul className='circles'>{stars()}</ul>
                </div>
            </div>
            <Nav />
            <Header />
        </ChakraProvider>
    )
}

export default App;
