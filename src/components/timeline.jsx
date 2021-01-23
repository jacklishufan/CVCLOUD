import React,{Component} from 'react'
import '../asset/css/timeline.css'

const lineWidth = 100;
const TransitionLine = (lineWidth)=> <svg height="5" width={lineWidth}>
    <line x1="0" y1="0" x2={lineWidth} y2="0" style={{stroke: "#004165", strokeWidth: 5}}/>
    Sorry, your browser does not support inline SVG.
</svg>

const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"]


const InfoCard = (idx,ele)=>{
    const dateTime = ele.date.split('-');
    const month = months[parseInt(dateTime[1])]
    return<React.Fragment>
        {ele.short?TransitionLine(70):TransitionLine(100)}
        <div className="event1">

        <div className={idx & 1 ?"event1Bubble": "event2Bubble"}>
            <div className="eventTime">
                <div className="DayDigit">{dateTime[2]}</div>
                <div className="Day">
                    {month}
                    <div className="MonthYear">{dateTime[0]}</div>
                </div>
            </div>
            <div className="eventTitle">{ele.eventTitle}</div>
        </div>
        {/*<div className="eventAuthor">by Youri Nelson</div>*/}
        <svg height="20" width="20">
            <circle cx="10" cy="11" r="5" fill={ele.color || "#004165"}/>
        </svg>
        {/*<div className="time">9 : 27 AM</div>*/}

    </div></React.Fragment>
}
const defaultItem = {
    date: "2020-02-12",
    eventTitle: "title",
    color:"red"
}
export default class Timeline extends Component{
    state={
        itemList:[
            {
                date: "2020-01-30",
                eventTitle: "First confirmed case",
                color: "red"
            },
            {
                date: "2020-02-01",
                eventTitle: "First airlift from Wuhan, China",
                color: "red"
            },
            {
                date: "2020-03-06",
                eventTitle: "International passenger screenings at airports",
                color: "blue"
            },
            {
                date: "2020-03-10",
                eventTitle:"First airlift from Iran",
                color: "red"
            },
            {
                date: "2020-03-12",
                eventTitle: "First confirmed death",
                color: "red"
            },
            {
                date: "2020-03-13",
                eventTitle: "Suspension of non-essential traveller visas",
                color: "blue"
            },
            {
                date: "2020-03-15",
                eventTitle: "100 confirmed cases",
                color: "red"
            },
            {
                date: "2020-03-22",
                eventTitle: "One day Janta Curfew ",
                color: "red"
            },
            {
                date: "2020-03-22",
                eventTitle: "Passenger air travel suspended till further notice",
                short:1,
                color: "blue"
            },
            {
                date: "2020-03-22",
                eventTitle: "Passenger air travel suspended till further notice",
                short: 1,
                color: "blue"
            },
            {
                date: "2020-03-22",
                eventTitle: "Final airlift from Italy ",
                short: 1,
                color: "blue"
            },
            {
                date: "2020-03-22",
                eventTitle: "Nationwide lock-down imposed",
                short: 1,
                color: "red"
            },
            {
                date: "2020-03-28",
                eventTitle: "1, 000 confirmed cases",
                color: "red"
            },
            {
                date: "2020-03-30",
                eventTitle: "100 confirmed recoveries",
                color: "red"
            },
            {
                date: "2020-04-05",
                eventTitle: "100 confirmed deaths",
                color: "red"
            },
            {
                date: "2020-04-14",
                eventTitle: "10,000 confirmed cases",
                color: "red"
            },
            {
                date: "2020-04-14",
                eventTitle: "Nationwide lock-down extended",
                short: 1,
                color: "red"
            },
            {
                date: "2020-04-29",
                eventTitle: "30,000 confirmed cases",
                short: 0,
                color: "red"
            },
            {
                date: "2020-05-01",
                eventTitle: "Lock-down further extended ",
                short: 0,
                color: "red"
            },
            {
                date: "2020-05-17",
                eventTitle: "Lock-down further extended ",
                short: 0,
                color: "red"
            },
            {
                date: "2020-05-27",
                eventTitle: "150,000 confirmed cases ",
                short: 0,
                color: "red"
            },
            ]
    }
    render(){
        return <div className="TimelineContainer">
            <div className="Timeline">

                <svg height="5" width="200">
                    <line x1="0" y1="0" x2="200" y2="0" style={{stroke:"#004165",strokeWidth:5}}/>
                    Sorry, your browser does not support inline SVG.
                </svg>
                {
                    this.state.itemList.map((ele,idx)=>InfoCard(idx,ele)
                    )
                }


                <svg height="5" width="50">
                    <line x1="0" y1="0" x2="50" y2="0" style={{stroke:"#004165",strokeWidth:5}}/>
                    Sorry, your browser does not support inline SVG.
                </svg>

                <div className="now">
                    NOW
                </div>


                <svg height="5" width="150">
                    <line x1="0" y1="0" x2="150" y2="0" style={{stroke:"rgba(162, 164, 163, 0.37)",strokeWidth:5}}/>
                    Sorry, your browser does not support inline SVG.
                </svg>
                <div className="event3 futureGray ">
                    <div className="event1Bubble futureOpacity">
                        <div className="eventTime">
                            <div className="DayDigit">??</div>
                            <div className="Day">
                                ???
                                <div className="MonthYear">?????</div>
                            </div>
                        </div>
                        <div className="eventTitle">Pandemic Ends</div>
                    </div>
                    <svg height="20" width="20">
                        <circle cx="10" cy="11" r="5" fill="rgba(162, 164, 163, 0.37)"/>
                    </svg>
                </div>
                <svg height="5" width="50">
                    <line x1="0" y1="0" x2="50" y2="0" style={{stroke:"#004165",strokeWidth:5}}/>
                </svg>
                <svg height="20" width="42">
                    <line x1="1" y1="0" x2="1" y2="20" style={{stroke:"#004165",strokeWidth:2}}/>
                    <circle cx="11" cy="10" r="3" fill="#004165"/>
                    <circle cx="21" cy="10" r="3" fill="#004165"/>
                    <circle cx="31" cy="10" r="3" fill="#004165"/>
                    <line x1="41" y1="0" x2="41" y2="20" style={{stroke:"#004165",strokeWidth:2}}/>
                </svg>

            </div>
        </div>
    }
}

