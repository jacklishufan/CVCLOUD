import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import React, {Component} from "react";

import {makeStyles, withStyles} from '@material-ui/core/styles';
import {Container, Box} from "@material-ui/core";
import covicloudLogoLarge from '../photos/covecloud.jpg';
import Grid from '@material-ui/core/Grid';
import Aditya from '../photos/1.png';
import Arbaz from '../photos/2.png';
import Sanket from '../photos/3.png';
import Datta from '../photos/4.png';
import Shreya from '../photos/5.png';
import Shufan from '../photos/6.png';
import Sagar from '../photos/7.png';


const useStyles = (theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    mainContainer: {
        alignItems:"center",
        // paddingTop:"10em",
    },
    headImgContainer:{
        backgroundColor: theme.palette.background.paper,
        flexGrow:1,
        textAlign:"center",
    },
    headImg:{
        marginTop:"2em",
        height:"auto",
        maxWidth:"100%",
    },
    introTitle:{
        marginTop: "1em",
    },
    textBody:{

    },
    founderBox:{
        textAlign:"center",
        overflowWrap:"break-word",
    }

});

const founders = [
    {name:"Aditya Gupta",
        role:"Business, Marketing & Sales",
        comment:"ZS Associates,BITS Pilani",
        email:"",
        photo:Aditya,
    },
    {
        name: "Arbaz Baig",
        role: "Research & Development",
        comment: "Senior Research Fellow (DRDO Lab)",
        email: "arbazsharesdoc@gmail.com",
        photo: Arbaz,
    },
    {
        name: "Sagar Mohanty",
        role: "R&D Management , Operation",
        comment: "CORE Diagnostics, Ex-IGIB, Ex-CDSA",
        email: "sagar.mohanty@corediagnostics.in",
        photo: Sagar,
    },
    {
        name: "Sanket Kamble",
        role: "Product",
        comment: "Cerner Corporation",
        email: "sanketsanjaykamble36@gmail.com",
        photo: Sanket,
    },
    {
        name: "Jack Shufan Li",
        role: "Full-Stack Development",
        comment: "UC Berkeley",
        email: "jacklishufan@berkeley.edu",
        photo: Shufan,
    },
    {
        name: "Shreya Rajasekar",
        role: "Public Relations",
        comment: "Sir MVIT,Bangalore",
        email: "shreya99rajasekar@gmail.com",
        photo: Shreya,
    },
    {
        name: "Dr. Suvrankar Datta",
        role: "Healthcare & Strategy",
        comment: "Indian Medical Association",
        email: "",
        photo: Datta,
    }
]
class AboutUs extends Component {

    render() {
        const {classes} = this.props;
        return (
            <Grid container className={classes.mainContainer} spacing={3} justify="center">
                <Grid item xs={12} className = {classes.headImgContainer}>
                <img className={classes.headImg} src={covicloudLogoLarge} alt="covicloud"/>
                </Grid>
                <Grid item xs={12}>
                <Typography variant="h4" color="textSecondary" align="center" className={classes.introTitle}>
                    About Us
                </Typography>
                </Grid>
                <Grid item xs={10} md={8} >
                    <Typography variant="body1" color="textSecondary" align="left" className={classes.textBody}>
                        Co.we.cloud was founded in October, 2020 during an MIT online event. Our team consists of
                        talents from different backgrounds who share a common enthusiasm to combat ignorance and
                        misinformation in this pandemic. We dedicated to provide a one-stop solution for hassle-free
                        healthcare, where people can easily access a wide range of information that is both reliable and
                        up do date so that they can make informed choices.
                        <br/><br/>
                        Our primary service will include:
                        <br/><br/>
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                        Fact Check
                    </Typography>
                    <Typography variant="body1" color="textSecondary" align="left" className={classes.textBody}>

                        From “just a regular flew” to “curable by injecting disinfectant” , rumors about the severity of
                        COVID-19, its potential cures, or even its mere existence have never stopped circulating. As
                        many COVID vaccines have been approved across the world, we see an increasingly large number of
                        myths about them. We will select some hottest news about the COVID-19 circulating in social
                        media and test their validity with reliable sources.
                        <br/><br/>
                    </Typography>

                    <Typography variant="h6" color="textSecondary">
                        Tips and Guidelines
                    </Typography>
                    <Typography variant="body1" color="textSecondary" align="left" className={classes.textBody}>

                        It is more important than ever before to have a clear understanding about how COVID-19 will
                        impact your life and what guidelines you should follow. But guidelines may contradict each
                        other, contain misleading and confusing texts, or become outdated. We will collect the latest
                        suggestions across the world, from WHO, governments, experts, and major research institutions in
                        one place to keep you up-to-date.
                        <br/><br/>
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                        Service Availability
                    </Typography>
                    <Typography variant="body1" color="textSecondary" align="left" className={classes.textBody}>

                        The healthcare services in your region may be quite different from what they used to be. It is
                        possible to get yourself tested without going to a hospital. Not all hospitals are taking
                        patients with COVID-19 or similar symptoms .Some surgeries may no longer be available at some
                        sites due to reallocation of limited resources. We will help you find out where are the test
                        sites, which hospitals are taking COVID-19 patients, which department is running and which
                        services are available at different hospitals and clinics.

                        <br/><br/>
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h4" color="textSecondary" align="center" className={classes.introTitle}>
                       Our Team
                    </Typography>
                </Grid>
                <Grid container item xs={12} md={10} spacing={3} justify="center">
                {
                founders.map((member)=>(<Grid item xs={6} sm={4} md={3}>
                <Container maxWidth="100%" className={classes.founderBox}>
                    <img src={member.photo} height="100px"/>
                    <Typography variant="h6" color="textSecondary" weight="bold" align="center" >
                        <b>{member.name}</b>
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" align="center" >
                        <b> {member.role}</b>
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" align="center">
                        {member.comment}<br/>
                        {member.email}
                    </Typography>
                </Container>
                    </Grid>))
                }
                </Grid>
            </Grid>

        )

    }
}

export default withStyles(useStyles)(AboutUs)
