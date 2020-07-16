import React from 'react';
import { Button } from '@material-ui/core';

function Login(props) {
    return (
        <div>
            <Button onClick = {props.logIn}>login</Button>
            
        </div>
    )
}

export default Login;
