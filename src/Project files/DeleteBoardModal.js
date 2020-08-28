import React, {useState} from 'react';
import '../App.css';
import {
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Dropdown,
    Col,
    Row,
    Button,
    Input,
    Label,
    Modal,
    ModalFooter,
    ModalBody,
    ModalHeader
} from 'reactstrap';
import {connect} from 'react-redux';
import * as uuidv4 from 'uuidv4';

function DeleteBoardModal(props) {

    const [newTitle, setNewTitle] = useState(' ')
    const [modalStatus, setModalStatus] = useState(false)
    const buttonHandlerAdd = (title) => {
        props.deleteBoard(title)
        setModalStatus(false)
    }
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    const titles = props.boardList.map(el => el.title)

    return (

        <>
            <Button onClick={() => setModalStatus(true)}> Delete Board </Button>
            <Modal isOpen={modalStatus}>
                <ModalHeader> Delete Board (= </ModalHeader>
                <ModalBody>
                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle caret>
                            Board to delete {newTitle}
                        </DropdownToggle>
                        <DropdownMenu>

                            <DropdownItem onClick={() => setNewTitle(titles[0])}> {titles[0]} </DropdownItem>
                            <DropdownItem onClick={() => setNewTitle(titles[1])}>{titles[1]}</DropdownItem>
                            <DropdownItem onClick={() => setNewTitle(titles[2])}>{titles[2]}</DropdownItem>
                            <DropdownItem onClick={() => setNewTitle(titles[3])}>{titles[3]}</DropdownItem>

                        </DropdownMenu>
                    </Dropdown>


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
