import React from 'react';

import {Container, Row, Col} from 'reactstrap';
import Board from './Board';
import {connect} from 'react-redux';
import AddColumnModal from './AddBoardModal';
import AddTaskModal from './AddTaskModal';
import DeleteBoardModal from './DeleteBoardModal';
import * as uuidv4 from "uuidv4";

function Canban(props) {

    const {board} = props
    return (
        <div>
            <AddTaskModal/>
            <AddColumnModal/>
            <DeleteBoardModal/>
            <Row>
                {board.map(el => <Board key = {uuidv4} board={el}/>)}
            </Row>
        </div>
    );
}

const mapStateToProps = (state) => ({
    board: state.boardList,
    tasks: state.taskList

});

const mapDispatchToProps = (dispatch) => ({

    addTodo: (todo) => dispatch({type: 'TODO_ADD', payload: todo}),
    deleteTask: (id) => dispatch({type: 'TODO_REMOVE', payload: id})
});

export default connect(mapStateToProps, mapDispatchToProps)(Canban);


