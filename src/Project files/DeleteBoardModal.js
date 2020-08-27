import React, {useState} from 'react';
import '../App.css';
import {Col, Row, Button, Input, Label, Modal, ModalFooter, ModalBody, ModalHeader} from 'reactstrap';
import {connect} from 'react-redux';
import * as uuidv4 from 'uuidv4';

function DeleteBoardModal(props) {

    const [newTitle, setNewTitle] = useState(' ')
    const [modalStatus, setModalStatus] = useState(false)
    const buttonHandlerAdd = (title) => {
        props.deleteBoard(title)
        setModalStatus(false)
    }
    return (

        <>
            <Button onClick={() => setModalStatus(true)}> Delete Board </Button>
            <Modal isOpen={modalStatus}>
                <ModalHeader> Delete Board (= </ModalHeader>
                <ModalBody>
                    <Label>Board to Delete!</Label>
                    <Input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)}/>

                </ModalBody>
                <ModalFooter>
                    <Button onClick={() => buttonHandlerAdd(newTitle)}>Confirm Delete Board !</Button>
                    {' '}

                    <Button onClick={() => setModalStatus(false)}>Close window</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

const mapStateToProps = (state) => ({
    stateBoard: state.setBoard,
    statusFilter: state.setFilter

});
const mapDispatchToProps = (dispatch) => ({

    deleteBoard: (id) => dispatch({type: 'DELETE_BOARD', payload: id})

});


export default connect(mapStateToProps, mapDispatchToProps)(DeleteBoardModal);
