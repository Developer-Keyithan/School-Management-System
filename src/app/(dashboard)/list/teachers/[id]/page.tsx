import Announcements from '@/app/Components/Announcements'
import BigCalendar from '@/app/Components/BigCalendar'
import Performance from '@/app/Components/Performance'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SingleTeacherPage = () => {
    return (
        <div className='flex flex-col gap-4 xl:flex-row p-4 '>
            {/* LEFT */}
            <div className="w-full xl:w-2/3">
                {/* TOP */}
                <div className="flex flex-col md:flex-row gap-4">
                    {/* USER INFO CARD */}
                    <div className="bg-blue-200 py-6 px-4 rounded-md flex-1 flex gap-4">
                        <div className="w-1/3">
                            <Image
                                src='https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=2400'
                                alt=''
                                width={144}
                                height={144}
                                className='w-36 h-36 rounded-full object-cover'
                            />
                        </div>
                        <div className="w-2/3 flex flex-col justify-between gap-4">
                            <h1 className='text-xl font-semibold'>John Doe</h1>
                            <p className='text-xs text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-semibold">
                                <div className='w-full md:w-[48.74%] lg:w-full 2xl:w-[48.74%] flex items-center gap-2'>
                                    <Image src='/blood.png' alt='' width={14} height={14} />
                                    <span>A-</span>
                                </div>
                                <div className='w-full md:w-[48.74%] lg:w-full 2xl:w-[48.74%] flex items-center gap-2'>
                                    <Image src='/date.png' alt='' width={14} height={14} />
                                    <span>Jan 2025</span>
                                </div>
                                <div className='w-full md:w-[48.74%] lg:w-full 2xl:w-[48.74%] flex items-center gap-2'>
                                    <Image src='/mail.png' alt='' width={14} height={14} />
                                    <span>johndoe@gamil.com</span>
                                </div>
                                <div className='w-full md:w-[48.74%] lg:w-full 2xl:w-[48.74%] flex items-center gap-2'>
                                    <Image src='/phone.png' alt='' width={14} height={14} />
                                    <span>+94 77 123 4567</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* SMALL CARDs */}
                    <div className="flex-1 flex gap-4 justify-between flex-wrap">
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full sm:w-[47.75%] md:w-[47.75%] xl:w-[47.5%] 2xl:[48%]">
                            <Image src='/singleAttendance.png' alt='' width={24} height={24} className='w-6 h-6' />
                            <div className="">
                                <h1 className='text-xl font-semibold'>90%</h1>
                                <span className='text-sm text-gray-400'>Attendance</span>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full sm:w-[47.75%] md:w-[47.75%] xl:w-[47.5%] 2xl:[48%]">
                            <Image src='/singleBranch.png' alt='' width={24} height={24} className='w-6 h-6' />
                            <div className="">
                                <h1 className='text-xl font-semibold'>2</h1>
                                <span className='text-sm text-gray-400'>Branches</span>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full sm:w-[47.75%] md:w-[47.75%] xl:w-[47.5%] 2xl:[48%]">
                            <Image src='/singleLesson.png' alt='' width={24} height={24} className='w-6 h-6' />
                            <div className="">
                                <h1 className='text-xl font-semibold'>6</h1>
                                <span className='text-sm text-gray-400'>Lessons</span>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-md flex gap-4 w-full sm:w-[47.75%] md:w-[47.75%] xl:w-[47.5%] 2xl:[48%]">
                            <Image src='/singleClass.png' alt='' width={24} height={24} className='w-6 h-6' />
                            <div className="">
                                <h1 className='text-xl font-semibold'>6</h1>
                                <span className='text-sm text-gray-400'>Classes</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* BOTTOM */}
                <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
                    <h1 className='font-semibold text-xl'>Teacher&apos;s Schedule</h1>
                    <BigCalendar />
                </div>
            </div>
            {/* RIGHT */}
            <div className="w-full xl:w-1/3 flex flex-col gap-4">
                <div className="bg-white p-4 rounded-md">
                    <h1 className="text-xl font-semibold">Shortcuts</h1>
                    <div className="mt-4 flex gap-4 flex-wrap text-xs">
                        <Link className='py-3 px-5 rounded-md text-blue-600 bg-blue-200' href='/'>Teacher&apos;s Classes</Link>
                        <Link className='py-3 px-5 rounded-md text-purple-600 bg-purple-200' href='/'>Teacher&apos;s Students</Link>
                        <Link className='py-3 px-5 rounded-md text-yellow-600 bg-yellow-200' href='/'>Teacher&apos;s Lessons</Link>
                        <Link className='py-3 px-5 rounded-md text-orange-600 bg-orange-200' href='/'>Teacher&apos;s Exams</Link>
                        <Link className='py-3 px-5 rounded-md text-green-600 bg-green-200' href='/'>Teacher&apos;s Assignments</Link>
                    </div>
                </div>
                <Performance />
                <Announcements />
            </div>
        </div>
    )
}

export default SingleTeacherPage