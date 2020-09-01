import React, { useState } from 'react'
import { Button, Form, Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { validationFormAddTweet } from '../actions/validationActions'
import { addTweetActions } from '../actions/tweetsActions'
import { openCloseAddTweetModalAction } from '../actions/modalActions'
import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'

export default function FormAddTweet () {
    const [ formValue, setFormValue ] = useState({
        name: '',
        tweet: ''
    })
    //REDUX
    const dispatch = useDispatch()
    const errorForm = (state) => dispatch(validationFormAddTweet(state))
    const errorFormValue = useSelector((state) => state.validations.errorFormAddTweet)
    const addTweet = (state) => dispatch(addTweetActions(state))
    const closeModal = (state) => dispatch(openCloseAddTweetModalAction(state))

    const onChange = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const { name, tweet } = formValue
        if (!name || !tweet) {
            errorForm(true)
        } else {
            errorForm(false)
            addTweet({
                id: uuidv4(),
                name,
                tweet,
                date: moment()
            })
            closeModal(false)
        }
    }

    return (
        <Form className="m-3" onChange={onChange} onSubmit={onSubmit}>
            <Form.Group className="text-center">
                <h1>Nuevo Tweet</h1>
            </Form.Group>
            <Form.Group>
                <Form.Control type="text" name="name" placeholder="Escribe tu nombre" />
            </Form.Group>
            <Form.Group>
                <Form.Control as="textarea" name="tweet" row="3" placeholder="Escribe lo que quieras twitear...." />
            </Form.Group>
            <Button variant="primary" type="submit">
                Enviat tweet
            </Button>
            {errorFormValue && (
                <Alert variant="danger" className="mt-4">
                    Todos los campos son obligatorios
                </Alert>
            )}
        </Form>
    )
}
