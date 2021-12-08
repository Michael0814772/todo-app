const initialData = {
    taskItems : []
}

function reducer(state = initialData, action) {

    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                taskItems: [...state.taskItems, action.payload]
        }
        case 'DELETE_TASK': return {
            ...state,
            taskItems: state.taskItems.filter((task) => task !== action.payload)
        }
        case 'EDIT_TASK': return {
            ...state,
            taskItems: state.taskItems.map((task) => {
                if(task === action.payload.oldTask) {
                    task = action.payload.newTask
                }
                return task
            })
        }
        default:
            return state;
    }
}

export default reducer