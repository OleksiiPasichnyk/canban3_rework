import React, {useState} from 'react';
import '../App.css';
import {
    Button,
    Modal,
    ModalFooter,
    ModalBody,
    ModalHeader
} from 'reactstrap';
import {connect} from 'react-redux';
import DropdownBoards from "./DropdownBoards";


function DeleteBoardModal(props) {
    const [modalStatus, setModalStatus] = useState(false)
    const buttonHandler = (title) => {
        props.deleteBoard(title)
        setModalStatus(false)
    }
    console.log(props.boardSet.title)
    return (

        <>
            <Button onClick={() => setModalStatus(true)}> Delete Board </Button>
            <Modal isOpen={modalStatus}>
                <ModalHeader> Delete Board (= </ModalHeader>
                <ModalBody>
                    <DropdownBoards/>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={() => buttonHandler(props.boardSet.title)}>Confirm Board Delete!</Button>
                    <Button onClick={() => setModalStatus(false)}>Close window</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

const mapStateToProps = (state) => ({
    boardList: state.boardList,
    boardSet: state.boardSet
});
const mapDispatchToProps = (dispatch) => ({


    deleteBoard: (title) => dispatch({type: 'DELETE_BOARD', payload: title})

});


export default connect(mapStateToProps, mapDispatchToProps)(DeleteBoardModal);
