import React from 'react';
import './App.css';
import {HorizontalBar} from 'react-chartjs-2';

const courselist = [
    "MA 266",
    "MA 366",
    "CS 314",
    "CS 307",
    "CS 334",
    "CS 352",
    "CS 354",
    "CS 381",
    "CS 434",
    "CS 348",
    "CS 448",
    "CS 471",
    "CS 514",
    "CS 515",
    "CS 497",
    "CS 456",
    "CS 483",
    "CS 422",
    "CS 373",
    "CS 473",
    "CS 355",
    "CS 426",
    "CS 478",
    "CS 390-WAP",
    "CS 497",
    "STAT 416",
    "MA 416",
    "STAT 512",
    "CS 353",
    "CS 408",
    "CS 489",
    "CS 490-DS0",
    "CS 490-SWS",
    "CS 407",
    "CS 390-VRA",
    "CS 490-Senior Project"];

const CSE_list = [
    "MA 266",
    "MA 366",
    "CS 314",
    "CS 307",
    "CS 334",
    "CS 352",
    "CS 354",
    "CS 381",
    "CS 434",
    "CS 348",
    "CS 448",
    "CS 471",
    "CS 490-Senior Project",
    "CS 514",
    "CS 515",
    "CS 497",
    "CS 456",
    "CS 483"];
const CGV_list = [
    "CS 334",
    "CS 314",
    "CS 381",
    "CS 352",
    "CS 354",
    "CS 422",
    "CS 434",
    "CS 448",
    "CS 471",];
const DIS_list = [
    "CS 348",
    "CS 381",
    "CS 448",
    "CS 373",
    "CS 473",
    "CS 352",
    "CS 354",
    "CS 355",
    "CS 426",
    "CS 422",
    "CS 471",
    "CS 478",
    "CS 490-Senior Project",
    "CS 497"];
const FCS_list = [
    "CS 352",
    "CS 381",
    "CS 314",
    "CS 334",
    "CS 355",
    "CS 448",
    "CS 456",
    "CS 471",
    "CS 483"];
const ML_list = [
    "CS 373",
    "CS 381",
    "CS 471",
    "CS 473",
    "STAT 416",
    "MA 416",
    "STAT 512",
    "CS 348",
    "CS 352",
    "CS 448",
    "CS 456",
    "CS 483"];
const PL_list = [
    "CS 352",
    "CS 354",
    "CS 456",
    "CS 307",
    "CS 353",
    "CS 381",
    "CS 422",
    "CS 483"];
const SE_list = [
    "CS 307",
    "CS 352",
    "CS 354",
    "CS 408",
    "CS 407",
    "CS 348",
    "CS 353",
    "CS 373",
    "CS 381",
    "CS 422",
    "CS 426",
    "CS 448",
    "CS 456",
    "CS 473",
    "CS 490-DS0",
    "CS 390-VRA",
    "CS 390-WAP"];
const SEC_list = [
    "CS 354",
    "CS 355",
    "CS 426",
    "CS 307",
    "CS 348",
    "CS 352",
    "CS 353",
    "CS 373",
    "CS 381",
    "CS 408",
    "CS 422",
    "CS 448",
    "CS 456",
    "CS 489",
    "CS 490-DS0",
    "CS 490-SWS"];
const SP_list = [
    "CS 352",
    "CS 354",
    "CS 422",
    "CS 307",
    "CS 334",
    "CS 353",
    "CS 381",
    "CS 426",
    "CS 448",
    "CS 456",
    "CS 489",
    "CS 490DS0"];


function Course(props) {

    return (
        <button className="button" onClick={props.onClick}>
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
                SEC: 0
            };
    }

    handleClick(value) {
        for (let i = 0; i < CSE_list.length; i++) {
            if (value === CSE_list[i]) {
                this.setState((prevState, props) => ({
                    CSE: prevState.CSE + 1
                }));

            }
        }
        for (let i = 0; i < CGV_list.length; i++) {
            if (value === CGV_list[i]) {
                this.setState((prevState, props) => ({
                    CGV: prevState.CGV + 1
                }));
            }
        }

        for (let i = 0; i < DIS_list.length; i++) {
            if (value === DIS_list[i]) {
                this.setState((prevState, props) => ({
                    DIS: prevState.DIS + 1
                }));
            }
        }


        for (let i = 0; i < FCS_list.length; i++) {
            if (value === FCS_list[i]) {
                this.setState((prevState, props) => ({
                    FCS: prevState.FCS + 1
                }));
            }
        }
        for (let i = 0; i < SE_list.length; i++) {
            if (value === SE_list[i]) {
                this.setState((prevState, props) => ({
                    SE: prevState.SE + 1
                }));
            }
        }
        for (let i = 0; i < SEC_list.length; i++) {
            if (value === SEC_list[i]) {
                this.setState((prevState, props) => ({
                    SEC: prevState.SEC + 1
                }));
            }
        }
        for (let i = 0; i < ML_list.length; i++) {
            if (value === ML_list[i]) {
                this.setState((prevState, props) => ({
                    ML: prevState.ML + 1
                }));
            }
        }
        for (let i = 0; i < PL_list.length; i++) {
            if (value === PL_list[i]) {
                this.setState((prevState, props) => ({
                    PL: prevState.PL + 1
                }));
            }
        }
        for (let i = 0; i < SP_list.length; i++) {
            if (value === SP_list[i]) {
                this.setState((prevState, props) => ({
                    SP: prevState.SP + 1
                }));
            }
        }
    }

    handleReset() {
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
                SEC: 0
            });
    }

    renderCourse(i) {
        return (
            <Course value={courselist[i]} onClick={() => this.handleClick(courselist[i])}/>
        );
    }


    render() {
        var buttons = [];
        for (var i = 0; i < courselist.length; i++) {
            buttons.push(this.renderCourse(i));
        }
        return (
            <div>
                <div>
                    <h1 className="App-title">CS Track for You</h1>
                </div>
                <div>
                    <Graph CSE={(this.state.CSE / CSE_list.length) * 100} CGV={(this.state.CGV / CGV_list.length) * 100}
                           DIS={(this.state.DIS / DIS_list.length) * 100} FCS={(this.state.FCS / FCS_list.length) * 100}
                           ML={(this.state.ML / ML_list.length) * 100} PL={(this.state.PL / PL_list.length) * 100}
                           SEC={(this.state.SEC / SEC_list.length) * 100} SE={(this.state.SE / SE_list.length) * 100}
                           SP={(this.state.SP / SP_list.length) * 100}
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

        return <HorizontalBar data={data} options={options} height={420} width={1200}/>;
    }
}


export default ButtonInterface;