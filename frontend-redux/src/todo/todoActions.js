import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const changeFieldContent = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    return (dispatch, getState) => {
        const description = getState().todo.fieldContent
        const search = description ? `&description__regex=/${description}/` : ''
        const request = axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => dispatch({type: 'TODO_SEARCHED', payload: resp.data}))
    }
}

/**
 * Uses redux thunk middleware to return a function instead of an action. This way 
 * you can use the .then () function to control the order of execution of processes.
 */
export const add = (description) => {
    return dispatch => {
        axios.post(URL, { description })
            .then(resp => dispatch(clear()))
    }
}

/* Uses redux thunk middleware */
export const markAsDone = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            //.then(resp => dispatch({type: 'TODO_MARKED_AS_DONE', payload: resp.data}))
            .then(resp => dispatch(search()))
    }
}

/* Uses redux thunk middleware */
export const markAsPending = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(resp => dispatch(search()))
    }
}

/* Uses redux thunk middleware */
export const remove = (todo) => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => dispatch(search()))
    }
}

/* Uses redux multi middleware */
export const clear = () => {
    return [{ type: 'TODO_CLEAR' }, search()]
} 