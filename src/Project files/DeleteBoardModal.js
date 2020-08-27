import React, {useState} from 'react';
import '../App.css';
import {Col, Row, Button, Input, Label, Modal, ModalFooter, ModalBody, ModalHeader} from 'reactstrap';
import {connect} from 'react-redux';
import * as uuidv4 from 'uuidv4';

function DeleteBoardModal(props) {
    const {modalState} = props


    const [newTitle, setNewTitle] = useState(' ')
    const [newStatus, setNewStatus] = useState(' ')
    const buttonHandlerAdd = (title) => {
        props.deleteBoard(title)
        props.openModal(false)
        setNewTitle('')
    }
    const deleteModalState = modalState.map(el=>{
        if (el.id === 2) return el.state})
    console.log(deleteModalState)

    return (

        <>
            <Button onClick={() => props.openModal(2, true)}> Delete Board </Button>
            <Modal isOpen={deleteModalState[0] }>
                <ModalHeader> Delete Board (= </ModalHeader>
                <ModalBody>
                    <Label>Board to Delete!</Label>
                    <Input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)}/>

                </ModalBody>
                <ModalFooter>
                    <Button onClick={() => buttonHandlerAdd(newTitle)}>Confirm Delete Board !</Button>
                    {' '}

                    <Button onClick={() => props.openModal(2, false)}>Close window</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

const mapStateToProps = (state) => ({
    modalState: state.boardModalState,
    stateBoard: state.setBoard,
    statusFilter: state.setFilter

});
const mapDispatchToProps = (dispatch) => ({

    openModal: (id, state) => dispatch({type: 'BOARD_MODAL_OPEN', payload:{id, state}}),
    deleteBoard: (id) => dispatch({type: 'DELETE_BOARD', payload:id})

});


export default connect(mapStateToProps, mapDispatchToProps)(DeleteBoardModal);
