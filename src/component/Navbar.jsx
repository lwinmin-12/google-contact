import { FormInput,Menuicon,IconContainer } from "./nav component"
const Navbar = () => {
  return (
    <div className=' py-4 flex items-center justify-around'>

      <Menuicon/>
      <FormInput />
      <IconContainer/>
      

    </div>
  )
}

export default Navbar