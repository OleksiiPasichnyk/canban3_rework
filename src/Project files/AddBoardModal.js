import React from 'react';
import '../App.css';
import {Col, Row, Button, Input, Label, Modal, ModalFooter, ModalBody, ModalHeader} from "reactstrap";
import {connect} from 'react-redux';

function AddBoardModal(props) {
    const {modalState} = props

    // const [isModalOpen, setModalOpen] = useState(false)
    // const [newTitle, setNewTitle] = useState("")
    // const [newStatus, setNewStatus] = useState("todo")
    // const buttonHandler = () => {
        // props.addNewColumn(newTitle, newStatus)
        // setModalOpen(false)
        // setNewTitle('')
    // }
    console.log(modalState)
    return (

        <>
            <Button onClick={() => props.openModal(true)}> Add new Board </Button>
            <Modal isOpen={modalState}>
                <ModalHeader> Add new column (= </ModalHeader>
                <ModalBody>
                    <Label>Mew Column</Label>
                    <Input type="text" value={''} onChange={(e) => {}}/>
                {/*    <Row>*/}
                {/*        <Col>*/}
                {/*            <Label> Status for filter</Label>*/}
                {/*            <Input type="text" value={newStatus} onChange={(e) => setNewStatus(e.target.value)}/>*/}

                {/*        </Col>*/}
                {/*    </Row>*/}
                </ModalBody>
                <ModalFooter>
                    <Button >Add mew column </Button>{' '}
                    <Button onClick={() => props.openModal(false)}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

    const mapStateToProps = (state) => ({
        modalState: state.boardModalState
    });
    const mapDispatchToProps = (dispatch) => ({

        openModal: (state) => dispatch({type: 'BOARD_MODAL_OPEN', payload: state})

    });


    export default connect (mapStateToProps, mapDispatchToProps)(AddBoardModal);
