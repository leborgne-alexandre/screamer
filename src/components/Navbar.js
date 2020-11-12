import React from 'react';
import {Link} from 'react-router-dom'

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"

import App from '../App';

const Navbar = () => {
    return (
        <AppBar position="fixed">
            <Toolbar className="nav-container">
                <Button colors="inherit" component={Link} to="/">Home</Button>
                <Button colors="inherit" component={Link} to="/login">Login</Button>
                <Button colors="inherit" component={Link} to="/signup">Signup</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;