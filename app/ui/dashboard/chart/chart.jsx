'use client';

import styles from './chart.module.css';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Page A',
    visit: 4000,
    click: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    visit: 3000,
    click: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    visit: 2000,
    click: 8800,
    amt: 2290,
  },
  {
    name: 'Page D',
    visit: 2780,
    click: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    visit: 1890,
    click: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    visit: 2390,
    click: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    visit: 3490,
    click: 4300,
    amt: 2100,
  },
];
const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly Recap</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
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
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ background: '#151c2c', border: 'none' }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="visit"
            stroke="#8884d8"
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="click"
            stroke="#82ca9d"
            strokeDasharray="3 4 5 2"
          />
        </LineChart>
      </ResponsiveContainer>
      );
    </div>
  );
};

export default Chart;
