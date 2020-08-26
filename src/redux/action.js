import axios from 'axios';

export function taskDelete (id) {
    taskList: state.taskList.filter(el => el.id !== action.payload)

    dispatch({type: 'TASK_DELETE', payload: id})
}

export function getBoards() {
    return(dispatch) => {
        axios.get('')
            .then(result => console.log(result))
            .catch()
    }
}