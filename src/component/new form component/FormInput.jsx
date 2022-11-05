import { FaRegUser } from 'react-icons/fa'
import { CgOrganisation } from 'react-icons/cg'
import { BsTelephone } from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import FloatingUi from './FloatingUi'

const FormInput = ({handleInputChange}) => {
  return (
      <div className='w-[50%] h-[50%] mt-6 space-y-5'>
          
          <div className='flex items-center space-x-8'  >
              <div className='h-20'>
                <FaRegUser className='text-xl text-gray-400 '/>
              </div>
              <div className='w-[80%] space-y-5'>
                  <FloatingUi  handleInputChange={handleInputChange} name={'firstName'}>
                     First Name
                  </FloatingUi>
                  <FloatingUi handleInputChange={handleInputChange} name={'surName'}>
                      Surename
                </FloatingUi>
               
                </div>
                
          </div>
          <div className='flex items-center space-x-8'  >
              <div className='h-20'>
                <CgOrganisation className='text-xl text-gray-400 '/>
              </div>
              <div className='w-[80%] space-y-5'>
                  <FloatingUi handleInputChange={handleInputChange} name={'companyName'}>
                     Company
                  </FloatingUi>
                  <FloatingUi handleInputChange={handleInputChange} name={'jobTitle'}>
                      Job Title
                </FloatingUi>
               
                </div>
                
          </div>
          <div className='flex items-center space-x-8'  >
                <BsTelephone className='text-xl text-gray-400 '/>
              <div className='w-[80%]'>
                  <FloatingUi handleInputChange={handleInputChange} name={'phone'}>
                     Phone Number
                  </FloatingUi>
                </div>
                
          </div>
          <div className='flex items-center space-x-8'  >
                <AiOutlineMail className='text-xl text-gray-400 '/>
              <div className='w-[80%]'>
                  <FloatingUi handleInputChange={handleInputChange} name={'email'}>
                    Email
                  </FloatingUi>
                </div>
                
          </div>
                

    </div>
  )
}

export default FormInput