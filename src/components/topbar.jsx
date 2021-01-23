import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import React, {Component} from "react";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import covicloudLogo from '../photos/appbar_title.png';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import {NavLink, Switch, Route, Redirect} from "react-router-dom"

const useStyles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    appBarLogo: {
        height: "3em",
    },

});

class TopBar extends Component {

    render() {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <AppBar position="relative">
                    <Toolbar>
                        {/*<CameraIcon className={classes.icon}/>*/}
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" color="inherit" className={classes.title}>
                            {this.props.page}
                        </Typography>
                        <NavLink className="navbar-brand page-scroll" to="/home/">
                        <img src={covicloudLogo} className={classes.appBarLogo} alt="covicloud"/>
                        </NavLink>
                        <Button href="/#/aboutus"color="inherit">About Us</Button>
                    </Toolbar>
                </AppBar>
            </React.Fragment>

        )

    }
}
TopBar.defaultProps = {
    page: 'Home'
};
export default withStyles(useStyles)(TopBar)
