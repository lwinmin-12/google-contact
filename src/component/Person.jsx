import React from 'react'
import {  useLocation } from 'react-router-dom'
import { PersonImage, ContactDetail } from './person ui'

import { HiOutlineMail } from 'react-icons/hi'
import {AiOutlineCalendar} from 'react-icons/ai'
import { BiMessage, BiVideo } from 'react-icons/bi'


const Person = () => {
    const location = useLocation()
    console.log(location.state.id)
  return (
    
    <>
          <div className='w-[100%]'>

          <PersonImage id={location.state.id} />

          <div className='my-10 relative '>

              <div className='flex w-[15%] space-x-5  h-8 absolute top-0 bottom-0 m-auto left-0 right-0'>
                <HiOutlineMail className=' bg-white border-2 w-8 h-8 p-1 rounded-full text-gray-500'/>
                <AiOutlineCalendar className=' bg-white border-2 w-8 h-8 p-1 rounded-full text-gray-500'/>
                <BiMessage className=' bg-white border-2 w-8 h-8 p-1 rounded-full text-gray-500'/>
                <BiVideo className=' bg-white border-2 w-8 h-8 p-1 rounded-full text-gray-500'/>
              </div>
            
            <hr/>

          </div>

        <ContactDetail id={ location.state.id } />


          </div>
  </>
  )
}

export default Person