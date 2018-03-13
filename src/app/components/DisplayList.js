import React from 'react';
import PropTypes from 'prop-types';

import DisplayItem from './DisplayItem'

export default class DisplayList extends React.Component{

  render(){
    return <ul id="todo-list">
    { this.props.todos.map((todo,i)=>{
      return <section id="main" key={todo.id}>
              <DisplayItem
                todo={todo}
                handleDone={this.props.handleDone}
                handleDelete={this.props.handleDelete.bind(null,todo.id)}/>
              </section>
    }) }

    </ul>
  }
}
DisplayList.propTypes={
    todos:PropTypes.array.isRequired,
    handleDone:PropTypes.func.isRequired,
    handleDelete:PropTypes.func.isRequired
}
