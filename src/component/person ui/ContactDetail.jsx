import { HiOutlineMail,HiOutlineCake } from 'react-icons/hi'
import {BsTelephone} from 'react-icons/bs'
import { useSelector } from 'react-redux'

const ContactDetail = ({ id }) => {
  const {Contact} = useSelector(state=>state)
  
  return (
    <>
      {
        Contact.map(each => {
          if (each.id == id) {
            return <>
              <div className='w-[40%] border-2 space-y-2 rounded ml-7 px-5 py-3'>
          <p className='font-medium'>Contact details</p>
          <div className='space-y-4'>
            <div className='flex items-center space-x-3'>
                <HiOutlineMail className='text-xl text-gray-500' />
                  {
                    each.email == "" ? <p className='text-sky-600'>Add email</p> : <p className='text-sky-600'>{ each.email }</p>
                }
            </div>
            <div className='flex items-center space-x-3'>
                  <BsTelephone className='text-xl text-gray-500' />
                  <p className='text-sky-600'>+959254098293 <span className='text-xs text-gray-500'>. mobile</span> </p>
            </div>
            <div className='flex items-center space-x-3'>
                <HiOutlineCake className='text-xl text-gray-500' />
                <p className='text-sky-600'>Add birthday</p>
            </div>
          </div>
          
        </div>
            </>
          }
        })
      }
    </>
  )
}

export default ContactDetail