const initialState = {

    taskList: [
        {id: Math.random(), name: 'First', priority: 0, status: 'todo'},
        {id: Math.random(), name: 'Second', priority: 1, status: 'todo'},
        {id: Math.random(), name: 'Third', priority: 2, status: 'review'},
        {id: Math.random(), name: 'Fourth', priority: 1, status: 'todo'},
    ],
    columnsList: [
        {id: Math.random(), title: 'To do!', status: 'todo'},
        {id: Math.random(), title: 'In progress...', status: 'progress'},
        {id: Math.random(), title: 'Need review', status: 'review'},
        {id: Math.random(), title: 'Done!!!', status: 'done'},
    ],
}
const canbanControlPanel = (state = initialState, action) => {
    switch (action.type) {
        case 'TASK_DELETE' :
            const newTaskList = {...state}
            return {
                ...state,
                taskList: state.taskList.filter(el => el.id !== action.payload)
            };

        default:
            return state
    }
}
export default canbanControlPanel;