import '../App.css';
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from './NavBar';
import Login from './Login';
import ClientStatusCards from './ClientStatusCards';
import AddProject from './AddProject';



  function App() {

    // const [username, setUsername] = useState("")
    // const [password, setPassword] = useState("")

    function loginFunction(username, password) {
      fetch(`/login`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
               Accept: "application/json"
          },
          body: JSON.stringify({
              username,
              password
         })
      })
      .then( res => res.json())
      .then( data => console.log(data))
      .catch( error => console.log(error.message));
    }
    

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
            <Route path="/" element={<Login loginFunction={loginFunction} />}></Route>
            <Route path="my_projects" element={<ClientStatusCards photoProjects={photoProjects}/>} />
            <Route path="add_project" element={<AddProject />} />
          </Routes>
    </div>
  );
}
export default App;
