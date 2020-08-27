import React from 'react';
import {Container, Col, Row} from 'reactstrap';
import {connect} from 'react-redux';
import Task from './Task';

function Board(props) {
    const {board, tasks} = props

    return (
        <div>
                 <Col >

                    <h3>{board.title}</h3>
                    {tasks
                        .filter(el => el.status === board.status)
                        .sort((a, b) => b.priority - a.priority)
                        .map(el => <Task key={el.id} task={el} />
                        )
                    }
                </Col>

        </div>
    );
}

const mapStateToProps = (state) => ({
    tasks: state.taskList
});

const mapDispatchToProps = (dispatch) => ({

    addTodo: (todo) => dispatch({type: 'TODO_ADD', payload: todo}),
    deleteTask: (id) => dispatch({type: 'TODO_REMOVE', payload: id})
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);


