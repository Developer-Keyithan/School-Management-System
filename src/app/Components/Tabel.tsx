'use client'
import React from 'react';

const Table = ({
    columns,
    data
}: {
    columns: { header: string, accessor: string, className?: string }[];
    data: any[]
}) => {
    return (
        <table className='w-full mt-4'>
            <thead>
                <tr className="text-left text-gray-500 text-sm">
                    {columns.map(col => (
                        <th key={col.accessor} className={col.className}>{col.header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index} className='border-b-[1px] border-gray-200 even:bg-slate-50 text-sm hover:bg-purple-100'>
                        {columns.map(col => (
                            <td key={col.accessor} className={col.className}>
                                {row[col.accessor]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table;