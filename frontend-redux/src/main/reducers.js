import { combineReducers } from 'redux'

const rootReducer = combineReducers ({
    todo: () => ({
        fieldContent: 'Ler livro',   /* conteudo do campo de cadastro/pesquisa de tarefas */
        taskList: [{    /* tarefas cadastradas */
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