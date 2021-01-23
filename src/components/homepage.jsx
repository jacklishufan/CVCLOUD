import React, {Component} from "react";
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import DeathCharts from "./deathChart";
import TimeLine from './timeline'

const items = [{
    title: "May 1940",
    cardTitle: "Dunkirk",
    cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to.."
}, {
    title: "May 1941",
    cardTitle: "Dunkirk",
    cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to.."
    ,
}, {
    title: "May 1941",
    cardTitle: "Dunkirk",
    cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to.."
    ,
}, {
    title: "May 1941",
    cardTitle: "Dunkirk",
    cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to.."
    ,
}, {
    title: "May 1941",
    cardTitle: "Dunkirk",
    cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to.."
    ,
}, {
    title: "May 1941",
    cardTitle: "Dunkirk",
    cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to.."
    ,
}, {
    title: "May 1941",
    cardTitle: "Dunkirk",
    cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to.."
    ,
}];

const useStyles = (theme) => ({
    filler: {
        paddingTop: theme.spacing(20),
        paddingButton: theme.spacing(20),
    },
});
class Homepage extends Component {

    render() {
        const {classes} = this.props;
        return(
            <React.Fragment>
                <div style={{width:"100%", height: "600px"}}>
                    <TimeLine/>
                </div>
                <DeathCharts/>>
                <Typography variant="h4" align="center" className={classes.filler}>
                    This website is under construction
                </Typography>
            </React.Fragment>

        )

    }
}

export default withStyles(useStyles)(Homepage)
