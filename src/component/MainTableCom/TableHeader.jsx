import { BsThreeDotsVertical } from 'react-icons/bs'

const TableHeader = ({children , phone ,job,email}) => {
  return (
    <tr className='border-b-2 '>
          <th className='text-start py-3 flex space-x-5'>{ children }</th>
          <th>{ email }</th>
          <th className='w-[30%]'>{ phone }</th>
          <th className='w-[25%]'>{ job }</th>
  <th className="w-[10%] text-end">
    <button className="mr-2">
      <BsThreeDotsVertical/>
    </button>
    </th>
    </tr>
  )
}

export default TableHeader