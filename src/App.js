import React, {Component} from 'react';
import './App.css';

class App extends Component
{
  constructor() {
    super();
    this.state = {
        userInput: '',
        items: []
    };
}

onChange(event) {
    this.setState({
        userInput: event.target.value
    });
}

addTodo(event) {
    event.preventDefault();
    this.setState({
        userInput: '',
        items: [...this.state.items, this.state.userInput]
    });
}

deleteTodo(item) {
    // no event 
    // pass the item to indexOf
    const array = this.state.items;
    const index = array.indexOf(item);
    array.splice(index, 1);
    this.setState({
        items: array
    });
}

// add item to deleteTodo.bind(this, item)
renderTodos() {
    return this.state.items.map((item) => {
        return (
            <div className="list-group-item" key={item}>
                {item} | <button onClick={this.deleteTodo.bind(this, item)}>X</button>
            </div>    
        );
    });
}

render() {
    return(
        <div>
            <h1 align="center">Todo list</h1>
            <form className="form-row align-items-center">
                <input 
                    value={this.state.userInput} 
                    type="text" 
                    placeholder="Fill in an item"
                    onChange={this.onChange.bind(this)}
                    className="form-control mb-2"
                />
                <button 
                    onClick={this.addTodo.bind(this)} 
                    className="btn btn-primary"
                >
                    Add
                </button>
            </form>
            <div className="list-group">
                {this.renderTodos()}
            </div>
        </div>
    );
  }
}

export default App;
