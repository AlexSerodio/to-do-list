import React, { Component } from 'react'

export default class Grid extends Component {
    /* Creates a bootstrap css class based on the elements (numbers)
     * passed by parameters. 
    */
    toCssClasses(numbers) {
        const cols = numbers ? numbers.split(' ') : []
        let classes = ''
    
        if (cols[0]) 
            classes += `col-xs-${cols[0]}`
        
        if (cols[1]) 
            classes += ` col-sm-${cols[1]}`
        
        if (cols[2]) 
            classes += ` col-md-${cols[2]}`
        
        if (cols[3]) 
            classes += ` col-lg-${cols[3]}`

        return classes
    }

    /* Returns a div component with a class created by
     * the toCssClasses function based on the props attributes
     * passed to this Grid component. 
    */
    render () {
        const gridClasses = this.toCssClasses(this.props.cols || 12)
        return (
            <div className={gridClasses}>
                {this.props.children}
            </div>
        )
    }
}