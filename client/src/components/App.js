import '../App.css';
import React, { useCallback, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from './NavBar';
import Login from './Login';
import ClientStatusCards from './ClientStatusCards';
import AddProject from './AddProject';


function App() {
const [photoProjects, setPhotoProjects] = useState(
  {

  }
)
useEffect(() => fetch(`http://localhost/3000/projects`)
.then( res => res.json())
.then( data => console.log(data))
.catch( error => console.log(error.message)
),[])


  return (
    <div>
        <NavBar />
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="my_projects" element={<ClientStatusCards />} />
            <Route path="add_project" element={<AddProject />} />
          </Routes>
    </div>
  );
}
export default App;
