import '../App.css';
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from './Login';
import AddProject from './AddProject';
import SingleProjectView from './SingleProjectView';
import ClientView from './ClientView';
import Header from './Header';

  function App() {
    const [currentUser, setCurrentUser] = useState([])
    const [currentUserProjects, setCurrentUserProjects] = useState([])
    /////// Caleb - working on current project view
    const [currentProject, setCurrentProject] = useState([])
    /////// Caleb - working on current project view
    const [photoProjects, setPhotoProjects] = useState([])
    let navigate = useNavigate();
//////////////////////////////////////////////////////////////////
  useEffect(() => {
    fetch(`http://localhost:3000/projects`)
    .then( res => res.json())
    .then( data => setPhotoProjects(data))
    .catch( error => console.log(error.message)
  )}, [])   

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
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////    
//////////////////////////////////////////////////////////////////
    function logUserOut() {
      fetch(`/logout`, {
          method: "DELETE"
      })
      .catch( error => console.log(error.message));
      setCurrentUser([])
      navigate(`/`)
    }
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
    function postNewUser(newUser) {
      fetch(`/clients`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
          },
          body: JSON.stringify(
              newUser
          )
      })
      .then( res => res.json())
      .then( data => console.log(data))
      .catch( error => console.log(error.message));
   }

   function postNewProjy(newProjy) {
    fetch(`/projects`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(
            newProjy
        )
    })
    .then( res => res.json())
    .then( data => console.log(data))
    .catch( error => console.log(error.message));
 }
//////////////////////////////////////////////////////////////////////
  return (
    <div>
        {currentUser.id ? <Header logUserOut={logUserOut}/> : null}
          <Routes>
            <Route path="/" element={<Login loginFunction={loginFunction} postNewUser={postNewUser}/>}></Route>
            <Route path="/my_projects" element={<ClientView currentProject={currentProject} setCurrentProject={setCurrentProject} currentUserProjects={currentUserProjects} currentUser={currentUser}/>} />
            <Route path="/add_project" element={<AddProject postNewProjy={postNewProjy} />} />
            <Route path="/my_projects/:id" element={<SingleProjectView currentProject={currentProject}/>} /> 
          </Routes>
    </div>
  );
}
export default App;
