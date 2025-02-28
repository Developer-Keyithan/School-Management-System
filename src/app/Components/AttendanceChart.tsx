'use client'

import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Mon',
        Present: 90,
        Absent: 10,
    },
    {
        name: 'Tue',
        Present: 83,
        Absent: 17,
    },
    {
        name: 'Wed',
        Present: 93,
        Absent: 7,
    },
    {
        name: 'Thu',
        Present: 90,
        Absent: 10,
    },
    {
        name: 'Fri',
        Present: 77,
        Absent: 23,
    }
];

const AttendanceChart = () => {
    return (
        <div className='bg-white rounded-lg p-4 h-full'>
            <div className=" flex items-center justify-between">
                <h1 className='text-lg font-semibold'>Attendance</h1>
                <Image src='/moreDark.png' alt='' width={20} height={20} />
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    barSize={20}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd' />
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tick={{ fill: '#9ca3af' }}
                        tickLine={false}
                    />
                    <YAxis
                        axisLine={false}
                        tick={{ fill: '#9ca3af' }}
                        tickLine={false}
                    />
                    <Tooltip contentStyle={{ borderRadius: '10px', borderColor: 'lightblue' }} />
                    <Legend
                        align='left'
                        verticalAlign='top'
                        wrapperStyle={{ paddingTop: '20px', paddingBottom: '40px' }}
                    />
                    <Bar
                        dataKey="Present"
                        fill="#e9d5ff"
                        legendType='circle'
                        radius={[10, 10, 0, 0]}
                    />
                    <Bar
                        dataKey='Absent'
                        fill="#bfdbfe"
                        legendType='circle'
                        radius={[10, 10, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default AttendanceChart