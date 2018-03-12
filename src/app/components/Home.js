import React from "react";
import PropTypes from 'prop-types';
export class Home extends React.Component {
  constructor(props){
    super();
    this.state={
      age:props.initialAge,
      status:0,
      homeLink:props.initialLinkName
    };
    setTimeout(() =>{
      this.setState({
        status:1
      });
    },3000);
    console.log("Constructor");
  }
  componentWillMount(){
    console.log("Component Will mount");
  }
  componentDidMount(){
    console.log("Component did Mount");
  }
  componentWillReceiveProps(nextProps){
    console.log("Component Will Receive props",nextProps);
  }
  shouldComponentUpdate(nextProps,nextSate){
    console.log("Should Component update",nextProps,nextSate);
/*   if(nextSate.status === 1){
      return false;
    }*/
    return true;
  }
  componentWillUpdate(nextProps,nextSate){
    console.log("Component will update",nextProps,nextSate);
  }
  componentDidUpdate(prevProps,prevState){
    console.log("Component did update",prevProps,prevState);
  }
  componentWillUnmount(){
    console.log("Component will unmount");
  }
  onMakeOlder(){
    this.setState({
      age:this.state.age+3
    });
  }
  onChangeName(){
    this.props.changeLink(this.state.homeLink);
  }
  onHandleChange(event){
this.setState({
  homeLink:event.target.value
});
  }
  render() {
    return(
      <div>
      <p> In a new Compnent!</p>
      <p>Your name is {this.props.name}, your age is {this.state.age}</p>
      <p>Status:{this.state.status}</p>
<hr/>
<button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older! </button>
<hr/>
<button onClick={this.props.greet} className="btn btn-primary">Greet</button>
<hr/>
<input type="text" value={this.state.homeLink} onChange={(event) => this.onHandleChange(event)}/>
<button onClick={() => this.onChangeName()} className="btn btn-primary">Change Header Link! </button>
      </div>
    );
  }
}
Home.propTypes ={
  name: PropTypes.string,
  age: PropTypes.number,
  GREET:PropTypes.func,
  initialLinkName:PropTypes.string
};
