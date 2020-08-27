import React from 'react'
import { Container } from 'react-bootstrap'
import Menu from './components/Menu'

function App () {
    return (
      <>
        <Menu />
        <Container className="mt-5">
            <h1 className="text-center">tweetsss</h1>
        </Container>
        </>
    )
}

export default App
