/* eslint-disable no-unused-vars */
import React from 'react'
import { Button, Container, Navbar } from 'react-bootstrap'
import Logoredux from '../assets/img/redux.png'

export default function Menu () {
    return (
        <>
        <Navbar bg='dark' variant='dark'>
            <Container>
            <Navbar.Brand>
                <img 
                    alt='Tweets Redux'
                    src={Logoredux}
                    width='30'
                    height='30'
                    className='d-inline-block align-top mr-4'
                />
                Tweets Redux Simulator
            </Navbar.Brand>
            <Button variant='outline-success'>Nuevo Tweet</Button>
            </Container>
        </Navbar>
        </>
    )
}
