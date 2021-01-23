import '../css/app.css';
import Homepage from './homepage.jsx'
import React, {Component} from 'react'
import {NavLink, Switch, Route, Redirect, withRouter} from "react-router-dom"
import TopBar from './topbar'
import Footer from './footer'
import AboutUs from './about_us'
import {matchPath} from 'react-router';
import {Box} from "@material-ui/core";
import Container from '@material-ui/core/Container'
import NotFound from './page_not_found'
import {makeStyles, withStyles} from '@material-ui/core/styles';
import {CSSTransition} from "react-transition-group";

const routes = [
    {
        exact:true,
        path:'/home/',
        component: Homepage,
        name:"Home",
    },
    {
        exact: true,
        path: '/aboutus/',
        component: AboutUs,
        name: "About Us",
    },
    {
        exact: true,
        path: '/404/',
        component: NotFound,
        name: "404 Error",
    }
]
const useStyles = (theme) => ({
    body: {
        backgroundColor: theme.palette.background.default,
        minHeight:"30em",
        paddingLeft:0,
        paddingRight: 0,
    },
});

class App extends Component {
  render() {
      const currentRoute = routes.find(
          route => matchPath(this.props.location.pathname, route)
      )
      const {classes} = this.props;
      const {location} = this.props;
    return (

        <React.Fragment >
        <TopBar page={currentRoute?.name}/>
            <Container className={classes.body}>
                    <CSSTransition
                        key={location.key}
                        classNames="fade"
                        timeout={{enter: 1000, exit: 1000}}
                        transitionEnterTimeout={1000}
                        transitionLeaveTimeout={1000}
                    >
            <Switch key={location.key}>
                {
                    routes.map((route)=>(<Route path={route.path} component={route.component} exact></Route>))
                }
                <Redirect path='/' to='/home/'></Redirect>
                <Redirect to='/404/'></Redirect>
            </Switch>
                </CSSTransition>
            </Container>
        <Footer/>
        </React.Fragment>
    )
  }
}

export default withStyles(useStyles)(withRouter(App))
