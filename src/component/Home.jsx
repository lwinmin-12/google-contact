// import { Navbar, SideBar, MainTable ,Newform ,Person, Edit} from "./component";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import SideBar from './SideBar'
import MainTable from './Side Bar Component/MainTable'
import Newform from './Newform'
import Person from './Person'
import Edit from './Edit'

const Home = () => {
  return (
    <div className="h-[100vh]">
    <Router>
      <Navbar />
    <div className="flex h-[89%]">
        <SideBar />

        <Routes>

         <Route path="/home" element={ <MainTable />} />
          <Route path="/new" element={<Newform />} />
          <Route path="/person" element={<Person />} />
          <Route path="/edit" element={<Edit />} />

          
        </Routes>
    </div>
      
    </Router>
    
  </div>
  )
}

export default Home