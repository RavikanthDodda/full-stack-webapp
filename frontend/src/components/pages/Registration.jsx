import React from 'react';
import { Button, FormControl, TextField } from '@material-ui/core';

function Registration(props) {
    return (
        <div>
           <FormControl>
           <TextField variant="outlined" label="Email"/>  
           <TextField variant="outlined" label="Password"/>  
           <TextField variant="outlined" label="First Name"/>  
           <TextField variant="outlined" label="Last Name"/>  
           <TextField variant="outlined" label="Phone"/>  
           <Button onClick={props.logIn}>Sign up</Button>
            </FormControl> 
        </div>
    )
}

export default Registration;
