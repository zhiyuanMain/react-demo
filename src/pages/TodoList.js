import React from 'react'
import Item from '../component/Item'

class TodoList extends React.Component {
    constructor(props) {
        super(props)
    }

    handleClick = (res) => {
        console.log(res)
    }

    render() {
        return (
            <div className="todo-list-wrapper">
                <header>Todo lists</header>
                <ul>
                    {
                        this.props.list.map(item => 
                            {
                                const { value, ...rest } = item;
                                return (
                                    <Item 
                                        key={value}
                                        value={value}
                                        {...rest}
                                        onClick={this.handleClick}
                                    />
                                )
                            }
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default TodoList;