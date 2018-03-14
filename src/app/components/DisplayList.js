import React from 'react';
import PropTypes from 'prop-types';

import FlipMove from "react-flip-move";

import DisplayItem from './DisplayItem'

export default class DisplayList extends React.Component{

  render(){
    return  <ul id="todo-list">
    <FlipMove staggerDurationBy="30" duration={500} enterAnimation="accordionVertical">
    { this.props.todos.map((todo,i)=>{
      return <section id="main" key={todo.id}>
              <DisplayItem
                todo={todo}
                handleDone={this.props.handleDone}
                handleDelete={this.props.handleDelete.bind(null,todo.id)}/>
              </section>
    }) }
 </FlipMove>
    </ul>


  }
}
DisplayList.propTypes={
    todos:PropTypes.array.isRequired,
    handleDone:PropTypes.func.isRequired,
    handleDelete:PropTypes.func.isRequired
}
