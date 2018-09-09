import React from 'react'
import PageHeader from '../template/pageHeader'

export default props => (
    <div className='container'>
        <PageHeader name='Sobre' small='Nós'></PageHeader>

        <h4>Criado por:</h4>
        <p>Alex Seródio Gonçalves</p>
        <h4>Curso utilizado:</h4>
        <p>React + Redux: Fundamentos e Duas Apps do ABSOLUTO ZERO!</p>
        <h4>Disponível em:</h4>
        <p><a>https://www.udemy.com/react-redux-pt/</a></p>
    </div>
)