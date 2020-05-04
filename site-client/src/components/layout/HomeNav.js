import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import HomeIcon from '../../images/home.png'


class HomeNav extends Component {
    render() {
        return (
            <AppBar position="fixed">
                <Toolbar>
                    <Button color="inherit" component={Link} to="/">
                    <img src={HomeIcon} width="400" height="78" alt="alumni" />
                    </Button>
                    <div className="HomeNav-container">
                    <Button color="secondary" component={Link} to="/">
                        Home
                    </Button>
                    <Button color="secondary" component={Link} to="/about">
                        About
                    </Button>
                    <Button color="secondary" component={Link} to="/newsroom">
                        Newsroom
                    </Button>
                    <Button color="secondary" component={Link} to="/DashBoard">
                        Dashboard
                    </Button>
                    </div>
                </Toolbar>
            </AppBar>
        )
    }
}

export default HomeNav
