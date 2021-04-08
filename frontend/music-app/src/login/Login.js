import React, { Component } from 'react';
import { Button,TextField } from '@material-ui/core';
// import PersonSharpIcon from '@material-ui/icons/PersonSharp';
// import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import CallIcon from '@material-ui/icons/Call';
import './login.css'

class Login extends Component {
    constructor()
    {
        super();
        this.state = {
            username:'',
            password:'',
        }
        this.error=''
    }
    login()
    {
        console.log(this.state)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        };
        fetch('http://127.0.0.1:8000/login_user/', requestOptions)
            .then(async response => {
                const data = await response.json();
                console.log(data)
                if (data['token']){
                    alert("successfull Login")
                }
                else{
                    this.error = "username errro"
                }
            })
    }
    render() {
        return (
        <div>
            <div className="login-form">
                <h1 style={{color:'blue'}}>Login</h1>
                <form noValidate autoComplete="off" onClick={()=>{this.login()}}>
                    <label ><CallIcon className="MuiSvgIcon-root1"/></label>
                    <TextField id="username" type="text" onChange={(event)=>{this.setState({username:event.target.value})}} label="Username" />
                    <br /><br />
                    <label ><LockIcon  className="MuiSvgIcon-root1" />
                    </label><TextField id="password" type="password" onChange={(event)=>{this.setState({password:event.target.value})}} label="Password" />
                    <br /><br />
                    <br />
                    <Button variant="contained" color="primary">Login</Button>
                </form>
            </div>
        </div>
        );
    }
}

export default Login;