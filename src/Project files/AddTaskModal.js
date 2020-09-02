import React, {useState} from 'react';
import '../App.css';
import {Col, Row, Button, Input, Label, Modal, ModalFooter, ModalBody, ModalHeader} from "reactstrap";
import {connect} from 'react-redux';
import DropdownBoards from './DropdownBoards';

function AddTaskModal(props) {

    const [isModalOpen, setModalOpen] = useState(false)
    const [newTitle, setNewTitle] = useState("")
    const [newPriority, setNewPriority] = useState(0);
    // const [newStatus, setNewStatus] = useState("todo")
    const buttonHandler = () => {
        const status = props.boardSet
        props.addNewTask(newTitle, newPriority, status)
        setModalOpen(false)
        setNewTitle('')
    }

    return (
        <>
            <Button onClick={() => setModalOpen(true)}> Add new task </Button>
            <Modal isOpen={isModalOpen}>
                <ModalHeader> Add new task (= </ModalHeader>
                <ModalBody>
                    <Label>Mew Title</Label>
                    <Input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)}/>
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
                            {<DropdownBoards/>}
                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter>
                        <Button onClick={buttonHandler}>Add mew task </Button>{' '}
                    <Button onClick={() => setModalOpen(false)}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>

    );
}

const mapStateToProps = (state) => ({
    boardSet: state.boardSet
});
const mapDispatchToProps = (dispatch) => ({

    addNewTask:(name, priority, status) => dispatch({type:'TASK_ADD', payload:{name, priority, status}})

});
export default connect(mapStateToProps, mapDispatchToProps)(AddTaskModal);
