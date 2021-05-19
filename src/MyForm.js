import React from 'react';
import ReacrDOM from 'react-dom';
class MyForm extends React.Component{
    constructor(props){
        super(props);
        this.state={username: ''};
    }
   /* myChangeHandler=(event)=>{
        this.setState({username: event.target.value});
    }*/
    render(){
        return(
            <form>
            <h1>CGU Todo list {this.state.username}</h1>
            </form>
        );
    }
}
export default MyForm;