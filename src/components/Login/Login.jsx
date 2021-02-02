import React from 'react';



class Login extends React.Component{

    state = {
        credential: {username: '', password: ''}
    };

    login = event =>{
        alert(this.state.credential.username + this.state.credential.password);
        fetch('http://127.0.0.1:8000/auth/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(this.state.credential)
        }).then(data => {
            console.log(data)
        }).catch(error => console.error(error))
    };

    inputChange = event => {
        const cred = this.state.credential;
        cred[event.target.name] = event.target.value;
        this.setState({credential: cred})
    };

    render (){
        return (
            <div>
                <h1>Login</h1>
                <label>
                    Username
                    <input type="text" name='username' value={this.state.credential.username} onChange={this.inputChange}/>
                </label>
                <label>
                    Password
                    <input type="password" name='password' value={this.state.credential.password} onChange={this.inputChange}/>
                </label>
                <button onClick={this.login}>login</button>
            </div>
        )
    }
};

export default Login;
