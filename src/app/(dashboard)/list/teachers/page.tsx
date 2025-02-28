import FormModal from '@/app/Components/FormModal'
import Pagination from '@/app/Components/Pagination'
import Table from '@/app/Components/Tabel'
import TableSearch from '@/app/Components/TableSearch'
import { role, teachersData } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'

type Teacher = {
  id: number;
  teacherId: string;
  name: string;
  email?: string;
  photo: string;
  phone: string;
  subjects: string[];
  classes: string[];
  address: string;
}

const columns = [
  { header: 'Info', accessor: 'info' },
  { header: 'Teacher ID', accessor: 'teacherId', className: "hidden md:table-cell" },
  { header: 'Subjects', accessor: 'subjects', className: "hidden md:table-cell" },
  { header: 'Classes', accessor: 'classes', className: "hidden md:table-cell" },
  { header: 'Phone', accessor: 'phone', className: "hidden lg:table-cell" },
  { header: 'Address', accessor: 'address', className: "hidden lg:table-cell" },
  { header: 'Actions', accessor: 'actions' }
];

const TeacherListPage = () => {
  // Instead of passing a function, modify data before sending to Table
  const modifiedData = teachersData.map((item: Teacher) => ({
    info: (
      <div className="flex items-center gap-4 p-4">
        <Image src={item.photo} alt='' width={40} height={40} className='w-10 h-10 rounded-full object-cover' />
        <div>
          <h3 className='font-semibold'>{item.name}</h3>
          <p className='text-xs text-gray-500'>{item?.email}</p>
        </div>
      </div>
    ),
    teacherId: item.teacherId,
    subjects: item.subjects.join(', '),
    classes: item.classes.join(', '),
    phone: item.phone,
    address: item.address,
    actions: (
      <div className="flex items-center gap-2">
        <Link href={`/list/teachers/${item.id}`}>
          <button className='w-7 h-7 flex items-center justify-center rounded-full bg-blue-200'>
            <Image src='/view.png' alt='' width={16} height={16} />
          </button>
        </Link>
        {role === 'admin' && (
          // <button className='w-7 h-7 flex items-center justify-center rounded-full bg-purple-200'>
          //   <Image src='/delete.png' alt='' width={16} height={16} />
          // </button>
          <FormModal table='teacher' type='delete' id={item.id} />
        )}
      </div>
    )
  }));

  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
      {/* TOP SECTION */}
      <div className="flex items-center justify-between">
        <h1 className='hidden md:block text-lg font-semibold'>All Teachers</h1>
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
              <FormModal table='teacher' type='create' />
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

export default TeacherListPage;
