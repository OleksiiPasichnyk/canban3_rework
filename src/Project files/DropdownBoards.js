import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle, ModalBody} from "reactstrap";
import React, {useState} from "react";
import {connect} from "react-redux";

function DropdownBoards(props) {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [newTitle, setNewTitle] = useState('')

    const toggle = () => setDropdownOpen(prevState => !prevState);
    const dropdownmenu = props.boardList.map(el =>  el = <DropdownItem onClick = {()=> console.log(el) }  > {el.title} </DropdownItem> )

    return (


        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
                Board to delete {newTitle}
            </DropdownToggle>
            <DropdownMenu >
                {[...dropdownmenu]}
            </DropdownMenu>
        </Dropdown>
)
        }
const mapStateToProps = (state) => ({
    stateBoard: state.setBoard,
    boardList: state.boardList

});
const mapDispatchToProps = (dispatch) => ({


    deleteBoard: (id) => dispatch({type: 'DELETE_BOARD', payload: id})

});
export default connect(mapStateToProps, mapDispatchToProps)(DropdownBoards);