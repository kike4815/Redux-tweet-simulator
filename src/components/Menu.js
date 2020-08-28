/* eslint-disable no-unused-vars */
import React from 'react'
import { Button, Container, Navbar } from 'react-bootstrap'
import Logoredux from '../assets/img/redux.png'
import {useDispatch} from 'react-redux'
import {openCloseAddTweetModalAction} from '../actions/modalActions'

export default function Menu () {
    const dispatch = useDispatch();
    const openCloseAddTweetModal = state => dispatch(openCloseAddTweetModalAction(state))

    const openModal = () => {
        openCloseAddTweetModal(true)
    }

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
            <Button variant='outline-success' onClick={openModal}>Nuevo Tweet</Button>
            </Container>
        </Navbar>
        </>
    )
}
