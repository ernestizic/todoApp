import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types'; //this is a validation of all the properties a component should have

class Todos extends Component {
    
    render() { 

        return  this.props.todos.length ? (
            this.props.todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
            ))
        ) : (
            <div style={{background: '#f0f0f0'}}>
                <h4 style={{textAlign: 'center', padding: '50px'}}>Nothing is left to do</h4>
            </div>
        )
    }
}





// PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired,  
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

export default Todos;