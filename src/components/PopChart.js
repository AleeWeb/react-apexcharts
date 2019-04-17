import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class PopChart extends Component {
    constructor(props){
        super(props);
        this.state = {
            options: {  
                chart: {
                    background: '#f4f4f4',
                    foreColor: '#333'
            },
            xaxis: {
                categories: [
                    'New York',
                    'Chicago',
                    'Los Angeles',
                    'Houston',
                    'Philadelphia',
                    'Phoenix',
                    'San Antonio',
                    'San Diego',
                    'Dallas',
                    'San Jose'
                ]
                 }
            },
            series:[
                {
                    name: 'Population',
                    data: [
                        51190083,
                        45504057,
                        39718837,
                        18018018,
                        32632632,
                        55555558,
                        8550405,
                        3971883,
                        18018018,
                        32632632
                    ]

                }

            ]
        }
    }
    render(){
        return(
                <>
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="bar"
                    height="450"
                    width="100%"
                />

                <button>Horizontal</button>
                </>
        )
    }
}

export default PopChart;
