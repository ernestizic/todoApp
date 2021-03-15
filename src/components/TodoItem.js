import React, { Component } from 'react';
import PropTypes from 'prop-types'; //this is a validation of all the properties a component should have


class TodoItem extends Component {

    getStyle = () => {
        return {
            background: "#f4f4f4",
            padding: "10px",
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? "line-through" : "none",
        }
    }
    
    render() { 
        const {title, id} = this.props.todo;
        return ( 
            <div style={this.getStyle()}>
                <p>
                    {/* bind(this) is used in the input tag */} 
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '} 
                    {title}
                    {/* arrow function is used in the button */}
                    <button onClick={()=> this.props.delTodo(id)} style={btnStyle}>x</button>
                </p>
            </div>
         );
    }
}







// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}


const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '2px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem;