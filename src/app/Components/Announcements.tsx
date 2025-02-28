'use client'

const Announcements = () => {
    return (
        <div className="bg-white p-4 rounded-md">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">Announcements</h1>
                <span className="text-sm text-gray-400">View All</span>
            </div>
            <div className="flex flex-col gap-4 mt-4">
                <div className="border-[1px] border-l-[4px] border-l-blue-200 rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-semibold">Lorem ipsum dolor sit.</h2>
                        <span className="text-xs text-gray-400 bg-white rounded-md px-2 py-1">2025-01-01</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, eum voluptas dolor quaerat distinctio laudantium.
                    </p>
                </div>
                <div className="border-[1px] border-l-[4px] border-l-purple-200 rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-semibold">Lorem ipsum dolor sit.</h2>
                        <span className="text-xs text-gray-400 bg-white rounded-md px-2 py-1">2025-01-01</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, eum voluptas dolor quaerat distinctio laudantium.
                    </p>
                </div>
                <div className="border-[1px] border-l-[4px] border-l-blue-200 rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-semibold">Lorem ipsum dolor sit.</h2>
                        <span className="text-xs text-gray-400 bg-white rounded-md px-2 py-1">2025-01-01</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, eum voluptas dolor quaerat distinctio laudantium.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Announcements