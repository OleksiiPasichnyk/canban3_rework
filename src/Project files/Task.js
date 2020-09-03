import React from 'react';
import '../App.css';
import {
    Col, Card, CardBody, Button, Alert
} from 'reactstrap'
import {connect} from 'react-redux';

function Task(props) {
    const alertColors = ['success', 'warning', 'danger']

    const {task, deleteTask, changeTaskStatus} = props
    const boardStatus = props.board.map(el => el.status)


    console.log(`${boardStatus[boardStatus.length - 1]}`)
    return (
        <div>
            <Col>
                <Card>
                    <CardBody>
                        {task.name}
                        <Alert color={alertColors[task.priority]}>
                            {task.priority}
                            {task.priority !== 2 &&
                            <Button size="sm" onClick={() => changeTaskStatus(task.id, 'UP')}>↑</Button>}

                            {' '}
                            {task.priority !== 0 &&
                            <Button size="sm" onClick={() => changeTaskStatus(task.id, 'DOWN')}>↓</Button>}

                        </Alert>
                    </CardBody>

                    <CardBody>
                        {(task.status !== 'todo' &&
                            <Button onClick={() => changeTaskStatus(task.id, 'LEFT')}>←</Button>)}
                        {(task.status !== `${boardStatus[boardStatus.length - 1]}` &&
                            <Button onClick={() => changeTaskStatus(task.id, 'RIGHT')}>→</Button>)}
                    </CardBody>
                    <Button onClick={() => deleteTask(task.id)}> Delete </Button>
                </Card>

            </Col>
        </div>
    );
}


const mapStateToProps = (state) => ({
    tasks: state.taskList,
    board: state.boardList
});
const mapDispatchToProps = (dispatch) => ({

    addTodo: (todo) => dispatch({type: 'TASK_ADD', payload: todo}),

    deleteTask: (id) => dispatch({type: 'TASK_DELETE', payload: id}),

    changeTaskStatus: (id, type) => dispatch({type: type, payload: id})

});

export default connect(mapStateToProps, mapDispatchToProps)(Task);
