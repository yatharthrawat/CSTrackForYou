import React from 'react';
import './App.css';
import {HorizontalBar} from 'react-chartjs-2';
import Data from './Data';

//Pulling all data for each track and all CS courses from Data.json
const CourseList = Data.CourseList;
const CSE_list = Data.CSE_list;
const CGV_list = Data.CGV_list;
const DIS_list = Data.DIS_list;
const ML_list = Data.ML_list;
const PL_list = Data.PL_list;
const FCS_list = Data.FCS_list;
const SE_list = Data.SE_list;
const SEC_list = Data.SEC_list;
const SP_list = Data.SP_list;
//Pulling all data for required number of courses from Data.json
const CSE_requiredNoCourses = Data.CSE_requiredNoCourses;
const CGV_requiredNoCourses = Data.CGV_requiredNoCourses;
const DIS_requiredNoCourses = Data.DIS_requiredNoCourses;
const FCS_requiredNoCourses = Data.FCS_requiredNoCourses;
const SE_requiredNoCourses = Data.SE_requiredNoCourses;
const SP_requiredNoCourses = Data.SP_requiredNoCourses;
const ML_requiredNoCourses = Data.ML_requiredNoCourses;
const PL_requiredNoCourses = Data.PL_requiredNoCourses;
const SEC_requiredNoCourses = Data.SEC_requiredNoCourses;


// Creates Button with the name of the Course e.g "CS 307"
function Course(props) {

    return (
        <button className={props.style} onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class ButtonInterface extends React.Component {
    constructor(props) {
        super(props);
        this.state =
            {
                CSE: 0,
                CGV: 0,
                DIS: 0,
                FCS: 0,
                SE: 0,
                SP: 0,
                ML: 0,
                PL: 0,
                SEC: 0,
                ButtonPressed: [false, false, false, false, false, false,
                    false, false, false, false, false, false,
                    false, false, false, false, false, false,
                    false, false, false, false, false, false,
                    false, false, false, false, false, false,
                    false, false, false, false, false],
                ButtonBefore: "button",
                ButtonAfter: "button_after"


            }
    }

    handleClick(value) {    // Method called for Onclick Method for all Course Button (All Button except "Reset")
        // Increases or decreases by 1 depending if the button has previously been pressed before.

        let index = 0; // index required to be switched in the ButtonPressed Array, index value is the same as the index value in CourseList Array
        for (let i = 0; i < CourseList.length; i++) {
            if (value === CourseList[i]) {
                index = i;
            }
        }

        let ButtonEvent = this.state.ButtonPressed;  //Temporary array created from state that stores if the Button was pressed before

        // "For" loops for each track, checks if course fulfills the particular tracks requirement and increases or decreases the Graph by changing "State"
        for (let i = 0; i < CSE_list.length; i++) {
            if (value === CSE_list[i]) {
                if (!ButtonEvent[index]) {
                    this.setState((prevState, props) => ({
                        CSE: prevState.CSE + 1
                    }));
                }
                else {
                    this.setState((prevState, props) => ({
                        CSE: prevState.CSE - 1
                    }));
                }

            }
        }
        for (let i = 0; i < CGV_list.length; i++) {
            if (value === CGV_list[i]) {
                if (!ButtonEvent[index]) {
                    this.setState((prevState, props) => ({
                        CGV: prevState.CGV + 1
                    }));
                }
                else {
                    this.setState((prevState, props) => ({
                        CGV: prevState.CGV - 1
                    }));
                }
            }
        }

        for (let i = 0; i < DIS_list.length; i++) {
            if (value === DIS_list[i]) {
                if (!ButtonEvent[index]) {
                    this.setState((prevState, props) => ({
                        DIS: prevState.DIS + 1
                    }));
                }
                else {
                    this.setState((prevState, props) => ({
                        DIS: prevState.DIS - 1
                    }));
                }
            }
        }


        for (let i = 0; i < FCS_list.length; i++) {
            if (value === FCS_list[i]) {
                if (!ButtonEvent[index]) {
                    this.setState((prevState, props) => ({
                        FCS: prevState.FCS + 1
                    }));
                }
                else {
                    this.setState((prevState, props) => ({
                        FCS: prevState.FCS - 1
                    }));
                }
            }
        }
        for (let i = 0; i < SE_list.length; i++) {
            if (value === SE_list[i]) {
                if (!ButtonEvent[index]) {
                    this.setState((prevState, props) => ({
                        SE: prevState.SE + 1
                    }));
                }
                else {
                    this.setState((prevState, props) => ({
                        SE: prevState.SE - 1
                    }));
                }
            }
        }
        for (let i = 0; i < SEC_list.length; i++) {
            if (value === SEC_list[i]) {
                if (!ButtonEvent[index]) {
                    this.setState((prevState, props) => ({
                        SEC: prevState.SEC + 1
                    }));
                }
                else {
                    this.setState((prevState, props) => ({
                        SEC: prevState.SEC - 1
                    }));
                }
            }
        }
        for (let i = 0; i < ML_list.length; i++) {
            if (value === ML_list[i]) {
                if (!ButtonEvent[index]) {
                    this.setState((prevState, props) => ({
                        ML: prevState.ML + 1
                    }));
                }
                else {
                    this.setState((prevState, props) => ({
                        ML: prevState.ML - 1
                    }));
                }
            }
        }
        for (let i = 0; i < PL_list.length; i++) {
            if (value === PL_list[i]) {
                if (!ButtonEvent[index]) {
                    this.setState((prevState, props) => ({
                        PL: prevState.PL + 1
                    }));
                }
                else {
                    this.setState((prevState, props) => ({
                        PL: prevState.PL - 1
                    }));
                }
            }
        }
        for (let i = 0; i < SP_list.length; i++) {
            if (value === SP_list[i]) {
                if (!ButtonEvent[index]) {
                    this.setState((prevState, props) => ({
                        SP: prevState.SP + 1
                    }));
                }
                else {
                    this.setState((prevState, props) => ({
                        SP: prevState.SP - 1
                    }));
                }
            }
        }

        //Updated Button Color
        ButtonEvent[index] = !ButtonEvent[index];
        this.setState({
            ButtonPressed: ButtonEvent
        });

    }

    handleReset() { // Resets everything graph values to zero and ButtonPress array to false
        this.setState(
            {
                CSE: 0,
                CGV: 0,
                DIS: 0,
                FCS: 0,
                SE: 0,
                SP: 0,
                ML: 0,
                PL: 0,
                SEC: 0,
                ButtonPressed:
                    [false, false, false, false, false, false,
                        false, false, false, false, false, false,
                        false, false, false, false, false, false,
                        false, false, false, false, false, false,
                        false, false, false, false, false, false,
                        false, false, false, false, false],
            });
    }

    renderCourse(i) { // Method that creates Button for each course and attaches onClick style decider props.
        return (
            <Course value={CourseList[i]}
                    style={!this.state.ButtonPressed[i] ? this.state.ButtonBefore : this.state.ButtonAfter}
                    onClick={() => this.handleClick(CourseList[i])}/>
        );
    }


    render() {
        var buttons = [];
        for (var i = 0; i < CourseList.length; i++) {
            buttons.push(this.renderCourse(i));
        }
        document.title = "CS Track For You";
        return (

            <div>
                <div>
                    <h1 className="App-title">CS Track for You</h1>
                </div>
                <div>
                    <Graph CSE={(this.state.CSE / CSE_requiredNoCourses) * 100}
                           CGV={(this.state.CGV / CGV_requiredNoCourses) * 100}
                           DIS={(this.state.DIS / DIS_requiredNoCourses) * 100}
                           FCS={(this.state.FCS / FCS_requiredNoCourses) * 100}
                           ML={(this.state.ML / ML_requiredNoCourses) * 100}
                           PL={(this.state.PL / PL_requiredNoCourses) * 100}
                           SEC={(this.state.SEC / SEC_requiredNoCourses) * 100}
                           SE={(this.state.SE / SE_requiredNoCourses) * 100}
                           SP={(this.state.SP / SP_requiredNoCourses) * 100}
                    />
                </div>
                <div>
                    <button className="reset" onClick={() => this.handleReset()}>
                        Reset
                    </button>
                </div>
                <div className="buttonrow">
                    {buttons}
                </div>

            </div>

        );
    }
}


class Graph extends React.Component {
    render() {
        //All the data that is being passed through HorizontalBar which is a React wrapper for Chart.js
        let data = {
            labels: ["Computational Science and Engineering Track",
                "Computer Graphics and Visualization Track",
                "Database and Information Systems Track",
                "Foundations of Computer Science Track",
                "Machine Intelligence Track",
                "Programming Language Track",
                "Security Track", "Software Engineering Track",
                "Systems Programming Track"],
            datasets: [
                {
                    fill: false,
                    borderColor: '#EC932F',
                    backgroundColor: '#EC932F',
                    pointBorderColor: '#EC932F',
                    pointBackgroundColor: '#EC932F',
                    pointHoverBackgroundColor: '#EC932F',
                    pointHoverBorderColor: '#EC932F',
                    label: "Track Completion",
                    fillColor: "rgba(243,151,32,1)",
                    highlightFill: "rgba(221,125,8,1)",
                    data: [this.props.CSE, this.props.CGV,
                        this.props.DIS, this.props.FCS,
                        this.props.ML, this.props.PL,
                        this.props.SEC, this.props.SE, this.props.SP]
                }
            ]
        };

        const options = {
            scales: {
                xAxes: [
                    {
                        ticks: {
                            min: 0,
                            max: 100
                        }
                    }
                ]
            },
            legend: {
                display: false,
                position: 'bottom'
            }
        };

        return <HorizontalBar data={data} options={options} height={380} width={1200}/>;
    }
}


export default ButtonInterface;