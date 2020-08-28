import React, {useState} from 'react';
import '../App.css';
import  {
    DropdownItem,
    Button,
    Modal,
    ModalFooter,
    ModalBody,
    ModalHeader
} from 'reactstrap';
import {connect} from 'react-redux';
import * as uuidv4 from 'uuidv4';
import DropdownBoards from "./DropdownBoards";

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
                    <DropdownBoards />

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
    boardList: state.boardList

});
const mapDispatchToProps = (dispatch) => ({


    deleteBoard: (id) => dispatch({type: 'DELETE_BOARD', payload: id})

});


export default connect(mapStateToProps, mapDispatchToProps)(DeleteBoardModal);
