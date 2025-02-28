import FormModal from '@/app/Components/FormModal'
import Pagination from '@/app/Components/Pagination'
import Table from '@/app/Components/Tabel'
import TableSearch from '@/app/Components/TableSearch'
import { role, parentsData } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'

type Parent = {
  id: number;
  name: string;
  email: string;
  phone: string;
  students: string[];
  address: string;
}

const columns = [
  { header: 'Info', accessor: 'info' },
  { header: 'Chidren', accessor: 'students', className: "hidden md:table-cell" },
  { header: 'Phone', accessor: 'phone', className: "hidden lg:table-cell" },
  { header: 'Address', accessor: 'address', className: "hidden lg:table-cell" },
  { header: 'Actions', accessor: 'actions' }
];

const ParentListPage = () => {
  // Instead of passing a function, modify data before sending to Table
  const modifiedData = parentsData.map((item: Parent) => ({
    info: (
      <div className="flex items-center gap-4 p-4">
        <div>
          <h3 className='font-semibold'>{item.name}</h3>
          <p className='text-xs text-gray-500'>{item?.email}</p>
        </div>
      </div>
    ),
    students: item.students.join(', '),
    phone: item.phone,
    address: item.address,
    actions: (
      <div className="flex items-center gap-2">
        {role === 'admin' && (
          <>
            <FormModal table='parent' type='update' data={item} />
            <FormModal table='parent' type='delete' id={item.id} />
          </>
        )}
      </div>
    )
  }));

  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
      {/* TOP SECTION */}
      <div className="flex items-center justify-between">
        <h1 className='hidden md:block text-lg font-semibold'>All Parents</h1>
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
              <FormModal table='parent' type='create' />
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

export default ParentListPage;
