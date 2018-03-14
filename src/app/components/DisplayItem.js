import React from 'react'
import PropTypes from 'prop-types';

export default class DisplayItem extends React.Component{
constructor(){
  super();
  this.state={editing:false,changedText:''};
}

componentDidMount(){
  this.setState({changedText:this.props.todo.title});
}

handleEditing(event){
  this.setState({editing:true,changedText:this.props.todo.title});

}

handleEditingDone(event){
  if(event.keyCode === 13){//submit
    this.setState({editing:false});
  }
}

handleEditingChange(event){
var _changedText = event.target.value;
this.setState({changedText:_changedText});
}

  render(){
    var todo=this.props.todo;

    var viewStyle={};
    var editStyle={};

    if(this.state.editing){
      viewStyle.display='none';
    }else{
      editStyle.display='none';
    }
    return  <li id="items" className={todo.done ? 'done' : ''}>
    <div style={viewStyle} onDoubleClick={this.handleEditing.bind(this)}>
       <label>{this.state.changedText}
       <input
       checked={todo.done}
       onChange={this.props.handleDone.bind(null,todo.id)}
       type="checkbox"/>
<span className="checkmark"></span>


        </label>


       <a href="#" className="destroy glyphicon glyphicon-trash" onClick={this.props.handleDelete.bind(null,todo.id)}/>

      </div>

      <input type="text"
      className="editing"
      onKeyDown={this.handleEditingDone.bind(this)}
      onChange={this.handleEditingChange.bind(this)}
      style={editStyle} value={todo.title}
      value={this.state.changedText}/>

    </li>;
  }
}


DisplayItem.propTypes={
  todo:PropTypes.object.isRequired,
  handleDone:PropTypes.func.isRequired,
  handleDelete:PropTypes.func.isRequired
}
