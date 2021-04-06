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
            email:'',
            password:'',
        }
    }
    login()
    {
        console.log(this.state)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        };
        fetch('http://127.0.0.1:8000/api/login/', requestOptions)
            .then(async response => {
                const data = await response.json();
                console.log(data)
                if (data['token']){
                    alert("successfull Login")
                }
                else{
                    alert(data['non_field_errors'][0])
                }
            })
    }
    render() {
        return (
        <div>
            <div className="login-form">
                <h1 style={{color:'blue'}}>Login</h1>
                <form noValidate autoComplete="off">
                    <label ><CallIcon className="MuiSvgIcon-root1"/></label>
                    <TextField id="mobile" type="text" onChange={(event)=>{this.setState({email:event.target.value})}} label="Mobile" />
                    <br /><br />
                    <label ><LockIcon  className="MuiSvgIcon-root1" />
                    </label><TextField id="password" type="password" onChange={(event)=>{this.setState({password:event.target.value})}} label="Password" />
                    <br /><br />
                    <br />
                    <Button variant="contained" color="primary" onClick={()=>{this.login()}}>Login</Button>
                </form>
            </div>
        </div>
        );
    }
}

export default Login;