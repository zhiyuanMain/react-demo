import React from 'react'
import Span from './Span'

const Item = (props) => {
    console.log(props)
    return (
        <li className="component-item" onClick={() => {props.onClick(props.value)}}>
            <em>li的props: {JSON.stringify(props)}</em>******************<Span {...props}/>
        </li>
    )
}

export default Item