import React from 'react'
import PropTypes from 'prop-types';

export default class DisplayItem extends React.Component{

  render(){
    var todo=this.props.todo;
    return <li className={todo.done ? 'done' : ''}>
       <input
       checked={todo.done}
       onChange={this.props.handleDone.bind(null,todo.id)}
       type="checkbox"
       style={{fontsize:'x-large'}}/>
       <label>
        {todo.title}
        </label>
       <a href="#" className="destroy" onClick={this.props.handleDelete.bind(null,todo.id)}>
         [x]
       </a>
    </li>;
  }
}


DisplayItem.propTypes={
  todo:PropTypes.object.isRequired,
  handleDone:PropTypes.func.isRequired,
  handleDelete:PropTypes.func.isRequired
}
