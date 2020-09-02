import React, {useState} from 'react';
import '../App.css';
import {Col, Row, Button, Input, Label, Modal, ModalFooter, ModalBody, ModalHeader} from 'reactstrap';
import {connect} from 'react-redux';
import * as uuidv4 from 'uuidv4';

function AddBoardModal(props) {
    const [modalStatus, setModalStatus] = useState(false)
    const [newTitle, setNewTitle] = useState(' ')
    const [newStatus, setNewStatus] = useState(' ')
    const buttonHandlerAdd = () => {
        props.setBoard(newTitle, newStatus)
        setModalStatus(false)
        setNewTitle(' ')
        setNewStatus(' ')
    }

    return (

        <>
            <Button onClick={() => setModalStatus(true)}> Add new Board </Button>
            <Modal isOpen={modalStatus}>
                <ModalHeader> Add new Board (= </ModalHeader>
                <ModalBody>
                    <Label>Mew Board</Label>
                    <Input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)}/>
                    <Row>
                        <Col>
                            <Label> Status for filter</Label>
                            <Input type="text" value={newStatus} onChange={(e) => setNewStatus(e.target.value)}/>

                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={() => buttonHandlerAdd(newTitle, newStatus)}>Add mew Board </Button>
                    {' '}

                    <Button onClick={() => setModalStatus(false)}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

const mapStateToProps = (state) => ({
    // modalState: state.boardModalState.state,
    stateBoard: state.setBoard,
    // statusFilter: state.setFilter

});
const mapDispatchToProps = (dispatch) => ({

    // openModal: (state) => dispatch({type: 'BOARD_MODAL_OPEN', payload: {id: 1, state}}),
    setBoard: (title, status) => dispatch({type: 'BOARD_ADD', payload: {id: uuidv4, title, status}})

});


export default connect(mapStateToProps, mapDispatchToProps)(AddBoardModal);
