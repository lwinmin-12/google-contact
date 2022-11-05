import {AiOutlineMenu} from 'react-icons/ai'

const Menuicon = () => {
  return (
    
    <div className='flex items-center justify-evenly w-[15%]' >
      <AiOutlineMenu className='text-2xl' />
        <div className='flex space-x-2 items-center'>
          <img src="https://www.gstatic.com/images/branding/product/1x/contacts_48dp.png" alt="" />
          <a className='text-xl' href="">Contact</a>
        </div>
      </div>
  )
}

export default Menuicon