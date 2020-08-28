import React from 'react'
import { Modal as ModalBoot } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { openCloseAddTweetModalAction } from '../actions/modalActions'

export default function Modal (props) {
    const dispatch = useDispatch()
    const closeModal = (state) => dispatch(openCloseAddTweetModalAction(state))
    const isOpenModal = useSelector((state) => state.modals.stateModalAddTweet)

    const { children } = props

    return (
        <ModalBoot show={isOpenModal} size="lg" centered onHide={() => closeModal(false)}>
            {children}
        </ModalBoot>
    )
}
