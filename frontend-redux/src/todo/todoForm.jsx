import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { changeFieldContent } from './todoActions'

const TodoForm = props => {
    const keyHandler = (e) => {
       if (e.key === 'Enter') {
           e.shiftKey ? props.handleSearch() : props.handleAdd()
       } else if (e.key === 'Escape') {
            props.handleClear()
       }
    }

    return (
        <div role='form' className='todoForm'>
            <Grid cols='12 10 9'>
                <input ref={input => input && input.focus()} 
                    id='description' className='form-control' 
                    placeholder='Adicione uma tarefa'
                    onChange={props.changeFieldContent}
                    onKeyUp={keyHandler}
                    value={props.description}></input>
            </Grid>
    
            <Grid cols='12 3 2'>
                <IconButton style='primary' icon='plus'
                    onClick={props.handleAdd}></IconButton>
                <IconButton style='info' icon='search'
                    onClick={props.handleSearch}></IconButton>
                <IconButton style='default' icon='close'
                    onClick={props.handleClear}></IconButton>
            </Grid>
        </div>
    )
}

const mapStateToProps = state => ({description: state.todo.fieldContent})
const mapDispatchToProps = dispatch => 
    bindActionCreators({ changeFieldContent }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)