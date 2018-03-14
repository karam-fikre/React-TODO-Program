import React from 'react';
import PropTypes from 'prop-types';

import DisplayList from './DisplayList';

var rand=require('random-key');
export default class App extends React.Component{

  constructor(){
    super();
    this.state={
      title:'',
      todos: [
                {title:'Task 1 ',done:false,id:1},
                {title:'Task 2',done:false,id:2},
                {title:'Task 3',done:false,id:3}
              ]
    };
  }

handleSubmit(event){
  event.preventDefault();
  var title=this.state.title;
  var newTodos=this.state.todos.concat({title:title,done:false,id:rand.generate()});
  this.setState({title:'',todos:newTodos});
}

handleChange(event){
  var title =event.target.value;
  this.setState({title:title});
}

handleDelete(idToBeDeleted){
  var newTodos = this.state.todos.filter((todo)=>{
    return todo.id != idToBeDeleted
  })
this.setState({todos:newTodos});
}

handleDone(idToBeMarkedAsDone){
 var _todos = this.state.todos;
var todo=_todos.filter((todo)=>{return todo.id===idToBeMarkedAsDone})[0];
todo.done=!todo.done;
 this.setState({todos:_todos});
}

handleClearCompleted(event){
  var newTodos=this.state.todos.filter((todo)=>{return !todo.done});
  this.setState({todos:newTodos});
}
  render (){
    return <div>
                  <h1> TODO </h1>
              <form onSubmit={this.handleSubmit.bind(this)}>
                  <input type="text" placeholder="Enter a task" onChange={(event) => this.handleChange(event)} value={this.state.title}/>
                  <button className="add">Add</button>
              </form>


              <DisplayList
              handleDone={this.handleDone.bind(this)}
              handleDelete={this.handleDelete.bind(this)}
              todos={this.state.todos}/>

              <footer>
              All: <span className="todo-count"> {this.state.todos.length}</span> |
              Completed:<span className="todo-count"> {this.state.todos.filter((todo)=>{return todo.done}).length}</span> |
              Pending: <span className="todo-count"> {this.state.todos.filter((todo)=>{return !todo.done}).length}</span> |
              <a  className="clear-completed" onClick={this.handleClearCompleted.bind(this)}>Clean Completed</a>
             </footer>

          </div>
  }
}
