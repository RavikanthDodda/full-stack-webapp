import React from 'react';
import {  FormControl, TextField } from '@material-ui/core';

function Account(props) {
    return (
        <div>
           <FormControl>
           <TextField variant="outlined" label="Email"/>  
           <TextField variant="outlined" label="Password"/>  
           <TextField variant="outlined" label="First Name"/>  
           <TextField variant="outlined" label="Last Name"/>  
           <TextField variant="outlined" label="Phone"/>  
            </FormControl> 
        </div>
    )
}

export default Account;
