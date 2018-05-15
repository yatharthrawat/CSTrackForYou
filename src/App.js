import React from 'react';
import './App.css';
import {HorizontalBar} from 'react-chartjs-2';

const courselist=[
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

const CSE_list=[
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
const CGV_list=[
    "CS 334",
    "CS 314",
    "CS 381",
    "CS 352",
    "CS 354",
    "CS 422",
    "CS 434",
    "CS 448",
    "CS 471",];
const DIS_list=[
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
    "CS 490- Senior Project",
    "CS 497"];
const FCS_list=[
    "CS 352",
    "CS 381",
    "CS 314",
    "CS 334",
    "CS 355",
    "CS 448",
    "CS 456",
    "CS 471",
    "CS 483"];
const ML_list=[
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
const PL_list=[
    "CS 352",
    "CS 354",
    "CS 456",
    "CS 307",
    "CS 353",
    "CS 381",
    "CS 422",
    "CS 483"];
const SE_list=[
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
const SEC_list=[
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
const SP_list=[
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

var CSE=3;
var CGV=3;
var DIS=3;
var FCS=3;
var SE=3;
var SP=3;
var ML=3;
var PL=3;
var SEC=3;

function Course(props) {

    function handleClick(){
        console.log(props.value);
    }
    return (
        <button className="course" onClick={handleClick}>
            {props.value}
        </button>
    );
}



class ButtonInterface extends React.Component{

    renderCourse(i) {
        return (
            <Course value={courselist[i]}/>
        );
    }
    render(){
        var buttons=[];
        for(var i=0;i<courselist.length;i++){
            buttons.push(this.renderCourse(i));
        }
        return(
            <div>
                <div>
                <h1 className="App-title">CS Track for You</h1>
                </div>
                <div>
                <Graph CSE={(CSE/CSE_list.length)*100} CGV={(CGV/CGV_list.length)*100} DIS={(DIS/DIS_list.length)*100} FCS={(FCS/FCS_list.length)*100}
                       ML={(ML/ML_list.length)*100} PL={(PL/PL_list.length)*100} SEC={(SEC/SEC_list.length)*100} SE={(SE/SE_list.length)*100}
                       SP={(SP/SP_list.length)*100}
                />
                </div>
                <div className="buttonrow">
                    {buttons}
                </div>

            </div>

        );
    }
}





class Graph extends React.Component {
    constructor(props){
        super(props);
    }

  render() {
        console.log(this.props.CSE +this.props.CGV+
            this.props.DIS+ this.props.FCS+
            this.props.ML+ this.props.PL+
            this.props.SEC+this.props.SE+this.props.SP);

        //All the data that is being passed through HorizontalBar which is a React wrapper for Chart.js
        let data = {
          labels: ["Computational Science and Engineering Track",
              "Computer Graphics and Visualization Track",
              "Database and Information Systems Track",
              "Foundations of Computer Science Track",
              "Machine Intelligence Track",
              "Programming Language Track",
              "Security Track","Software Engineering Track",
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
                      this.props.SEC,this.props.SE,this.props.SP]
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

      return <HorizontalBar data={data} options={options}  />;
  }
}



export default ButtonInterface;