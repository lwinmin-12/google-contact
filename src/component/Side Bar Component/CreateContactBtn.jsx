import React from 'react'
import { useNavigate } from 'react-router-dom'

const CreateContactBtn = () => {
  const nav = useNavigate()
 
  return (
      <div>
          <button onClick={()=> nav('/new')}  className='bg-white duration-300 border shadow flex items-center px-6 py-2 rounded-full hover:bg-sky-100 hover:shadow-lg hover:-translate-y-1'>
          <svg className='mx-1' width="36" height="36" viewBox="0 0 36 36"><path fill="#34A853" d="M16 16v14h4V20z"></path><path fill="#4285F4" d="M30 16H20l-4 4h14z"></path><path fill="#FBBC05" d="M6 16v4h10l4-4z"></path><path fill="#EA4335" d="M20 16V6h-4v14z"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
              Create Contact
          </button>
    </div>
  )
}

export default CreateContactBtn
