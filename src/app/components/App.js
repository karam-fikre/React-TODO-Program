import React from 'react';
import PropTypes from 'prop-types';

import DisplayList from './DisplayList';

export default class App extends React.Component{

  constructor(){
    super();
    this.state={
      title:'',
      todos: [
                {title:'Test1',done:false},
                {title:'Test2',done:false},
                {title:'Test3',done:false}
              ]
    };
  }

handleSubmit(event){
  event.preventDefault();
  var title=this.state.title;
  var newTodos=this.state.todos.concat({title:title,done:false});
  this.setState({title:'',todos:newTodos});
}

handleChange(event){
  var title =event.target.value;
  this.setState({title:title});
}

handleDelete(titleToBeDeleted){
  var newTodos = this.state.todos.filter((todo)=>{
    return todo.title != titleToBeDeleted
  })
this.setState({todos:newTodos});
}

handleDone(titleToBeMarkedAsDone){
 var _todos = this.state.todos;
var todo=_todos.filter((todo)=>{return todo.title===titleToBeMarkedAsDone})[0];
todo.done=!todo.done;
 this.setState({todos:_todos});
}

  render (){
    return <div>
                  <p> TODO </p>
              <form onSubmit={this.handleSubmit.bind(this)}>
                  <input onChange={(event) => this.handleChange(event)} value={this.state.title}/>
                  <button className="btn btn-primary">Submit</button>
              </form>
              <p>
              All: {this.state.todos.length}|
              Completed: {this.state.todos.filter((todo)=>{return todo.done}).length}|
              Pending: {this.state.todos.filter((todo)=>{return !todo.done}).length}|
              <a href="#">Clean Completed</a>
             </p>
              <DisplayList
              handleDone={this.handleDone.bind(this)}
              handleDelete={this.handleDelete.bind(this)}
              todos={this.state.todos}/>
          </div>
  }
}

App.propTypes={
  done:PropTypes.bool
}
