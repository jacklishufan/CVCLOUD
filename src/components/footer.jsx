import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import React, {Component} from "react";

import {makeStyles, withStyles} from '@material-ui/core/styles';


const useStyles = (theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
});

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            {'Cloud Seven Private Limited '}
             {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

class Footer extends Component {

    render() {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <footer className={classes.footer}>
                    <Typography variant="h6" align="center" gutterBottom>
                        This website is under construction
                    </Typography>
                    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                        {/*Something here to give the footer a purpose!*/}
                    </Typography>
                    <Copyright/>
                </footer>
            </React.Fragment>

        )

    }
}

export default withStyles(useStyles)(Footer)
