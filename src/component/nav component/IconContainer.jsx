import React from 'react'
import { BsGear } from 'react-icons/bs'
import { TfiHelpAlt } from 'react-icons/tfi'
import {CgMenuGridO} from 'react-icons/cg'

const IconContainer = () => {
  return (
      <div className='flex text-xl w-[15%] justify-center space-x-7 '>
          <TfiHelpAlt />
          <BsGear />
          <CgMenuGridO/>
    </div>
  )
}

export default IconContainer