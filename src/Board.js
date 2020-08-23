import React from 'react';
import './App.css';
import {connect} from "react-redux";

function Board(props) {
const {tasks, deleteTask} = props


    console.log(tasks)
    return (
        <div>

                {tasks.map(el=> <li key = {el.id}>{el.name } <button onClick={()=> deleteTask(el.id)} > Delete </button> </li>)}

        </div>
    );
}

const mapStateToProps = (state) => ({
    tasks: state.taskList
});
const mapDispatchToProps = (dispatch) => ({

    addTodo: (todo) => dispatch({type: 'TODO_ADD', payload: todo}),
    deleteTask: (id) => dispatch({type: 'TASK_DELETE', payload: id}),

});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
