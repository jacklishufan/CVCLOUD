import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import covicloudLogo from './covecloud.jpg';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Cloud Seven Private Limited
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 2),
    },
    checklistContent: {
        // backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2, 0, 2),

    },
    checklist: {
        // backgroundColor: '#ff0000',
        height: '150px',
        width:'100%',
        display: 'flex',
        // margin:'30px',
        padding: theme.spacing(2, 2, 2),
        border:'4px solid blue',
        paperWidthLg:10,

    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    headImg: {
        height: '100%',
        width: '100%',
    },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const data = [
    {
        id:1,
        head:'Services',
    },
    {
        id: 2,
        head: 'Insurance',
    },
    {
        id: 3,
        head: 'Fake News',
    },{
        id: 3,
        head: 'Hospital Beds',
    }
]
export default function Album() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline/>
            <AppBar position="static">
                <Toolbar>
                    {/*<CameraIcon className={classes.icon}/>*/}
                    <Typography variant="h6" color="inherit" className={classes.title}>
                       HOME
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                           {/*One Stop Solution To Hazzard Free Healthcare*/}
                           <img className={classes.headImg} src={covicloudLogo} alt="covicloud"/>
                        </Typography>
                        {/*<Typography variant="h5" align="center" color="textSecondary" paragraph>*/}
                        {/*    One Stop Solution To Hazzard Free Healthcare*/}
                        {/*</Typography>*/}
                        {/*<div className={classes.heroButtons}>*/}
                        {/*    <Grid container spacing={2} justify="center">*/}
                        {/*        <Grid item>*/}
                        {/*            <Button variant="contained" color="primary">*/}
                        {/*                Main call to action*/}
                        {/*            </Button>*/}
                        {/*        </Grid>*/}
                        {/*        <Grid item>*/}
                        {/*            <Button variant="outlined" color="primary">*/}
                        {/*                Secondary action*/}
                        {/*            </Button>*/}
                        {/*        </Grid>*/}
                        {/*    </Grid>*/}
                        {/*</div>*/}
                    </Container>
                </div>
                <div className={classes.checklistContent}>
                    <Container maxWidth="md">
                        <Paper className={classes.checklist}>
                        <Typography variant="h6" color="inherit" noWrap>
                            Checklist X
                        </Typography>
                            <a href="https://www.livemint.com/news/india/india-ready-for-coronavirus-vaccination-drive-60-crore-vaccine-shots-100-people-per-session-11607855911412.html">TEST</a>
                        </Paper>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {data.map((card) => (
                            <Grid item key={card.id} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://source.unsplash.com/random"
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {card.head}
                                        </Typography>
                                        <Typography>
                                            Some text will be inserted here
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            View
                                        </Button>
                                        {/*<Button size="small" color="primary">*/}
                                        {/*    Edit*/}
                                        {/*</Button>*/}
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    This website is under construction
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    {/*Something here to give the footer a purpose!*/}
                </Typography>
                <Copyright/>
            </footer>
            {/* End footer */}
        </React.Fragment>
    );
}
