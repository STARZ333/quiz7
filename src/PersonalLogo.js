import React from 'react';
import $ from 'jquery';

import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import './PersonalLogo.css';
import { withStyles } from '@material-ui/core/styles';

const useStyles = (theme) => ({
    user_photo : {
        height : '250px',
        width : '250px',
        margin : '20px auto'
    },
    center_text : {
        'display':'flex',
        'justify-content' : 'center',
        'align-items': 'center',
        margin : '5px 5px',
    },
    middle_button : {
        width : '250px',
        display : 'grid',
        'margin': '10px auto',
    },
});

class PersonalLogo extends React.Component{    
    constructor(props){
        super(props);
        this.state={
            login : '',
            html_url : '',
            name : '',
            photo : '',
            followers : '',
            following : '',
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount(){
        // in order to use jquery, run the following command
        // step 1. run in command line:  npm install jquery --save
        // step 2. import $ from 'jquery'; 

         /* eslint-env jquery */
        $.get(this.props.source,(result) => {
            if(result){
                this.setState({
                    login : result.login,
                    html_url : result.html_url,
                    name : result.name,
                    photo : result.avatar_url,
                    followers : result.followers,
                    following : result.following,
                })
            }
        });
    }
    componentWillUnmount(){}
    render(){
        const classes = this.props.classes;
        return(
        <div className='card_outside'>
          <Card className='card_object'>
            <Avatar 
              alt={this.state.name} 
              src={this.state.photo} 
              className={classes.user_photo}
            />
            <div className='user_info'>
              <Typography className={classes.center_text} component="h5" variant="h5">{this.state.login}</Typography>
              <Typography className={classes.center_text} component="h6" variant="h6">{this.state.name}</Typography>              
              <Button className={classes.middle_button} variant='outlined' color="primary">Change Nick</Button>
              <Grid container justify="center" spacing={2}>
                  <Grid item>
                    <Typography className={classes.center_text} component="body1" variant="body1"> followers:{this.state.followers}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography className={classes.center_text} component="body1" variant="body1">following:{this.state.following}</Typography>
                  </Grid>
              </Grid>
              <a className={classes.center_text} href={this.state.html_url}>{this.state.html_url}</a>
            
            </div>
          </Card>
        </div>
        );
    }
}

export default withStyles(useStyles)(PersonalLogo)