import React, {Component,useState} from "react";
import Typography from "@material-ui/core/Typography";
import {
    ComposableMap,
    Geographies,
    Geography,
    Graticule
} from "react-simple-maps";
import {scaleQuantile} from "d3-scale";
import axios from "axios";
import ReactTooltip from "react-tooltip";
import Counter from './counter'
const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const colorScale = scaleQuantile()
    .domain([0, 12])
    .range([
        "#ffedea",
        "#ffcec5",
        "#ffad9f",
        "#ff8a75",
        "#ff5533",
        "#e2492d",
        "#be3d26",
        "#9a311f",
        "#782618"
    ]);

const openedStyle = {

    opacity: 1 /* opened drawer is opaque */,
    /* Upon transitioning to Open,
       animate `max-width' for 0.5s and opacity for 0.2s */
    transition: 'max-width 0.5s, opacity 0s'
};

/* This CSS style is applied when the drawer is closed */
const closedStyle = {

    opacity: 1 /* closed drawer is transparent */,
    /* Upon transitioning to Closed,
       animate `max-width' for 0.5s and opacity for 0.2s */
    transition: 'max-width 0.5s, opacity 1.2s'
};

const frameStyle = {
    position: "relative"
};
export default class MapChart extends Component{
    state = {
      mapData :[],
        tooltip:"",
        mapLoaded:false,
        totalDeath:0,
    };

    componentDidMount = async()=>{
        axios.get('https://covid19-api.org/api/status').then(
        response =>{
            for (var item of response.data){
                item['normalizedDeaths']=Math.log(item.deaths)
            }
            this.setState({mapData: response.data, mapLoaded:true, totalDeath :(response.data.map((x)=>{return x.deaths})).reduce((a, b) => a + b, 0)});
        }).catch(err => {console.log(err?.message)})
    };



    render() {
        const textStyle = {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            pointerEvents: "none",
            transition: 'max-width 0.5s, opacity 8s',
            opacity: this.state.mapLoaded ? 1 : 0
        }
        const textStyl2 = {
            transition: 'max-width 0.5s, opacity 2s',
            padding: "3rem",

            // opacity: this.state.mapLoaded ? 1 : 0
        }

        return (
            <React.Fragment>
                <Typography variant="h2" align="center" style={textStyl2} >
                    Covid is Real!
                </Typography>
                <div style={frameStyle}>
                    <Typography variant="h2" align="center" style={textStyle}>

                        <Counter value={this.state.totalDeath} timeout={4000}></Counter>+ Deaths.
                    </Typography>
            <ComposableMap
                height="400"
                data-tip=""
                projection="geoNaturalEarth1"
                projectionConfig={{
                    center: [0, 0],
                    rotate: [0, 0, 0],
                    scale: 150
                }}
            >
                <Graticule stroke="#EAEAEC"/>
                <Geographies geography={geoUrl}>
                    {({geographies}) =>
                        geographies.map(geo => {
                            const curr = this.state.mapData.find(row => row.country === geo.properties.ISO_A2);
                            const deathCount = curr ? curr.normalizedDeaths : 0;

                            return (<Geography
                                key={geo.rsmKey}
                                geography={geo}
                                onMouseEnter={() => {
                                    const {NAME} = geo.properties;
                                    this.setState({tooltip:`${NAME} — ${curr?.deaths || 0}`});
                                }}
                                onMouseLeave={() => {
                                    this.setState({
                                        tooltip:""})
                                }}
                                // fill={}
                                stroke="#EAEAEC"
                                style={{
                                    "pressed": {"outline": 0,"fill": colorScale(deathCount), transition:"fill 4s"},
                                    "hover": {"outline": 0, "fill": colorScale(deathCount), transition: "fill 4s"},
                                    "default": {"outline": 0, "fill": colorScale(deathCount), transition: "fill 4s"}

                                }}
                            />)
                        })
                    }
                </Geographies>
            </ComposableMap>
                </div>
                <ReactTooltip>{this.state.tooltip}</ReactTooltip>

            </React.Fragment>

        );
    }

}
