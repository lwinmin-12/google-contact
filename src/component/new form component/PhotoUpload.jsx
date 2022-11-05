import { CgTag } from 'react-icons/cg'
import { MdOutlineAddAPhoto } from 'react-icons/md'
import {AiOutlinePlus} from 'react-icons/ai'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const PhotoUpload = ({handleImageChange ,imageTag }) => {
    const inputTag = useRef();

    const nav = useNavigate()
 
    
  
    
  return (
    <div className='w-[80%] mb-3 relative flex items-center space-x-7'>
                <div className='text-gray-500 absolute  text-2xl top-0 '>
                    <AiOutlinePlus onClick={()=>nav('/')} className='rotate-45'/>
                </div>
          <div className='w-[15%] ml-5 relative'>
              <input ref={inputTag} onChange={()=>handleImageChange(inputTag.current.files[0])} type="file" className='hidden' />
              <img ref={imageTag} className='w-full rounded-full' src="https://ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png" />
                  <MdOutlineAddAPhoto onClick={()=>inputTag.current.click()} className='text-4xl bg-black bg-opacity-[0.3] absolute top-0 right-0 left-0 bottom-0 m-auto rounded-full w-[50px] h-[50px]  p-3 text-white'/>
              </div>
              <button className='border flex justify-center items-center rounded-full w-[40px] h-[40px]'>
                  <CgTag className=' text-[1rem] text-sky-600'/>
              </button>
              
             
          </div>
  )
}

export default PhotoUpload