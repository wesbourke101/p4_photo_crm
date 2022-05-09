import '../App.css';
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from './NavBar';
import Login from './Login';
import ClientStatusCards from './ClientStatusCards';
import AddProject from './AddProject';


function App() {
const [photoProjects, setPhotoProjects] = useState([])
  useEffect(() => {
    fetch(`/projects`)
    .then( res => res.json())
    .then( data => setPhotoProjects(data))
    .catch( error => console.log(error.message)
  )},[])

  return (
    <div>
        <NavBar />
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="my_projects" element={<ClientStatusCards photoProjects={photoProjects}/>} />
            <Route path="add_project" element={<AddProject />} />
          </Routes>
    </div>
  );
}
export default App;
