import React from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Tabs>
                <Tab label="Dashboard" component={Link} to="/dashboard" />
                <Tab label="User Form" component={Link} to="/userform" />
            </Tabs>
        </AppBar>
    );
};

export default Navbar;