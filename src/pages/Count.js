import React from 'react';

const styles = {
    color:  'red'
}

class Count extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.value || 0
        }
    }

    // state = {
    //     count: this.props.value || 0
    // }

    increment = () => {
        this.setState({
            count:  ++this.state.count
        })
    }

    decrement = () => {
        this.setState({
            count:  --this.state.count
        })
    }

    // lifecycle
    componentWillMount() {}

    componentDidMount() {
        console.log(`ajax`)
    }

    componentWillUpdate(nextProps, nextState) {
    }

    componentDidUpdate() {}

    componentWillReceiveProps(nextProps) {
        // 16.x不提倡使用
        console.log(nextProps)
        this.setState({
            count: nextProps.value
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        // 优化比较重要
        return nextProps.value !== 11;
    }

    render() {
        const { count } = this.state;
        return(
            <div className="count-wrapper">
                <span style={styles}>{count}</span>
                <br />
                <button type="button" onClick={this.decrement}>-</button>
                <button type="button" onClick={this.increment}>+</button>
                <div className="count-children" tabIndex="0">
                    <div className="left">
                        {this.props.leftContent}
                    </div>
                    <div className="main">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default Count;