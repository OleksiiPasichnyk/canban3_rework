import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle, ModalBody} from "reactstrap";
import React, {useState} from "react";
import {connect} from "react-redux";
import * as uuidv4 from "uuidv4";

function DropdownBoards(props) {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [newTitle, setNewTitle] = useState('')


    const toggle = () => setDropdownOpen(prevState => !prevState);
    const dropdownList = props.boardList.map(el => <DropdownItem onClick ={()=> setNewTitle(el.title)}  >  {el.title} </DropdownItem >)

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
                Board to delete {newTitle}
            </DropdownToggle>
            <DropdownMenu >

{[...dropdownList]}

            </DropdownMenu>
        </Dropdown>
)
        }
const mapStateToProps = (state) => ({
    stateBoard: state.setBoard,
    boardList: state.boardList

});
const mapDispatchToProps = (dispatch) => ({
});
export default connect(mapStateToProps, mapDispatchToProps)(DropdownBoards);