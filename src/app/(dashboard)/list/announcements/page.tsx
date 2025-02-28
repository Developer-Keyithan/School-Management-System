import FormModal from '@/app/Components/FormModal'
import Pagination from '@/app/Components/Pagination'
import Table from '@/app/Components/Tabel'
import TableSearch from '@/app/Components/TableSearch'
import { role, eventsData } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'

type Event = {
  id: number;
  title: string;
  class: string;
  date: string;
}

const columns = [
  { header: 'Title', accessor: 'title', className: "p-4" },
  { header: 'Class', accessor: 'class', className: "hidden md:table-cell" },
  { header: 'Date', accessor: 'date', className: "hidden md:table-cell" },
  { header: 'Actions', accessor: 'actions' }
];

const ExamListPage = () => {
  // Instead of passing a function, modify data before sending to Table
  const modifiedData = eventsData.map((item: Event) => ({
    title: item.title,
    class: item.class,
    date: item.date,
    actions: (
      <div className="flex items-center gap-2">
        {role === 'admin' && (
          <>
            <FormModal table='announcement' type='update' data={item} />
            <FormModal table='announcement' type='delete' id={item.id} />
          </>
        )}
      </div>
    )
  }));

  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
      {/* TOP SECTION */}
      <div className="flex items-center justify-between">
        <h1 className='hidden md:block text-lg font-semibold'>All Events</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className='w-8 h-8 flex items-center justify-center rounded-full bg-purple-200'>
              <Image src="/filter.png" alt='' width={14} height={14} />
            </button>
            <button className='w-8 h-8 flex items-center justify-center rounded-full bg-purple-200'>
              <Image src="/sort.png" alt='' width={14} height={14} />
            </button>
            {role === 'admin' && (
              <FormModal table='announcement' type='create' />
            )}
          </div>
        </div>
      </div>

      {/* LIST SECTION */}
      <Table columns={columns} data={modifiedData} />

      {/* PAGINATION */}
      <Pagination />
    </div>
  )
}

export default ExamListPage;
