import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ChartExample from './components/LineChart';
import AreaChartEx from './components/AreaChart';
import BarChartEx from './components/BarChart';
import PieChartEx from './components/PieChart';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1> LineChart</h1>
    <ChartExample />
    <h1> AreaChart</h1>
    <AreaChartEx />
    <h1>BarChart</h1>
    <BarChartEx />
    <h1>PieChart</h1>
    <PieChartEx />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
