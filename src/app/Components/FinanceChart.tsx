'use client'

import Image from "next/image"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Jan',
        Income: 4000,
        Expense: 2400,
    },
    {
        name: 'Fab',
        Income: 3000,
        Expense: 1398,
    },
    {
        name: 'Mar',
        Income: 2000,
        Expense: 9800,
    },
    {
        name: 'Apr',
        Income: 2780,
        Expense: 3908,
    },
    {
        name: 'May',
        Income: 1890,
        Expense: 4800,
    },
    {
        name: 'Jun',
        Income: 2390,
        Expense: 3800,
    },
    {
        name: 'Jul',
        Income: 3490,
        Expense: 4300,
    },
    {
        name: 'Agu',
        Income: 3490,
        Expense: 4300,
    },
    {
        name: 'Sep',
        Income: 3490,
        Expense: 4300,
    },
    {
        name: 'Oct',
        Income: 3490,
        Expense: 4300,
    },
    {
        name: 'Nov',
        Income: 3490,
        Expense: 4300,
    },
    {
        name: 'Dec',
        Income: 3490,
        Expense: 4300,
    },
];

const FinanceChart = () => {
    return (
        <div className='bg-white rounded-lg p-4 h-full'>
            <div className=" flex items-center justify-between">
                <h1 className='text-lg font-semibold'>Finance</h1>
                <Image src='/moreDark.png' alt='' width={20} height={20} />
            </div>
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
                    <CartesianGrid strokeDasharray="3 3" stroke='#ddd' />
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tick={{ fill: '#9ca3af' }}
                        tickLine={false}
                        tickMargin={10}
                    />
                    <YAxis
                        axisLine={false}
                        tick={{ fill: '#9ca3af' }}
                        tickLine={false}
                        tickMargin={20}
                    />
                    <Tooltip contentStyle={{ borderRadius: '10px', borderColor: 'lightblue' }} />
                    <Legend
                        align='center'
                        verticalAlign='top'
                        wrapperStyle={{ paddingTop: '10px', paddingBottom: '30px' }}
                    />
                    <Line
                        type="monotone"
                        dataKey="Expense"
                        stroke="#e9d5ff"
                        strokeWidth={5}
                        activeDot={{ r: 8 }}
                    />
                    <Line
                        type="monotone"
                        dataKey="Income"
                        stroke="#bfdbfe"
                        strokeWidth={5}
                        activeDot={{ r: 8 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default FinanceChart