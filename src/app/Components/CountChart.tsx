'use client'

import Image from 'next/image';
import { FaFemale, FaMale } from 'react-icons/fa';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Girls',
        count: 100,
        fill: 'white',
    },
    {
        name: 'Girls',
        count: 45,
        fill: '#e9d5ff',
    },
    {
        name: 'Boys',
        count: 55,
        fill: '#bfdbfe',
    }
];

const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
};

const CountChart = () => {
    return (
        <div className="bg-white rounded-xl w-full h-full p-4">
            {/* TITLE */}
            <div className="flex justify-between items-center">
                <h1 className='text-lg font-semibold'>Students</h1>
                <Image src='/moreDark.png' alt='' width={20} height={20} />
            </div>
            {/* CHART */}
            <div className="relative w-full h-[75%]">
                <ResponsiveContainer>
                    <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
                        <RadialBar
                            background
                            dataKey="count"
                        />
                    </RadialBarChart>
                </ResponsiveContainer>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full'>
                    <FaMale className='text-4xl text-blue-200' />
                    <FaFemale className='text-4xl text-purple-200' />
                </div>
            </div>
            {/* BOTTOM */}
            <div className="flex justify-center gap-16">
                <div className=" flex flex-col justify-between items-center gap-1">
                    <div className="w-5 h-5 bg-blue-200 rounded-full" />
                    <h1>1,234</h1>
                    <h2 className='font-bold text-xs text-gray-400'>Boys (55%)</h2>
                </div>
                <div className=" flex flex-col justify-between items-center gap-1">
                    <div className="w-5 h-5 bg-purple-200 rounded-full" />
                    <h1>1,234</h1>
                    <h2 className='font-bold text-xs text-gray-400'>Girls (45%)</h2>
                </div>
            </div>
        </div>
    )
}

export default CountChart