import React from 'react';
import SignIn from './SignIn';
import ToDoApp from '../Controller/ToDoApp'
export default class Website extends React.Component{
    // initialize
    constructor(props){
        super(props);
        this.setRenderItem = this.setRenderItem.bind(this);
    }
    // mount component(render to DOM), only once
    componentDidMount(){}
    // unmount component, only once
    componentWillUnmount(){}

    setRenderItem(){
        if(this.props.LoginStatus){
            return (<ToDoApp/>);
        }else{
            return (<SignIn onLogin={this.props.onLogin}/>);
        }
    }

    render(){
      return(
          <div>
            {this.setRenderItem()}
          </div>
      );
    }
}
  