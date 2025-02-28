import Image from 'next/image'
import React from 'react'

const UserCard = ({ type }: { type: string }) => {
    return (
        <div className='rounded-2xl odd:bg-purple-200 even:bg-blue-200 p-4 flex-1 min-w-[130px]'>
            <div className="flex items-center justify-between">
                <span className='text-xs bg-white px-2 py-1 rounded-full text-gray-600'>2024/25</span>
                <Image src='/more.png' alt='' width={20} height={20} />
            </div>
            <div className='text-xl font-semibold my-2'>1,234</div>
            <h2 className='capitalize text-xs font-medium text-gray-500'>{type}s</h2>
        </div>
    )
}

export default UserCard