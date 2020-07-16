import React from 'react';
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <div>
                        <Link to="/">
                        <Typography variant="h6">
                            Home
                        </Typography>
                        </Link>
                        { headerOptions(props.isSignedIn, props.logOut) }
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )

    }
const headerOptions = (isSignedIn, logOut) => {
    if (isSignedIn){
        return(
            <React.Fragment>
                <Link to="/user/account">
                    
                   <Button> Account </Button> 
                </Link>
                <Link to="/user/ads">
                    
                   <Button> My ads </Button> 
                </Link>
                <Link to="/login">
                    
                   <Button onClick={logOut}> Logout </Button> 
                </Link>
            </React.Fragment>
        );
    }
    else{
        return(
            <React.Fragment>
                <Link to="/login">
                   <Button> Login </Button> 
                </Link>
                <Link to="/register">
                   <Button> Register </Button> 
                    
                </Link>

            </React.Fragment>
        );
    }

}

export default Header
