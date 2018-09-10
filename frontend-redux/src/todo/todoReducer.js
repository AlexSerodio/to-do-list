const INITIAL_STATE = {
    fieldContent: '', 
    taskList: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, fieldContent: action.payload}
        case 'TODO_SEARCHED':
            return { ...state, taskList: action.payload }
        case 'TODO_CLEAR':
            return { ...state, fieldContent: '' }  
        default:
            return state
    }
}