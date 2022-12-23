import React from 'react'
import { useSelector } from 'react-redux'
import { CgTag } from 'react-icons/cg'
import {FiStar} from 'react-icons/fi'
import { BsThreeDotsVertical } from 'react-icons/bs'
import {AiOutlinePlus} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

    


const PersonImage = ({id}) => {

    const {Contact} = useSelector(state=>state)
    const nav = useNavigate()
    console.log(id)

    const toEdit = () => {
        nav('/edit',{state:{id}})
    }

    return (<>
        {
            Contact.map(each => {
                if (each.id == id) {
                    return (
                        <div key={each.id} className='flex items-center justify-between w-[90%]'>

                            <div className='flex items-center'>

                                <AiOutlinePlus onClick={()=>nav('/')} className='rotate-45 mb-auto text-2xl'/>
                                <img className='w-[200px] rounded-full' src={each.photo} alt="" />

                                <div className=' mx-10 space-y-5 flex flex-col items-center '>
                                                <p className='text-2xl'>{ each.firstName + "" +each.surName }</p>
                                    <CgTag className=' border rounded-full w-[35px] h-[35px] p-2 text-[1rem] text-sky-600'/>
                                </div>
                                
                            </div>

                            <div className=' mt-auto space-x-7'>
                                <button className="relative sug after:content-['star_contact']">
                                    <FiStar/>
                                </button>
                                <button className=" sug relative after:content-['Edit']">
                                    <BsThreeDotsVertical/>
                                </button>
                                <button onClick={toEdit}  className=" relative bg-sky-600 px-5 rounded  text-white  py-2">
                                Edit
                                </button>
                            </div>  

                        </div>
                    )
                }
               
                // console.log(each)
            })
        }
    </>
        
        
      
  )
}

export default PersonImage
// Contact.map((each) => each.id == id && <img src={each.photo } />)