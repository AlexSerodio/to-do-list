export const changeFieldContent = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})