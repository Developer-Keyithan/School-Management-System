import Announcements from '@/app/Components/Announcements'
import AttendanceChart from '@/app/Components/AttendanceChart'
import CountChart from '@/app/Components/CountChart'
import EventCalendar from '@/app/Components/EventCalendar'
import FinanceChart from '@/app/Components/FinanceChart'
import UserCard from '@/app/Components/UserCard'

const AdminPage = () => {
    return (
        <div className='p-4 flex gap-4 flex-col md:flex-row'>
            {/* LEFT */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
                {/* USER CARD */}
                <div className="flex gap-4 justify-between flex-wrap">
                    <UserCard type='student' />
                    <UserCard type='teacher' />
                    <UserCard type='parent' />
                    <UserCard type='staff' />
                </div>
                {/* MIDDLE */}
                <div className="flex gap-4 flex-col lg:flex-row">
                {/* COUNT CHART */}
                <div className="w-full lg:w-1/3 h-[450px]">
                    <CountChart />
                </div>
                {/* ATTENDANCE CHART */}
                <div className="w-full lg:w-2/3 h-[450px]">
                    <AttendanceChart />
                </div>
                </div>
                {/* BOTTOM */}
                <div className="w-full h-[510px]">
                    <FinanceChart />
                </div>
            </div>
            {/* RIGHT */}
            <div className="w-full lg:w-1/3 flex flex-col gap-8">
                <EventCalendar />
                <Announcements />
            </div>
        </div>
    )
}

export default AdminPage