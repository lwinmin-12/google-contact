import React, { useState } from 'react'
import { PhotoUpload,FormInput } from './new form component'
import { v4 as uuidv4 } from 'uuid'


import { Add } from '../store and slider/slider/ContactSlicer'

import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'



const Newform = ({ id }) => {
  
  const dispatch = useDispatch()
  const nav = useNavigate()
  const imageTag = useRef();
 
  const [formData, setFormData] = useState({
    id: uuidv4(),
    photo:'',
    firstName: '',
    surName: '',
    companyName: '',
    jobTitle: '',
    phone: '',
    email: ''
  })
  const handleSummit = (imgSrc) => {
    // console.log(imgSrc)
   
    setFormData((prev) => ({ ...prev, photo : imgSrc }))
    
    dispatch(Add(formData))

    nav('/')
    
  }
  
  const handleImageChange = (img) => {
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.addEventListener('load', (event) => {
      imageTag.current.src = event.target.result
      setFormData((prev) => ({ ...prev, photo : event.target.result  }))
        })
  }

  const handleInputChange = (value,name) => {
    setFormData((prev)=> ({...prev,[name] :value}))
  }
  return (
    <div className='w-[100%]'>
      <div className='flex'>
      <PhotoUpload handleImageChange={handleImageChange} imageTag={ imageTag } />
        
        <div className='flex'>
            <button onClick={handleSummit}  className=' mt-auto mb-5 text-[0.9rem]  px-7 py-2 text-white rounded bg-sky-500'>save</button>
       </div>
      
      </div>

        <hr />
      <FormInput handleInputChange={handleInputChange} />
      </div>
  )
}

export default Newform