import React, { Component } from 'react'

const WithStorage  = WrappedComponent => {
  return class extends Component{
    componentWillMount() {
      let data = localStorage.getItem('data') || 'mock data'
      this.setState({ data })
    }

    render() {
      return <WrappedComponent data={this.state.data} {...this.props} /> 
    }
  }
}

export default WithStorage 