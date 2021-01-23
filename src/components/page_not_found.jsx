import React, {Component} from "react";
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import {Container} from "@material-ui/core";
import Link from '@material-ui/core/Link';
const useStyles = (theme) => ({
    filler: {
        paddingTop: theme.spacing(20),
        paddingButton: theme.spacing(20),
    },
});
class NotFound extends Component {

    render() {
        const {classes} = this.props;
        return(
            <Container className={classes.filler}>
                <Typography variant="h4" align="center" >
                    404 Not Found<br/>This page does not exist
                </Typography>
                <Typography variant="h6" align="center">
                    Go to <Link href="/#/home/"> Home Page </Link>
                </Typography>
            </Container>

        )

    }
}

export default withStyles(useStyles)(NotFound)
