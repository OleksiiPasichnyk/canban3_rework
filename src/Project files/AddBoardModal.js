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
                    <Label>Mew Board</Label>
                    <Input type="text" value={' '} onChange={(e) => props.setFilter(e.target.value)}/>
                    <Row>
                        <Col>
                            <Label> Status for filter</Label>
                            <Input type="text" value={' '} onChange={(e) => props.setBoard(e.target.value)}/>

                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    // <Button >Add mew Board </Button>
                    // {' '}
                    // <Button onClick={() => props.openModal(false)}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

    const mapStateToProps = (state) => ({
        modalState: state.boardModalState,
        stateBoard: state.setBoard,
        statusFilter: state.setFilter,

    });
    const mapDispatchToProps = (dispatch) => ({

        openModal: (state) => dispatch({type: 'BOARD_MODAL_OPEN', payload: state}),
        setFilter:(status) => dispatch({type:'SET_STATUS', payload: status}),
        setBoard:(name) => dispatch({type:'SET_BOARD', payload:name}),
        // addNewBoard:() => dispatch({type:'SET_MEW_BOARD',payload:{ id:Math.random(), name:props.stateBoard, title:props.statusFilter}})
});



    export default connect (mapStateToProps, mapDispatchToProps)(AddBoardModal);
