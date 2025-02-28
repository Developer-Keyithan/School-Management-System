'use client'

const Pagination = () => {
  return (
    <div className="p-4 flex items-center justify-between text-gray-500">
        <button disabled className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">Prev</button>
        <div className="flex items-center gap-2 text-sm">
            <button className="px-2 rounded-sm cursor-pointer bg-blue-200 text-blue-600">1</button>
            <button className="px-2 rounded-sm cursor-pointer">2</button>
            <button className="px-2 rounded-sm cursor-pointer">3</button>
            ...
            <button className="px-2 rounded-sm cursor-pointer">10</button>
        </div>
        <button className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">Next</button>
    </div>
  )
}

export default Pagination