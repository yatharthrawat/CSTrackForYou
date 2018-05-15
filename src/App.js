import React from 'react';
import './App.css';

class App extends React.Component {
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


      let options= {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }],
                  xAxes: [{
                  ticks: {
                      fontSize: 1000
                  }
              }]
          }
      }
      let BarChart = require("react-chartjs").Bar;

      return (<div>
          <br/><br/><br/><br/>
          <BarChart height="600" width="600" data={data} options={options}/>
      </div>);
  }
}

export default App;