const INITIAL_STATE = {
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
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, fieldContent: action.payload}
        default:
            return state
    }
}