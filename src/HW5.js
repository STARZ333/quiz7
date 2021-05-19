import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
class UserGithub extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                    id: '',
                    name: '',
                    login: '',
                    html_url: '',
                    avatarUrl: '',
                    node_id: '',
                    gists_url: ''
        }
        
    }
    componentDidMount() {
        $.get(this.props.source, (result) => {
            // console.log(result);
            const data = result;
            if (data) {
                this.setState({
                    id: data.id,
                    name: data.name,
                    login: data.login,
                    html_url: data.html_url,
                    avatarUrl: data.avatar_url,
                    node_id: data.node_id,
                    gists_url: data.gists_url,
                });
            }
        });
    } 

    componentWillUnmount(){
        
    }

    render() {
        return (
            <div> 
                <h3>ID:{this.state.id}</h3>
                <h3>Name:{this.state.name}</h3>
                <img src={this.state.avatarUrl} />
                <h3>NodeID:{this.state.node_id}</h3>
                <h3>My GitHub:<a href={this.state.html_url}>GitHub.com/frankhuangg<br></br></a></h3>
                <a href={this.state.gists_url}>gists_url</a>
            </div>
        );
    }
}


ReactDOM.render(
    <UserGithub source="https://api.github.com/users/frankhuangg" />,
    document.getElementById('root')
);
export default UserGithub;