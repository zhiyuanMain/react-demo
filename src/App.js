import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Count from './pages/Count'
import TodoList from './pages/TodoList'

import ListJson from './mock/list.json'

const LeftContent = () => <div>left content</div>
class App extends Component {
  state = {
    count: 5
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count+2
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App-content">
          <Count 
            value={this.state.count}
            leftContent={<LeftContent />}
          >
             count children
          </Count>
        </div>
        <button type="button" onClick={this.handleIncrement}>App Click</button>
        <br />
        <br />
        <div className="App-content">
          <TodoList list={ListJson}/>
        </div>
      </div>
    );
  }
}

export default App;
