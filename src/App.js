import React from 'react';
import './App.css';
import {Container, Row, Col} from 'reactstrap';
import Canban from './Project files/Canban';
import {connect} from 'react-redux';
import * as uuidv4 from "uuidv4";

function App() {

    return (
        <div className="App">
            <Container key = {uuidv4}>
                <Canban />
            </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);

