import React, {useState} from 'react';
import '../App.css';
import {Col, Row, Button, Input, Label, Modal, ModalFooter, ModalBody, ModalHeader} from "reactstrap";
import {connect} from 'react-redux';
import DropdownBoards from './DropdownBoards';

function AddTaskModal(props) {

    // const [isModalOpen, setModalOpen] = useState(false)
    // const [newTitle, setNewTitle] = useState("")
    const [newPriority, setNewPriority] = useState(0);
    const [newStatus, setNewStatus] = useState("todo")
    // const buttonHandler = () => {
    //     props.addNewTask(newTitle, newPriority, newStatus)
    //     setModalOpen(false)
    //     setNewTitle('')
    // }

    return (
        <>
            <Button onClick={() => props.openModal(true)}> Add new task </Button>
            <Modal isOpen={props.modalState}>
                <ModalHeader> Add new task (= </ModalHeader>
                <ModalBody>
                {/*    <Label>Mew Title</Label>*/}
                {/*    <Input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)}/>*/}
                    <Row>
                        <Col>
                            <Label> Priority</Label>
                            <Input type="select" value={newPriority} onChange={(e) => setNewPriority(e.target.value)}>
                                <option value={0}> Low</option>
                                <option value={1}> Med</option>
                                <option value={2}> High</option>
                            </Input>
                        </Col>
                        <Col>
                            <Label> Board </Label>

                            {/*<Input type="select" value={newStatus} onChange={(e) => setNewStatus(e.target.value)}>*/}
                                {<DropdownBoards />}
                            {/*    <option value={"todo"}> Todo</option>*/}
                            {/*    <option value={"progress"}> Progress</option>*/}
                            {/*    <option value={"review"}> Review</option>*/}
                            {/*    <option value={"done"}> Done</option>*/}
                            {/*</Input>*/}

                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter>
                {/*    <Button onClick={buttonHandler}>Add mew task </Button>{' '}*/}
                    <Button onClick={() => props.openModal(false)}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>

    );
}
const mapStateToProps = (state) => ({
    modalState: state.taskModalState
});
const mapDispatchToProps = (dispatch) => ({

    openModal: (state) => dispatch({type: 'TASK_MODAL_OPEN', payload: state})

});
export default connect (mapStateToProps,mapDispatchToProps) (AddTaskModal);
