const initialState = {

    taskList: [
        {id: Math.random(), name: 'First', priority: 0, status: 'todo'},
        {id: Math.random(), name: 'Second', priority: 1, status: 'todo'},
        {id: Math.random(), name: 'Third', priority: 2, status: 'review'},
        {id: Math.random(), name: 'Fourth', priority: 1, status: 'todo'}
    ],
    boardList: [
        {id: Math.random(), title: 'To do!', status: 'todo'},
        {id: Math.random(), title: 'In progress...', status: 'progress'},
        {id: Math.random(), title: 'Need review', status: 'review'},
        {id: Math.random(), title: 'Done!!!', status: 'done'}
    ],

    boardModalState: false,
    taskModalState: false,
    setStatus: [{status:""}],
    setBoard: [{name:''}],


};
const statuses = initialState.boardList.map(el => el.status)
const priorities = [0, 1, 2]
const canbanControlPanel = (state = initialState, action) => {
    switch (action.type) {

        case 'TASK_DELETE' :
            return {
                ...state,
                taskList: state.taskList.filter(el => el.id !== action.payload)
            };
        case 'TASK_ADD' :
            return {
                ...state,
                taskList: state.taskList.filter(el => el.id !== action.payload)
            };
        case 'BOARD_ADD' :
            return {
                ...state,
                boardList: state.taskList.filter(el => el.id !== action.payload)
            };

        case 'BOARD_MODAL_OPEN' :
            return {
                ...state,
                boardModalState: state.boardModalState = action.payload
            };
        case 'TASK_MODAL_OPEN' :
            return {
                ...state,
                taskModalState: state.taskModalState = action.payload
            };
        case 'RIGHT' :

            console.log(statuses)

            return {
                ...state,
                taskList: state.taskList.map(el => {
                    if (el.id === action.payload) {
                        el.status = statuses[statuses.indexOf(el.status) + 1]
                    }
                    return el
                })
            };
        case 'LEFT' :
            return {
                ...state,
                taskList: state.taskList.map(el => {
                    if (el.id === action.payload) {
                        el.status = statuses[statuses.indexOf(el.status) - 1]
                    }
                    return el
                })
            };
        case 'DOWN' :
            return {
                ...state,
                taskList: state.taskList.map(el => {
                    if (el.id === action.payload) {
                        el.priority = priorities[priorities.indexOf(el.priority) - 1]
                    }
                    return el
                })
            };
        case 'UP' :
            return {
                ...state,
                taskList: state.taskList.map(el => {
                    if (el.id === action.payload) {
                        el.priority = priorities[priorities.indexOf(el.priority) + 1]
                    }
                    return el
                })
            };

        default:
            return state


    }
};

export default canbanControlPanel;