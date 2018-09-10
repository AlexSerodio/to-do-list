import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { changeFieldContent, search, add, clear } from './todoActions'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        if (e.key === 'Enter')
            e.shiftKey ? this.props.search() : this.props.add(this.props.description)
        else if (e.key === 'Escape')
            this.props.clear()
        
    }

    render() {
        return (
            <div role='form' className='todoForm'>
                <Grid cols='12 10 9'>
                    <input ref={input => input && input.focus()} 
                        id='description' className='form-control' 
                        placeholder='Adicione uma tarefa'
                        onChange={this.props.changeFieldContent}
                        onKeyUp={this.keyHandler}
                        value={this.props.description}></input>
                </Grid>
        
                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus'
                        onClick={() => this.props.add(this.props.description)}></IconButton>
                    <IconButton style='info' icon='search'
                        onClick={() => this.props.search()}></IconButton>
                    <IconButton style='default' icon='close'
                        onClick={this.props.clear}></IconButton>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({description: state.todo.fieldContent})
const mapDispatchToProps = dispatch => 
    bindActionCreators({ changeFieldContent, search, add, clear }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)