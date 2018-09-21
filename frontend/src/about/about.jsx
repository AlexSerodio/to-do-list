import React from 'react'
import PageHeader from '../template/pageHeader'

export default props => (
    <div className='container'>
        <PageHeader name='About'></PageHeader>

        <p>
            <h4>Acknowledgments</h4>
            This project was developed for study purposes following a course from Udemy that can 
            be found <a href="https://www.udemy.com/react-redux-pt/" target='_blank'>here</a> and has no intention 
            of being used commercially.
        </p><hr />

        <p>
            <h4>Shorcuts:</h4>
            <ul>
                <li>Add: enter</li>
                <li>Search: shift + enter</li>
                <li>Clear: escape</li>
            </ul>
        </p><hr />

        <p>
            <h4>Author information:</h4>
            Name: Alex Seródio Gonçalves<br />
            Github: <a href="https://github.com/AlexSerodio" target='_blank'>alexserodio</a><hr />
        </p>
    </div>
)