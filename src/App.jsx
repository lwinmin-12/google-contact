// import Login from "./component/login/Login";
import { Navbar, SideBar, MainTable, Newform, Person, Edit } from "./component";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="h-[100vh]">
      <Router>
        <Navbar />
        <div className="flex h-[89%]">
          <div className="w-[15%] hidden lg:flex flex-col items-center">
            <SideBar />
          </div>

          <Routes>
            <Route path="/" element={<MainTable />} />
            <Route path="/new" element={<Newform />} />
            <Route path="/person" element={<Person />} />
            <Route path="/edit" element={<Edit />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
{
  /* <div>
<Router>
  <Routes>
    <Route path="/" element={ <Login/> } />
    <Route path="/home" element={ <Home/> } />
  </Routes>
</Router>
</div> */
}
