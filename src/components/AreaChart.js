import React, { Component, PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

class AreaChartEx extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Day 1', uv: 4000, amt: 2400},
                {name: 'Day 2', uv: 3000, amt: 2210},
                {name: 'Day 3', uv: 2000, amt: 2290},
                {name: 'Day 4', uv: 2780, amt: 2000},
                {name: 'Day 5', uv: 1890, amt: 2181},
                {name: 'Day 6', uv: 2390, amt: 2500},
                {name: 'Day 7', uv: 3490, amt: 2100},
              ]
        }
    }
    render() {
        const {data} = this.state;

        return (
            <ResponsiveContainer className="areachart" height={380}>
            <AreaChart
                width={500}
                height={500}
                data={data}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}
            >
                <CartesianGrid strokeDasharray="0 0 " />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
            </ResponsiveContainer>
        );
    }
}

export default AreaChartEx;

