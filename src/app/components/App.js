import React from 'react';
import PropTypes from 'prop-types';

export default class App extends React.Component{
  constructor(){
    super();
    this.state={
      text:"",
      items:[]
    }
  }
handleSubmit(event){
  event.preventDefault();
  var text=this.state.text;
  var newItem=this.state.items.concat(text);
  this.setState({text:"",items:newItem});
}
handleChange(event){
  var text =event.target.value;
  this.setState({text:text});
}
  render (){
    return <div>
                  <p> TODO </p>
              <form onSubmit={this.handleSubmit.bind(this)}>
                  <input onChange={(event) => this.handleChange(event)} value={this.state.text}/>
                  <button className="btn btn-primary">Submit</button>
              </form>
              <p>
              {this.state.items.toString()}
              </p>
          </div>
  }
}
