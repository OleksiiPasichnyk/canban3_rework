import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle, ModalBody} from "reactstrap";
import React, {useState} from "react";
import {connect} from "react-redux";

// import * as uuidv4 from "uuidv4";

function DropdownBoards(props) {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    const dropdownList = props.boardList.map(el => <DropdownItem
        onClick={() => props.setTitle(el.title, el.status)}> Board {el.title} Filter {el.status}  </DropdownItem>)
    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
                Board {props.boardSet.title}
            </DropdownToggle>
            <DropdownMenu>
                {[...dropdownList]}
            </DropdownMenu>
        </Dropdown>
    )
}
const mapStateToProps = (state) => ({
    boardList: state.boardList,
    boardSet: state.boardSet
});
const mapDispatchToProps = (dispatch) => ({
    setTitle: (title, status) => dispatch({type: 'SET_BOARD', payload: {title, status}})
});
export default connect(mapStateToProps, mapDispatchToProps)(DropdownBoards);