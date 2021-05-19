import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Sign_in from './sign_in'
import App from "./App"
function LoginButton(props) {
    return <Button onClick={props.onClick}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            >
    <Link color="inherit" >
      Sign In
    </Link>
  </Button>;
}

function LogoutButton(props) {
    return <Button onClick={props.onClick}
     type="submit"
            fullWidth
            variant="contained"
            color="primary"
            >Back
            </Button>;
}
class control extends React.Component {

  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const a = this.state.isLoggedIn;
    let button = null;
    if(a) {
        button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
        button = <LoginButton onClick={this.handleLoginClick} />;
    }
    return (
      <div>
          <Greeting isLoggedIn={a}/>
          {button}
      </div>
    );
  }
}
function Greeting(props) {   
    const isLoggedIn = props.isLoggedIn;
   if (isLoggedIn) {
      return <App />;
   }
   return <Sign_in />; 
} 
ReactDOM.render(   
    <Greeting isLoggedIn={false} />,   document.getElementById('root') 
);
export default control;