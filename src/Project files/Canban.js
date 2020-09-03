import React from 'react';

import  {Row} from 'reactstrap';
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


export default connect(mapStateToProps)(Canban);


