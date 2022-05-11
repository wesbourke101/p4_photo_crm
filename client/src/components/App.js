import '../App.css';
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from './NavBar';
import Login from './Login';
import AddProject from './AddProject';
import SingleProjectView from './SingleProjectView';
import ClientView from './ClientView';

  function App() {
    const [currentUser, setCurrentUser] = useState([])
    const [currentUserProjects, setCurrentUserProjects] = useState([])
    /////// Caleb - working on current project view
    const [currentProject, setCurrentProject] = useState([])
    /////// Caleb - working on current project view
    
    let navigate = useNavigate();

   useEffect(() => {
      fetch('/auth')
      .then(res => {
        if(res.ok){
          res.json().then(user => { 
            setCurrentUser(user) 
            setCurrentUserProjects(user.projects)
          })
        }
      })
    }, [])

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
      .then( data =>  {
          setCurrentUser(data)
          setCurrentUserProjects(data.projects)
          navigate(`/my_projects`)
      })
      .catch( error => console.log(error.message));
    }

  // const [photoProjects, setPhotoProjects] = useState([])
  //   useEffect(() => {
  //     fetch(`http://localhost:3000/projects`)
  //     .then( res => res.json())
  //     .then( data => setPhotoProjects(data))
  //     .catch( error => console.log(error.message)
  //   )}, [])

    return (
    <div>
        <NavBar />
          <Routes>
            <Route path="/" element={<Login loginFunction={loginFunction} />}></Route>
            <Route path="/my_projects" element={<ClientView currentProject={currentProject} setCurrentProject={setCurrentProject} currentUserProjects={currentUserProjects} currentUser={currentUser}/>} />
            <Route path="/add_project" element={<AddProject />} />
            <Route path="/my_projects/:id" element={<SingleProjectView currentProject={currentProject}/>} /> 
          </Routes>
    </div>
  );
}
export default App;
