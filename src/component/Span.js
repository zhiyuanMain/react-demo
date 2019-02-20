import React from 'react'
import WithStorage from '../hoc/WithStorage'
const Span = (props) => {
    return (
        <span style={{color: 'green'}}>HOC Span的props{JSON.stringify(props)}</span>
    )    
}

export default WithStorage(Span)