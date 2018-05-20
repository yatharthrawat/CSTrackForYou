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

const CSE_requiredNoCoursesElective = Data.CSE_requiredNoCoursesElective;
const CGV_requiredNoCoursesElective = Data.CGV_requiredNoCoursesElective;
const DIS_requiredNoCoursesElective = Data.DIS_requiredNoCoursesElective;
const FCS_requiredNoCoursesElective = Data.FCS_requiredNoCoursesElective;
const SE_requiredNoCoursesElective = Data.SE_requiredNoCoursesElective;
const SP_requiredNoCoursesElective = Data.SP_requiredNoCoursesElective;
const ML_requiredNoCoursesElective = Data.ML_requiredNoCoursesElective;
const PL_requiredNoCoursesElective = Data.PL_requiredNoCoursesElective;
const SEC_requiredNoCoursesElective = Data.SEC_requiredNoCoursesElective;

const CSE_requiredNoCoursesCore = Data.CSE_requiredNoCoursesCore;
const CGV_requiredNoCoursesCore = Data.CGV_requiredNoCoursesCore;
const DIS_requiredNoCoursesCore = Data.DIS_requiredNoCoursesCore;
const FCS_requiredNoCoursesCore = Data.FCS_requiredNoCoursesCore;
const SE_requiredNoCoursesCore = Data.SE_requiredNoCoursesCore;
const SP_requiredNoCoursesCore = Data.SP_requiredNoCoursesCore;
const ML_requiredNoCoursesCore = Data.ML_requiredNoCoursesCore;
const PL_requiredNoCoursesCore = Data.PL_requiredNoCoursesCore;
const SEC_requiredNoCoursesCore = Data.SEC_requiredNoCoursesCore;

const CSE_listCore = Data.CSE_listCore;
const CGV_listCore = Data.CGV_listCore;
const DIS_listCore = Data.DIS_listCore;
const ML_listCore = Data.ML_listCore;
const PL_listCore = Data.PL_listCore;
const FCS_listCore = Data.FCS_listCore;
const SE_listCore = Data.SE_listCore;
const SEC_listCore = Data.SEC_listCore;
const SP_listCore = Data.SP_listCore;

let CSE_Core=0;
let CSE_Elective=0;
let CGV_Core=0;
let CGV_Elective=0;
let DIS_Core=0;
let DIS_Elective=0;
let FCS_Core=0;
let FCS_Elective=0;
let ML_Core=0;
let ML_Elective=0;
let PL_Core=0;
let PL_Elective=0;
let SP_Core=0;
let SP_Elective=0;
let SE_Core=0;
let SE_Elective=0;
let SEC_Core=0;
let SEC_Elective=0;

let CoursesSelected=[];  //Course Selected List Maintained

function empty(){
    CoursesSelected=[];
}

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
                let isElective=true;
                for (let j = 0; j <CSE_listCore.length ; j++) {

                    if(value===CSE_listCore[j]){    //Checks if it is part of CS core courses stops increasing the graph if core courses have already reached
                        isElective=false;
                        if(!ButtonEvent[index]&&CSE_Core<CSE_requiredNoCoursesCore){
                            CSE_Core++;
                            CoursesSelected.push(value);
                        }

                        else if(ButtonEvent[index]&&CSE_Core>0){
                            for (let k = 0; k <CoursesSelected.length ; k++) {
                                if(value===CoursesSelected[k]){
                                    CSE_Core--;
                                    let toBeRemoved = CoursesSelected.indexOf(value);
                                    if (index > -1) {
                                        CoursesSelected.splice(toBeRemoved, 1);
                                        break;
                                    }
                                }
                            }

                        }

                    }

                }
                if(isElective){  //Same done for elective as is done for Core Courses
                    if(!ButtonEvent[index]&&CSE_Elective<CSE_requiredNoCoursesElective){
                        CSE_Elective++;
                        CoursesSelected.push(value);
                    }
                    else if(ButtonEvent[index]&&CSE_Elective>0){
                        for (let k = 0; k <CoursesSelected.length ; k++) {
                            if(value===CoursesSelected[k]){
                                CSE_Elective--;
                                let toBeRemoved = CoursesSelected.indexOf(value);
                                if (index > -1) {
                                    CoursesSelected.splice(toBeRemoved, 1);
                                    break;
                                }
                            }
                        }
                    }
                }
                let finalValue=CSE_Core+CSE_Elective;
                this.setState({
                    CSE: finalValue
                });
            }
        }



        for (let i = 0; i < CGV_list.length; i++) {
            if (value === CGV_list[i]) {
                let isElective=true;
                for (let j = 0; j <CGV_listCore.length ; j++) {

                    if(value===CGV_listCore[j]){    //Checks if it is part of CS core courses stops increasing the graph if core courses have already reached
                        isElective=false;
                        if(!ButtonEvent[index]&&CGV_Core<CGV_requiredNoCoursesCore){
                            CGV_Core++;
                            CoursesSelected.push(value);
                        }

                        else if(ButtonEvent[index]&&CGV_Core>0){
                            for (let k = 0; k <CoursesSelected.length ; k++) {
                                if(value===CoursesSelected[k]){
                                    CGV_Core--;
                                    let toBeRemoved = CoursesSelected.indexOf(value);
                                    if (index > -1) {
                                        CoursesSelected.splice(toBeRemoved, 1);
                                        break;
                                    }
                                }
                            }

                        }

                    }

                }
                if(isElective){  //Same done for elective as is done for Core Courses
                    if(!ButtonEvent[index]&&CGV_Elective<CGV_requiredNoCoursesElective){
                        CGV_Elective++;
                        CoursesSelected.push(value);
                    }
                    else if(ButtonEvent[index]&&CGV_Elective>0){
                        for (let k = 0; k <CoursesSelected.length ; k++) {
                            if(value===CoursesSelected[k]){
                                CGV_Elective--;
                                let toBeRemoved = CoursesSelected.indexOf(value);
                                if (index > -1) {
                                    CoursesSelected.splice(toBeRemoved, 1);
                                    break;
                                }
                            }
                        }
                    }
                }
                let finalValue=CGV_Core+CGV_Elective;
                this.setState({
                    CGV: finalValue
                });
            }
        }

        for (let i = 0; i < DIS_list.length; i++) {
            if (value === DIS_list[i]) {
                let isElective=true;
                for (let j = 0; j <DIS_listCore.length ; j++) {

                    if(value===DIS_listCore[j]){    //Checks if it is part of CS core courses stops increasing the graph if core courses have already reached
                        isElective=false;
                        if(!ButtonEvent[index]&&DIS_Core<DIS_requiredNoCoursesCore){
                            DIS_Core++;
                            CoursesSelected.push(value);
                        }

                        else if(ButtonEvent[index]&&DIS_Core>0){
                            for (let k = 0; k <CoursesSelected.length ; k++) {
                                if(value===CoursesSelected[k]){
                                    DIS_Core--;
                                    let toBeRemoved = CoursesSelected.indexOf(value);
                                    if (index > -1) {
                                        CoursesSelected.splice(toBeRemoved, 1);
                                        break;
                                    }
                                }
                            }

                        }

                    }

                }
                if(isElective){  //Same done for elective as is done for Core Courses
                    if(!ButtonEvent[index]&&DIS_Elective<DIS_requiredNoCoursesElective){
                        DIS_Elective++;
                        CoursesSelected.push(value);
                    }
                    else if(ButtonEvent[index]&&DIS_Elective>0){
                        for (let k = 0; k <CoursesSelected.length ; k++) {
                            if(value===CoursesSelected[k]){
                                DIS_Elective--;
                                let toBeRemoved = CoursesSelected.indexOf(value);
                                if (index > -1) {
                                    CoursesSelected.splice(toBeRemoved, 1);
                                    break;
                                }
                            }
                        }
                    }
                }
                let finalValue=DIS_Core+DIS_Elective;
                this.setState({
                    DIS: finalValue
                });
            }
        }


        for (let i = 0; i < FCS_list.length; i++) {
            if (value === FCS_list[i]) {
                let isElective=true;
                for (let j = 0; j <FCS_listCore.length ; j++) {

                    if(value===FCS_listCore[j]){    //Checks if it is part of CS core courses stops increasing the graph if core courses have already reached
                        isElective=false;
                        if(!ButtonEvent[index]&&FCS_Core<FCS_requiredNoCoursesCore){
                            FCS_Core++;
                            CoursesSelected.push(value);
                        }

                        else if(ButtonEvent[index]&&FCS_Core>0){
                            for (let k = 0; k <CoursesSelected.length ; k++) {
                                if(value===CoursesSelected[k]){
                                    FCS_Core--;
                                    let toBeRemoved = CoursesSelected.indexOf(value);
                                    if (index > -1) {
                                        CoursesSelected.splice(toBeRemoved, 1);
                                        break;
                                    }
                                }
                            }

                        }

                    }

                }
                if(isElective){  //Same done for elective as is done for Core Courses
                    if(!ButtonEvent[index]&&FCS_Elective<FCS_requiredNoCoursesElective){
                        FCS_Elective++;
                        CoursesSelected.push(value);
                    }
                    else if(ButtonEvent[index]&&FCS_Elective>0){
                        for (let k = 0; k <CoursesSelected.length ; k++) {
                            if(value===CoursesSelected[k]){
                                FCS_Elective--;
                                let toBeRemoved = CoursesSelected.indexOf(value);
                                if (index > -1) {
                                    CoursesSelected.splice(toBeRemoved, 1);
                                    break;
                                }
                            }
                        }
                    }
                }
                let finalValue=FCS_Core+FCS_Elective;
                this.setState({
                    FCS: finalValue
                });
            }
        }
        for (let i = 0; i < SE_list.length; i++) {
            if (value === SE_list[i]) {
                let isElective=true;
                for (let j = 0; j <SE_listCore.length ; j++) {

                    if(value===SE_listCore[j]){    //Checks if it is part of CS core courses stops increasing the graph if core courses have already reached
                        isElective=false;
                        if(!ButtonEvent[index]&&SE_Core<SE_requiredNoCoursesCore){
                            SE_Core++;
                            CoursesSelected.push(value);
                        }

                        else if(ButtonEvent[index]&&SE_Core>0){
                            for (let k = 0; k <CoursesSelected.length ; k++) {
                                if(value===CoursesSelected[k]){
                                    SE_Core--;
                                    let toBeRemoved = CoursesSelected.indexOf(value);
                                    if (index > -1) {
                                        CoursesSelected.splice(toBeRemoved, 1);
                                        break;
                                    }
                                }
                            }

                        }

                    }

                }
                if(isElective){  //Same done for elective as is done for Core Courses
                    if(!ButtonEvent[index]&&SE_Elective<SE_requiredNoCoursesElective){
                        SE_Elective++;
                        CoursesSelected.push(value);
                    }
                    else if(ButtonEvent[index]&&SE_Elective>0){
                        for (let k = 0; k <CoursesSelected.length ; k++) {
                            if(value===CoursesSelected[k]){
                                SE_Elective--;
                                let toBeRemoved = CoursesSelected.indexOf(value);
                                if (index > -1) {
                                    CoursesSelected.splice(toBeRemoved, 1);
                                    break;
                                }
                            }
                        }
                    }
                }
                let finalValue=SE_Core+SE_Elective;
                this.setState({
                    SE: finalValue
                });
            }
        }
        for (let i = 0; i < SEC_list.length; i++) {
            if (value === SEC_list[i]) {
                let isElective=true;
                for (let j = 0; j <SEC_listCore.length ; j++) {

                    if(value===SEC_listCore[j]){    //Checks if it is part of CS core courses stops increasing the graph if core courses have already reached
                        isElective=false;
                        if(!ButtonEvent[index]&&SEC_Core<SEC_requiredNoCoursesCore){
                            SEC_Core++;
                            CoursesSelected.push(value);
                        }

                        else if(ButtonEvent[index]&&SEC_Core>0){
                            for (let k = 0; k <CoursesSelected.length ; k++) {
                                if(value===CoursesSelected[k]){
                                    SEC_Core--;
                                    let toBeRemoved = CoursesSelected.indexOf(value);
                                    if (index > -1) {
                                        CoursesSelected.splice(toBeRemoved, 1);
                                        break;
                                    }
                                }
                            }

                        }

                    }

                }
                if(isElective){  //Same done for elective as is done for Core Courses
                    if(!ButtonEvent[index]&&SEC_Elective<SEC_requiredNoCoursesElective){
                        SEC_Elective++;
                        CoursesSelected.push(value);
                    }
                    else if(ButtonEvent[index]&&SEC_Elective>0){
                        for (let k = 0; k <CoursesSelected.length ; k++) {
                            if(value===CoursesSelected[k]){
                                SEC_Elective--;
                                let toBeRemoved = CoursesSelected.indexOf(value);
                                if (index > -1) {
                                    CoursesSelected.splice(toBeRemoved, 1);
                                    break;
                                }
                            }
                        }
                    }
                }
                let finalValue=SEC_Core+SEC_Elective;
                this.setState({
                    SEC: finalValue
                });
            }
        }
        for (let i = 0; i < ML_list.length; i++) {
            if (value === ML_list[i]) {
                let isElective=true;
                for (let j = 0; j <ML_listCore.length ; j++) {

                    if(value===ML_listCore[j]){    //Checks if it is part of CS core courses stops increasing the graph if core courses have already reached
                        isElective=false;
                        if(!ButtonEvent[index]&&ML_Core<ML_requiredNoCoursesCore){
                            ML_Core++;
                            CoursesSelected.push(value);
                        }

                        else if(ButtonEvent[index]&&ML_Core>0){
                            for (let k = 0; k <CoursesSelected.length ; k++) {
                                if(value===CoursesSelected[k]){
                                    ML_Core--;
                                    let toBeRemoved = CoursesSelected.indexOf(value);
                                    if (index > -1) {
                                        CoursesSelected.splice(toBeRemoved, 1);
                                        break;
                                    }
                                }
                            }

                        }

                    }

                }
                if(isElective){  //Same done for elective as is done for Core Courses
                    if(!ButtonEvent[index]&&ML_Elective<ML_requiredNoCoursesElective){
                        ML_Elective++;
                        CoursesSelected.push(value);
                    }
                    else if(ButtonEvent[index]&&ML_Elective>0){
                        for (let k = 0; k <CoursesSelected.length ; k++) {
                            if(value===CoursesSelected[k]){
                                ML_Elective--;
                                let toBeRemoved = CoursesSelected.indexOf(value);
                                if (index > -1) {
                                    CoursesSelected.splice(toBeRemoved, 1);
                                    break;
                                }
                            }
                        }
                    }
                }
                let finalValue=ML_Core+ML_Elective;
                this.setState({
                    ML: finalValue
                });
            }
        }
        for (let i = 0; i < PL_list.length; i++) {
            if (value === PL_list[i]) {
                let isElective=true;
                for (let j = 0; j <PL_listCore.length ; j++) {

                    if(value===PL_listCore[j]){    //Checks if it is part of CS core courses stops increasing the graph if core courses have already reached
                        isElective=false;
                        if(!ButtonEvent[index]&&PL_Core<PL_requiredNoCoursesCore){
                            PL_Core++;
                            CoursesSelected.push(value);
                        }

                        else if(ButtonEvent[index]&&PL_Core>0){
                            for (let k = 0; k <CoursesSelected.length ; k++) {
                                if(value===CoursesSelected[k]){
                                    PL_Core--;
                                    let toBeRemoved = CoursesSelected.indexOf(value);
                                    if (index > -1) {
                                        CoursesSelected.splice(toBeRemoved, 1);
                                        break;
                                    }
                                }
                            }

                        }

                    }

                }
                if(isElective){  //Same done for elective as is done for Core Courses
                    if(!ButtonEvent[index]&&PL_Elective<PL_requiredNoCoursesElective){
                        PL_Elective++;
                        CoursesSelected.push(value);
                    }
                    else if(ButtonEvent[index]&&PL_Elective>0){
                        for (let k = 0; k <CoursesSelected.length ; k++) {
                            if(value===CoursesSelected[k]){
                                PL_Elective--;
                                let toBeRemoved = CoursesSelected.indexOf(value);
                                if (index > -1) {
                                    CoursesSelected.splice(toBeRemoved, 1);
                                    break;
                                }
                            }
                        }
                    }
                }
                let finalValue=PL_Core+PL_Elective;
                this.setState({
                    PL: finalValue
                });
            }
        }
        for (let i = 0; i < SP_list.length; i++) {
            if (value === SP_list[i]) {
                let isElective=true;
                for (let j = 0; j <SP_listCore.length ; j++) {

                    if(value===SP_listCore[j]){    //Checks if it is part of CS core courses stops increasing the graph if core courses have already reached
                        isElective=false;
                        if(!ButtonEvent[index]&&SP_Core<SP_requiredNoCoursesCore){
                            SP_Core++;
                            CoursesSelected.push(value);
                        }

                        else if(ButtonEvent[index]&&SP_Core>0){
                            for (let k = 0; k <CoursesSelected.length ; k++) {
                                if(value===CoursesSelected[k]){
                                    SP_Core--;
                                    let toBeRemoved = CoursesSelected.indexOf(value);
                                    if (index > -1) {
                                        CoursesSelected.splice(toBeRemoved, 1);
                                        break;
                                    }
                                }
                            }

                        }

                    }

                }
                if(isElective){  //Same done for elective as is done for Core Courses
                    if(!ButtonEvent[index]&&SP_Elective<SP_requiredNoCoursesElective){
                        SP_Elective++;
                        CoursesSelected.push(value);
                    }
                    else if(ButtonEvent[index]&&SP_Elective>0){
                        for (let k = 0; k <CoursesSelected.length ; k++) {
                            if(value===CoursesSelected[k]){
                                SP_Elective--;
                                let toBeRemoved = CoursesSelected.indexOf(value);
                                if (index > -1) {
                                    CoursesSelected.splice(toBeRemoved, 1);
                                    break;
                                }
                            }
                        }
                    }
                }
                let finalValue=SP_Core+SP_Elective;
                this.setState({
                    SP: finalValue
                });
            }
        }

        //Updated Button Color
        ButtonEvent[index] = !ButtonEvent[index];
        this.setState({
            ButtonPressed: ButtonEvent
        });
        console.log(CoursesSelected);
    }

    handleReset() { // Resets everything graph values to zero and ButtonPress array to false
        CSE_Core=0;
        CSE_Elective=0;
        CGV_Core=0;
        CGV_Elective=0;
        DIS_Core=0;
        DIS_Elective=0;
        FCS_Core=0;
        FCS_Elective=0;
        ML_Core=0;
        ML_Elective=0;
        PL_Core=0;
        PL_Elective=0;
        SP_Core=0;
        SP_Elective=0;
        SE_Core=0;
        SE_Elective=0;
        SEC_Core=0;
        SEC_Elective=0;
        empty();

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
                        false, false, false, false, false]
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
        let buttons = [];
        for (let i = 0; i < CourseList.length; i++) {
            buttons.push(this.renderCourse(i));
        }
        document.title = "CS Track For You";
        return (

            <div>
                <div>
                    <h1>CS Track for You</h1>
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
                <div className="ButtonRow">
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