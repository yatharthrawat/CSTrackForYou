import React from 'react';
import './App.css';


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
    "CS 490",
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

function Course(props) {
    return (
        <button className="course">
            {props.value}
        </button>
    );
}


class ButtonInterface extends React.Component{
    renderCourse(i) {
        return (
            <Course value={courselist[i]}
            />
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
                <div className="Graph">
                <Graph/>
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
        this.state={CSE:100,CGV:50,DIS:5,FCS:5,ML:13,PL:43,SEC:0,SE:0,SP:0};
    }

  render() {

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
                  label: "Track Completion",
                  fillColor: "rgba(243,151,32,1)",
                  highlightFill: "rgba(221,125,8,1)",
                  data: [this.state.CSE, this.state.CGV,
                      this.state.DIS, this.state.FCS,
                      this.state.ML, this.state.PL,
                      this.state.SEC,this.state.SE,this.state.SP]
              }

          ]
      };


      let BarChart = require("react-chartjs").Bar;

      return (
          <BarChart height="600" width="1200" data={data}/>);
  }
}



export default ButtonInterface;