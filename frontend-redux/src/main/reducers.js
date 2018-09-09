import { combineReducers } from 'redux'

const rootReducer = combineReducers ({
    todo: () => ({
        description: 'Ler livro',
        list: [{
            _id: 1,
            description: 'Pagar fatura do cartão',
            done: true
        }, {
            _id: 2,
            description: 'Reunião com a equipe',
            done: false
        }, {
            _id: 3,
            description: 'Consuta médica amanhã',
            done: false
        }]
    })
})

export default rootReducer