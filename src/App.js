import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; // This is for using routers to go to other pages
import Navbar from './components/layout/Navbar';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
//import {v4 as uuid} from 'uuid'; //This is used to give unique IDs. uuid won't be needed when using api
import axios from 'axios'; //This is installed and imported for getting data from json placeholder api

import './App.css';


class App extends Component {
  /*
  state = {
    todos:[
      {
        id: uuid(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid(),
        title: 'Dinner with wifey',
        completed: false
      },
      {
        id: uuid(),
        title: 'Meeting with boss',
        completed: false
      }
    ],
  }
  */
  //since we would be fetching the data from the json placeholder api, we would leave the todo array empty
  state = {
    todos:[],
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({todos: res.data})) //res means response
  }


  // method for Toggle complete
  markComplete =(id)=>{
    this.setState({todos: this.state.todos.map(todo =>{
      if (todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

  // method for deleting todo (without using API)
  //the spread operator will give out all that is already in the array and then we filter FOR EACH TODO WHERE THE ID IS NOT 
  //EQUAL THE THE ID GIVEN IN THE PARAMETER
  /*
  delTodo =(id)=>{
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }
  */
  
  //method for delete todo with api
  delTodo =(id)=>{
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`) //for delete we use `` and add an id
      .then(res => this.setState({todos: [...this.state.todos.filter
      (todo => todo.id !== id)]}) )

  }

  //method for add Todo (without using api)
  /*
  addTodo =(title)=> {
    const newTodo = {
      id: uuid(),
      title: title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]});
  }
  */
// method for add Todo when using api
 addTodo =(title)=> {
  axios.post('https://jsonplaceholder.typicode.com/todos', {
    title: title,
    completed: false
  })
    .then(res => this.setState({todos: [...this.state.todos, res.data]}));
}

  // render method starts here
  render(){
    return (
      <Router> {/* The Router should wrap around all other elements */}
        <div className="App">
          <div className="container">
            <Navbar />
            {/* Other components should come inside the Route and React.Fragment */}
            {/* this is for the home/index page */}
            <Route exact path="/" render={props =>(
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
              </React.Fragment>
            )} />

            <Route path="/about" component={About}/>
          </div>
        </div>
      </Router>
    );
  }  
}

export default App;
