import ReactApexChart from "react-apexcharts";
import React from 'react';
import './Chartstyle.css'

export default class ApexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [44, 55, 41, 17, 15],
        options: {
          chart: {
            type: 'donut',
            
          },
          responsive: [{
            breakpoint: 1000,
            options: {
              chart: {
                
                
                
              },
              legend: {
                position: 'top',
                width:300
              }
            }
          }]
        },
      
      
      };
    }

  

    render() {
      return (
        

  <div id="chart"  className=" chartdiv11" >
<ReactApexChart options={this.state.options} series={this.state.series} type="donut"   className="newchardt" />
</div>


      );
    }
  }

//   const domContainer = document.querySelector('#app');
//   ReactDOM.render(React.createElement(ApexChart), domContainer);