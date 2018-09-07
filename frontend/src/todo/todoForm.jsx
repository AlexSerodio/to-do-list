import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => (
    <div>
        <Grid cols='12 10 9'>
            <input id='description' className='form-control' placeholder='Adicione uma tarefa'></input>
        </Grid>

        <Grid cols='12 3 2'>
            <IconButton style='primary' icon='plus'></IconButton>
        </Grid>
    </div>
)