import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'Mon', expenses: 30 },
  { day: 'Tue', expenses: 20 },
  { day: 'Wed', expenses: 40 },
  { day: 'Thu', expenses: 35 },
  { day: 'Fri', expenses: 50 },
  { day: 'Sat', expenses: 60 },
  { day: 'Sun', expenses: 25 },
];

const ExpenseBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="expenses" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ExpenseBarChart;
