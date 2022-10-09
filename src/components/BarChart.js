import React, { Component, PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

class BarChartEx extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Day 1', uv: 4000},
                {name: 'Day 2', uv: 3000},
                {name: 'Day 3', uv: 2000},
                {name: 'Day 4', uv: 2780},
                {name: 'Day 5', uv: 1890},
                {name: 'Day 6', uv: 2390},
                {name: 'Day 7', uv: 3490},
                {name: 'Day 8', uv: 6490},
                {name: 'Day 9', uv: 4490},
                {name: 'Day 10', uv: 2490},
            ]
        }
    }
    render() {
        const {data} =  this.state;

        return (
            <ResponsiveContainer className="barchart" height={380}>
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid  />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        )
    }
}
export default BarChartEx;