import React from 'react';
import {Col} from 'reactstrap';
import {connect} from 'react-redux';
import Task from './Task';
import * as uuidv4 from "uuidv4";

function Board(props) {
    const {board, tasks} = props

    return (
        <div>
            <Col>

                <h3>{board.title}</h3>
                {tasks
                    .filter(el => el.status === board.status)
                    .sort((a, b) => b.priority - a.priority)
                    .map(el => <Task key={uuidv4} task={el}/>
                    )
                }
            </Col>

        </div>
    );
}

const mapStateToProps = (state) => ({
    tasks: state.taskList
});

export default connect(mapStateToProps)(Board);


